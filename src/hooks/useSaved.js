import { useState } from "react";
import {
  saveDestination,
  getSavedDestinations,
  removeSavedDestination,
  isDestinationSaved,
} from "../utils/localStorage";

function useSaved() {
  const [savedItems, setSavedItems] = useState(getSavedDestinations());

  function addToSaved(item) {
    saveDestination(item);
    setSavedItems(getSavedDestinations());
  }

  function removeFromSaved(id) {
    removeSavedDestination(id);
    setSavedItems(getSavedDestinations());
  }

  function isSaved(id) {
    return isDestinationSaved(id);
  }

  function toggleSaved(item) {
    if (isSaved(item.id)) {
      removeFromSaved(item.id);
    } else {
      addToSaved(item);
    }
  }

  return {
    savedItems,
    addToSaved,
    removeFromSaved,
    isSaved,
    toggleSaved,
  };
}

export default useSaved;