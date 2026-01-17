from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
from PIL import Image
import io

from app.services.inference import run_inference

router = APIRouter()

@router.post("/predict")
async def predict(image: UploadFile = File(...)):
    try:
        # Validate content type
        if image.content_type not in ["image/jpeg", "image/png"]:
            raise HTTPException(
                status_code=400,
                detail="Invalid file type. Only JPEG and PNG are supported."
            )

        # Read image bytes
        image_bytes = await image.read()
        pil_image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

        # Run ML inference
        ml_output = run_inference(pil_image)
        prediction = ml_output["prediction"]
        confidence = ml_output["confidence"]

        # 🔁 Domain mapping (ML → Product)
        if prediction == "damage":
            condition = "Potholes detected"
            safety_note = "Reduce speed and avoid sudden braking."
        else:
            condition = "Road appears safe"
            safety_note = "Maintain normal driving speed."

        # ✅ Frontend contract (EXACT MATCH)
        return JSONResponse(
            content={
                "condition": condition,
                "confidence": round(confidence, 2),
                "safety_note": safety_note
            }
        )

    except HTTPException:
        raise

    except Exception as e:
        print(f"[ERROR] Prediction failed: {e}")
        raise HTTPException(
            status_code=500,
            detail="Internal server error during prediction"
        )
