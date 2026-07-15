import useSaved from "../../hooks/useSaved";

function SaveButton({ item }) {
  const { isSaved, toggleSaved } = useSaved();
  const saved = isSaved(item.id);

  return (
    <button
      onClick={() => toggleSaved(item)}
      className={`w-full py-3 rounded-full font-semibold text-sm transition ${
        saved
          ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
          : "bg-emerald-900 text-white hover:bg-emerald-800"
      }`}
    >
      {saved ? "Remove from Saved" : "Save Destination"}
    </button>
  );
}

export default SaveButton;