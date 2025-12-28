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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg">
        <ResultCard result={state} />

        <button
          onClick={() => navigate("/")}
          className="mt-6 text-sm text-blue-600 underline block mx-auto"
        >
          Analyze another image
        </button>
      </div>
    </div>
  );
}
