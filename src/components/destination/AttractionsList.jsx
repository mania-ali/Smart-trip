import AttractionCard from "./AttractionCard";
import Loader from "../common/Loader";
import Error from "../common/Error";

function AttractionsList({ attractions, loading, error }) {
  if (loading) {
    return (
      <div className="max-w-md mx-auto mt-6">
        <Loader message="Finding top attractions..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-6">
        <Error message={error} />
      </div>
    );
  }

  if (!attractions || attractions.length === 0) return null;

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-md mx-auto mt-6">
      <h3 className="text-lg font-semibold mb-3">🏛️ Top Attractions</h3>
      <div className="space-y-3">
        {attractions.map((attraction, i) => (
          <AttractionCard key={i} attraction={attraction} />
        ))}
      </div>
    </div>
  );
}

export default AttractionsList;