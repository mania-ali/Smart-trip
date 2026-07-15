import AttractionCard from "./AttractionCard";
import Loader from "../common/Loader";
import Error from "../common/Error";

function AttractionsList({ attractions, loading, error }) {
  if (loading) {
    return (
      <div className="w-full">
        <Loader message="Finding top attractions..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <Error message={error} />
      </div>
    );
  }

  if (!attractions || attractions.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-stone-200 p-7 w-full">
      <h3 className="text-lg font-black text-stone-900 mb-4">🏛️ Top Attractions</h3>
      <div className="space-y-3">
        {attractions.map((attraction, i) => (
          <AttractionCard key={i} attraction={attraction} />
        ))}
      </div>
    </div>
  );
}

export default AttractionsList;