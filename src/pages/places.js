import { places, itinerary } from '../data/trip.js?v=18';
import { getItineraryPlaceIds, saveItineraryPlaceIds } from '../data/itinerary-state.js?v=18';
import { pageHeader, icon } from '../components/shared.js?v=18';

let activeCategoryFilter = 'all';

export function getActiveCategory() {
  return activeCategoryFilter;
}

export function setActiveCategory(cat) {
  activeCategoryFilter = cat;
}

export function renderPlaces() {
  const defaultIds = itinerary.flatMap(day => day.placeIds || []);
  const selectedIds = new Set(getItineraryPlaceIds(defaultIds));

  const categories = ['all', ...new Set(places.map(p => p.category))];

  const filtered = places.filter(p => {
    return activeCategoryFilter === 'all' || p.category === activeCategoryFilter;
  });

  return `
    ${pageHeader('KAZAKHSTAN SIGHTS', 'Saved places', 'The key architectural, cultural, and alpine highlights in Almaty and surrounding national parks.')}

    <!-- Category filter chips -->
    <div class="places-filter-bar">
      ${categories.map(cat => `
        <button type="button" class="filter-chip ${activeCategoryFilter === cat ? 'active selected' : ''}" data-place-cat="${cat}">
          ${cat === 'all' ? 'All Places' : cat}
        </button>
      `).join('')}
    </div>

    <!-- Places Grid -->
    <section class="places-grid" aria-label="List of places">
      ${filtered.map(p => {
        const inItinerary = selectedIds.has(p.id);

        return `
          <article class="place-card" data-place-card-id="${p.id}">
            <div class="place-img-wrap">
              <img src="${p.image}" alt="${p.name}" loading="lazy" />
              <span class="place-city-tag">${p.city}</span>
            </div>
            <div class="place-body">
              <div class="place-top-row">
                <span class="place-category-pill">${p.category}</span>
                <button type="button" class="btn-toggle-itinerary ${inItinerary ? 'is-added' : ''}" data-place-id="${p.id}" title="${inItinerary ? 'Remove from itinerary' : 'Add to itinerary'}">
                  ${inItinerary ? '✓ In plan' : '+ Add to plan'}
                </button>
              </div>
              <h3>${p.name}</h3>
              <p class="place-desc">${p.shortDescription}</p>
              
              <div class="place-info-meta">
                <div class="info-row">
                  <span class="info-label">Best time:</span>
                  <span>${p.bestTime}</span>
                </div>
                <div class="info-row">
                  <span class="info-label">Admission:</span>
                  <span>${p.admission}</span>
                </div>
              </div>

              <div class="place-tags-row">
                ${p.tags.map(t => `<span class="tag-badge">#${t}</span>`).join('')}
              </div>

              <div class="place-why-box">
                <small><strong>Why visit:</strong> ${p.whyGo}</small>
              </div>
            </div>
          </article>
        `;
      }).join('')}
    </section>
  `;
}
