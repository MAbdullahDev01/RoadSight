import { AlertTriangle } from "lucide-react";

export default function ErrorBanner({ message }) {
  if (!message) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="
        mt-6
        flex items-start gap-3
        rounded-2xl
        border border-emerald-200
        bg-emerald-50
        px-4 py-3
        shadow-sm
        animate-fade-in
      "
    >
      {/* Icon */}
      <div className="mt-0.5 shrink-0">
        <AlertTriangle
          size={18}
          className="text-emerald-700"
          aria-hidden="true"
        />
      </div>

      {/* Text */}
      <div className="text-sm leading-snug text-emerald-800">
        <p className="font-semibold">
          Unable to process request
        </p>
        <p className="mt-1 text-emerald-700">
          {message}
        </p>
      </div>
    </div>
  );
}