import { pageHeader, icon } from '../components/shared.js?v=18';
import { emergencyContacts } from '../data/emergency.js?v=18';
import { handyPhrases, phraseCategories } from '../data/phrases.js?v=18';

const source = (href, label) => `<a class="source-link" href="${href}" target="_blank" rel="noreferrer">${label} <span aria-hidden="true">↗</span></a>`;

let activeEmergencyCity = 'almaty'; // 'almaty' | 'astana'
let activePhraseCategory = 'all';

export function getEmergencyCity() {
  return activeEmergencyCity;
}

export function setEmergencyCity(city) {
  if (city) activeEmergencyCity = city;
}

export function getPhraseCategory() {
  return activePhraseCategory;
}

export function setPhraseCategory(category) {
  if (category) activePhraseCategory = category;
}

export function renderPrep() {
  const currentEmergency = emergencyContacts[activeEmergencyCity] || emergencyContacts.almaty;
  const filteredPhrases = handyPhrases.filter(item => {
    return activePhraseCategory === 'all' || item.cat === activePhraseCategory;
  });

  return `
    ${pageHeader('BEFORE YOU FLY & ON-TRIP', 'Prep, Emergency & Local Speech', '14-day visa-free entry requirements, offline emergency rescue hotlines, Indian consular missions, and essential Kazakh & Russian communication cheat sheet.')}

    <!-- Quick Emergency & Assistance Card -->
    <section class="emergency-master-card" id="emergency-section" aria-label="Emergency and Embassy Contacts">
      <div class="emergency-header">
        <div class="emergency-title-box">
          <span class="emergency-badge-pulse" aria-hidden="true">🚨</span>
          <div>
            <p class="eyebrow">OFFLINE RESCUE & EMBASSY DIRECTORY</p>
            <h2>Emergency Contacts & Indian Mission</h2>
          </div>
        </div>

        <div class="country-switch-tabs" role="tablist" aria-label="Switch Emergency City">
          <button type="button" class="country-tab ${activeEmergencyCity === 'almaty' ? 'active' : ''}" data-prep-city="almaty">
            🏔️ Almaty & Region
          </button>
          <button type="button" class="country-tab ${activeEmergencyCity === 'astana' ? 'active' : ''}" data-prep-city="astana">
            🏛️ Astana (Capital)
          </button>
        </div>
      </div>

      <div class="emergency-content-grid">
        <!-- Direct Emergency Hotlines -->
        <div class="emergency-subcard hotlines-card">
          <div class="subcard-header">
            <h3>Immediate Response Hotlines</h3>
            <span class="subcard-tag">Toll-Free 24/7</span>
          </div>
          <div class="hotlines-list">
            ${currentEmergency.services.map(s => `
              <div class="hotline-item">
                <div class="hotline-info">
                  <strong>${s.name}</strong>
                  <small>${s.note}</small>
                </div>
                <a href="tel:${s.number.replace(/\s+/g, '')}" class="hotline-btn">
                  <span>📞 Call</span> <strong>${s.number}</strong>
                </a>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Embassy & Consular Support -->
        <div class="emergency-subcard embassy-card">
          <div class="subcard-header">
            <h3>Indian Consular Assistance</h3>
            <span class="subcard-tag embassy-tag">Govt of India</span>
          </div>
          <div class="embassy-body">
            <h4 class="embassy-name">${currentEmergency.embassy.name}</h4>
            <p class="embassy-address">📍 ${currentEmergency.embassy.address}</p>
            <div class="embassy-action-rows">
              <div class="embassy-row">
                <span class="label">24/7 Emergency Helpline:</span>
                <a href="tel:${currentEmergency.embassy.emergencyPhone.replace(/\s+/g, '')}" class="tel-link">
                  <strong>${currentEmergency.embassy.emergencyPhone}</strong>
                </a>
              </div>
              <div class="embassy-row">
                <span class="label">Office Landline:</span>
                <a href="tel:${currentEmergency.embassy.phone.replace(/\s+/g, '')}" class="tel-link">
                  <span>${currentEmergency.embassy.phone}</span>
                </a>
              </div>
              <div class="embassy-row">
                <span class="label">Email:</span>
                <a href="mailto:${currentEmergency.embassy.email}" class="mail-link">${currentEmergency.embassy.email}</a>
              </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentEmergency.embassy.mapQuery)}" target="_blank" rel="noreferrer" class="button button-outline embassy-map-btn">
              Open Mission in Google Maps ↗
            </a>
          </div>
        </div>
      </div>

      <!-- Quick Traveler Tips for this City/Region -->
      <div class="practical-tips-strip">
        <span class="tips-label">💡 LOCAL ON-GROUND TIPS:</span>
        <ul>
          ${currentEmergency.practicalTips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
    </section>

    <!-- Quick Local Phrases & Communication Cheat Sheet -->
    <section class="phrases-card" id="phrases-section" aria-label="Quick Local Phrases">
      <div class="phrases-header">
        <div>
          <p class="eyebrow">COMMUNICATION CHEAT SHEET</p>
          <h2>Quick Local Phrases (Kazakh & Russian)</h2>
          <p class="muted">Tap any phrase or the speaker icon to hear pronunciation guidance; tailored for taxis, bazaars, cafes, and dietary requests in Almaty.</p>
        </div>
      </div>

      <!-- Category Filter Chips -->
      <div class="phrase-filter-chips">
        <button type="button" class="filter-chip ${activePhraseCategory === 'all' ? 'active selected' : ''}" data-phrase-cat="all">All</button>
        ${phraseCategories.map(cat => `
          <button type="button" class="filter-chip ${activePhraseCategory === cat.id ? 'active selected' : ''}" data-phrase-cat="${cat.id}">
            ${cat.name}
          </button>
        `).join('')}
      </div>

      <!-- Phrases Cards Grid -->
      <div class="phrases-grid">
        ${filteredPhrases.map(item => `
          <article class="phrase-tile ${item.cat === 'emergency' ? 'is-urgent-phrase' : ''}" data-speak-phrase="${encodeURIComponent(item.speak)}" title="Click to hear pronunciation">
            <div class="phrase-top">
              <span class="phrase-en">${item.en}</span>
              <span class="phrase-cat-pill">${item.cat}</span>
            </div>
            <div class="phrase-main">
              <div class="phrase-bilingual">
                <strong class="phrase-local">🇰🇿 ${item.kz}</strong>
                <span class="phrase-sub-lang">🇷🇺 ${item.ru}</span>
              </div>
              <div class="phrase-pron-row">
                <span class="pron-badge">say:</span>
                <span class="phrase-pron">${item.pron}</span>
              </div>
            </div>
            <div class="phrase-footer">
              ${item.note ? `<p class="phrase-note">${item.note}</p>` : ''}
              <button type="button" class="phrase-audio-chip" aria-label="Listen to pronunciation">
                🔊 Listen
              </button>
            </div>
          </article>
        `).join('')}
      </div>
    </section>

    <div class="prep-alert"><span aria-hidden="true">✓</span><p><strong>Visa-free entry confirmed:</strong> Citizens of India can travel to Kazakhstan <strong>visa-free for up to 14 calendar days</strong>. Your 8-day trip (Nov 7–14, 2026) fits comfortably within the 14-day limit.</p></div>

    <!-- Visas & Documents Checklist Section -->
    <section class="prep-country-grid">
      <article class="prep-card">
        <div class="prep-card-top">
          <span class="prep-country-mark" style="background:#00afca;color:#fff;">KZ</span>
          <div><p class="eyebrow">ENTRY REQUIREMENTS (INDIAN PASSPORT)</p><h2>Kazakhstan 14-Day Visa-Free Regime</h2></div>
          <span class="priority-tag" style="background:rgba(46,125,50,0.12);color:#2e7d32;">Visa-Free</span>
        </div>
        <div class="prep-task">
          <span class="task-marker">01</span>
          <div>
            <h3>14-Day Visa Exemption for Indian Nationals</h3>
            <p>Under Kazakhstan’s unilateral visa-free regime for Indian citizens, you can enter for tourism, business, and family visits for up to 14 days without an e-visa or sticker visa. Your 8-day trip (Nov 7–14, 2026) fits comfortably within the 14-day limit.</p>
            ${source('https://www.gov.kz/memleket/entities/mfa?lang=en', 'Kazakhstan Ministry of Foreign Affairs')} &nbsp;
            ${source('https://www.indembastana.gov.kz/', 'Embassy of India in Kazakhstan')}
          </div>
        </div>
        <div class="prep-task">
          <span class="task-marker">02</span>
          <div>
            <h3>Passport Validity & Mandatory Entry Documents</h3>
            <p>Ensure your Indian passport has at least 6 months validity from entry date and at least 2 blank visa pages. At immigration at Almaty Airport (ALA), have your return flight ticket to Delhi and hotel reservation vouchers ready for inspection.</p>
          </div>
        </div>
        <div class="prep-task">
          <span class="task-marker">03</span>
          <div>
            <h3>Travel Health Insurance ✓ Done</h3>
            <p>Bought with your flight booking and valid Nov 7–14. Keep the policy PDF offline on your phone; its emergency helpline is on the certificate.</p>
          </div>
        </div>
      </article>

      <article class="prep-card">
        <div class="prep-card-top">
          <span class="prep-country-mark" style="background:#5c6bc0;color:#fff;">📱</span>
          <div><p class="eyebrow">ESSENTIAL TRAVEL TECH</p><h2>Apps to Download Before Departure</h2></div>
          <span class="priority-tag">Must Install</span>
        </div>
        <div class="prep-task">
          <span class="task-marker">01</span>
          <div>
            <h3>Yandex Go (Taxis & Food Delivery)</h3>
            <p>The definitive on-ground ride-hailing app in Almaty. Fixes taxi fares upfront and eliminates bargaining with unregistered drivers outside the airport arrivals terminal. Links with international Visa/Mastercard.</p>
            ${source('https://go.yandex/en_kz/', 'Yandex Go Kazakhstan')}
          </div>
        </div>
        <div class="prep-task">
          <span class="task-marker">02</span>
          <div>
            <h3>2GIS (Offline Navigation & Metro)</h3>
            <p>Far superior to Google Maps in Kazakhstan. Shows exact building entrance doors, detailed bus and metro routing, and works 100% offline once the Almaty city pack is downloaded.</p>
            ${source('https://2gis.kz/almaty', '2GIS Almaty Map')}
          </div>
        </div>
        <div class="prep-task">
          <span class="task-marker">03</span>
          <div>
            <h3>Local eSIM / Beeline / Kcell</h3>
            <p>Get an Airalo / Nomad eSIM before flying or pick up a physical SIM card at Almaty Airport. High-speed 4G/5G data is affordable (~3,000–5,000 ₸ / ₹630–₹1,050 for 25GB).</p>
          </div>
        </div>
      </article>
    </section>

    <section class="money-card">
      <div class="money-icon">${icon('wallet')}</div>
      <div class="money-main">
        <p class="eyebrow">CASH & PAYMENTS</p>
        <h2>Local Currency for Spending: Kazakhstani Tenge (KZT, ₸)</h2>
        <p>1 KZT ≈ ₹0.21 INR (roughly 1,000 ₸ ≈ ₹210 INR). Cards (Visa & Mastercard) are accepted almost everywhere in central Almaty supermarkets, cafes, and hotels. However, keep 20,000–30,000 ₸ cash for Green Bazaar stalls, rural park entry fees, and mountain road snacks.</p>
        <div class="money-sources">
          ${source('https://nationalbank.kz/en', 'National Bank of Kazakhstan')}
          ${source('https://visitalmaty.kz/en/', 'Visit Almaty Official Tourism')}
        </div>
      </div>
    </section>

    <section class="prep-docs">
      <div>
        <p class="eyebrow">KEEP TOGETHER</p>
        <h2>Travel Document Folder</h2>
        <p class="muted">Keep these offline on your smartphone or in an easy-access printed pouch.</p>
      </div>
      <div class="doc-chip-row">
        <span>Passport (6+ mo validity)</span>
        <span>Return Flight DEL ↔ ALA</span>
        <span>Hotel Booking Confirmations</span>
        <span>Travel Medical Insurance</span>
        <span>Passport Photocopy & PDF</span>
        <span>Emergency Contacts List</span>
      </div>
    </section>
    <p class="research-note">Verified October 2026 · Official visa-free entry rules & emergency mission hotlines checked with Kazakhstan MFA & Embassy of India.</p>
  `;
}
