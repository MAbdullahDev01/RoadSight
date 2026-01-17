export default function LoadingSpinner() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center space-y-3">
      <div className="relative h-10 w-10">
        <div className="h-10 w-10 rounded-full border-4 border-zinc-100 border-t-indigo-600 animate-spin" />
      </div>
      <p className="text-sm font-medium text-zinc-500">Processing high-res image...</p>
    </div>
  );
}