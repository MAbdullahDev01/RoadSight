export default function LoadingSpinner() {
  return (
    <div className="mt-10 flex flex-col items-center gap-3 animate-fade-in">
      <div className="h-10 w-10 rounded-full border-4 border-emerald-100
                      border-t-emerald-600 animate-spin" />
      <p className="text-sm font-medium text-gray-600">
        Analyzing road surface...
      </p>
    </div>
  );
}