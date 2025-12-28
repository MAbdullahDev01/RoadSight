import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // backend placeholder
  timeout: 10000,
});

export const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await api.post("/predict", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
