import { useState } from "react";
import { uploadImage } from "../services/api";

export default function useUpload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const upload = async (imageFile) => {
    setLoading(true);
    setError(null);

    try {
      const data = await uploadImage(imageFile);
      setResult(data);
      return data;
    } catch (err) {
      setError("Failed to analyze image. Please try again.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    upload,
    loading,
    error,
    result,
  };
}
