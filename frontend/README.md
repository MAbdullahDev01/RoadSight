# RoadSight — Frontend (Web)

RoadSight is a web-based application that analyzes road surface images and provides safety-related insights using a machine learning backend.

This repository contains the **frontend MVP**, built with a focus on clean architecture, clear data flow, and production-ready UX patterns.

---

## ✨ Features

- Upload a road image from the browser
- Instant image preview before submission
- Send image to backend API for analysis
- Display predicted road condition, confidence, and safety notes
- Graceful handling of loading, error, and empty states
- Clean, minimal UI designed for clarity and usability

---

## 🧱 Tech Stack

- **React** (Vite)
- **React Router** (client-side routing)
- **TailwindCSS** (utility-first styling)
- **Axios** (HTTP requests)
- **Custom React Hooks** for async logic

---

## 📁 Project Structure

```
frontend/src/
├── components/
│   ├── ImageUploader.jsx    # File input & validation
│   ├── PreviewCard.jsx     # Image preview display
│   ├── ResultCard.jsx      # Prediction results UI
│   ├── LoadingSpinner.jsx  # Loading feedback
│   └── ErrorBanner.jsx     # Error messaging
├── pages/
│   ├── UploadPage.jsx      # Image upload & submission flow
│   └── ResultsPage.jsx     # Results display & navigation
├── services/
│   └── api.js              # Backend API abstraction
├── hooks/
│   └── useUpload.js        # Upload lifecycle logic
├── App.jsx                 # Route definitions
└── main.jsx                # App entry point
```

---

## 🔄 Application Flow

1. User uploads an image on the **Upload Page**
2. Image preview is generated locally
3. On submission:
   - Image is sent to the backend via a dedicated API service
   - Loading and error states are handled via a custom hook
4. User is navigated to the **Results Page** to view predictions
5. User can return to analyze another image

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Backend server running locally (default: `http://localhost:8000`)

### Installation

```bash
cd frontend
npm install
npm run dev
```

The app will be available at:
```
http://localhost:5173
```

---

## 🔌 Backend API Contract (Expected)

```
POST /predict
Content-Type: multipart/form-data
Body: { image: <image file> }
```

Example response:
```json
{
  "condition": "Pothole",
  "confidence": 92,
  "safety_note": "Reduce speed and maintain distance."
}
```

---

## 🎯 Design Philosophy

- Clarity over cleverness
- No premature optimization
- Minimal but professional UI
- Defensive handling of real-world edge cases

---

## 📌 Future Improvements

- Environment-based API configuration
- Upload retry support
- Mobile responsiveness improvements
- Authentication and user history
- Accessibility enhancements

---

## 👤 Author

Muhammad Abdullah  
High school student interested in software engineering, AI, and building real-world products.
