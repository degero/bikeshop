export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response encountered an error");
}

export function handleError(error) {
  // TODO add logging
  console.error("API endpoint error " + error);
  throw error;
}
