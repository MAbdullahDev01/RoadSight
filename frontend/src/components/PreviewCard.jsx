export default function PreviewCard({ previewUrl }) {
  return (
    <div className="mt-8 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-inner">
      <img
        src={previewUrl}
        alt="Uploaded road preview"
        className="max-h-80 w-full object-contain mx-auto"
      />
    </div>
  );
}