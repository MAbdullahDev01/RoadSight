import torch
from app.core.model_loader import model_instance
from ml.training.transforms import val_transforms

CLASSES = ["damage", "no_damage"]

def run_inference(pil_image):
    image_tensor = val_transforms(pil_image).unsqueeze(0)

    with torch.no_grad():
        outputs = model_instance.model(image_tensor)
        probs = torch.softmax(outputs, dim=1)
        confidence, idx = torch.max(probs, dim=1)

    return {
        "prediction": CLASSES[idx.item()],
        "confidence": confidence.item()
    }
