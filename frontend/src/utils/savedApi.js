const API_BASE = "http://localhost:5000/api/saved";

function authHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function getSavedDestinations() {
  const response = await fetch(API_BASE, { headers: authHeaders() });
  if (!response.ok) return [];
  return response.json();
}

export async function saveDestination(item) {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(item),
  });
  return response.status === 409; // true if it was a duplicate
}

export async function removeSavedDestination(id) {
  await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
}