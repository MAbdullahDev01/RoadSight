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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Road Condition Analysis
        </h1>

        <ImageUploader onImageSelect={setImageFile} disabled={loading} />

        {previewUrl && (
          <>
            <PreviewCard previewUrl={previewUrl} />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Upload another image to replace the current one.
            </p>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 w-full px-4 py-2 bg-black text-white rounded-lg
                         hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Analyze Image"}
            </button>
          </>
        )}

        {loading && <LoadingSpinner />}
        {error && <ErrorBanner message={error} />}
      </div>
    </div>
  );
}
