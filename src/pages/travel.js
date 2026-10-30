import { flights, tripMeta } from '../data/trip.js?v=18';
import { pageHeader, icon } from '../components/shared.js?v=18';

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
          <strong>04:45 AM from Hotel</strong>
        </div>
        <div class="fare-option">
          <span>Arrival at Delhi (T3)</span>
          <strong>11:10 AM IST (Before Lunch)</strong>
        </div>
      </div>

      <p class="baggage-note">Early morning flight. Yandex Go ride from Golden Square to ALA takes ~25 mins. Clear immigration and be home in India before lunch!</p>

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
          <strong>8 kg cabin + 1 piece check-in</strong>
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

    <!-- CITY & MOUNTAIN TRANSPORT -->
    <section class="travel-section" style="margin-top:32px;">
      <div class="section-heading">
        <div>
          <p class="eyebrow">GETTING AROUND ALMATY</p>
          <h2>City & Mountain Transport Guide</h2>
          <p class="muted">Taxis, offline maps, metro turnstiles, and cable car lines.</p>
        </div>
      </div>

      <div class="option-list">
        <article class="option-card">
          <span class="option-number">01</span>
          <div>
            <h3>Yandex Go (Taxis & Airport Transfers)</h3>
            <p class="muted">The primary ride-hailing app in Kazakhstan. Airport to Golden Square is ~3,500 – 4,500 ₸ (₹735 – ₹945); city trips ~800 – 1,500 ₸ (₹170 – ₹315). Link your Visa/Mastercard or pay cash.</p>
          </div>
          <span class="tag">Taxi App</span>
        </article>

        <article class="option-card">
          <span class="option-number">02</span>
          <div>
            <h3>2GIS App (Offline Navigation & Buses)</h3>
            <p class="muted">Essential offline city map. Shows exact building entrance gates (pod'yezd), real-time bus locations, and offline route finding across Almaty.</p>
          </div>
          <span class="tag">Offline 3D Map</span>
        </article>

        <article class="option-card">
          <span class="option-number">03</span>
          <div>
            <h3>Almaty Metro System</h3>
            <p class="muted">Deep, spotless underground network with traditional Kazakh marble & mosaics. Flat 100 ₸ (~₹21) fare — tap any contactless card directly at turnstiles.</p>
          </div>
          <span class="tag">100 ₸ (~₹21)</span>
        </article>

        <article class="option-card">
          <span class="option-number">04</span>
          <div>
            <h3>Mountain Transport: Medeu & Shymbulak</h3>
            <p class="muted">Bus #12 departs every 15 min from Hotel Kazakhstan (Dostyk Ave) straight to Medeu base (100 ₸). 3-stage gondola links Medeu up to Shymbulak and Talgar Pass (3,200m).</p>
          </div>
          <span class="tag">Alpine Cable Car</span>
        </article>
      </div>
    </section>
  `;
}
