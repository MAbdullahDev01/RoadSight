# RoadSight — System Architecture

## 1. Overview

**RoadSight** is an end-to-end AI-powered web application designed to detect and analyze road conditions from user-uploaded images.  
The system is built to demonstrate **machine learning rigor**, **clean system design**, and **production-aware engineering decisions**, while remaining lightweight and MVP-focused.

The architecture follows a **modular, decoupled design**:
- A **React frontend** for user interaction
- A **Python-based backend API** for inference orchestration
- A **trained computer vision model** for road condition classification

---

## 2. High-Level Architecture

```
┌────────────┐
│   User     │
└─────┬──────┘
      │
      ▼
┌─────────────────────┐
│   Frontend (React)  │
│  - Home Page        │
│  - Upload Page      │
│  - Results Page     │
└─────┬───────────────┘
      │ HTTP (JSON / multipart)
      ▼
┌─────────────────────┐
│ Backend API         │
│ (Python / FastAPI)  │
│ - Image validation  │
│ - Model inference   │
│ - Post-processing  │
└─────┬───────────────┘
      │
      ▼
┌─────────────────────┐
│ ML Model            │
│ - CNN-based model   │
│ - Trained offline   │
│ - Loaded at runtime │
└─────────────────────┘
```

---

## 3. Frontend Architecture

### 3.1 Technology Stack
- **React**
- **React Router**
- **Tailwind CSS**

### 3.2 Key Pages

| Page | Route | Responsibility |
|----|----|----|
| HomePage | `/` | Project introduction, model stats, navigation |
| UploadPage | `/upload` | Image upload and submission |
| ResultsPage | `/results` | Display inference results |

### 3.3 Core Components

| Component | Responsibility |
|--------|----------------|
| Navbar | Global navigation and branding |
| UploadForm | Image selection and validation |
| StatsCard | Display ML metrics |
| ResultCard | Show predictions and confidence |

---

## 4. Backend Architecture

### 4.1 Technology Stack
- **Python**
- **FastAPI**
- **Uvicorn**

### 4.2 API Responsibilities
- Receive image uploads
- Validate file format and size
- Preprocess image
- Run ML inference
- Return prediction results

---

## 5. Machine Learning Architecture

### 5.1 Model Overview
- Task: Road condition classification
- Model Type: CNN
- Training: Offline
- Inference: Runtime-loaded

### 5.2 Evaluation Metrics

| Metric | Value |
|-----|------|
| Validation Accuracy | 0.9321 |
| Precision | 0.9384 |
| Recall | 0.9917 |
| F1 Score | 0.9643 |

---

## 6. Data Flow Summary

User → Frontend → Backend → ML Model → Backend → Frontend → User

---

## 7. Scalability & Future Extensions

- Model versioning
- Async inference
- Real-time video analysis
- Authentication
- Model monitoring

---

## 8. Architectural Principles

- Clarity over complexity
- Separation of concerns
- MVP-first, research-aware

---

## 9. Summary

RoadSight balances academic rigor with real-world engineering discipline, making it suitable for technical evaluation and research-driven iteration.
