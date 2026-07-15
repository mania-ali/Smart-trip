function AttractionCard({ attraction }) {
  return (
    <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
      <h4 className="font-bold text-stone-900">{attraction.name}</h4>
      <p className="text-sm text-stone-600 mt-1">
        {(attraction.distance / 1000).toFixed(1)} km away
      </p>
    </div>
  );
}

export default AttractionCard;