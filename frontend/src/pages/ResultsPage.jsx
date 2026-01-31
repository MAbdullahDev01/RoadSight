// src/pages/ResultsPage.jsx
import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

export default function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    setTimeout(() => navigate("/"), 0);
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-50 to-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl animate-fade-in">
        <ResultCard result={state} />

        <button
          onClick={() => navigate("/upload")}
          className="mt-10 mx-auto flex items-center gap-2
                     text-sm font-semibold text-gray-500
                     hover:text-emerald-700 transition group"
        >
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Analyze another image
        </button>
      </div>
    </div>
  );
}
