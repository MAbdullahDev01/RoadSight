import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

export default function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow p-6">
        <ResultCard result={state} />
      </div>
    </div>
  );
}
