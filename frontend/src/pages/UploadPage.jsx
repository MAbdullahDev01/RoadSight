import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import PreviewCard from "../components/PreviewCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBanner from "../components/ErrorBanner";
import Navbar from "../components/Navbar";
import useUpload from "../hooks/useUpload";

export default function UploadPage() {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const { upload, loading, error } = useUpload();
  const navigate = useNavigate();

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl(null);
      return;
    }

    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const handleSubmit = async () => {
    if (!imageFile || loading) return;
    const result = await upload(imageFile);
    navigate("/results", { state: result });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-linear-to-b from-emerald-50 to-white flex items-center justify-center px-6">
        <div className="w-full max-w-xl animate-fade-in">
          {/* HEADER */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              RoadSight Analysis
            </h1>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Upload a road surface image to generate AI-powered condition analysis.
            </p>
          </div>

          {/* CARD */}
          <div className="bg-white border rounded-3xl shadow-xl shadow-emerald-100/40 p-8">
            <ImageUploader onImageSelect={setImageFile} disabled={loading} />

            {previewUrl && (
              <div className="mt-8 animate-fade-in">
                <PreviewCard previewUrl={previewUrl} />

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="mt-8 w-full flex items-center justify-center gap-2
                            bg-emerald-600 text-white font-semibold
                            py-3 rounded-xl
                            hover:bg-emerald-700
                            transition-all duration-300
                            hover:-translate-y-0.5
                            shadow-md hover:shadow-lg
                            disabled:opacity-50"
                >
                  {loading ? "Processing Image..." : "Generate Analysis"}
                </button>

                <p className="text-[11px] text-gray-400 text-center mt-3">
                  Images are processed securely and not stored.
                </p>
              </div>
            )}

            {loading && <LoadingSpinner />}
            {error && <ErrorBanner message={error} />}
          </div>
        </div>
      </div>
    </>
  );
}