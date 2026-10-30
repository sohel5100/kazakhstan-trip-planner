import { tripMeta, flights, places, itinerary } from '../data/trip.js';
import { formatDate, icon } from '../components/shared.js';

export function renderHome() {
  const savedCount = places.length;
  const firstDay = itinerary[0];
  const ob = flights.outbound;

  return `
    <section class="welcome-row">
      <div>
        <p class="eyebrow">${tripMeta.eyebrow}</p>
        <h1>Kazakhstan<span class="title-period">.</span></h1>
        <p class="page-description">${tripMeta.destination} · ${tripMeta.dates}</p>
      </div>
      <div class="date-pill">
        ${icon('clock')}
        <span>
          <small>CONFIRMED DEPARTURE</small>
          <strong>Sat, Nov 7, 2026</strong>
        </span>
      </div>
    </section>

    <!-- Hero Card with Tian Shan Mountain Art -->
    <section class="hero-card" aria-label="Trip introduction">
      <div class="hero-art" aria-hidden="true">
        <div class="sun-disc"></div>
        <div class="mountain mountain-back"></div>
        <div class="mountain mountain-front"></div>
        <div class="waterline"></div>
        <div class="hero-label">TIAN SHAN · 2026</div>
      </div>
      <div class="hero-copy">
        <p class="eyebrow light">14-DAY VISA-FREE (INDIAN PASSPORT)</p>
        <h2>From city spires<br />to 3,200m peaks.</h2>
        <p>Almaty base, Medeu rink, Shymbulak glacier, Charyn Canyon, and Kolsai alpine lakes.</p>
        <a href="#itinerary" class="hero-link" data-page="itinerary">
          Explore 8-day plan <span aria-hidden="true">→</span>
        </a>
      </div>
      <div class="hero-index" aria-hidden="true">01 <span>/ 08</span></div>
    </section>

    <!-- Quick Stats -->
    <section class="quick-stats" aria-label="Trip snapshot">
      <article class="stat-card">
        <span class="stat-icon peach">${icon('pin')}</span>
        <div>
          <strong>${savedCount} Places</strong>
          <span>Almaty & Nature</span>
        </div>
        <a href="#places" data-page="places" aria-label="View saved places">↗</a>
      </article>

      <article class="stat-card">
        <span class="stat-icon lilac">${icon('plane')}</span>
        <div>
          <strong>Air Astana</strong>
          <span>DEL ↔ ALA Direct</span>
        </div>
        <a href="#travel" data-page="travel" aria-label="View flight details">↗</a>
      </article>

      <article class="stat-card">
        <span class="stat-icon green">${icon('wallet')}</span>
        <div>
          <strong>1 KZT ≈ ₹0.21</strong>
          <span>Live KZT Converter</span>
        </div>
        <a href="#expenses" data-page="expenses" aria-label="View currency converter">↗</a>
      </article>
    </section>

    <!-- Dashboard Grid: First Day Preview & Outbound Flight Details -->
    <section class="dashboard-grid">
      <div class="panel itinerary-preview">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">UP NEXT · DAY 1</p>
            <h2>Arrival in Almaty</h2>
          </div>
          <a class="text-link" href="#itinerary" data-page="itinerary">Full itinerary <span aria-hidden="true">→</span></a>
        </div>
        <div class="day-preview">
          <div class="day-date">
            <span>NOV</span>
            <strong>07</strong>
          </div>
          <div class="day-details">
            <h3>${firstDay.title}</h3>
            <p>Air Astana KC908 lands 15:10 ALA · Evening walk on Arbat pedestrian promenade</p>
            <div class="day-tags">
              <span class="tag">Direct Flight</span>
              <span class="tag tag-muted">14-Day Visa-Free</span>
            </div>
          </div>
          <span class="day-arrow" aria-hidden="true">↗</span>
        </div>
      </div>

      <div class="panel flight-preview">
        <div class="panel-heading">
          <div>
            <p class="eyebrow">OUTBOUND FLIGHT</p>
            <h2>Air Astana KC908</h2>
          </div>
          <a class="round-link" href="#travel" data-page="travel" aria-label="Open flight details">↗</a>
        </div>
        <div class="flight-time">
          <div>
            <span class="label-small">DEPARTURE · DEL (T3)</span>
            <strong>${ob.departureTime} <small>PM</small></strong>
            <span>Sat, Nov 7, 2026</span>
          </div>
          <div class="flight-route" aria-hidden="true">
            <i></i>
            <span>✈</span>
            <i></i>
          </div>
          <div class="flight-destination">
            <span class="label-small">ARRIVAL · ALA</span>
            <strong>${ob.arrivalTime} <small>PM</small></strong>
            <span>Almaty · ${ob.duration}</span>
          </div>
        </div>
        <div class="flight-note">
          <span class="status-dot"></span>${ob.airline} ${ob.flightNumber} · Direct · Meals & Inflight Media
        </div>
      </div>
    </section>

    <!-- Return Flight & Highlights Preview Row -->
    <section class="inspiration-row">
      <div>
        <p class="eyebrow">CONFIRMED RETURN FLIGHT</p>
        <h2>Sat, Nov 14 · Air Astana KC907 (07:05 ALA → 11:10 DEL)</h2>
        <p>Morning direct flight lands back at Delhi Terminal 3 before lunch. 8 memorable days across Kazakhstan.</p>
      </div>
      <a class="button button-outline" href="#travel" data-page="travel">View flight details <span aria-hidden="true">→</span></a>
    </section>
  `;
}
