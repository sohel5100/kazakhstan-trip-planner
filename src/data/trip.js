import { exchangeRates, currencySymbols, toINR, formatCurrency } from './currency.js?v=36';

export {
  exchangeRates,
  currencySymbols,
  toINR,
  formatCurrency
} from './currency.js?v=36';

export const tripMeta = {
  title: 'Kazakhstan Adventure',
  eyebrow: 'CONFIRMED ITINERARY & FLIGHTS',
  country: 'Kazakhstan',
  destination: 'Almaty & the Tian Shan Mountains',
  dates: 'Nov 7 – Nov 14, 2026',
  year: '2026',
  durationDays: 8,
  nights: 7,
  startDate: '2026-11-07',
  endDate: '2026-11-14',
  visaStatus: '14-Day Visa-Free (Indian Passport)',
  currencyCode: 'KZT',
  currencySymbol: '₸',
  stayAreaName: 'Airbnb near Dostyk Ave (Golden Square)',
  stayAreaNote: 'Nov 7–12. Navat, Nedelka and Starbucks a short walk away; Kok Tobe cable car ~15–20 min walk south on Dostyk; Almaly and Abay metro ~10–15 min walk.',
  stayAreaCoordinates: '43.2485,76.9585',
  flightRoute: 'Delhi (DEL) ↔ Almaty (ALA) direct (Air Astana)',
  flightDuration: '3h 30m – 3h 35m direct'
};

export const flights = {
  outbound: {
    airline: 'Air Astana',
    flightNumber: 'KC908',
    flightCode: 'Air Astana KC908',
    dateFormatted: 'Sat, 7 Nov 2026',
    departureAirport: 'DEL',
    departureCity: 'Delhi',
    departureAirportName: 'Indira Gandhi International (T3)',
    departureTime: '12:10',
    departureTimeFull: '12:10 PM IST',
    arrivalAirport: 'ALA',
    arrivalCity: 'Almaty',
    arrivalAirportName: 'Almaty International Airport',
    arrivalTime: '15:10',
    arrivalTimeFull: '03:10 PM ALMT (UTC+5)',
    duration: '3h 30m',
    type: 'Direct',
    status: 'Booked / Confirmed',
    bookingReference: 'Confirmed Schedule',
    services: 'Meals, Entertainment, Power Outlet'
  },
  return: {
    airline: 'Air Astana',
    flightNumber: 'KC907',
    flightCode: 'Air Astana KC907',
    dateFormatted: 'Sat, 14 Nov 2026',
    departureAirport: 'ALA',
    departureCity: 'Almaty',
    departureAirportName: 'Almaty International Airport',
    departureTime: '07:05',
    departureTimeFull: '07:05 AM ALMT (UTC+5)',
    arrivalAirport: 'DEL',
    arrivalCity: 'Delhi',
    arrivalAirportName: 'Indira Gandhi International (T3)',
    arrivalTime: '11:10',
    arrivalTimeFull: '11:10 AM IST',
    duration: '3h 35m',
    type: 'Direct',
    status: 'Booked / Confirmed',
    bookingReference: 'Confirmed Schedule',
    services: 'Meals, Entertainment, Power Outlet'
  }
};

// Backwards compatibility export
export const flight = {
  airline: 'Air Astana',
  flightNumber: 'KC908 / KC907',
  origin: 'Delhi (DEL)',
  destination: 'Almaty (ALA)',
  departDate: 'Saturday, November 7, 2026',
  returnDate: 'Saturday, November 14, 2026',
  departureTime: '12:10 DEL → 15:10 ALA',
  arrivalTime: '07:05 ALA → 11:10 DEL',
  duration: '3h 30m (Outbound) · 3h 35m (Return)',
  status: 'Confirmed Direct Flights',
  bookingReference: 'Air Astana KC908 / KC907',
  observedFareINR: 48043
};

export const expenseCategories = [
  { id: 'all', name: 'All' },
  { id: 'flights', name: 'Flights', icon: 'plane' },
  { id: 'stay', name: 'Stay & Hotels', icon: 'bed' },
  { id: 'food', name: 'Food & Dining', icon: 'food' },
  { id: 'activities', name: 'Sights & Tours', icon: 'sun' },
  { id: 'transport', name: 'Local Transport & Taxis', icon: 'car' },
  { id: 'visa', name: 'Visa & Insurance', icon: 'wallet' },
  { id: 'shopping', name: 'Shopping & Misc', icon: 'pin' },
];

export const defaultExpenses = [
  {
    "id": "exp-train-bpl-del",
    "title": "Train: Rajdhani 22691 Bhopal → Delhi (3A)",
    "amount": 2614,
    "currency": "INR",
    "category": "flights",
    "status": "paid",
    "paymentMethod": "Card",
    "date": "2026-11-06",
    "country": "India",
    "note": "Fri 6 Nov 21:05 → Sat 7 Nov 05:30 (Nizamuddin); waitlisted at booking"
  },
  {
    "currency": "INR",
    "status": "paid",
    "paymentMethod": "Card",
    "country": "India",
    "id": "exp-del-ala-flight",
    "title": "Roundtrip Flights: Delhi (DEL) ↔ Almaty (ALA)",
    "amount": 47243,
    "category": "flights",
    "date": "2026-10-30",
    "note": "Direct Air Astana KC908 (DEL→ALA, 12:10) & KC907 (ALA→DEL, 07:05) · fare, taxes & booking fee (₹48,043 paid in total incl. insurance)"
  },
  {
    "id": "exp-delhi-cab",
    "title": "Cab: Nizamuddin → Delhi Airport T3",
    "amount": 600,
    "currency": "INR",
    "category": "transport",
    "status": "estimated",
    "paymentMethod": "Card",
    "date": "2026-11-07",
    "country": "India",
    "note": "Uber/Ola ~₹400–700"
  },
  {
    "currency": "INR",
    "status": "paid",
    "paymentMethod": "Card",
    "country": "India",
    "id": "exp-kazakh-insurance",
    "title": "Travel & Medical Health Insurance Policy",
    "amount": 800,
    "category": "visa",
    "date": "2026-10-30",
    "note": "Bought with the flight booking; covers Nov 7–14"
  },
  {
    "id": "exp-airbnb",
    "title": "Airbnb near Dostyk Ave, Nov 7–12 (5 nights)",
    "amount": 23000,
    "currency": "INR",
    "category": "stay",
    "status": "paid",
    "paymentMethod": "Card",
    "date": "2026-11-07",
    "country": "India",
    "note": "Paid on Airbnb"
  },
  {
    "id": "exp-stay-nov12",
    "title": "Stay for Nov 12–13 (2 nights) — not booked yet",
    "amount": 75200,
    "currency": "KZT",
    "category": "stay",
    "status": "estimated",
    "paymentMethod": "Card",
    "date": "2026-11-12",
    "country": "Kazakhstan",
    "note": "Estimate at ~37,600 ₸/night (Renion); Voyage ~26,000 ₸, Hotel Kazakhstan ~50,300 ₸"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-sim",
    "title": "SIM card at the airport (Beeline preferred)",
    "amount": 6000,
    "category": "shopping",
    "date": "2026-11-07",
    "note": "Beeline price unconfirmed (board showed 6,000 ₸ / 40 GB); Tele2 tourist pack 5,590 ₸ fallback. Bring passport"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-airport-taxi-arrival",
    "title": "Yandex Go: Airport → hotel",
    "amount": 4000,
    "category": "transport",
    "date": "2026-11-07",
    "note": "Economy ~2,500–4,500 ₸; ignore airport touts"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-kok-tobe-cable",
    "title": "Kok Tobe cable car (return)",
    "amount": 10000,
    "category": "activities",
    "date": "2026-11-08",
    "note": "Bought at the lower station on Dostyk Ave"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-music-museum",
    "title": "Folk Musical Instruments Museum",
    "amount": 1500,
    "category": "activities",
    "date": "2026-11-08",
    "note": "Panfilov Park; closed Mondays"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-shymbulak-medeu",
    "title": "Shymbulak gondolas: Medeu ↔ Talgar Pass (return)",
    "amount": 12000,
    "category": "activities",
    "date": "2026-11-09",
    "note": "Medeu ticket office or shymbulak.com"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-medeu-taxis",
    "title": "Yandex Go to/from Medeu",
    "amount": 6000,
    "category": "transport",
    "date": "2026-11-09",
    "note": "~2,000–4,000 ₸ each way"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-charyn-kolsai-tour",
    "title": "2-day tour: Kaindy, Kolsai, Black Canyon & Charyn (not booked)",
    "amount": 36000,
    "category": "activities",
    "date": "2026-11-10",
    "note": "Recommended GYG 2-day from ₹7,545 (~36,000 ₸); JoinMe from 30,000 ₸. Both include guest house, meals, UAZ, eco fees, guide"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Cash",
    "country": "Kazakhstan",
    "id": "exp-tour-cash",
    "title": "Tour cash (snacks, optional horses, eco-taxi)",
    "amount": 10000,
    "category": "activities",
    "date": "2026-11-11",
    "note": "Carry tenge"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-arasan",
    "title": "Arasan Wellness & SPA (2 h)",
    "amount": 4500,
    "category": "activities",
    "date": "2026-11-12",
    "note": "Weekday rate"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-alma-museum",
    "title": "Almaty Museum of Arts (ALMA)",
    "amount": 3000,
    "category": "activities",
    "date": "2026-11-12",
    "note": "Timed tickets at almaty.art"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-central-museum",
    "title": "Central State Museum (foreigner ticket)",
    "amount": 5000,
    "category": "activities",
    "date": "2026-11-12",
    "note": "Closed Tuesdays; moved to Thu 12 Nov"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-food",
    "title": "Food & cafés (7 days)",
    "amount": 84000,
    "category": "food",
    "date": "2026-11-07",
    "note": "~12,000 ₸/day: café brunch + Kazakh lunch/dinner"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-city-taxis",
    "title": "City taxis & metro",
    "amount": 15000,
    "category": "transport",
    "date": "2026-11-08",
    "note": "Yandex Go rides ~800–1,500 ₸; metro 120 ₸"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-souvenirs",
    "title": "Souvenirs (felt crafts, Rakhat chocolate)",
    "amount": 20000,
    "category": "shopping",
    "date": "2026-11-13",
    "note": "TSUM and Rakhat factory store"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-airport-taxi-departure",
    "title": "Yandex Go: Hotel → Airport (04:00)",
    "amount": 4000,
    "category": "transport",
    "date": "2026-11-14",
    "note": "Leave at 04:00 for the 07:05 flight"
  }
];

export const places = [
  {
    id: 'kok-tobe',
    name: 'Kok Tobe Hill & Cable Car',
    city: 'Almaty',
    category: 'Viewpoint & Leisure',
    shortDescription: '1,100m panoramic hill overlooking Almaty and the snow-capped Tian Shan range, reached by a scenic aerial cable car.',
    bestTime: 'Late afternoon / sunset',
    admission: '10,000 ₸ return cable car (6,000 ₸ one way)',
    lat: 43.2339,
    lng: 76.9764,
    tags: ['Must-see', 'Viewpoint', 'Sunset'],
    image: './assets/places/kok-tobe.jpg',
    whyGo: 'The signature view of Almaty. Take the cable car from Dostyk Ave up to the hill, visit the Beatles monument, and watch the city light up against the mountain backdrop.'
  },
  {
    id: 'zenkov-cathedral',
    name: '28 Panfilov Guardsmen Park & Ascension (Zenkov) Cathedral',
    city: 'Almaty',
    category: 'History & Architecture',
    shortDescription: 'Striking 1907 Russian Orthodox cathedral built entirely of wood without a single metal nail; withstood a catastrophic 1911 earthquake.',
    bestTime: 'Morning (09:00 – 12:00)',
    admission: 'Free entry (respectful attire)',
    lat: 43.2588,
    lng: 76.9537,
    tags: ['Iconic', 'Culture', 'Free'],
    image: './assets/places/zenkov-cathedral.jpg',
    whyGo: 'One of the tallest wooden churches in the world. Its pastel candy colors and peaceful setting in Panfilov Park make it Almaty’s most beloved cultural landmark.'
  },
  {
    id: 'green-bazaar',
    name: 'Green Bazaar (Zelyony Bazar)',
    city: 'Almaty',
    category: 'Bazaar & Food',
    shortDescription: 'Centuries-old bustling bazaar filled with mounds of Central Asian dry fruits, walnuts, fragrant spices, Kazakh chocolates, and horse meat delicacies.',
    bestTime: '10:00 – 14:00 (Tuesday to Sunday, closed Mondays)',
    admission: 'Free entry',
    lat: 43.2638,
    lng: 76.9554,
    tags: ['Food', 'Market', 'Souvenirs'],
    image: './assets/places/green-bazaar.jpg',
    whyGo: 'The sensory heart of Almaty. Friendly vendors offer generous samples of dried apricots, smoked cheese (kurt), local honey, and Almaty apples (Aport).'
  },
  {
    id: 'medeu-shymbulak',
    name: 'Medeu & Shymbulak Mountain Resort',
    city: 'Almaty Mountains',
    category: 'Alpine & Nature',
    shortDescription: 'Three gondolas from Medeu (1,691m) up to Shymbulak and Talgar Pass at 3,200m — above the city smog. The Medeu ice rink itself is closed for reconstruction until ~2027.',
    bestTime: 'Go up early (09:30–14:30); top lift stops ~16:00–16:30',
    admission: '12,000 ₸ return Medeu ↔ Talgar Pass',
    lat: 43.1578,
    lng: 77.0592,
    tags: ['Mountains', 'Snow', 'Highlights'],
    image: './assets/places/medeu-shymbulak.jpg',
    whyGo: 'About 30–40 minutes from the centre by Yandex taxi. The road above Medeu is closed to cars until 30 Nov, so the gondola is the only way up — glacier views and warm chalet cafés at the top.'
  },
  {
    id: 'charyn-canyon',
    name: 'Charyn Canyon (Valley of Castles)',
    city: 'Almaty Region (East)',
    category: 'Day Trip Wonder',
    shortDescription: 'Spectacular 154km red sandstone canyon carved by the Charyn River, often compared to Arizona’s Grand Canyon with towering wind-sculpted pillars.',
    bestTime: 'Full day excursion (08:00 – 19:00)',
    admission: 'Park fee usually included in tours; eco-taxi 500–1,800 ₸',
    lat: 43.3516,
    lng: 79.0808,
    tags: ['Day Excursion', 'Landscape', 'Geology'],
    image: './assets/places/charyn-canyon.jpg',
    whyGo: 'An unmissable day trip. Hike down between 300-meter-high sedimentary formations through the Valley of Castles to the rushing glacial riverbank.'
  },
  {
    id: 'kolsai-kaindy-lakes',
    name: 'Kolsai Lakes & Lake Kaindy (Sunken Forest)',
    city: 'Tian Shan Foothills',
    category: 'Alpine Lakes',
    shortDescription: 'Mesmerizing turquoise alpine lakes nestled in fir forests, featuring Lake Kaindy with its surreal underwater forest of preserved spruce trunks.',
    bestTime: 'Full day or overnight trip',
    admission: 'National park permit included in tours',
    lat: 42.9833,
    lng: 78.3333,
    tags: ['Alpine Lakes', 'Wilderness', 'Bucket List'],
    image: './assets/places/kolsai-kaindy-lakes.jpg',
    whyGo: 'Known as the "Pearls of the Northern Tian Shan". The ghostly tree trunks emerging from the turquoise waters of Lake Kaindy are like nowhere else on earth.'
  },
  {
    id: 'arbat-pedestrian',
    name: 'Zhibek Zholy (Almaty Arbat)',
    city: 'Almaty',
    category: 'Walk & Street Life',
    shortDescription: 'Lively pedestrian boulevard lined with outdoor cafes, street artists, Central Asian souvenir shops, and busking musicians.',
    bestTime: 'Evening (18:00 – 21:00)',
    admission: 'Free',
    lat: 43.2625,
    lng: 76.9458,
    tags: ['Evening', 'Stroll', 'Cafes'],
    image: './assets/places/arbat-pedestrian.jpg',
    whyGo: 'Great place to soak in local Almaty evening atmosphere, grab Kazakh samsa or tea, and buy local handicrafts.'
  },
  {
    id: 'central-mosque',
    name: 'Almaty Central Mosque',
    city: 'Almaty',
    category: 'History & Architecture',
    shortDescription: 'White marble mosque with a large golden-blue dome on Pushkin St, a 5-minute walk from the Green Bazaar.',
    bestTime: 'Between prayers; avoid Friday 12:00–14:30',
    admission: 'Free · cover arms and legs, headscarf for women, shoes off',
    lat: 43.2649,
    lng: 76.9512,
    tags: ['Architecture', 'Free', 'Old town'],
    image: './assets/places/central-mosque.jpg',
    whyGo: 'One of the largest mosques in Kazakhstan and an easy add-on to the Green Bazaar and Panfilov Park walk.'
  },
  {
    id: 'big-almaty-lake',
    name: 'Big Almaty Lake (option)',
    city: 'Ile-Alatau National Park',
    category: 'Alpine Lakes',
    shortDescription: 'Mountain reservoir at ~2,500 m under Soviet Peak, ~1 h from the city. Usually frozen and snow-covered from November.',
    bestTime: 'Half-day tour by car, 09:00–14:00 (weekdays)',
    admission: 'Private cars banned on the road — go with a tour (eco fee included); passport needed (border zone)',
    lat: 43.0506,
    lng: 76.9858,
    tags: ['Lake', 'Snow', 'Half day'],
    image: './assets/places/big-almaty-lake.jpg',
    whyGo: 'The closest high-mountain lake to Almaty. In November you get a frozen white lake framed by snowy peaks rather than turquoise water.'
  }
];

export const itinerary = [
  {
    "dayNumber": 1,
    "date": "2026-11-07",
    "weekday": "Saturday",
    "city": "Bhopal → Delhi → Almaty",
    "title": "Train to Delhi, fly to Almaty & settle in",
    "subtitle": "Overnight Rajdhani from Bhopal into Hazrat Nizamuddin at 05:30, cab to Delhi T3, fly at 12:10 and land in Almaty at 15:10.",
    "weatherNote": "Sunset is 16:37, so it is dark by the time you reach the city. Evenings are around 0–3 °C: keep your jacket in your cabin bag.",
    "bring": "Passport, printouts of return ticket + Airbnb booking, US$100–200 in clean notes (INR can’t be exchanged in Kazakhstan), Yandex Go + 2GIS + Google Translate (offline Russian), Airbnb check-in instructions saved offline.",
    "planB": "Train still waitlisted when the chart is prepared (about 4 h before departure)? A waitlisted e-ticket is cancelled automatically and you can’t board. Have a backup ready for Fri 6 Nov: a daytime train or an evening flight to Delhi, then a night near the airport. Uber’s Alternate Travel Plan refunds 2× the fare for train. If Almaty immigration or the SIM queue is slow, eat at Navat next door.",
    "events": [
      {
        "time": "Fri 6 Nov · 09:05 PM",
        "type": "train",
        "icon": "🚆",
        "title": "Rajdhani Express 22691: Bhopal Jn → Hazrat Nizamuddin",
        "description": "Overnight in 3A (8 h 25 min). Your ticket is waitlisted (RLWL) — check the status until the chart is prepared, about 4 hours before departure.",
        "tip": "RLWL (remote-location waitlist) tickets confirm less often than regular waitlist. Keep the backup in Plan B ready.",
        "links": [
          {
            "label": "Check PNR status",
            "href": "https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en"
          }
        ]
      },
      {
        "time": "05:30 AM",
        "type": "arrival",
        "icon": "🚉",
        "title": "Arrive Delhi Hazrat Nizamuddin",
        "description": "Freshen up and have breakfast at or near the station. You have time: the flight is at 12:10.",
        "tip": "Rajdhani trains can run late; even 2 h late still leaves enough time for the airport."
      },
      {
        "time": "07:30 AM – 08:30 AM",
        "type": "transfer",
        "title": "Cab to Delhi Airport Terminal 3",
        "description": "About 45–60 minutes from Nizamuddin depending on traffic.",
        "cost": "Uber/Ola ~₹400–700",
        "tip": "Aim to reach T3 by about 09:00 — 3 hours before an international flight."
      },
      {
        "time": "09:00 AM",
        "type": "flight",
        "title": "Check-in at Delhi IGI Airport (T3)",
        "description": "Check in and clear emigration at Terminal 3 for Air Astana KC908.",
        "tip": "Cabin 8 kg + one checked bag up to 23 kg."
      },
      {
        "time": "12:10 PM – 03:10 PM",
        "type": "flight",
        "title": "Air Astana KC908: DEL → ALA (3h 30m direct)",
        "description": "Lands at Almaty Terminal 2 (all international flights) at 15:10 local time (UTC+5, 30 min behind IST)."
      },
      {
        "time": "03:10 PM – 04:00 PM",
        "type": "arrival",
        "title": "Immigration at ALA Terminal 2",
        "description": "Indian passports get 14 days visa-free. No registration needed for a 7-night stay — the hotel handles it.",
        "tip": "Keep your passport on you all trip: police don’t accept photocopies.",
        "image": "./assets/places/almaty-airport.jpg"
      },
      {
        "time": "04:00 PM – 04:30 PM",
        "type": "setup",
        "icon": "📶",
        "title": "SIM card (Beeline first), a little cash & taxi app",
        "description": "Beeline, Tele2, Kcell and Altel have counters side by side in the arrivals hall (an Aug 2026 guide says Beeline’s is 24/7; another says 07:00–23:00 — either way open at 16:00). Buy only at a counter branded with one operator: in 2024 Beeline said a multi-brand airport kiosk was not an official Beeline office.",
        "tickets": "Bring your passport — they photograph it to register the SIM. Beeline: the 6,000 ₸ “40 GB unlimited” and 10,000 ₸ “unlimited” boards you saw are not confirmed anywhere; Beeline’s “unlimited” plans have a cap and then slow to 256 Kbps. Ask at the counter, in writing: GB before slowdown, hotspot allowed?, minutes/SMS included, validity. Fallback if Beeline’s offer is unclear: Tele2 tourist pack ~5,590 ₸ (25 GB 4G + 25 GB 5G, 240 min, 30 days).",
        "tip": "No IMEI registration is needed: a foreign phone on a local SIM only gets blocked after 30 days. 25–40 GB is plenty for 7 days. Change only ~US$50 at the airport (rates are worse); do the rest at MiG on Dostyk (below). RuPay probably won’t work — use Visa/Mastercard."
      },
      {
        "time": "04:30 PM – 05:15 PM",
        "type": "transfer",
        "title": "Yandex Go to your Airbnb (near Dostyk Ave)",
        "description": "Order in the app and walk to the marked Yandex pickup zone outside Terminal 2. 25–45 min to the centre.",
        "cost": "Economy ~2,500–4,500 ₸ · Comfort ~3,500–6,000 ₸",
        "tip": "Ignore drivers who approach you in arrivals (they ask 8,000–18,000 ₸ cash). Check the plate before getting in. Message your Airbnb host your arrival time (~16:30) and get the check-in instructions before you fly.",
        "backup": "Official “Taxi Point” desk at exits A/B (fixed fare, ~9,000 ₸)."
      },
      {
        "time": "06:00 PM – 06:30 PM",
        "type": "setup",
        "icon": "💱",
        "title": "Change USD at MiG 2 (Dostyk 40 × Kabanbay Batyr)",
        "description": "MiG is an Almaty exchange chain (34 offices). MiG 2 is the closest to the Airbnb and on the way to Navat. Other nearby branches: MiG 12 (Satpayev 2 × Dostyk), MiG 15 (Tole Bi 24a × Dostyk), MiG 4 (Abay 40 × Baitursynov).",
        "tickets": "Listed hours 09:00–20:00 daily — check in 2GIS before walking over. mig.kz publishes one network-wide rate table (5 Nov: USD buy 449.5 ₸); still compare the board with the rate in the app before you hand over notes.",
        "tip": "Is the rate good? Per $1: ₸450–454 excellent · 447–449 good · 444–446 acceptable · 440–443 negotiate · below 440 avoid (target ₸452; $100 → ~₸44,900–45,200). Full table, incl. INR, on the Prep page. Bring clean, new-series US$100 notes with no tears, and carry your passport. Count the tenge at the window and keep the receipt.",
        "links": [
          {
            "label": "MiG rates & branches",
            "href": "https://mig.kz"
          },
          {
            "label": "MiG 2 in 2GIS",
            "href": "https://2gis.kz/almaty/search/%D0%9C%D0%B8%D0%93%20%D0%94%D0%BE%D1%81%D1%82%D1%8B%D0%BA%2040"
          }
        ]
      },
      {
        "time": "06:30 PM – 09:00 PM",
        "type": "evening",
        "title": "First Kazakh dinner at Navat (walk from the Airbnb)",
        "description": "Navat chaikhana on Dostyk Ave is a short walk from your Airbnb. 🥗 Vegetarian: vegan lagman, vegan soup, grilled vegetables (HappyCow); ask “bez myasa?” for baursak (sometimes fried in mutton fat). 🍖 Meat: plov, manti, kuyrdak. Still fresh afterwards? Ride the metro from Almaly to Zhibek Zholy for the lit-up Arbat pedestrian street.",
        "getThere": "Walk along Dostyk Ave. For Arbat: Almaly metro → Zhibek Zholy (120 ₸, tap your Visa/Mastercard).",
        "cost": "~5,000–8,000 ₸ per person",
        "tip": "Bills often include 10–15% service (“обслуживание”) — no extra tip needed then. Rakhat chocolate shop is at Zhibek Zholy × Kaldayakov.",
        "links": [
          {
            "label": "Navat Dostyk on Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Navat+Dostyk+48+Almaty"
          }
        ]
      }
    ],
    "placeIds": [
      "arbat-pedestrian"
    ]
  },
  {
    "dayNumber": 2,
    "date": "2026-11-08",
    "weekday": "Sunday",
    "city": "Almaty old town",
    "title": "Panfilov Park, Zenkov Cathedral, Green Bazaar, Central Mosque & Kok Tobe sunset",
    "subtitle": "All on foot in one compact old-town loop (Panfilov Park → Green Bazaar → Central Mosque are 5–15 min apart), then the cable car up Kok Tobe for sunset and city lights.",
    "weatherNote": "Forecast on 6 Nov: dry and mild (~5–16 °C) — a good Kok Tobe day. Go up only if the air is clear (check the IQAir app): smog can hide the view by afternoon. Sunset 16:36.",
    "bring": "Cash for the bazaar (5,000–10,000 ₸), clothes covering arms and legs plus a scarf (needed at the mosque; women also cover their heads at the cathedral), socks without holes (shoes off at the mosque), warm layers for Kok Tobe after dark.",
    "planB": "Rain all day: Central State Museum (open Sundays, 5,000 ₸) and Akku café, still do the Green Bazaar (indoor hall). Move Kok Tobe to Thursday.",
    "events": [
      {
        "time": "09:00 AM – 10:00 AM",
        "type": "breakfast",
        "title": "Brunch at Six Coffee+Wine",
        "description": "Rated 5.0 on Yandex — reviewers call it the best coffee in Almaty. Flat white plus avocado-salmon toast. Closer option: Nedelka, a few minutes from the Airbnb.",
        "cost": "~3,500–6,000 ₸",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Six+Coffee+Wine+Abay+17+Almaty"
          }
        ]
      },
      {
        "time": "10:00 AM – 11:15 AM",
        "type": "sight",
        "title": "28 Panfilov Guardsmen Park & Ascension (Zenkov) Cathedral",
        "description": "Walk the park first: the huge Panfilov Guardsmen war memorial and eternal flame at the east end, then the pastel 1907 Ascension Cathedral with its golden domes — built of wood without nails, in the middle of the park. Free.",
        "getThere": "Yandex ~800–1,500 ₸, or metro to Zhibek Zholy then a 10-min walk.",
        "tickets": "Free · open 07:00–18:00",
        "tip": "Women cover their heads; no flash photography inside.",
        "image": "./assets/places/zenkov-cathedral.jpg"
      },
      {
        "time": "11:15 AM – 12:00 PM",
        "type": "museum",
        "icon": "🎻",
        "title": "Museum of Kazakh Folk Musical Instruments",
        "description": "A Lonely Planet top pick in a 1908 wooden building inside Panfilov Park. 30–45 minutes.",
        "tickets": "~1,500 ₸ at the door · 10:00–19:00 · closed Mondays",
        "image": "./assets/places/music-museum.jpg"
      },
      {
        "time": "12:15 PM – 01:30 PM",
        "type": "market",
        "title": "Green Bazaar (Kok Bazar) + coffee on the balcony",
        "description": "Dried fruit, nuts, honey, spices, kurt and kazy. 🥗 Vegetarian snack: morkovcha (Korean carrot salad) at the Korean-salad stalls — ask “bez ryby, bez myasa?”, some salads use fish sauce or meat. Upstairs, Bowler Coffee Roasters has a balcony view over the market floor.",
        "getThere": "10-minute walk north from Panfilov Park.",
        "cost": "Bring cash; coffee ~1,500–2,000 ₸",
        "tip": "Closed Mondays — so today is the day. Bargain on dried fruit and souvenirs, watch for pickpockets, taste before buying. The Rakhat factory store (Zenkov 2a) is nearby.",
        "links": [
          {
            "label": "Green Bazaar on Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Green+Bazaar+Zhibek+Zholy+53+Almaty"
          }
        ],
        "image": "./assets/places/green-bazaar.jpg"
      },
      {
        "time": "01:30 PM – 02:00 PM",
        "type": "sight",
        "icon": "🕌",
        "title": "Almaty Central Mosque (Pushkin St 16)",
        "description": "The white mosque with the big golden-blue dome, about a 5-minute walk from the Green Bazaar. Free; visitors are welcome between prayers.",
        "tickets": "Free. Published hours conflict (09:00–18:00 vs 05:00–22:00) — midday Sunday is safe; avoid Friday 12:00–14:30 (Juma prayer).",
        "tip": "Cover arms and legs; women bring their own headscarf (one source says none are lent). Shoes off before the prayer hall. Photos are fine in common areas — not of people praying.",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Central+Mosque+Pushkin+16+Almaty"
          }
        ],
        "image": "./assets/places/central-mosque.jpg"
      },
      {
        "time": "02:15 PM – 03:00 PM",
        "type": "food",
        "title": "Lunch at Tary (Kazakh-twist café)",
        "description": "🥗 Vegetarian: baursaks (ask if fried in vegetable oil), irimshik (sweet dried curd) and the signature tary (roasted-millet) cheesecake. 🍖 Meat: Sandyq next door for a full beshbarmak.",
        "cost": "~5,000 ₸",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Tary+Abylai+Khan+55+Almaty"
          }
        ]
      },
      {
        "time": "03:30 PM – 06:30 PM",
        "type": "sunset",
        "title": "Kok Tobe cable car for sunset & city lights",
        "description": "Ride up about an hour before the 16:36 sunset, watch the mountains turn pink, stay for the city lights. Cafés and restaurants on top.",
        "getThere": "From the Airbnb: ~15–20 min walk south along Dostyk Ave to the lower station by the Palace of the Republic (Dostyk 104B), or a short Yandex ride.",
        "tickets": "At the station: 10,000 ₸ return / 6,000 ₸ one way. Sun 10:00–22:00.",
        "tip": "🥗 Kok Tobe’s restaurant menu (Aug 2025) lists meatless mini pumpkin samsa and vegetable shashlik — good dinner with a view. Skip the mini-zoo. Taxis can’t drive up (25,000 ₸ car fee) — the park shuttle from Dostyk is 3,000 ₸ one way if the cable car is closed.",
        "backup": "Hazy or raining: swap with Thursday’s sunset and go to Akku café instead.",
        "links": [
          {
            "label": "Kok Tobe station",
            "href": "https://www.google.com/maps/search/?api=1&query=Kok+Tobe+cable+car+lower+station+Dostyk+Almaty"
          }
        ],
        "image": "./assets/places/kok-tobe.jpg"
      }
    ],
    "placeIds": [
      "zenkov-cathedral",
      "green-bazaar",
      "central-mosque",
      "kok-tobe"
    ]
  },
  {
    "dayNumber": 3,
    "date": "2026-11-09",
    "weekday": "Monday",
    "city": "Almaty mountains",
    "title": "Shymbulak & Talgar Pass (3,200 m) + optional guided Bogdanovich Glacier walk",
    "subtitle": "Three gondolas from Medeu up to 3,200 m, above the city smog. The forecast makes this the best mountain day of the week — and museums and the bazaar are shut on Mondays anyway.",
    "weatherNote": "Forecast on 6 Nov: dry, light wind, about −5…+5 °C at 3,200 m — the clearest mountain window of your trip (snow arrives Tue night/Wed). Trails are icy in the morning after the overnight refreeze. Combi-2 to Talgar Pass closed at 16:30 last winter (2026 hours not published) — be heading down by ~15:00. The official live page (shymbulak.com/live) needs a browser: check it in the morning, or ask at the Medeu ticket desk which lifts are running.",
    "bring": "Warm jacket, hat, gloves, sunglasses (snow glare), sunscreen, grippy boots (microspikes if you have them), water and a snack, passport, a card for lift tickets.",
    "planB": "Lifts stopped by wind: Central State Museum (open Mondays) + Arasan baths, and do the mountains Thursday 12 or Friday 13 (fresh snow, but −10…−20 °C at the top). If the glacier guide cancels, just stay at Talgar Pass — do not walk to the glacier alone.",
    "events": [
      {
        "time": "08:00 AM – 08:45 AM",
        "type": "transfer",
        "title": "Yandex Go to the Medeu gondola station",
        "description": "Straight up Dostyk Ave and the Medeu valley from your Airbnb — about 30–40 minutes. Leave by 08:00 if you booked the glacier walk (it meets at 09:00); otherwise 08:30 is fine.",
        "cost": "~2,000–4,000 ₸",
        "tip": "City buses (12/21) need an Onay card that you can only buy with cash, and foreign cards usually fail — a taxi is easier. The road beyond Medeu is closed to cars and taxis until 30 Nov, so the gondola is the only way up."
      },
      {
        "time": "08:45 AM – 09:00 AM",
        "type": "sight",
        "title": "Medeu (quick look)",
        "description": "The ice rink is closed for reconstruction (possibly until 2028) and its car park is fenced off until December — just look at the dam from the gondola station. Whether the ~842-step dam staircase is open in 2026 is not reported; skip it if icy.",
        "image": "./assets/places/medeu.jpg"
      },
      {
        "time": "09:00 AM – 10:00 AM",
        "type": "alpine",
        "title": "Gondolas: Medeu → Shymbulak (2,260 m) → Combi-1 → Combi-2 → Talgar Pass (3,200 m)",
        "description": "Ride all three stages to the top. Glacier and peak views, usually sunny above the city haze.",
        "tickets": "Buy at the Medeu ticket office or shymbulak.com. Adult 12,000 ₸ return Medeu ↔ Talgar Pass · 7,000 ₸ one way (prices from Sep 2026 news; confirm at the desk). The glass “360°” cabin price for 2026 is not published. Lifts reopened after maintenance on 2 Nov; the KKD-4 chairlift stays shut until 10 Nov (you don’t need it).",
        "tip": "No skiing or snowboarding this trip: the 2026/27 season start hasn’t been announced and there’s no snow base yet. So no rental needed — “TUBE” near Shymbulak couldn’t be found in 2GIS or online (a shop called “Tobe”, @tobe.kz, may be what you saw). If the season opens later, on-mountain rental was from 8,000 ₸/day last winter.",
        "links": [
          {
            "label": "Shymbulak live (lifts, webcams)",
            "href": "https://shymbulak.com/live"
          },
          {
            "label": "Shymbulak tickets",
            "href": "https://shymbulak.com/"
          }
        ],
        "image": "./assets/places/talgar-pass.jpg"
      },
      {
        "time": "10:00 AM – 01:30 PM",
        "type": "hike",
        "icon": "🧊",
        "title": "Option (not booked): guided walk to the Bogdanovich Glacier viewpoint",
        "description": "From Talgar Pass a cairn-marked moraine path runs ~2 km south to a viewpoint of the glacier’s ice wall (~3,370 m): 1–1.5 h each way, easy-to-moderate at altitude. Do it only with a guide — there are hidden crevasses under thin snow and avalanche slopes; the Emergencies Ministry logged 4 incidents on the route in 2025 and recommends a guide for beginners. Stay on the moraine viewpoint, not on the ice.",
        "tickets": "Sputnik8 guided walk: 35,000 ₸ — guide, crampons, helmet and poles included, lift ticket not. Meets 09:00, walk starts at Combi-2 at 10:00, back ~13:30. Book today for Monday; if they can’t run it, skip the glacier.",
        "tip": "Register your walk (voluntary) on almatyhike.kz and mark your return afterwards. Rescue: 112. After the snowfall on 10–11 Nov, don’t attempt it on a later day.",
        "backup": "No guide: walk around Talgar Pass and the top station viewpoints instead — the glacier is visible from there.",
        "links": [
          {
            "label": "Sputnik8 glacier walk",
            "href": "https://www.sputnik8.com/ru/almaty/activities/85679-po-tropam-shymbulaka-k-ledniku-i-oktyabrskoy-peschere"
          },
          {
            "label": "Register hike (almatyhike.kz)",
            "href": "https://almatyhike.kz/ru"
          }
        ]
      },
      {
        "time": "01:30 PM – 03:00 PM",
        "type": "food",
        "title": "Lunch & snow views at Shymbulak base (2,260 m)",
        "description": "Ride Combi-2 and Combi-1 down to the base, eat at one of the resort cafés and wander the resort. Not booked glacier walk? Spend the extra time at the top first.",
        "tip": "🥗 Mountain-café menus are meat-heavy — ask for “bez myasa” dishes (soups, salads, pastries) or carry a snack."
      },
      {
        "time": "03:00 PM – 04:00 PM",
        "type": "transfer",
        "title": "Gondola down & taxi back to the city",
        "description": "Order Yandex Go at the Medeu station; expect a short wait in the afternoon.",
        "cost": "~2,000–4,000 ₸"
      },
      {
        "time": "07:30 PM – 09:00 PM",
        "type": "dinner",
        "title": "Dinner at Qaimaq (meat) or Navat (veg options)",
        "description": "🍖 Qaimaq (Abay 46A, rated 4.6): kuyrdak in a pumpkin, big beshbarmak (8,400 ₸) — few vegetarian mains. 🥗 Prefer vegetarian? Navat on Dostyk next to the Airbnb has vegan lagman, soup and grilled vegetables.",
        "cost": "~8,000–12,000 ₸ per person",
        "links": [
          {
            "label": "Qaimaq on Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Qaimaq+Abay+46A+Almaty"
          }
        ]
      }
    ],
    "placeIds": [
      "medeu-shymbulak"
    ]
  },
  {
    "dayNumber": 4,
    "date": "2026-11-10",
    "weekday": "Tuesday",
    "city": "Kaindy & Kolsai → Saty",
    "title": "2-day tour, day 1: Kaindy & Kolsai lakes (not booked yet)",
    "subtitle": "One 2-day trip covers Kaindy, Kolsai, Black Canyon and Charyn — the lakes are beyond Charyn on the same road, so separate day trips would repeat 6–7 h of driving. Night in Saty with a bonfire evening. Timings below follow JoinMe; booking options are in the first stop.",
    "weatherNote": "Forecast on 6 Nov: Tue mostly dry with a chance of showers (~50%); Wed wetter (rain at Charyn, snow at altitude, ~17 cm forecast at Shymbulak). Tours still run in this — pack waterproofs. Lakes start icing in November and walking on the ice is banned. Kaindy is a 2.5 km walk from the parking — trails can be snowy. Dark by ~16:30.",
    "bring": "Passport/ID, cash in tenge for snacks and optional horses or boats, power bank, warm layers, gloves, hat, grippy shoes, motion-sickness tablets for the UAZ, small overnight bag. Leave your big luggage at the Airbnb.",
    "planB": "If the Kaindy road or trail is closed, the group spends longer at Kolsai and in Saty. If the operator moves the trip because of snow, swap with Thursday–Friday (12–13 Nov): the Nov 12 Airbnb checkout and the 04:00 airport run on the 14th still work if you’re back by ~21:00 on the 13th.",
    "events": [
      {
        "time": "Book by Sun 8 Nov",
        "type": "tour",
        "icon": "🎟️",
        "title": "Book ONE 2-day tour: Kaindy, Kolsai, Black Canyon & Charyn",
        "description": "Not booked yet — book today. ⭐ Recommended: Kazakhstan Guided Tours 2-day on GetYourGuide — 4.8 from 1,115 reviews (praise as recent as 2 Nov 2026), pickup at Hotel Kazakhstan near your Airbnb, guest house or yurt with meals, vegetarian options available, 2–3 h at each main site. Order: day 1 Black Canyon + Kolsai, day 2 Kaindy + Charyn; back 20:00–21:00. Cheaper alternative: JoinMe 2-day (the timeline below): bus of up to 40, guest house, all meals, UAZ and eco fees included, but no ratings shown and no November dates listed — confirm on WhatsApp.",
        "tickets": "GetYourGuide: from ₹7,545 per person (shown 6 Nov, “likely to sell out”) — check that Tue 10 Nov is bookable and the cancellation terms. JoinMe: from 30,000 ₸ per person. ⚠️ The JoinMe link you saved (…early-start-14-09-2026) is the 14 Sep departure and is closed — use the general 2-day page. Day trips (17 h, 1–1.5 h per site, ~4:30 start, back ~20:30–22:30) are not recommended: rushed, and half of it is in the dark in November.",
        "tip": "Tell the operator you’re vegetarian when booking — meals are included on both 2-day tours.",
        "links": [
          {
            "label": "⭐ GYG 2-day (recommended)",
            "href": "https://www.getyourguide.com/almaty-city-l1414/almaty-kolsai-kaindy-lakes-charyn-canyons-2-day-tour-t489855/"
          },
          {
            "label": "JoinMe 2-day page",
            "href": "https://www.joinme.kz/en/tours/almaty-region/group-tours/kaindy-kolsai-2-days-early-start"
          },
          {
            "label": "WhatsApp JoinMe",
            "href": "https://wa.me/77772999767"
          }
        ]
      },
      {
        "time": "05:30 AM",
        "type": "transfer",
        "title": "Taxi to the meeting point: Circus car park, Abay 50 (JoinMe)",
        "description": "About 10 minutes from the Airbnb by Yandex Go. JoinMe’s 2-day page says both 05:30 and 06:00 for gathering, bus at 06:20 sharp — ask them on WhatsApp which. Booked the GetYourGuide tour instead? Pickup is at Hotel Kazakhstan (Dostyk 52, a short walk), about 07:00 — confirm the time in your booking.",
        "cost": "~1,000–1,500 ₸",
        "links": [
          {
            "label": "Meeting point",
            "href": "https://www.google.com/maps/search/?api=1&query=Almaty+State+Circus+Abay+50"
          }
        ]
      },
      {
        "time": "06:20 AM – 10:30 AM",
        "type": "tour",
        "title": "Bus to Saty village",
        "description": "Snack and toilet stops on the way. Guides speak English/Russian/Kazakh."
      },
      {
        "time": "10:30 AM – 01:00 PM",
        "type": "nature",
        "icon": "🌲",
        "title": "Lake Kaindy — the sunken forest",
        "description": "UAZ 4x4 from Saty to the Kaindy parking (included), then a 2.5 km walk to the lake with its drowned spruce trunks.",
        "tip": "Sit near the front of the UAZ — the road is very bumpy. Walking is safer than the optional horses.",
        "image": "./assets/places/kaindy.jpg"
      },
      {
        "time": "01:30 PM – 02:30 PM",
        "type": "food",
        "title": "Lunch in Saty",
        "description": "Included in the tour.",
        "image": "./assets/places/saty.jpg"
      },
      {
        "time": "02:30 PM – 05:00 PM",
        "type": "nature",
        "icon": "🏞️",
        "title": "Kolsai Lake 1",
        "description": "Turquoise lake under snowy spruce slopes. Boats and catamarans are summer-only.",
        "image": "./assets/places/kolsai-kaindy-lakes.jpg"
      },
      {
        "time": "06:30 PM – 10:00 PM",
        "type": "evening",
        "icon": "🔥",
        "title": "Guest house in Saty: dinner, bonfire & evening programme",
        "description": "Expect basic rooms and patchy signal and power. Charge everything on the bus."
      }
    ],
    "placeIds": [
      "kolsai-kaindy-lakes"
    ]
  },
  {
    "dayNumber": 5,
    "date": "2026-11-11",
    "weekday": "Wednesday",
    "city": "Black Canyon & Charyn → Almaty",
    "title": "2-day tour, day 2: Black Canyon & Charyn",
    "subtitle": "Canyon day on the way home: Black Canyon, Moon Canyon and Charyn’s Valley of Castles, back in Almaty around 19:00 (JoinMe) or 20:00–21:00 (GetYourGuide, which does Kaindy this morning instead).",
    "weatherNote": "Forecast on 6 Nov: the wettest day of the trip — rain likely in the lowlands (~80%) and turning colder (city ~2–11 °C). Canyon paths get muddy and slippery in rain; keep to the main path and let the guide decide on the descent to the river. Dark by ~16:30.",
    "bring": "Same as yesterday; waterproof jacket, windproof layer, a dry pair of socks.",
    "planB": "Moon Canyon is often treated as a summer stop — if skipped, you get more time in the Valley of Castles.",
    "events": [
      {
        "time": "08:00 AM – 09:00 AM",
        "type": "breakfast",
        "title": "Wake up & breakfast at the guest house"
      },
      {
        "time": "09:00 AM – 11:05 AM",
        "type": "sight",
        "icon": "🏔️",
        "title": "Black Canyon & Moon Canyon",
        "description": "Viewpoints over the dark gorges of the Charyn river system.",
        "image": "./assets/places/black-canyon.jpg"
      },
      {
        "time": "11:50 AM – 03:30 PM",
        "type": "hike",
        "title": "Charyn Canyon: Valley of Castles",
        "description": "Walk between the red rock towers down towards the river — the highlight of the tour.",
        "cost": "Park eco-taxi 500–1,800 ₸ (optional)",
        "tip": "Windy and slippery in places — keep to the path.",
        "image": "./assets/places/charyn-canyon.jpg"
      },
      {
        "time": "03:30 PM – 07:00 PM",
        "type": "transfer",
        "icon": "🚌",
        "title": "Bus back to Almaty (Circus car park, Abay 50)"
      },
      {
        "time": "07:30 PM",
        "type": "dinner",
        "title": "Easy dinner: Navat on Dostyk",
        "description": "Next to the Airbnb. 🥗 Vegan lagman or grilled vegetables. (Bauyrdaq — budget, 24/7 — is meat-focused: beshbarmak 4,390 ₸.)"
      }
    ],
    "placeIds": [
      "charyn-canyon"
    ]
  },
  {
    "dayNumber": 6,
    "date": "2026-11-12",
    "weekday": "Thursday",
    "city": "Almaty",
    "title": "Airbnb checkout, Arasan baths, Central Museum & the spare slot",
    "subtitle": "Check out of the Airbnb and move to your last 2 nights’ stay, then an easy indoor day. Also the buffer day for anything the weather cancelled.",
    "weatherNote": "Forecast on 6 Nov: cold and grey (city about −1…+4 °C, rain or sleet likely) and still snowing lightly in the mountains — a good indoor day. If Sunday’s Kok Tobe was hazy, its sunset can go here (open 10:00–22:00). Sunset 16:32.",
    "bring": "Flip-flops for the baths.",
    "planB": "Everything here is indoors, so it works in any weather.",
    "events": [
      {
        "time": "10:30 AM – 11:30 AM",
        "type": "checkin",
        "icon": "🧳",
        "title": "Check out of the Airbnb & move to your Nov 12–14 stay",
        "description": "Your Airbnb is booked Nov 7–12. The nights of Nov 12 and 13 are not booked yet — a hotel with a 24/7 desk makes the 04:00 airport run on Nov 14 easy.",
        "tip": "Check the checkout time in your Airbnb listing. Hotel Kazakhstan is in the same area; Renion and Voyage are better value near Panfilov Park."
      },
      {
        "time": "11:30 AM – 12:30 PM",
        "type": "breakfast",
        "title": "Brunch at JumpinGoat or ProCoffee",
        "description": "JumpinGoat (Abay 35/37): specialty coffee and syrniki, order at the counter. ProCoffee (Dostyk 87A): sofas, big breakfasts (English breakfast 4,100 ₸).",
        "cost": "~3,000–5,000 ₸"
      },
      {
        "time": "01:00 PM – 03:00 PM",
        "type": "spa",
        "title": "Arasan Wellness & SPA (1982 Soviet bathhouse)",
        "description": "Russian banya, hammam and plunge pools — reviewers call it the best way to warm up in Almaty. Separate men’s and women’s sections.",
        "tickets": "At the door: weekday 2 h ~3,800 ₸ (morning) / 4,500 ₸ (evening).",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Arasan+Wellness+SPA+Almaty"
          }
        ]
      },
      {
        "time": "03:30 PM – 05:00 PM",
        "type": "museum",
        "icon": "🖼️",
        "title": "Central State Museum of Kazakhstan (or ALMA art museum)",
        "description": "Moved here from Friday to free Friday for Big Almaty Lake. Central State Museum: nomad history, the Golden Man replica and yurts (Samal-1 bldg 44; foreigners 5,000 ₸, desk until 17:30; closed Tuesdays). Prefer art? ALMA, a new private museum rated 4.8 (Al-Farabi 28, 11:00–21:00, 3,000 ₸, timed tickets).",
        "tickets": "Central Museum: at the desk. ALMA: almaty.art (closed Mondays).",
        "links": [
          {
            "label": "ALMA tickets",
            "href": "https://www.almaty.art/visit-and-tickets"
          }
        ]
      },
      {
        "time": "05:15 PM – 06:30 PM",
        "type": "cafe",
        "icon": "☕",
        "title": "Akku — heritage Soviet-modernist café",
        "description": "A cult park café, rebuilt with mosaics, panoramic windows and a library corner. Profiteroles (790 ₸), condensed-milk wafer tubes and Soviet-style ice cream.",
        "getThere": "Panfilov St 123 (Astana Square park).",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Akku+cafe+Panfilov+123+Almaty"
          }
        ]
      },
      {
        "time": "07:30 PM – 09:00 PM",
        "type": "dinner",
        "title": "Dinner at Kishlak (Uzbek) or Govinda’s (pure veg)",
        "description": "🍖 Kishlak: rated 4.3 from ~2,170 reviews for its plov and decor (plov is made with meat). 🥗 Vegetarian: Uzbek salads and non-meat sides there, or have an early pure-veg set meal at Govinda’s (Abylai Khan 39, ~2,050 ₸, closes ~20:00 and sells out — go by 18:30).",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Kishlak+restaurant+Almaty"
          }
        ]
      }
    ],
    "placeIds": []
  },
  {
    "dayNumber": 7,
    "date": "2026-11-13",
    "weekday": "Friday",
    "city": "Almaty",
    "title": "Big Almaty Lake (option), souvenirs & farewell dinner",
    "subtitle": "If you want one more lake: a half-day car tour to the frozen, snow-framed Big Almaty Lake, back by 14:00. Then souvenirs, online check-in and an early farewell dinner.",
    "weatherNote": "Forecast on 6 Nov: dry after Wednesday’s snow but cold — city about −2…+5 °C, around −10 °C at the lake (2,500 m). The tour itself warns that from November the lake is usually frozen and views aren’t guaranteed. Online check-in for KC907 opens about 24 h before (from ~07:05 today). Early night: your alarm is 03:30.",
    "bring": "Passport (the lake is in a border zone — required), warmest layers, gloves, sunglasses, a shopping bag, cash for souvenirs.",
    "planB": "Skipping the lake or the tour is cancelled: Shymbulak again for fresh snow (12,000 ₸ return, very cold at the top), or ALMA art museum and the Dostyk Plaza / Esentai malls.",
    "events": [
      {
        "time": "08:15 AM – 08:45 AM",
        "type": "breakfast",
        "title": "Quick breakfast near your hotel",
        "description": "Skipping the lake? Have a slow breakfast at Bon Bon (Abylai Khan 123) instead: the “Bohemian” breakfast or syrniki, ~3,500 ₸."
      },
      {
        "time": "09:00 AM – 02:00 PM",
        "type": "nature",
        "icon": "🏔️",
        "title": "Option (not booked): Big Almaty Lake by car (Adam Hiking Tours)",
        "description": "Private cars are banned on the lake road, so go with a tour: authorised vehicles drive past the checkpoint (a short 300 m walk at the vehicle change), at the lake ~10:15. In November expect a frozen, snow-covered lake under the peaks rather than turquoise water. The Alma-Arasan hot-spring stop is often closed (rockfall risk) and swapped for Ayusai gorge.",
        "getThere": "Meet at Abai Opera Theatre (Kabanbay Batyr 110) at 09:00. Weekday departures only.",
        "tickets": "From ₹5,518 on GetYourGuide (shown 6 Nov) — eco fee, English guide, transfer, lunch, snacks and water included. 4.8 from 255 reviews. Check Fri 13 Nov is bookable.",
        "tip": "Choose by car, not on foot: the hiking option is ~14 km, runs Mondays only, and in fresh snow it isn’t worth the avalanche and ice risk. Skip the “apple orchard” tour link — it now opens a different Panda Travel 4-hour tour (4.5★) whose recent reviews mention closed springs and pricey photo add-ons, and apple harvest is over by November.",
        "links": [
          {
            "label": "⭐ GYG: BAL by car (recommended)",
            "href": "https://www.getyourguide.com/almaty-city-l1414/big-almaty-lake-choose-adventure-on-foot-or-by-car-t703808/"
          },
          {
            "label": "GYG: BAL + Alma-Arasan (Panda)",
            "href": "https://www.getyourguide.com/almaty-city-l1414/big-almaty-lake-and-legendary-almaty-apple-orchard-t950118/"
          }
        ]
      },
      {
        "time": "02:15 PM – 03:00 PM",
        "type": "food",
        "title": "Late lunch (if the tour lunch was light)",
        "description": "🥗 Navat on Abylai Khan 58A — vegan lagman or grilled vegetables. 🍖 Rumi (Abylai Khan 92) is a plov house rated 4.6, set menus from ~6,500 ₸ — plov is made with meat."
      },
      {
        "time": "03:15 PM – 05:00 PM",
        "type": "shopping",
        "title": "Souvenirs: TSUM crafts & Rakhat chocolate",
        "description": "Felt slippers (2,000–2,500 ₸), kalpak hats ($15–30) and felt crafts at TSUM; Kazakh chocolate at the Rakhat factory store (Zenkov 2a), cheaper than supermarkets.",
        "tip": "Avoid airport and hotel shops — heavy mark-ups."
      },
      {
        "time": "05:30 PM – 06:30 PM",
        "type": "checkin",
        "icon": "✅",
        "title": "Online check-in, pack & prepare for 04:00",
        "description": "Check in for KC907 online. If you’re in a hotel: settle the bill tonight, ask for a breakfast box and have reception book a backup taxi for 04:00 in writing."
      },
      {
        "time": "07:00 PM – 09:00 PM",
        "type": "dinner",
        "icon": "🎶",
        "title": "Farewell dinner at Sandyq",
        "description": "Neo-nomad restaurant with live music in the evenings and an English menu. 🍖 Signatures are meat (beshbarmak 7,990 ₸, kuyrdak 7,790 ₸); 🥗 ask for their vegetable dishes and baursaks, or book the 24/7 Tary next door for desserts.",
        "cost": "~10,000 ₸ per person",
        "tip": "Book ahead.",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Sandyq+restaurant+Abylai+Khan+55+Almaty"
          }
        ]
      }
    ],
    "placeIds": [
      "big-almaty-lake"
    ]
  },
  {
    "dayNumber": 8,
    "date": "2026-11-14",
    "weekday": "Saturday",
    "city": "Almaty → Delhi",
    "title": "Fly home: Air Astana KC907",
    "subtitle": "Leave the hotel at 04:00 for the 07:05 flight from Terminal 2. Back in Delhi before lunch.",
    "weatherNote": "The coldest morning of the trip (around −3…−8 °C). Wear your warm jacket to the airport.",
    "bring": "Passport, boarding pass on your phone, warm jacket.",
    "planB": "If Yandex Go shows no cars, use the backup taxi you arranged last night.",
    "events": [
      {
        "time": "03:30 AM",
        "type": "morning",
        "title": "Wake up & grab the breakfast box"
      },
      {
        "time": "04:00 AM – 04:30 AM",
        "type": "transfer",
        "title": "Taxi to ALA Terminal 2",
        "description": "About 20–25 minutes at this hour.",
        "cost": "Yandex Go ~2,500–4,500 ₸",
        "tip": "Order 10–15 min before you go down and check the plate. The airport recommends arriving 3 hours before international flights — 04:45 would be too tight."
      },
      {
        "time": "04:30 AM – 06:20 AM",
        "type": "airport",
        "title": "Bag drop, security & passport control",
        "description": "Air Astana counters close 40 minutes before departure (06:25); the gate closes at 06:50.",
        "image": "./assets/places/almaty-airport.jpg"
      },
      {
        "time": "07:05 AM – 11:10 AM",
        "type": "flight",
        "title": "Air Astana KC907: ALA → DEL (3h 35m direct)",
        "description": "Land at Delhi T3 at 11:10 IST."
      }
    ],
    "placeIds": []
  }
];
