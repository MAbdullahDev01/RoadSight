# RoadSight Backend

## Overview

RoadSight is a computer vision project that detects road damage from images. The backend serves as a bridge between the ML model and any frontend or client, exposing an API endpoint for predictions.

This backend is built using **FastAPI** and integrates a **PyTorch ResNet18 model** for inference.

## Features

* **/api/predict** endpoint for image upload
* Accepts single `.jpg` image files
* Returns JSON output with:

  * `filename`: name of the uploaded file
  * `prediction`: `damage` or `no_damage`
  * `confidence`: model confidence score
* CPU/GPU compatible inference
* Modular structure for maintainability

## Folder Structure

```
backend/
├── app/
│   ├── api/
│   │   └── predict.py
│   ├── core/
│   │   └── model_loader.py
│   ├── services/
│   │   └── inference.py
│   └── main.py
├── ml/
│   ├── models/
│   │   ├── roadsight_v1.pt
│   │   └── roadsight_v2.pt
│   ├── training/
│   │   ├── dataset.py
│   │   └── transforms.py
│   └── inference/predict.py
├── requirements.txt
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone <repo_url>
cd backend
```

2. Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

## Running the Backend

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

The API will be available at `http://127.0.0.1:8000`.

## API Usage

**Endpoint:** `/api/predict`
**Method:** POST
**Content-Type:** multipart/form-data
**Body Parameter:** `file` (image file)

**Example using curl:**

```bash
curl -X POST \
  'http://127.0.0.1:8000/api/predict' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@Czech_000012.jpg;type=image/jpeg'
```

**Response:**

```json
{
  "filename": "Czech_000012.jpg",
  "prediction": "damage",
  "confidence": 0.7093
}
```

## Model Integration

* ML model located at `ml/models/roadsight_v2.pt`
* Loaded using PyTorch
* Uses `val_transforms` from `ml/training/transforms.py` for preprocessing
* Prediction logic is in `app/services/inference.py`

## Notes

* Ensure the ML model files are in the correct `ml/models/` path.
* Currently supports single-image inference.
* Backend can be extended for batch prediction, logging, and additional error handling.

## License

MIT License
