const storageKey = 'fieldnotes-kazakhstan-trip-itinerary-v1';

export function getItineraryPlaceIds(defaultIds = []) {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return [...defaultIds];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [...defaultIds];
  } catch {
    return [...defaultIds];
  }
}

export function saveItineraryPlaceIds(ids) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(ids));
  } catch {
    // Ignore storage write issues
  }
}
