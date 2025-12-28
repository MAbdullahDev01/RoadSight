export default function PreviewCard({ previewUrl }) {
  return (
    <div className="mt-4">
      <img
        src={previewUrl}
        alt="Preview"
        className="max-h-64 mx-auto rounded-lg shadow"
      />
    </div>
  );
}
