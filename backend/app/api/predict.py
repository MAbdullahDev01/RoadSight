from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from PIL import Image
import io
import torch
import sys
import os

# Add project root to path to import ml package
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../")))

from ml.training.transforms import val_transforms  # preprocessing
from app.core.model_loader import model_instance      # your model loader

router = APIRouter()

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Read image bytes
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")

        # Preprocess image
        image_tensor = val_transforms(image).unsqueeze(0)  # add batch dimension
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        image_tensor = image_tensor.to(device)

        # Run inference
        model = model_instance.model
        model.to(device)
        model.eval()
        with torch.no_grad():
            output = model(image_tensor)
            probs = torch.nn.functional.softmax(output, dim=1)
            pred_idx = output.argmax(dim=1).item()
            confidence = probs[0][pred_idx].item()

        classes = ["no_damage", "damage"]
        prediction = classes[pred_idx]

        return JSONResponse(
            content={
                "filename": file.filename,
                "prediction": prediction,
                "confidence": round(confidence, 4)
            }
        )

    except Exception as e:
        # Log error and return 500
        print(f"Error in /predict: {e}")
        raise HTTPException(status_code=500, detail=str(e))
