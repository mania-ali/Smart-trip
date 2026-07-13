function AttractionCard({ attraction }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
      <h4 className="font-semibold text-gray-800">{attraction.name}</h4>
      <p className="text-sm text-gray-600 mt-1">
        {(attraction.distance / 1000).toFixed(1)} km away
      </p>
    </div>
  );
}

export default AttractionCard;