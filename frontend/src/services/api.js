import axios from "axios";

/**
 * Centralized Axios instance.
 * Keeps backend configuration isolated from UI logic.
 */
const api = axios.create({
  baseURL: "http://localhost:8000", // TODO: move to env in production
  timeout: 15000,
});

/**
 * Uploads an image to the backend for prediction.
 * @param {File} imageFile
 * @returns {Promise<Object>} prediction result
 */

export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile); // ⚠️ MUST be "image"

  const response = await api.post("/api/predict", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export default api;