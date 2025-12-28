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
    <div className="min-h-screen flex items-center justify-center p-6">
      <ResultCard result={state} />
    </div>
  );
}
