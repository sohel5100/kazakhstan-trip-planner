import { places, itinerary } from '../data/trip.js?v=45';
import { getItineraryPlaceIds, saveItineraryPlaceIds } from '../data/itinerary-state.js?v=45';
import { pageHeader, icon } from '../components/shared.js?v=45';
import { cafes, tourComparisons, foodGuide, restaurants } from '../data/guide.js?v=45';

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

    <!-- Researched café picks -->
    <section class="cafe-section" aria-label="Best cafés">
      <div class="cafe-head">
        <h2>☕ Best cafés</h2>
        <small>Only places several guides agree on, with big rating counts</small>
      </div>
      <div class="cafe-strip">
        ${cafes.map(c => `
          <a class="cafe-card" href="${c.map}" target="_blank" rel="noreferrer">
            <span class="cafe-emoji" aria-hidden="true">${c.emoji}</span>
            <strong>${c.name}</strong>
            <span class="cafe-kind">${c.kind}</span>
            <p>${c.why}</p>
            <div class="dish-chips">${c.order.map(d => `<span>${d}</span>`).join('')}</div>
            <small>⭐ ${c.rating} · ${c.hours}</small>
            <small>📍 ${c.area}</small>
          </a>
        `).join('')}
      </div>
    </section>

    <!-- Tours: one entry per destination, booking options under it -->
    <section class="tour-compare" aria-label="Tour comparison">
      <div class="cafe-head">
        <h2>🎟️ Tours: compare & book</h2>
        <small>Prices as shown on 6 Nov — not confirmed</small>
      </div>
      ${tourComparisons.map(t => `
        <div class="tour-group">
          <h3>${t.title} <span>${t.when}</span></h3>
          <p class="tour-verdict">${t.verdict}</p>
          <div class="hotel-list">
            ${t.options.map(o => `
              <article class="hotel-card">
                <div class="hotel-top">
                  <h3>${o.name}</h3>
                  <span class="hotel-badge">${o.badge}</span>
                </div>
                <dl class="transport-facts">
                  <div><dt>Price</dt><dd>${o.price}</dd></div>
                  <div><dt>Reviews</dt><dd>${o.rating}</dd></div>
                </dl>
                <p class="hotel-area">🕒 ${o.format}</p>
                <p class="hotel-note">👍 ${o.good}</p>
                <p class="hotel-note warn">⚠️ ${o.watch}</p>
                <a class="transport-link" href="${o.url}" target="_blank" rel="noreferrer">Booking page ↗</a>
              </article>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </section>

    <!-- Must-try food, ranked by how many sources recommend it -->
    <section class="food-guide" aria-label="Must-try food">
      <div class="cafe-head">
        <h2>🍽️ Must-try food</h2>
        <small>Ranked by how many of 29 sources recommend it · 🍖 meat · 🟡 ask · 🟢 no meat</small>
      </div>
      <ul class="food-list">
        ${foodGuide.map(f => `
          <li>
            <span aria-hidden="true">${{ veg: '🟢', ask: '🟡', meat: '🍖' }[f.veg]}</span>
            <div>
              <strong>${f.dish} <em class="food-count">${f.sources} sources</em></strong>
              <p>${f.what}</p>
              <small>📍 ${f.where}</small>
              <small>💰 ${f.price}</small>
            </div>
          </li>
        `).join('')}
      </ul>

      <div class="cafe-head food-sub">
        <h2>⭐ Restaurants most reviewers agree on</h2>
        <small>The one dish to order, and where it fits in your plan</small>
      </div>
      <div class="cafe-strip">
        ${restaurants.map(r => `
          <article class="cafe-card">
            <strong>${r.name}</strong>
            <span class="cafe-kind">${r.sources} sources · ${r.plan}</span>
            <div class="dish-chips">${r.order.map(d => `<span>${d}</span>`).join('')}</div>
            <p>${r.tip}</p>
            <small>⭐ ${r.rating}</small>
            <small>📍 ${r.area}</small>
          </article>
        `).join('')}
      </div>
    </section>

    <h2 class="places-subhead">📍 Sights</h2>

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
