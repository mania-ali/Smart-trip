export function saveDestination(item) {
  const savedItems = JSON.parse(localStorage.getItem("saved")) || [];

  const alreadyExists = savedItems.some((saved) => saved.id === item.id);

  if (!alreadyExists) {
    savedItems.push(item);
    localStorage.setItem("saved", JSON.stringify(savedItems));
  }
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