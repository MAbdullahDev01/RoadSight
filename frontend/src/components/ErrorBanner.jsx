export default function ErrorBanner({ message }) {
  return (
    <div className="mt-4 bg-red-50 border border-red-200 text-red-700 p-3 rounded text-sm">
      {message}
    </div>
  );
}
