import { useState, useEffect } from "react";
import {
  saveDestination,
  getSavedDestinations,
  removeSavedDestination,
} from "../utils/savedApi";

function useSaved() {
  const [savedItems, setSavedItems] = useState([]);

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    refresh();
  }
}, []);

  async function refresh() {
    const items = await getSavedDestinations();
    setSavedItems(items);
  }

  async function addToSaved(item) {
    const wasDuplicate = await saveDestination(item);
    await refresh();
    return !wasDuplicate;
  }

  async function removeFromSaved(id) {
    await removeSavedDestination(id);
    await refresh();
  }

  function isSaved(id) {
    return savedItems.some((item) => item.id === id);
  }

  async function toggleSaved(item) {
    if (isSaved(item.id)) {
      await removeFromSaved(item.id);
    } else {
      await addToSaved(item);
    }
  }

  return { savedItems, addToSaved, removeFromSaved, isSaved, toggleSaved };
}

export default useSaved;