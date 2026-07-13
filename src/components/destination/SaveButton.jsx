import useSaved from "../../hooks/useSaved";

function SaveButton({ item }) {
  const { isSaved, toggleSaved } = useSaved();
  const saved = isSaved(item.id);

  return (
    <button
      onClick={() => toggleSaved(item)}
      className={`w-full px-4 py-2 rounded-lg font-medium border transition ${
        saved
          ? "bg-red-50 text-red-600 border-red-300 hover:bg-red-100"
          : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
      }`}
    >
      {saved ? "Remove from Saved" : "Save Destination"}
    </button>
  );
}

export default SaveButton;