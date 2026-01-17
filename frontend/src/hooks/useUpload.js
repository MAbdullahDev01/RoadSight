import { useState } from "react";
import { uploadImage } from "../services/api";

export default function useUpload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const upload = async (file) => {
    setLoading(true);
    setError(null);

    try {
      const data = await uploadImage(file);
      return data; // ✅ IMPORTANT
    } catch (err) {
      setError("Upload failed. Please try again.");
      throw err; // ✅ allow caller to handle it
    } finally {
      setLoading(false);
    }
  };

  return { upload, loading, error };
}
