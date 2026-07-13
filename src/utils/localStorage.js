export function saveDestination(item) {
  const savedItems = JSON.parse(localStorage.getItem("saved")) || [];

  const alreadyExists = savedItems.some(
    (saved) => saved.name.toLowerCase() === item.name.toLowerCase()
  );

  if (!alreadyExists) {
    savedItems.push(item);
    localStorage.setItem("saved", JSON.stringify(savedItems));
  }

  return alreadyExists; // let the caller know if it was blocked
}

export function getSavedDestinations() {
  return JSON.parse(localStorage.getItem("saved")) || [];
}

export function removeSavedDestination(id) {
  const savedItems = JSON.parse(localStorage.getItem("saved")) || [];
  const updatedItems = savedItems.filter((item) => item.id !== id);
  localStorage.setItem("saved", JSON.stringify(updatedItems));
}

export function isDestinationSaved(id) {
  const savedItems = JSON.parse(localStorage.getItem("saved")) || [];
  return savedItems.some((item) => item.id === id);
}