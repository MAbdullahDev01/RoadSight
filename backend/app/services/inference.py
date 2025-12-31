from app.core.model_loader import model_instance
from PIL import Image
import sys
import os

# Add project root to path so ml package is found
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../")))

from ml.training.transforms import val_transforms

def predict_image(image_path):
    image = Image.open(image_path).convert("RGB")
    image_tensor = val_transforms(image).unsqueeze(0)  # add batch dimension
    return model_instance.predict(image_tensor)
