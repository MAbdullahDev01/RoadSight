from fastapi import FastAPI

# Create the FastAPI app
app = FastAPI(title="RoadSight Backend API", version="0.1")

# Root endpoint
@app.get("/")
async def root():
    """
    Basic root endpoint to check if API is running.
    """
    return {"message": "RoadSight API is live!"}
