export default function ImageUploader({ onImageSelect }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file.");
      return;
    }
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      alert("File is too large! Please upload something smaller than 5MB.")
      return;
    }
    onImageSelect(file);
  };

  return (
    <div className="group border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-200">
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        id="image-upload"
      />
      <label htmlFor="image-upload" className="cursor-pointer block w-full h-full">
        <div className="space-y-2">
          {/* Icon/Visual cue */}
          <div className="text-4xl text-gray-400 group-hover:text-blue-500 transition-colors">
            📸
          </div>
          <p className="text-gray-600 font-medium group-hover:text-blue-600">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-gray-400">
            PNG, JPG or GIF (Max 5MB)
          </p>
        </div>
      </label>
    </div>
  );
}
