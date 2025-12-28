import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import ResultsPage from "./pages/ResultsPage";

/**
 * Root application component.
 * Keeps routing minimal and explicit — no premature abstractions.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Entry point: image upload */}
        <Route path="/" element={<UploadPage />} />

        {/* Results page: displays model prediction */}
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
