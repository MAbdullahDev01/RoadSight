from pydantic import BaseModel

class PredictionResponse(BaseModel):
    condition: str
    confidence: float
    safety_note: str
