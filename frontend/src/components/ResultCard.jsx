export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="text-center p-8 bg-zinc-50 rounded-2xl border border-dashed border-zinc-200">
        <p className="text-sm text-zinc-500 font-medium">No analysis data available yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl shadow-zinc-200/50 overflow-hidden">
      <div className="p-6 border-b border-zinc-100 bg-zinc-50/50">
        <h2 className="text-lg font-bold text-zinc-900 tracking-tight">Analysis Report</h2>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Condition</span>
            <p className="text-lg font-semibold text-zinc-900">{result.condition ?? "Unknown"}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Confidence</span>
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold text-indigo-600">
                {result.confidence !== undefined ? `${result.confidence * 100}%` : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-indigo-50/50 border border-indigo-100">
          <p className="text-sm leading-relaxed text-indigo-900">
            <span className="font-bold mr-1 italic">Note:</span>
            {result.safety_note ?? "No specific safety precautions noted."}
          </p>
        </div>
      </div>
    </div>
  );
}