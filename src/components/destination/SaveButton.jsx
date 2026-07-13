import { useState } from "react";
import useSaved from "../../hooks/useSaved";

function SaveButton({ item }) {
  const { isSaved, addToSaved, removeFromSaved } = useSaved();
  const saved = isSaved(item.id);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (saved) {
      removeFromSaved(item.id);
      setMessage("");
    } else {
      const success = addToSaved(item);
      if (!success) {
        setMessage(`${item.name} is already saved.`);
      } else {
        setMessage("");
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full px-4 py-2 rounded-lg font-medium border transition ${
          saved
            ? "bg-red-50 text-red-600 border-red-300 hover:bg-red-100"
            : "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
        }`}
      >
        {saved ? "Remove from Saved" : "Save Destination"}
      </button>

      {message && (
        <p className="text-sm text-gray-500 mt-2 text-center">{message}</p>
      )}
    </div>
  );
}

export default SaveButton;