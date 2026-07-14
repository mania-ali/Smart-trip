function getSavedItems() {
  try {
    return JSON.parse(localStorage.getItem("saved")) || [];
  } catch {
    return [];
  }
}

export function saveDestination(item) {
  const savedItems = getSavedItems();

 const alreadyExists = savedItems.some(
  (saved) => saved.id === item.id
);

  if (!alreadyExists) {
    savedItems.push(item);
    localStorage.setItem("saved", JSON.stringify(savedItems));
  }

  return alreadyExists; // let the caller know if it was blocked
}

export function getSavedDestinations() {
  return getSavedItems();
}

export function removeSavedDestination(id) {
  const savedItems = getSavedItems();
  const updatedItems = savedItems.filter((item) => item.id !== id);
  localStorage.setItem("saved", JSON.stringify(updatedItems));
}

export function isDestinationSaved(id) {
  const savedItems = getSavedItems();
  return savedItems.some((item) => item.id === id);
}