import { flights, tripMeta } from '../data/trip.js?v=31';
import { pageHeader, icon } from '../components/shared.js?v=31';
import { hotels } from '../data/guide.js?v=31';

// Getting around Almaty: key facts first, so they're easy to scan on a phone
const transportGuide = [
  {
    badge: '🚕',
    name: 'Yandex Go',
    useFor: 'Taxis, including the airport run',
    facts: [
      ['Airport → hotel', '3,500 – 4,500 ₸ <small>≈ ₹735 – ₹945</small>'],
      ['City ride', '800 – 1,500 ₸ <small>≈ ₹170 – ₹315</small>'],
      ['Pay', 'Card in the app, or cash']
    ],
    tip: 'Fare is fixed upfront, so no bargaining with drivers at the airport.',
    link: { label: 'Get Yandex Go', href: 'https://go.yandex/en_kz/' }
  },
  {
    badge: '🗺️',
    name: '2GIS',
    useFor: 'Offline map, walking and bus routes',
    facts: [
      ['Works offline', 'Yes, download the Almaty map first'],
      ['Shows', 'Live buses and exact building entrances']
    ],
    tip: 'Download the Almaty map on Wi-Fi before you fly.',
    link: { label: 'Open 2GIS Almaty', href: 'https://2gis.kz/almaty' }
  },
  {
    badge: 'Ⓜ️',
    name: 'Almaty Metro',
    useFor: 'Quick rides across the city centre',
    facts: [
      ['Fare', '100 ₸ per ride <small>≈ ₹21</small>'],
      ['Pay', 'Tap any contactless card at the gate']
    ],
    tip: 'Worth a ride just to see the marble and mosaic stations.'
  },
  {
    badge: '🚡',
    name: 'Medeu & Shymbulak',
    useFor: 'Getting up into the mountains',
    facts: [
      ['Bus to Medeu', '#12 from Hotel Kazakhstan, Dostyk Ave'],
      ['How often', 'About every 15 min · 100 ₸'],
      ['Gondola', 'Medeu → Shymbulak → Talgar Pass (3,200m), 3 stages']
    ],
    link: { label: 'Bus stop on Google Maps', href: 'https://www.google.com/maps/search/?api=1&query=Hotel+Kazakhstan+Dostyk+Avenue+Almaty' }
  }
];

export function renderTravel() {
  const ob = flights.outbound;
  const ret = flights.return;

  return `
    ${pageHeader('TRANSIT & LOGISTICS', 'Flight & Travel Details', 'Your confirmed Air Astana direct flights between Delhi and Almaty, airport transfers, city metro, and mountain transit.')}

    <!-- Visa-free status banner -->
    <div class="prep-alert" style="background:#eef7f2;border:1px solid #cce8d7;margin-bottom:20px;">
      <span aria-hidden="true" style="background:#2e7d32;color:#fff;">✓</span>
      <p style="color:#255c39;"><strong>Confirmed Direct Flights:</strong> Air Astana flights booked for <strong>${tripMeta.dates}</strong> (${tripMeta.durationDays} Days / ${tripMeta.nights} Nights). Indian passport holders enter Kazakhstan <strong>14 days visa-free</strong>.</p>
    </div>

    <!-- OUTBOUND FLIGHT TICKET -->
    <section class="flight-ticket" aria-label="Outbound flight ticket">
      <div class="ticket-top">
        <div>
          <p class="eyebrow light">OUTBOUND FLIGHT · ${ob.dateFormatted}</p>
          <h2>${ob.airline} ${ob.flightNumber}</h2>
        </div>
        <span class="ticket-badge">✈ Confirmed · Direct</span>
      </div>

      <p class="flight-passenger-line">${ob.departureCity} (${ob.departureAirport}) ➔ ${ob.arrivalCity} (${ob.arrivalAirport}) · Nonstop · Air Astana</p>

      <div class="flight-journey">
        <div class="flight-airport">
          <span class="ticket-label">DEPARTS · LOCAL TIME</span>
          <strong>${ob.departureTime} <small>PM</small></strong>
          <b>${ob.departureAirport}</b>
          <span>${ob.departureAirportName}</span>
        </div>

        <div class="flight-connector">
          <span>${ob.type} · ${ob.duration}</span>
          <i></i>
          ${icon('plane')}
        </div>

        <div class="flight-airport arrival">
          <span class="ticket-label">ARRIVES · ALMATY TIME</span>
          <strong>${ob.arrivalTime} <small>PM</small></strong>
          <b>${ob.arrivalAirport}</b>
          <span>${ob.arrivalAirportName}</span>
        </div>
      </div>

      <div class="flight-price-heading">
        <span class="ticket-label">FLIGHT INFORMATION & SERVICES</span>
      </div>

      <div class="fare-options">
        <div class="fare-option">
          <span>Flight Duration</span>
          <strong>${ob.duration} Direct</strong>
        </div>
        <div class="fare-option">
          <span>Onboard Service</span>
          <strong>Meals & Media Included</strong>
        </div>
      </div>

      <p class="baggage-note">Crosses the Himalayas and Tian Shan ranges. Lands in Almaty at 15:10 (UTC+5, 30 mins behind IST). Standard check-in 3h prior at Delhi T3.</p>

      <div class="ticket-footnote">
        <span>Flight Status</span>
        <strong>✓ ${ob.status} (${ob.flightCode})</strong>
      </div>
    </section>

    <!-- RETURN FLIGHT TICKET -->
    <section class="flight-ticket return-ticket" style="margin-top:22px;background:#24443b;" aria-label="Return flight ticket">
      <div class="ticket-top">
        <div>
          <p class="eyebrow light">RETURN FLIGHT · ${ret.dateFormatted}</p>
          <h2>${ret.airline} ${ret.flightNumber}</h2>
        </div>
        <span class="ticket-badge">✈ Confirmed · Direct</span>
      </div>

      <p class="flight-passenger-line">${ret.departureCity} (${ret.departureAirport}) ➔ ${ret.arrivalCity} (${ret.arrivalAirport}) · Nonstop · Air Astana</p>

      <div class="flight-journey">
        <div class="flight-airport">
          <span class="ticket-label">DEPARTS · ALMATY TIME</span>
          <strong>${ret.departureTime} <small>AM</small></strong>
          <b>${ret.departureAirport}</b>
          <span>${ret.departureAirportName}</span>
        </div>

        <div class="flight-connector">
          <span>${ret.type} · ${ret.duration}</span>
          <i></i>
          ${icon('plane')}
        </div>

        <div class="flight-airport arrival">
          <span class="ticket-label">ARRIVES · DELHI TIME</span>
          <strong>${ret.arrivalTime} <small>AM</small></strong>
          <b>${ret.arrivalAirport}</b>
          <span>${ret.arrivalAirportName}</span>
        </div>
      </div>

      <div class="flight-price-heading">
        <span class="ticket-label">DEPARTURE LOGISTICS</span>
      </div>

      <div class="fare-options">
        <div class="fare-option">
          <span>Airport Taxi Departure</span>
          <strong>04:00 AM from Hotel</strong>
        </div>
        <div class="fare-option">
          <span>Arrival at Delhi (T3)</span>
          <strong>11:10 AM IST (Before Lunch)</strong>
        </div>
      </div>

      <p class="baggage-note">Early morning flight: leave the hotel at 04:00 — the drive to Terminal 2 takes ~20–25 min at that hour, and the airport advises arriving 3 hours before. Back in Delhi before lunch.</p>

      <div class="ticket-footnote">
        <span>Flight Status</span>
        <strong>✓ ${ret.status} (${ret.flightCode})</strong>
      </div>
    </section>

    <!-- TICKET RULES: baggage, cancellation & changes (applies to both flights) -->
    <section class="ticket-rules" aria-label="Ticket rules">
      <p class="eyebrow">TICKET RULES · BOTH FLIGHTS</p>
      <h2>Baggage, refunds & changes</h2>

      <div class="rules-grid">
        <div class="rule-item">
          <span>Baggage</span>
          <strong>Cabin 8 kg + check-in 23 kg</strong>
          <small>1 cabin bag (56×45×25 cm) + 1 checked bag up to 23 kg (Air Astana Economy, per piece)</small>
        </div>
        <div class="rule-item">
          <span>Aircraft & class</span>
          <strong>Airbus A321 · Economy Basic</strong>
        </div>
        <div class="rule-item">
          <span>Terminals</span>
          <strong>DEL T3 ↔ ALA T2</strong>
        </div>
      </div>

      <div class="rules-deadline">
        <strong>Deadline: 7 Nov, 08:10 AM</strong>
        <span>After this the ticket can't be rescheduled. Decide on any change before then.</span>
      </div>

      <div class="rules-grid two">
        <div class="rule-item">
          <span>Cancel (refund)</span>
          <strong>₹8,001 airline charge</strong>
          <small>+ ₹799 booking-agent fee, per person, per flight</small>
        </div>
        <div class="rule-item">
          <span>Reschedule</span>
          <strong>₹8,001 + fare difference</strong>
          <small>+ ₹799 booking-agent fee, per person, per flight</small>
        </div>
      </div>

      <p class="rules-note">Charges are indicative and depend on airline policy. Your PNR and passenger details are on your ticket PDF, not here.</p>
    </section>

    <!-- WHERE TO STAY -->
    <section class="travel-section" style="margin-top:32px;">
      <div class="section-heading">
        <div>
          <p class="eyebrow">WHERE TO STAY · 7 NIGHTS</p>
          <h2>🏨 Hotels worth booking</h2>
          <p class="muted">Best value is the Panfilov / Green Bazaar side of the centre; Dostyk hotels cost 47,000–77,000 ₸ a night.</p>
        </div>
      </div>
      <div class="hotel-list">
        ${hotels.map(h => `
          <article class="hotel-card">
            <div class="hotel-top">
              <h3>${h.name}</h3>
              <span class="hotel-badge">${h.badge}</span>
            </div>
            <p class="hotel-area">📍 ${h.area}</p>
            <dl class="transport-facts">
              <div><dt>Price</dt><dd>${h.price}</dd></div>
              <div><dt>Reviews</dt><dd>${h.rating}</dd></div>
            </dl>
            <p class="hotel-note">👍 ${h.good}</p>
            <p class="hotel-note warn">⚠️ ${h.watch}</p>
            <a class="transport-link" href="${h.map}" target="_blank" rel="noreferrer">See on Maps ↗</a>
          </article>
        `).join('')}
      </div>
    </section>

    <!-- CITY & MOUNTAIN TRANSPORT -->
    <section class="travel-section" style="margin-top:32px;">
      <div class="section-heading">
        <div>
          <p class="eyebrow">GETTING AROUND ALMATY</p>
          <h2>City & Mountain Transport Guide</h2>
          <p class="muted">Taxis, offline maps, metro turnstiles, and cable car lines.</p>
        </div>
      </div>

      <div class="transport-list">
        ${transportGuide.map(item => `
          <article class="transport-card">
            <header class="transport-head">
              <span class="transport-icon" aria-hidden="true">${item.badge}</span>
              <div>
                <h3>${item.name}</h3>
                <p>${item.useFor}</p>
              </div>
            </header>
            <dl class="transport-facts">
              ${item.facts.map(([label, value]) => `
                <div>
                  <dt>${label}</dt>
                  <dd>${value}</dd>
                </div>
              `).join('')}
            </dl>
            ${item.tip ? `<p class="transport-tip">${item.tip}</p>` : ''}
            ${item.link ? `<a class="transport-link" href="${item.link.href}" target="_blank" rel="noreferrer">${item.link.label} ↗</a>` : ''}
          </article>
        `).join('')}
      </div>
    </section>
  `;
}
