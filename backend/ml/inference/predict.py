import torch
from torchvision import models, transforms
from PIL import Image
import sys
import os
from glob import glob

# -----------------------------
# 1️⃣ Check command-line arguments
# -----------------------------
if len(sys.argv) != 2:
    print("Usage: python predict.py <path_to_image_or_folder>")
    sys.exit(1)

input_path = sys.argv[1]

# -----------------------------
# 2️⃣ Device setup
# -----------------------------
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# -----------------------------
# 3️⃣ Define preprocessing transforms
# -----------------------------
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485,0.456,0.406], std=[0.229,0.224,0.225])
])

# -----------------------------
# 4️⃣ Load the fine-tuned model
# -----------------------------
model_path = "C:\Users\saima\OneDrive\Desktop\RoadSight\RoadSight\backend\ml\models\roadsight_v2.pt"

if not os.path.exists(model_path):
    print(f"Error: Model not found at '{model_path}'")
    sys.exit(1)

model = models.resnet18(pretrained=False)
num_features = model.fc.in_features
model.fc = torch.nn.Linear(num_features, 2)  # 2 classes: damage / no damage
model.load_state_dict(torch.load(model_path, map_location=device))
model = model.to(device)
model.eval()

# -----------------------------
# 5️⃣ Prediction function
# -----------------------------
def predict_image(img_path):
    try:
        image = Image.open(img_path).convert("RGB")
    except Exception as e:
        print(f"Failed to open image {img_path}: {e}")
        return None
    
    image_tensor = transform(image).unsqueeze(0).to(device)
    
    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted = torch.max(outputs, 1)
    
    labels = {0: "no damage", 1: "damage"}
    return labels[int(predicted.item())]

# -----------------------------
# 6️⃣ Prepare list of images
# -----------------------------
if os.path.isdir(input_path):
    # Get all image files in the folder (jpg, png)
    image_files = glob(os.path.join(input_path, "*.[jp][pn]g"))
    if len(image_files) == 0:
        print(f"No images found in folder: {input_path}")
        sys.exit(1)
else:
    if not os.path.exists(input_path):
        print(f"Error: Image not found at '{input_path}'")
        sys.exit(1)
    image_files = [input_path]

# -----------------------------
# 7️⃣ Run predictions
# -----------------------------
for img_path in image_files:
    prediction = predict_image(img_path)
    if prediction is not None:
        print(f"Prediction for {img_path}: {prediction}")
