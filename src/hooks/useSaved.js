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
  const wasDuplicate = saveDestination(item);
  setSavedItems(getSavedDestinations());
  return !wasDuplicate; // duplicate->return false->not saved, notduplicate->return true-> saved
}

  function removeFromSaved(id) {
    removeSavedDestination(id);
    setSavedItems(getSavedDestinations());
  }

  function isSaved(id) {
    return isDestinationSaved(id);
  }



  return {
    savedItems,
    addToSaved,
    removeFromSaved,
    isSaved,
  
  };
}

export default useSaved;