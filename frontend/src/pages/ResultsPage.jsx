import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

/**
 * Displays prediction results.
 * Redirects safely if accessed without navigation state.
 */
export default function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    setTimeout(() => navigate("/"), 0);
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] p-6">
      <div className="w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-700">
        <ResultCard result={state} />

        <button
          onClick={() => navigate("/")}
          className="mt-8 group flex items-center gap-2 mx-auto text-sm font-semibold text-zinc-500 hover:text-indigo-600 transition-colors"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Analyze another image
        </button>
      </div>
    </div>
  );
}
