import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import PreviewCard from "../components/PreviewCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorBanner from "../components/ErrorBanner";
import useUpload from "../hooks/useUpload";

/**
 * UploadPage orchestrates the full upload flow.
 * Owns image state and navigation logic.
 */
export default function UploadPage() {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const { upload, loading, error } = useUpload();
  const navigate = useNavigate();

  // Generate and clean up preview URL
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

    try {
      const result = await upload(imageFile);
      navigate("/results", { state: result });
    } catch {
      // Error handled by hook
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] p-6 selection:bg-indigo-100">
      <div className="w-full max-w-lg">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-zinc-900 tracking-tight mb-2">
            RoadSight
          </h1>
          <p className="text-zinc-500">Upload road imagery for instant condition diagnostics.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-zinc-200/60 border border-zinc-100 p-8">
          <ImageUploader onImageSelect={setImageFile} disabled={loading} />

          {previewUrl && (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <PreviewCard previewUrl={previewUrl} />
              
              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full px-6 py-3 bg-zinc-900 text-white font-semibold rounded-xl
                           hover:bg-zinc-800 active:scale-[0.98] transition-all disabled:opacity-50
                           shadow-lg shadow-zinc-200"
                >
                  {loading ? "Processing..." : "Generate Analysis"}
                </button>
                <p className="text-center text-[11px] text-zinc-400 font-medium">
                  By uploading, you agree to our terms of processing.
                </p>
              </div>
            </div>
          )}

          {loading && <LoadingSpinner />}
          {error && <ErrorBanner message={error} />}
        </div>
      </div>
    </div>
  );
}