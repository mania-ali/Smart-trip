import useSaved from "../hooks/useSaved";
import SavedList from "../components/saved/SavedList";

function Saved() {
  const { savedItems } = useSaved();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-2">Saved Destinations</h1>
      <p className="text-gray-600 text-center mb-8">
        Your saved places will show up here.
      </p>

      <SavedList items={savedItems} />
    </div>
  );
}

export default Saved;