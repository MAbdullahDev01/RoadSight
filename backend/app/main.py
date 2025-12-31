from fastapi import FastAPI
from app.api import predict

app = FastAPI(title="RoadSight Backend API", version="0.1")

# Include predict router
app.include_router(predict.router, prefix="/api")

@app.get("/")
async def root():
    return {"message": "RoadSight API is live!"}
