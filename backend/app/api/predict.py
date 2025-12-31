# predict.py
from fastapi import APIRouter, UploadFile, File
from app.schemas.response import PredictionResponse

router = APIRouter()

@router.post("/predict", response_model=PredictionResponse)
async def predict(file: UploadFile = File(...)):
    """
    Dummy /predict endpoint scaffold.
    Receives an image file and returns a placeholder response.
    """
    # Debug: print file details
    print(f"Received file: {file.filename}, content type: {file.content_type}")

    # Placeholder response until ML model is integrated
    return PredictionResponse(
        condition="Good",
        confidence=0.99,
        safety_note="Road is safe for travel"
    )
