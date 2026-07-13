import useSaved from "../../hooks/useSaved";
import DestinationCard from "../destination/DestinationCard";

function SavedCard({ item }) {
  const { removeFromSaved } = useSaved();

  return (
    <div className="relative">
      <button
        onClick={() => removeFromSaved(item.id)}
        className="absolute top-4 right-4 z-10 text-gray-400 hover:text-red-500 transition"
        aria-label="Remove"
      >
        ✕
      </button>
  
      <DestinationCard
        searchType={item.type}
        destination={item}
        weather={null}
        showSaveButton={false}
      />
    </div>
  );
}

export default SavedCard;