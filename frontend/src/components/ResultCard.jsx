export default function ResultCard({ result }) {
  if (!result) {
    return (
      <p className="text-gray-600 text-center">
        No result data available.
      </p>
    );
  }

  return (
    <div className="border rounded-lg p-6 shadow max-w-md">
      <h2 className="text-xl font-semibold mb-2">Road Condition</h2>

      <p>
        <strong>Condition:</strong> {result.condition ?? "Unknown"}
      </p>
      <p>
        <strong>Confidence:</strong>{" "}
        {result.confidence !== undefined
          ? `${result.confidence}%`
          : "N/A"}
      </p>

      <p className="mt-2 text-sm text-gray-600">
        {result.safety_note ?? "No safety notes provided."}
      </p>
    </div>
  );
}
