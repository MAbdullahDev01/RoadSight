export default function ImageUploader({ onImageSelect, disabled }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }

    onImageSelect(file);
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center
        ${disabled ? "opacity-50 pointer-events-none" : "hover:border-gray-400"}`}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        id="image-upload"
      />

      <label htmlFor="image-upload" className="cursor-pointer">
        <p className="text-gray-600">
          Click to upload or drag and drop an image
        </p>
      </label>
    </div>
  );
}
