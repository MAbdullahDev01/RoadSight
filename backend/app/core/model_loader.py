import os
import torch
from torchvision import models

# Path to your fine-tuned model
MODEL_PATH = r"C:\Users\saima\OneDrive\Desktop\RoadSight\RoadSight\backend\ml\models\roadsight_v2.pt"

class RoadSightModel:
    def __init__(self, model_path=MODEL_PATH, device=None):
        # Use CPU if device not specified
        self.device = device if device else torch.device("cpu")

        # Load ResNet18 architecture
        self.model = models.resnet18(weights=None)  # no pretrained weights, since we load ours
        # Replace final layer with 2 outputs (damage, no_damage)
        num_features = self.model.fc.in_features
        self.model.fc = torch.nn.Linear(num_features, 2)

        # Load the fine-tuned weights
        if not os.path.exists(model_path):
            raise FileNotFoundError(f"Model file not found at {model_path}. Please check the path!")

        self.model.load_state_dict(torch.load(model_path, map_location=self.device))
        self.model.to(self.device)
        self.model.eval()  # set to evaluation mode

    def predict(self, image_tensor):
        """
        Predict damage/no_damage for a single preprocessed image tensor.
        Args:
            image_tensor: torch.Tensor of shape [1, 3, 224, 224]
        Returns:
            dict: {"prediction": "damage"/"no_damage", "confidence": float}
        """
        with torch.no_grad():
            output = self.model(image_tensor.to(self.device))
            probs = torch.softmax(output, dim=1)
            conf, pred_idx = torch.max(probs, dim=1)
            label = "damage" if pred_idx.item() == 1 else "no_damage"
            return {"prediction": label, "confidence": conf.item()}

# Singleton instance for easy import
model_instance = RoadSightModel()
