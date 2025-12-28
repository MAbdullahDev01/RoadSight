export default function ResultCard({ result }) {
  if (!result) {
    return (
      <p className="text-center text-gray-600">
        No result data available.
      </p>
    );
  }

  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Analysis Result
      </h2>

      <div className="space-y-2">
        <p>
          <strong>Condition:</strong>{" "}
          {result.condition ?? "Unknown"}
        </p>

        <p>
          <strong>Confidence:</strong>{" "}
          {result.confidence !== undefined
            ? `${result.confidence}%`
            : "N/A"}
        </p>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        {result.safety_note ?? "No safety notes provided."}
      </p>
    </div>
  );
}
