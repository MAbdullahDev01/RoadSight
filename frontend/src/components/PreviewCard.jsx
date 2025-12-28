export default function PreviewCard({ previewUrl }) {
  return (
    <div className="mt-6">
      <img
        src={previewUrl}
        alt="Uploaded road preview"
        className="max-h-64 mx-auto rounded-lg shadow-sm"
      />
    </div>
  );
}
