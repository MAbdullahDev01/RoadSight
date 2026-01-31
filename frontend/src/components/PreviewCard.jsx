export default function PreviewCard({ previewUrl }) {
  return (
    <div className="rounded-2xl overflow-hidden border bg-gray-50 shadow-inner">
      <img
        src={previewUrl}
        alt="Uploaded road preview"
        className="max-h-80 w-full object-contain p-4"
      />
    </div>
  );
}