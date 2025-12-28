import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorBanner from "../components/ErrorBanner";
import ImageUploader from "../components/ImageUploader";
import LoadingSpinner from "../components/LoadingSpinner";
import PreviewCard from "../components/PreviewCard";
import useUpload from "../hooks/useUpload";


export default function UploadPage() {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const navigate = useNavigate();
  const { upload, loading, error } = useUpload();

  const handleImageSelect = (file) => {
    setImageFile(file);
  };

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
  if (!imageFile) return;

  try {
    const result = await upload(imageFile);
    navigate("/results", { state: result });
  } catch {
    // error handled by hook
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-semibold mb-4">Upload Road Image</h1>

        <ImageUploader onImageSelect={handleImageSelect} />

        {previewUrl && (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4 px-6 py-2 bg-black text-white rounded disabled:opacity-50"
          >
            Analyze Image
          </button>
        )}

        {loading && <LoadingSpinner />}
        {error && <ErrorBanner message={error} />}
      </div>
    </div>
  );
}
