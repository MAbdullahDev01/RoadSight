import { useState, useEffect } from "react";
import ImageUploader from "../components/ImageUploader";
import PreviewCard from "../components/PreviewCard";

export default function UploadPage() {
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-semibold mb-4">Upload Road Image</h1>

      <ImageUploader onImageSelect={handleImageSelect} />

      {previewUrl && <PreviewCard previewUrl={previewUrl} />}
    </div>
  );
}
