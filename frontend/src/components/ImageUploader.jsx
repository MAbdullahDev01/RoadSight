export default function ImageUploader({ onImageSelect, disabled }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    onImageSelect(file);
  };

  return (
    <div
      className={`relative border-2 border-dashed rounded-2xl p-10 text-center
      transition-all duration-300
      ${disabled
        ? "opacity-50 pointer-events-none bg-gray-50 border-gray-200"
        : "bg-white border-gray-300 hover:border-emerald-500 hover:bg-emerald-50/40"
      }`}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        id="image-upload"
      />

      <label htmlFor="image-upload" className="cursor-pointer block">
        <div className="mx-auto mb-4 h-14 w-14 rounded-2xl
                        bg-emerald-100 flex items-center justify-center
                        transition-transform hover:scale-105">
          <svg
            className="h-7 w-7 text-emerald-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <p className="font-semibold text-gray-900">
          Click to upload road image
        </p>
        <p className="text-xs text-gray-500 mt-1">
          JPG, PNG, or WEBP · Max 10MB
        </p>
      </label>
    </div>
  );
}