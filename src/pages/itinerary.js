import { itinerary, places, tripMeta } from '../data/trip.js?v=18';
import { getItineraryPlaceIds, saveItineraryPlaceIds } from '../data/itinerary-state.js?v=18';
import { pageHeader, icon, formatDate } from '../components/shared.js?v=18';

export function renderItinerary() {
  const defaultIds = itinerary.flatMap(day => day.placeIds || []);
  const selectedIds = new Set(getItineraryPlaceIds(defaultIds));

  return `
    ${pageHeader('DAY-BY-DAY SCHEDULE', 'Kazakhstan Itinerary', `${tripMeta.durationDays} curated days from Almaty’s urban culture to the canyons and alpine summits of the Tian Shan.`)}

    <div class="itinerary-banner">
      <div class="itinerary-banner-left">
        <span class="banner-pill">BASE LOCATION</span>
        <h3>${tripMeta.stayAreaName}</h3>
        <p>${tripMeta.stayAreaNote}</p>
      </div>
      <div class="itinerary-banner-right">
        <a href="https://www.google.com/maps/search/?api=1&query=Golden+Square+Almaty+Kazakhstan" target="_blank" rel="noreferrer" class="button button-outline">
          Open in Google Maps ↗
        </a>
      </div>
    </div>

    <!-- Timeline Days -->
    <section class="itinerary-timeline" aria-label="Daily plan">
      ${itinerary.map(day => {
        const dayPlaces = (day.placeIds || []).map(id => places.find(p => p.id === id)).filter(Boolean);

        return `
          <article class="itinerary-day-card" id="day-${day.dayNumber}">
            <header class="day-card-header">
              <div class="day-badge-wrap">
                <span class="day-num">${String(day.dayNumber).padStart(2,'0')}</span>
                <span class="day-sub">Day</span>
              </div>
              <div class="day-title-wrap">
                <p class="day-date">${formatDate(day.date)} · ${day.city}</p>
                <h2>${day.title}</h2>
                <p class="day-sub-desc">${day.subtitle}</p>
              </div>
            </header>

            <!-- Events List -->
            <div class="day-events-list">
              ${day.events.map(ev => `
                <div class="event-item type-${ev.type}">
                  <div class="event-time-col">
                    <span class="event-time">${ev.time}</span>
                    <span class="event-tag">${ev.type}</span>
                  </div>
                  <div class="event-body">
                    <h4>${ev.title}</h4>
                    <p>${ev.description}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Linked Place Cards if any -->
            ${dayPlaces.length > 0 ? `
              <div class="day-places-box">
                <span class="places-section-label">KEY SIGHTS PLANNED FOR THIS DAY:</span>
                <div class="day-places-grid">
                  ${dayPlaces.map(p => {
                    const isAdded = selectedIds.has(p.id);
                    return `
                      <div class="day-place-mini ${isAdded ? '' : 'is-removed'}">
                        <img src="${p.image}" alt="${p.name}" loading="lazy" />
                        <div class="mini-info">
                          <strong>${p.name}</strong>
                          <small>${p.category} · ${p.city}</small>
                        </div>
                        <button type="button" class="btn-itinerary-remove" data-place-id="${p.id}" title="${isAdded ? 'Remove from plan' : 'Re-add to plan'}">
                          ${isAdded ? '✕ Remove' : '+ Add back'}
                        </button>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            ` : ''}
          </article>
        `;
      }).join('')}
    </section>
  `;
}
