export default function ResultCard({ result }) {
  return (
    <div className="border rounded-lg p-6 shadow max-w-md">
      <h2 className="text-xl font-semibold mb-2">Road Condition</h2>

      <p>
        <strong>Condition:</strong> {result.condition}
      </p>
      <p>
        <strong>Confidence:</strong> {result.confidence}%
      </p>

      <p className="mt-2 text-sm text-gray-600">
        {result.safety_note}
      </p>
    </div>
  );
}
