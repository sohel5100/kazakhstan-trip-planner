import { tripMeta } from '../data/trip.js';
import { formatDate, pageHeader, icon } from '../components/shared.js';

export const packingStorageKey = 'fieldnotes-kazakhstan-packing-v1';

export const packingGroups = [
  {
    id: 'documents',
    name: 'Travel Documents & Identification',
    items: [
      { id: 'passport-original', text: 'Original passport (valid at least 6 months)', detail: 'Ensure minimum 2 blank pages for Kazakhstan border stamps.' },
      { id: 'return-ticket', text: 'Confirmed return flight ticket (ALA → DEL)', detail: 'Required by immigration to prove departure within the 14-day visa-free window.' },
      { id: 'hotel-confirmations', text: 'Hotel reservations / stay vouchers in Almaty', detail: 'Keep printed or offline PDF vouchers ready.' },
      { id: 'travel-insurance', text: 'Travel medical insurance policy certificate', detail: 'Recommended to include alpine activities / high-altitude coverage up to 3,200m.' },
      { id: 'passport-copies', text: 'Passport photocopies & digital scans in cloud/phone', detail: 'Store offline in phone files in case of emergency.' }
    ]
  },
  {
    id: 'alpine-clothing',
    name: 'Alpine & Cold Weather Layers (Shymbulak 3,200m)',
    items: [
      { id: 'thermal-inners', text: 'Thermal base layers (merino wool or synthetic, top & bottom)', detail: 'Essential for Shymbulak / Talgar Pass and Kolsai Lakes where temps drop below 0°C.' },
      { id: 'fleece-midlayer', text: 'Fleece or wool sweater / mid-layer jacket', detail: 'Traps heat between your thermals and outer jacket.' },
      { id: 'down-jacket', text: 'Insulated windproof winter / down jacket', detail: 'Sub-zero mountain winds at Talgar Pass (3,200m) require a solid warm outer shell.' },
      { id: 'winter-gloves', text: 'Insulated waterproof gloves & warm beanie / cap', detail: 'Crucial for cable car rides and canyon strolls.' },
      { id: 'neck-gaiter', text: 'Neck gaiter / woolen scarf', detail: 'Protects face and neck from mountain drafts.' },
      { id: 'warm-socks', text: '3–4 pairs of thick woolen / hiking socks', detail: 'Keep feet warm during full-day outdoors in Kolsai and Charyn.' }
    ]
  },
  {
    id: 'city-clothing',
    name: 'City Autumn Wear & Footwear',
    items: [
      { id: 'sturdy-hiking-boots', text: 'Sturdy waterproof hiking shoes / trail boots with grip', detail: 'Essential for rocky trails in Charyn Canyon and snowy/muddy lake paths at Kolsai & Kaindy.' },
      { id: 'comfortable-city-sneakers', text: 'Comfortable walking sneakers for Almaty city strolls', detail: 'For Zenkov Cathedral, Panfilov Park, and Green Bazaar.' },
      { id: 'autumn-pants', text: 'Comfortable jeans / travel trousers & track pants', detail: 'Layerable with thermal bottoms on colder days.' },
      { id: 'city-sweaters', text: 'Smart-casual sweaters / long-sleeve shirts for dinners' }
    ]
  },
  {
    id: 'electronics',
    name: 'Electronics & Practical Gear',
    items: [
      { id: 'power-bank', text: 'High-capacity power bank (10,000–20,000 mAh)', detail: 'Sub-zero temperatures drain phone batteries much faster during mountain excursions.' },
      { id: 'plug-adapter', text: 'Type C / F European plug adapter', detail: 'Kazakhstan uses standard 220V Europlug sockets (two round pins).' },
      { id: 'sunglasses', text: 'UV-blocking sunglasses', detail: 'Snow reflection at Shymbulak and high mountain glare can be intense.' },
      { id: 'lip-balm-moisturizer', text: 'Lip balm, cold cream & moisturizer', detail: 'Almaty and mountain air in November is extremely crisp and dry.' },
      { id: 'thermos-bottle', text: 'Insulated water flask / thermos bottle', detail: 'Great for carrying hot tea on full-day day trips to Charyn & Kolsai.' }
    ]
  },
  {
    id: 'money-health',
    name: 'Money, Health & Medicine',
    items: [
      { id: 'international-cards', text: 'International Visa / Mastercard (enabled for foreign POS & ATM)', detail: 'Widely accepted across Almaty hotels, supermarkets, and restaurants.' },
      { id: 'forex-cash', text: 'Indian currency or USD to exchange into Kazakhstani Tenge (KZT)', detail: 'Exchange kiosks at Almaty airport or central Dostyk Ave offer clean KZT cash.' },
      { id: 'motion-sickness', text: 'Motion sickness tablets (Avomine / Dramamine)', detail: 'Winding mountain roads up to Kolsai Lakes and Charyn Canyon take 3–4 hours.' },
      { id: 'first-aid-meds', text: 'Personal medication, Paracetamol, band-aids & digestive pills', detail: 'Carry doctor prescriptions for any restricted medication.' }
    ]
  }
];

export function getPackingChecked() {
  try {
    return JSON.parse(localStorage.getItem(packingStorageKey) || '{}');
  } catch {
    return {};
  }
}

export function savePackingChecked(checked) {
  localStorage.setItem(packingStorageKey, JSON.stringify(checked));
}

function renderGroup(group, checked) {
  const done = group.items.filter(item => checked[item.id]).length;
  return `
    <fieldset class="packing-list-group">
      <legend>
        <span>${group.name}</span>
        <small data-group-count="${group.id}">${done}/${group.items.length}</small>
      </legend>
      <div class="packing-items">
        ${group.items.map(item => `
          <div class="packing-entry">
            <label class="packing-item ${checked[item.id] ? 'is-checked' : ''}" for="pack-${item.id}">
              <input id="pack-${item.id}" type="checkbox" data-pack-item="${item.id}" ${checked[item.id] ? 'checked' : ''} />
              <span class="custom-check" aria-hidden="true">✓</span>
              <span class="packing-item-copy">
                <span class="packing-item-text">${item.text}</span>
                ${item.detail ? `<small class="packing-item-detail">${item.detail}</small>` : ''}
              </span>
            </label>
            ${item.link ? `<a class="packing-item-reference" href="${item.link}" target="_blank" rel="noreferrer">${item.linkText} ↗</a>` : ''}
          </div>
        `).join('')}
      </div>
    </fieldset>
  `;
}

export function renderPacking() {
  const checked = getPackingChecked();
  const allItems = packingGroups.flatMap(g => g.items);
  const total = allItems.length;
  const completed = allItems.filter(i => checked[i.id]).length;
  const pct = Math.round((completed / (total || 1)) * 100);

  return `
    ${pageHeader('PRE-TRIP CHECKLIST', 'Packing & Mountain Weather', 'Curated packing list for Almaty autumn weather, Tian Shan alpine passes (3,200m), and canyon day trips.')}

    <!-- Weather Forecast & Climate Guide -->
    <section class="packing-weather-strip" aria-label="Almaty November Climate">
      <div class="weather-box">
        <span class="weather-icon">🏙️</span>
        <div>
          <strong>Almaty City (Nov 6–12)</strong>
          <small>Day: 6°C to 11°C · Night: -2°C to 3°C · Crisp autumn air</small>
        </div>
      </div>
      <div class="weather-box highlight-box">
        <span class="weather-icon">🏔️</span>
        <div>
          <strong>Shymbulak / Talgar Pass (3,200m)</strong>
          <small>-2°C to -10°C · Early snow pack · Thermal inners & windproofs needed</small>
        </div>
      </div>
      <div class="weather-box">
        <span class="weather-icon">🏜️</span>
        <div>
          <strong>Charyn Canyon & Kolsai Lakes</strong>
          <small>4°C to 8°C · Dry steppe breeze · Sturdy trail boots essential</small>
        </div>
      </div>
    </section>

    <!-- Progress Meter -->
    <section class="packing-progress-card">
      <div class="packing-progress-header">
        <div>
          <p class="eyebrow">PACKING STATUS</p>
          <h2 class="packing-progress-label">${completed} of ${total} packed</h2>
        </div>
        <div class="packing-progress-pct">${pct}%</div>
      </div>
      <div class="progress-track" role="progressbar" aria-valuenow="${completed}" aria-valuemin="0" aria-valuemax="${total}">
        <div class="progress-fill" style="width: ${pct}%;"></div>
      </div>
    </section>

    <div class="packing-actions-bar">
      <button type="button" class="button button-outline" id="download-packing">
        💾 Export packing checklist (.json)
      </button>
    </div>

    <!-- Checklists By Group -->
    <section class="packing-groups-grid">
      ${packingGroups.map(group => renderGroup(group, checked)).join('')}
    </section>
  `;
}
