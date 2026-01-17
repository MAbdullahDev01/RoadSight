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
    <div className={`group relative border-2 border-dashed rounded-2xl p-8 transition-all duration-200 
        ${disabled ? "opacity-50 pointer-events-none bg-zinc-50 border-zinc-200" : 
        "hover:border-indigo-400 hover:bg-indigo-50/30 border-zinc-200 bg-white"}`}
    >
      <input type="file" accept="image/*" onChange={handleChange} className="hidden" id="image-upload" />

      <label htmlFor="image-upload" className="flex flex-col items-center cursor-pointer">
        <div className="mb-4 p-3 rounded-full bg-zinc-100 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors text-zinc-500">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-zinc-900">Click to upload image</p>
        <p className="text-xs text-zinc-500 mt-1">PNG, JPG or WEBP up to 10MB</p>
      </label>
    </div>
  );
}