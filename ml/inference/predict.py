import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image
import sys

preprocess = transforms.Compose([
    transforms.Resize((224,224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485,0.456,0.406], std=[0.229,0.224,0.225])
])

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = models.resnet18(pretrained=False)
num_features = model.fc.in_features
model.fc = nn.Linear(num_features, 2)  # 2 classes: damage / no damage

model_path = r"C:\Users\saima\OneDrive\Desktop\RoadSight\RoadSight\ml\models\roadsight_v1.pt"
model.load_state_dict(torch.load(model_path, map_location=device))
model = model.to(device)
model.eval()  # Set to evaluation mode

def predict_image(image_path):
    # Load image
    image = Image.open(image_path).convert('RGB')
    
    # Preprocess
    image = preprocess(image)
    image = image.unsqueeze(0)  # Add batch dimension
    image = image.to(device)
    
    with torch.no_grad():
        output = model(image)
        _, pred = torch.max(output, 1)
    
    classes = {0: "no damage", 1: "damage"}
    return classes[pred.item()]

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python predict.py <image_path>")
        sys.exit(1)
    
    image_path = sys.argv[1]
    prediction = predict_image(image_path)
    print(f"Prediction for {image_path}: {prediction}")
