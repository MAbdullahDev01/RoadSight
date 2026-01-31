import { ShieldCheck } from "lucide-react";

export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="text-center p-10 rounded-2xl border border-dashed border-gray-300 bg-gray-50">
        <p className="text-sm text-gray-500 font-medium">
          No analysis data available.
        </p>
      </div>
    );
  }

  const confidencePercent =
    result.confidence !== undefined
      ? Math.round(result.confidence * 100)
      : null;

  return (
    <div className="bg-white border rounded-3xl shadow-xl shadow-emerald-100/40 overflow-hidden animate-fade-in">
      {/* HEADER */}
      <div className="px-6 py-5 border-b bg-emerald-50/60">
        <h2 className="text-lg font-semibold tracking-tight text-gray-900">
          Analysis Report
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          AI-generated road condition assessment
        </p>
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-8">
        {/* PRIMARY METRICS */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">
              Condition
            </span>
            <p className="mt-1 text-xl font-bold text-gray-900">
              {result.condition ?? "Unknown"}
            </p>
          </div>

          <div>
            <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">
              Confidence
            </span>
            <p className="mt-1 text-xl font-bold text-emerald-700">
              {confidencePercent !== null ? `${confidencePercent}%` : "N/A"}
            </p>

            {confidencePercent !== null && (
              <div className="mt-2 h-2 w-full rounded-full bg-emerald-100 overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-700"
                  style={{ width: `${confidencePercent}%` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* SAFETY NOTE */}
        <div className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <ShieldCheck
            size={18}
            className="text-emerald-700 mt-0.5 shrink-0"
          />
          <p className="text-sm leading-relaxed text-emerald-800">
            <span className="font-semibold">Safety note:</span>{" "}
            {result.safety_note ?? "No specific safety precautions identified."}
          </p>
        </div>
      </div>
    </div>
  );
}