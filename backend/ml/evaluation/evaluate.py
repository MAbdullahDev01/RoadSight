import torch
from torch.utils.data import DataLoader
from torchvision import models
from ml.training.dataset import RoadSightDataset
from ml.training.transforms import val_transforms
import os
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

# -----------------------------
# 1️⃣ Paths & device
# -----------------------------
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

current_dir = os.path.dirname(os.path.abspath(__file__))
ml_root = os.path.dirname(current_dir)

image_dir = os.path.join(ml_root, 'data', 'raw', 'RDD2020', 'India', 'images')
annotation_dir = os.path.join(ml_root, 'data', 'raw', 'RDD2020', 'India', 'annotations', 'xmls')

model_path = os.path.join(ml_root, 'ml', 'models', 'roadsight_v2.pt')

if not os.path.exists(model_path):
    raise FileNotFoundError(f"Model not found at '{model_path}'")

# -----------------------------
# 2️⃣ Load dataset & DataLoader
# -----------------------------
dataset = RoadSightDataset(image_dir, annotation_dir, transform=val_transforms)
data_loader = DataLoader(dataset, batch_size=32, shuffle=False)

# -----------------------------
# 3️⃣ Load model
# -----------------------------
model = models.resnet18(pretrained=False)
num_features = model.fc.in_features
model.fc = torch.nn.Linear(num_features, 2)
model.load_state_dict(torch.load(model_path, map_location=device))
model = model.to(device)
model.eval()

# -----------------------------
# 4️⃣ Evaluation
# -----------------------------
all_preds = []
all_labels = []

with torch.no_grad():
    for images, labels in data_loader:
        images, labels = images.to(device), labels.to(device)
        outputs = model(images)
        _, preds = torch.max(outputs, 1)
        
        all_preds.extend(preds.cpu().numpy())
        all_labels.extend(labels.cpu().numpy())

# -----------------------------
# 5️⃣ Compute metrics
# -----------------------------
accuracy = accuracy_score(all_labels, all_preds)
precision = precision_score(all_labels, all_preds, zero_division=0)
recall = recall_score(all_labels, all_preds, zero_division=0)
f1 = f1_score(all_labels, all_preds, zero_division=0)

print(f"Validation Accuracy: {accuracy:.4f}")
print(f"Precision: {precision:.4f}")
print(f"Recall: {recall:.4f}")
print(f"F1 Score: {f1:.4f}")
