import { itinerary, places, tripMeta } from '../data/trip.js?v=18';
import { getItineraryPlaceIds } from '../data/itinerary-state.js?v=18';
import { icon, formatDate } from '../components/shared.js?v=18';
import { getWeather, forecastFor } from '../data/weather.js?v=18';

// Which day is open. Defaults to today during the trip, otherwise Day 1.
let selectedDay = null;

function todayISO() {
  const override = new URLSearchParams(window.location.search).get('today');
  if (override && /^\d{4}-\d{2}-\d{2}$/.test(override)) return override;
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function setSelectedDay(dayNumber) {
  const n = Number(dayNumber);
  if (itinerary.some(day => day.dayNumber === n)) selectedDay = n;
}

function currentDay() {
  if (selectedDay == null) {
    const today = itinerary.find(day => day.date === todayISO());
    selectedDay = today ? today.dayNumber : itinerary[0].dayNumber;
  }
  return itinerary.find(day => day.dayNumber === selectedDay) || itinerary[0];
}

export function renderItinerary() {
  const day = currentDay();
  const today = todayISO();
  const defaultIds = itinerary.flatMap(d => d.placeIds || []);
  const selectedIds = new Set(getItineraryPlaceIds(defaultIds));
  const dayPlaces = (day.placeIds || []).map(id => places.find(p => p.id === id)).filter(Boolean);
  const prev = itinerary.find(d => d.dayNumber === day.dayNumber - 1);
  const next = itinerary.find(d => d.dayNumber === day.dayNumber + 1);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tripMeta.stayAreaName)}`;

  return `
    <div class="itin-top">
      <p class="eyebrow">DAY-BY-DAY PLAN</p>
      <h1>Itinerary</h1>
      <a class="itin-base" href="${mapsUrl}" target="_blank" rel="noreferrer">
        <span aria-hidden="true">🏨</span>
        <span><small>Staying at</small><strong>${tripMeta.stayAreaName}</strong></span>
        <b>Map ↗</b>
      </a>
    </div>

    <!-- Sticky day tabs -->
    <nav class="day-tabs" aria-label="Choose a day">
      ${itinerary.map(d => `
        <button type="button" class="day-tab ${d.dayNumber === day.dayNumber ? 'active' : ''} ${d.date === today ? 'is-today' : ''}" data-day-tab="${d.dayNumber}" ${d.dayNumber === day.dayNumber ? 'aria-current="true"' : ''}>
          <span>${formatDate(d.date, { weekday: 'short' })}</span>
          <strong>${formatDate(d.date, { day: 'numeric' })}</strong>
          <small>Day ${d.dayNumber}</small>
        </button>
      `).join('')}
    </nav>

    <article class="itin-day" id="day-${day.dayNumber}" data-day-date="${day.date}" data-day-mountain="${/Shymbulak|Talgar|Medeu/i.test(day.title) ? '1' : ''}">
      <header class="itin-day-head">
        <p class="itin-day-meta">
          ${day.date === today ? '<span class="today-pill">Today</span>' : ''}
          Day ${day.dayNumber} · ${formatDate(day.date)} · ${day.city}
        </p>
        <h2>${day.title}</h2>
        <p class="itin-day-sub">${day.subtitle}</p>
        <div class="itin-weather" aria-live="polite"></div>
      </header>

      <ol class="timeline-list">
        ${day.events.map(ev => `
          <li class="tl-item type-${ev.type}">
            <span class="tl-dot" aria-hidden="true"></span>
            <div class="tl-body">
              <div class="tl-time">
                <strong>${ev.time}</strong>
                <span class="event-tag">${ev.type}</span>
              </div>
              <h3>${ev.title}</h3>
              <p>${ev.description}</p>
            </div>
          </li>
        `).join('')}
      </ol>

      ${dayPlaces.length > 0 ? `
        <div class="day-places-box">
          <span class="places-section-label">Sights today</span>
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

    <nav class="day-pager" aria-label="Previous and next day">
      ${prev ? `<button type="button" class="day-pager-btn" data-day-tab="${prev.dayNumber}">← <span><small>Day ${prev.dayNumber}</small>${formatDate(prev.date, { weekday: 'short', month: 'short', day: 'numeric' })}</span></button>` : '<span></span>'}
      ${next ? `<button type="button" class="day-pager-btn next" data-day-tab="${next.dayNumber}"><span><small>Day ${next.dayNumber}</small>${formatDate(next.date, { weekday: 'short', month: 'short', day: 'numeric' })}</span> →</button>` : '<span></span>'}
    </nav>
  `;
}

// Fill the open day's forecast once weather has loaded.
export async function loadItineraryWeather() {
  const dayEl = document.querySelector('.itin-day');
  if (!dayEl) return;
  try {
    const { city, mountain } = await getWeather();
    const target = document.querySelector(`.itin-day[data-day-date="${dayEl.dataset.dayDate}"] .itin-weather`);
    if (!target) return;
    const cityFc = forecastFor(city, dayEl.dataset.dayDate);
    const mtFc = dayEl.dataset.dayMountain ? forecastFor(mountain, dayEl.dataset.dayDate) : null;
    if (!cityFc) {
      target.innerHTML = '<span class="wx-chip muted-chip">🌡️ Forecast appears about 2 weeks before the day</span>';
      return;
    }
    target.innerHTML = `
      <span class="wx-chip">${cityFc.emoji} Almaty ${Math.round(cityFc.min)}° / ${Math.round(cityFc.max)}° · 💧${cityFc.rain}%</span>
      ${mtFc ? `<span class="wx-chip wx-chip-mountain">🏔️ Shymbulak ${Math.round(mtFc.min)}° / ${Math.round(mtFc.max)}°</span>` : ''}
    `;
  } catch {
    // Offline: leave the weather row empty
  }
}
