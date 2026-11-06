import { exchangeRates, currencySymbols, toINR, formatCurrency } from './currency.js?v=44';

export {
  exchangeRates,
  currencySymbols,
  toINR,
  formatCurrency
} from './currency.js?v=44';

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
  stayAreaNote: 'Nov 7–12, Golden Square between Zenkov St and Dostyk Ave. Walks: MiG 2 exchange 0.44 km, Navat 0.47 km, Kok Tobe cable car 0.91 km, Six Coffee 1.08 km, Panfilov Park 1.42 km, Abay metro 1.45 km, Green Bazaar 2.00 km.',
  stayAreaCoordinates: '43.250,76.957',
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
    "title": "Hotel Kazakhstan, night of Nov 13 — not booked yet",
    "amount": 50300,
    "currency": "KZT",
    "category": "stay",
    "status": "estimated",
    "paymentMethod": "Card",
    "date": "2026-11-13",
    "country": "Kazakhstan",
    "note": "One night only (Nov 12 is in the tour yurt). Tour pickup/drop-off point; ask to store bags from Thu morning"
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
    "date": "2026-11-12",
    "note": "Recommended: Kazakhstan Guided Tours on GYG, Thu 12–Fri 13, from ₹7,545 (~36,000 ₸) incl. heated yurt and meals; private yurt ~23,000 ₸ extra"
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
    "date": "2026-11-13",
    "note": "Shuttles ~1,000 ₸, park fees ~700–1,000 ₸, Kaindy horse ~1,000 ₸, snacks — no ATMs near the lakes"
  },
  {
    "id": "exp-horse-ride",
    "title": "Horse ride in Ile-Alatau (GYG, not booked)",
    "amount": 4913,
    "currency": "INR",
    "category": "activities",
    "status": "estimated",
    "paymentMethod": "Card",
    "date": "2026-11-10",
    "country": "Kazakhstan",
    "note": "Almaty Tourss, 4.8 (309); pickup, 2.5 h ride, picnic brunch"
  },
  {
    "id": "exp-huns-village",
    "title": "Huns nomad village day (GYG, not booked)",
    "amount": 13780,
    "currency": "INR",
    "category": "activities",
    "status": "estimated",
    "paymentMethod": "Card",
    "date": "2026-11-11",
    "country": "Kazakhstan",
    "note": "VOSTOK, 4.3 (38); confirm it's running before paying"
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
    "date": "2026-11-10",
    "note": "Weekday rate"
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
    "date": "2026-11-11",
    "note": "TSUM and Rakhat factory store"
  },
  {
    "currency": "KZT",
    "status": "estimated",
    "paymentMethod": "Card",
    "country": "Kazakhstan",
    "id": "exp-airport-taxi-departure",
    "title": "Yandex Go: Hotel Kazakhstan → Airport (04:00)",
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
    shortDescription: 'Three gondolas from Medeu (1,691m) up to Shymbulak and Talgar Pass at 3,200m — above the city smog. The Medeu ice rink itself is closed for reconstruction (possibly until 2028).',
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
    name: 'Big Almaty Lake (skip in November)',
    city: 'Ile-Alatau National Park',
    category: 'Alpine Lakes',
    shortDescription: 'Mountain reservoir at ~2,500 m under Soviet Peak, ~1 h from the city. Usually frozen and snow-covered from November.',
    bestTime: 'Half-day tour by car, 09:00–14:00 (weekdays)',
    admission: 'Private cars banned on the road — go with a tour (eco fee included); passport needed (border zone)',
    lat: 43.0506,
    lng: 76.9858,
    tags: ['Lake', 'Snow', 'Half day'],
    image: './assets/places/big-almaty-lake.jpg',
    whyGo: 'Dropped from the plan: in November it is frozen and snow-covered, you can’t reach the shore (water reserve), and recent reviewers who had seen Kolsai and Kaindy called it inferior and pricey for the time. Worth it from June to October.'
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
    "weatherNote": "Sunset is 16:37, so it is dark by the time you reach the city. Forecast on 6 Nov: dry, about 16 °C by day and ~5 °C at night — keep a jacket in your cabin bag.",
    "bring": "Passport, printouts of return ticket + Airbnb booking, US$100–200 in clean notes (INR can’t be exchanged in Kazakhstan), Yandex Go + 2GIS + Google Translate (offline Russian), Airbnb check-in instructions saved offline.",
    "planB": "Train still waitlisted when the chart is prepared (about 4 h before departure)? A waitlisted e-ticket is cancelled automatically and you can’t board. Have a backup ready for Fri 6 Nov: a daytime train or an evening flight to Delhi, then a night near the airport. Uber’s Alternate Travel Plan refunds 2× the fare for train. If Almaty immigration or the SIM queue is slow, eat at Navat (0.47 km from the Airbnb).",
    "events": [
      {
        "time": "Fri 6 Nov · 09:05 PM",
        "type": "train",
        "icon": "🚆",
        "title": "Rajdhani Express 22691: Bhopal Jn → Hazrat Nizamuddin",
        "getThere": "Board at Bhopal Junction; check the coach and berth on your PNR once the chart is out.",
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
        "getThere": "Rajdhani 22691 terminates at Hazrat Nizamuddin (not New Delhi station).",
        "description": "Freshen up and have breakfast at or near the station. You have time: the flight is at 12:10.",
        "tip": "Rajdhani trains can run late; even 2 h late still leaves enough time for the airport."
      },
      {
        "time": "07:30 AM – 08:30 AM",
        "type": "transfer",
        "title": "Cab to Delhi Airport Terminal 3",
        "getThere": "Hazrat Nizamuddin → Delhi T3: 24.8 km by road, ~30 min with no traffic, 45–60 min in the morning. Book Uber/Ola from the station’s pickup area; ask for “T3 departures”.",
        "description": "About 45–60 minutes from Nizamuddin depending on traffic.",
        "cost": "Uber/Ola ~₹400–700",
        "tip": "Aim to reach T3 by about 09:00 — 3 hours before an international flight."
      },
      {
        "time": "09:00 AM",
        "type": "flight",
        "title": "Check-in at Delhi IGI Airport (T3)",
        "getThere": "Air Astana counters are in T3 international departures — check the screens for the row.",
        "description": "Check in and clear emigration at Terminal 3 for Air Astana KC908.",
        "tip": "Cabin 8 kg + one checked bag up to 23 kg."
      },
      {
        "time": "12:10 PM – 03:10 PM",
        "type": "flight",
        "title": "Air Astana KC908: DEL → ALA (3h 30m direct)",
        "getThere": "Gate shown on your boarding pass; boarding usually starts ~45 min before.",
        "description": "Lands at Almaty Terminal 2 (all international flights) at 15:10 local time (UTC+5, 30 min behind IST)."
      },
      {
        "time": "03:10 PM – 04:10 PM",
        "type": "arrival",
        "title": "Immigration at ALA Terminal 2",
        "getThere": "Follow “Arrivals / Passport control” from the gate; baggage claim is after immigration.",
        "description": "Indian passports get 14 days visa-free. Stays up to 30 days need no migration registration, so nothing to file for 7 nights.",
        "tip": "Keep your passport on you all trip: police don’t accept photocopies. No arrival card to fill in — they check your passport, take a photo and stamp you in. Several travellers say allow about an hour from landing to the kerb. QazETA (the new e-permit) is only a voluntary pilot until 1 Jul 2027 — not needed for this trip.",
        "image": "./assets/places/almaty-airport.jpg"
      },
      {
        "time": "04:10 PM – 04:40 PM",
        "type": "setup",
        "icon": "📶",
        "title": "SIM card (Beeline first), a little cash & taxi app",
        "getThere": "After customs, in the arrivals hall on the ground floor, before the exit doors. Airport Wi-Fi needs an SMS code, so get the SIM before ordering the taxi.",
        "description": "Beeline, Tele2, Kcell and Altel have counters side by side in the arrivals hall (an Aug 2026 guide says Beeline’s is 24/7; another says 07:00–23:00 — either way open at 16:00). Buy only at a counter branded with one operator: in 2024 Beeline said a multi-brand airport kiosk was not an official Beeline office.",
        "tickets": "Bring your passport — they photograph it to register the SIM. Beeline: the 6,000 ₸ “40 GB unlimited” and 10,000 ₸ “unlimited” boards you saw are not confirmed anywhere; Beeline’s “unlimited” plans have a cap and then slow to 256 Kbps. Ask at the counter, in writing: GB before slowdown, hotspot allowed?, minutes/SMS included, validity. Fallback if Beeline’s offer is unclear: Tele2 tourist pack ~5,590 ₸ (25 GB 4G + 25 GB 5G, 240 min, 30 days).",
        "tip": "No IMEI registration is needed: a foreign phone on a local SIM only gets blocked after 30 days. 25–40 GB is plenty for 7 days. Change only ~US$50 at the airport (rates are worse); do the rest at MiG on Dostyk (below). RuPay probably won’t work — use Visa/Mastercard."
      },
      {
        "time": "04:40 PM – 05:30 PM",
        "type": "transfer",
        "title": "Yandex Go to your Airbnb (near Dostyk Ave)",
        "getThere": "Airport T2 → Airbnb: 14.1 km, ~17 min with no traffic, 30–45 min at 17:00. Order in Yandex Go and walk to the pickup point the app shows (exact spot not confirmed — one report says ~200 m away at short-term parking). Only get in a car whose plate matches the app.",
        "description": "Order in the app and walk to the marked Yandex pickup zone outside Terminal 2. 25–45 min to the centre.",
        "cost": "Economy ~2,500–4,500 ₸ · Comfort ~3,500–6,000 ₸",
        "tip": "Ignore drivers who approach you in arrivals (they ask 8,000–18,000 ₸ cash). Check the plate before getting in. Message your Airbnb host your arrival time (~16:30) and get the check-in instructions before you fly. Repeated warnings: never let a driver cancel the app booking and take you “privately”, and don’t follow anyone to an unmarked car. Link your card in the app before landing but carry tenge — several reports say foreign cards fail in Yandex Go. Free waiting is short, then it’s charged.",
        "backup": "Official “Taxi Point” desk at exits A/B (fixed fare, ~9,000 ₸)."
      },
      {
        "time": "06:00 PM – 06:30 PM",
        "type": "setup",
        "icon": "💱",
        "title": "Change USD at MiG 2 (Dostyk 40 × Kabanbay Batyr)",
        "getThere": "Airbnb → MiG 2: walk 0.44 km, ~6 min, to Dostyk 40 at the Kabanbay Batyr corner.",
        "description": "MiG is an Almaty exchange chain (34 offices). MiG 2 is the closest branch to the Airbnb (a short detour north before dinner). It’s open 09:00–20:00 daily with no break. Other nearby branches: MiG 12 (Satpayev 2 × Dostyk), MiG 15 (Tole Bi 24a × Dostyk), MiG 4 (Abay 40 × Baitursynov).",
        "tickets": "Phone +7 727 341 00 69. mig.kz publishes one network-wide rate table (5 Nov: buys USD at ₸449.5 per $1); still compare the board with the rate in the app before you hand over notes.",
        "tip": "Is the rate good? Per $1: ₸450–454 excellent · 447–449 good · 444–446 acceptable · 440–443 negotiate · below 440 avoid (target ₸452; $100 → ~₸44,900–45,200). Full table, incl. INR, on the Prep page. Bring clean, new-series US$100 notes with no tears, and carry your passport. Count the tenge at the window and keep the receipt. Count the tenge before you leave the window — the one repeated exchange scam is a good rate on the board and less cash handed over.",
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
        "description": "Navat chaikhana (Dostyk 48, 10:00–00:00) — recommended by 11 of 29 food sources; 2GIS 4.9 from ~19,800 ratings. Save beshbarmak for Sandyq or AUYL later in the week. Still fresh afterwards? Take the metro to Zhibek Zholy for the lit-up Arbat pedestrian street (route below).",
        "getThere": "MiG 2 → Navat (Dostyk 48): walk 0.55 km south along Dostyk, ~7 min. Navat → Airbnb afterwards: 0.47 km, ~6 min. For the Arbat instead: walk 1.00 km (~13 min) from Navat to Abay metro, ride 2 stops north to Zhibek Zholy (120 ₸, tap Visa/Mastercard), exit onto the pedestrian street; Yandex back ~800–1,200 ₸.",
        "cost": "~5,000–8,000 ₸ per person",
        "tip": "Bills often include 10–15% service (“обслуживание”) — no extra tip needed then. Rakhat chocolate shop is at Zhibek Zholy 47 × Kaldayakov.",
        "links": [
          {
            "label": "Navat Dostyk on Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Navat+Dostyk+48+Almaty"
          }
        ],
        "order": [
          "Baursaks (free with tea)",
          "Horse plov",
          "Tandoor samsa",
          "Guiru lagman",
          "Manti",
          "Tashkent tea"
        ],
        "orderNote": "Most-named dishes across Navat reviews (baursaks 8×, plov 7×, samsa 5×)."
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
    "subtitle": "One compact old-town loop on foot (Panfilov Park → Green Bazaar → Central Mosque are 0.7–0.8 km apart), a bakery stop, then the cable car up Kok Tobe for sunset and a shashlik dinner.",
    "weatherNote": "Forecast on 6 Nov: dry and mild (~5–16 °C) — a good Kok Tobe day. Go up only if the air is clear (check the IQAir app): smog can hide the view by afternoon. Sunset 16:36.",
    "bring": "Cash for the bazaar (5,000–10,000 ₸), clothes covering arms and legs plus a scarf (needed at the mosque; women also cover their heads at the cathedral), socks without holes (shoes off at the mosque), warm layers for Kok Tobe after dark.",
    "planB": "Rain all day: Central State Museum (Yandex ~10 min from the old town; price reports 500–5,000 ₸) and Akku café, still do the Green Bazaar (indoor hall). Move Kok Tobe to Tuesday.",
    "events": [
      {
        "time": "09:00 AM – 10:00 AM",
        "type": "breakfast",
        "title": "Brunch at Six Coffee+Wine",
        "getThere": "Airbnb → Six Coffee (Abay 17): walk 1.08 km, ~14 min. Nedelka (Abay 19) is next door: 1.14 km, ~15 min.",
        "description": "2GIS 4.9 from ~9,600 ratings; recommended by Spotted by Locals, weproject and Reddit locals. Busy at peak — expect a short wait.",
        "cost": "~3,500–6,000 ₸",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Six+Coffee+Wine+Abay+17+Almaty"
          }
        ],
        "order": [
          "Croissants",
          "Cappuccino or flat white",
          "Winter tea",
          "Hot chocolate"
        ],
        "orderNote": "What reviewers name most often."
      },
      {
        "time": "10:00 AM – 11:15 AM",
        "type": "sight",
        "title": "28 Panfilov Guardsmen Park & Ascension (Zenkov) Cathedral",
        "description": "Walk the park first: the huge Panfilov Guardsmen war memorial and eternal flame at the east end, then the pastel 1907 Ascension Cathedral with its golden domes — built of wood without nails, in the middle of the park. Free.",
        "getThere": "Six Coffee → park’s war memorial: Yandex 3.2 km, ~5–10 min (~800–1,200 ₸), or walk 1.97 km, ~26 min. Memorial → cathedral: walk 0.25 km, ~3 min.",
        "tickets": "Free · open 07:00–18:00",
        "tip": "Women cover their heads; no flash photography inside. Morning light is best on the cathedral’s east side. Men take hats off inside; ask before photographing during a service. The eternal flame is in front of the black war memorial.",
        "image": "./assets/places/zenkov-cathedral.jpg"
      },
      {
        "time": "11:30 AM – 01:30 PM",
        "type": "market",
        "title": "Green Bazaar (Kok Bazar): graze your way through lunch",
        "description": "Food writers’ advice: walk the market first, then taste — vendors offer kazy and smoked horse in the meat hall at the back, dried fruit and nuts at the front, Korean salads in the salad row, kurt and irimshik in the dairy section. Tandoor samsa and fresh lepeshka from the stalls make lunch. Don’t order beshbarmak here — one guide says the bazaar versions target tourists.",
        "getThere": "Cathedral → Green Bazaar (Zhibek Zholy 53): walk 0.82 km north, ~11 min.",
        "cost": "Bring cash — tastes are free; tandoor samsa ~300–900 ₸ each",
        "tip": "Closed Mondays — so today is the day. Bargain on dried fruit and souvenirs, watch for pickpockets, taste before buying. The Rakhat factory store (Zenkov 2) is nearby. How reviewers do it: enter the main hall from Zhibek Zholy — dried fruit, nuts and spices at the front, then the Korean salads, then dairy (kurt, irimshik). The newer central pavilion (entrance from Makataev St) has farm produce, honey and cheese, and is said to be 20–30% cheaper for some goods. Taste freely but don’t overdo it; opening prices are inflated, so bargain politely for 5–10% off. Bring cash.",
        "links": [
          {
            "label": "Green Bazaar on Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Green+Bazaar+Zhibek+Zholy+53+Almaty"
          }
        ],
        "image": "./assets/places/green-bazaar.jpg",
        "order": [
          "Kazy & smoked horse (free tastes)",
          "Tandoor samsa",
          "Lepeshka bread",
          "Korean carrot salad (morkovcha)",
          "Kurt & irimshik",
          "Aport apples"
        ],
        "orderNote": "Repeated by Tengrinews, Andrew Zimmern, welcome.kz and Spotted by Locals."
      },
      {
        "time": "01:40 PM – 02:10 PM",
        "type": "sight",
        "icon": "🕌",
        "title": "Almaty Central Mosque (Pushkin St 16)",
        "getThere": "Green Bazaar → mosque: walk 0.68 km north-west, ~9 min — the gold dome is visible from the bazaar.",
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
        "time": "02:20 PM – 03:00 PM",
        "type": "cafe",
        "icon": "🥐",
        "title": "Coffee & pastry at Vanilla",
        "getThere": "Mosque → Vanilla (Kurmangazy 54): Yandex 3.9 km, ~10 min (~1,000–1,300 ₸). Then Vanilla → Kok Tobe lower station: walk 1.38 km, ~18 min, or Yandex 1.9 km, ~5 min.",
        "description": "Bakery-café recommended by 4 guides (European Coffee Trip, bucketlistly, Yandex Open Kitchen, sxodim); Yandex 5.0 from 334, 2GIS 4.8 from 1,600+. A warm sit-down before Kok Tobe.",
        "order": [
          "Croissants",
          "Pastries",
          "Matcha latte",
          "Zucchini pancakes"
        ],
        "cost": "~2,500–4,000 ₸"
      },
      {
        "time": "03:15 PM – 06:30 PM",
        "type": "sunset",
        "title": "Kok Tobe cable car for sunset & city lights",
        "description": "Ride up about an hour before the 16:36 sunset, watch the mountains turn pink, stay for the city lights. Cafés and restaurants on top.",
        "getThere": "Vanilla → Kok Tobe lower station (Dostyk 104B, opposite the Palace of the Republic): walk 1.38 km, ~18 min, or Yandex 1.9 km, ~5 min.",
        "tickets": "At the station: 10,000 ₸ return / 6,000 ₸ one way (confirmed 2 Nov 2026). Fri–Sun 10:00–00:00, Mon/Wed/Thu 10:00–23:00, Tue from 13:00 (morning maintenance). It closed for an overhaul in early–mid Nov 2025; no 2026 closure announced — check koktobe.com the day before.",
        "tip": "Skip the restaurants at the top — several reviewers call them tourist-priced and mediocre; eat at the bottom instead (next stop). Skip the mini-zoo. Taxis can’t drive up (25,000 ₸ car fee) — the park shuttle from Dostyk is 3,000 ₸ one way if the cable car is closed. Reviewers repeat: it’s Sunday, so expect a queue (~20 min) — be at the station by ~15:30 for the 16:36 sunset. Buy a return: the walking path down has been closed since May 2026. Worth it at the top: the viewing decks and the Beatles bench; the TV tower is closed; food up there is mediocre.",
        "backup": "Hazy or raining: try Tuesday’s sunset instead (cable car opens 13:00 on Tuesdays), or see the city lights from Bar Fly on the 26th floor of Hotel Kazakhstan.",
        "links": [
          {
            "label": "Kok Tobe station",
            "href": "https://www.google.com/maps/search/?api=1&query=Kok+Tobe+cable+car+lower+station+Dostyk+Almaty"
          }
        ],
        "image": "./assets/places/kok-tobe.jpg"
      },
      {
        "time": "06:00 PM – 08:45 PM",
        "type": "show",
        "icon": "🩰",
        "title": "Option: Giselle at the Abai Opera & Ballet Theatre",
        "getThere": "Kok Tobe lower station → Abai Opera Theatre (Kabanbay Batyr 110): Yandex 2.8 km, ~5–10 min (~1,000 ₸), or walk 1.84 km, ~25 min. Afterwards → Airbnb: walk 1.37 km, ~18 min.",
        "description": "Classic ballet in the grand Soviet-era hall — Giselle plays Sun 8 Nov at 18:00 (theatre playbill, checked 6 Nov). Leave Kok Tobe right after sunset (~17:15) to make it. If you go, skip Na Kirova (it sells out by late evening) and eat at Navat afterwards (0.47 km from the Airbnb, open to midnight).",
        "tickets": "From ~2,125 ₸ on ticketon.kz or abaykazntob.kz.",
        "links": [
          {
            "label": "Abai Opera playbill",
            "href": "https://abaykazntob.kz/"
          },
          {
            "label": "Ticketon",
            "href": "https://ticketon.kz/almaty"
          }
        ]
      },
      {
        "time": "06:15 PM – 07:45 PM",
        "type": "dinner",
        "icon": "🍢",
        "title": "Shashlik dinner at Shashlychnaya na Kirova",
        "getThere": "Kok Tobe lower station → Na Kirova (Bogenbay Batyr 72): walk 1.59 km, ~21 min, or Yandex 2.2 km, ~5 min. Afterwards → Airbnb: walk 0.97 km, ~13 min.",
        "description": "The city’s cult no-frills shashlik house — 4 sources (Tengrinews, Digital Business, Saiga Tours, sxodim); Yandex 4.9 from ~2,500 and 2GIS 4.4 from ~7,600 ratings. Skewers from ~1,000 ₸ each.",
        "order": [
          "Lamb shashlik",
          "Duck shashlik",
          "Kidney or heart skewers",
          "Achichuk (tomato-onion salad)"
        ],
        "orderNote": "The skewers reviewers name most.",
        "tip": "Reviewers repeat: waits of 1–1.5 h at peak and it sells out — go straight after sunset (~18:00). Cramped and basic; cash handy.",
        "cost": "~3,000–6,000 ₸"
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
    "title": "Shymbulak & Talgar Pass (3,200 m) by three lifts, then dinner at AUYL",
    "subtitle": "Three lifts from Medeu up to 3,200 m, above the city smog, then an early dinner at AUYL next to the gondola. The forecast makes this the best mountain day of the week — and museums and the bazaar are shut on Mondays anyway.",
    "weatherNote": "Forecast on 6 Nov: dry, light wind, about −5…+5 °C at 3,200 m — the clearest mountain window of your trip (snow arrives Tue night/Wed). Trails are icy in the morning after the overnight refreeze. Combi-2 to Talgar Pass closed at 16:30 last winter (2026 hours not published) — be heading down by ~15:00. The official live page (shymbulak.com/live) needs a browser: check it in the morning, or ask at the Medeu ticket desk which lifts are running.",
    "bring": "Warm jacket, hat, gloves, sunglasses (snow glare), sunscreen, grippy boots (microspikes if you have them), water and a snack, passport, a card for lift tickets.",
    "planB": "Lifts stopped by wind: swap with Tuesday 10 (the horse ride moves to Monday if the operator has space).",
    "events": [
      {
        "time": "08:00 AM – 08:45 AM",
        "type": "transfer",
        "title": "Yandex Go to the Medeu gondola station",
        "getThere": "Airbnb → Medeu cable car station: Yandex 15.6 km up Dostyk Ave and the Medeu road, ~28 min with no traffic, 35–45 min in the morning. Set the destination to “Канатная дорога Медеу” — the rink car park is fenced off until December.",
        "description": "Leave by 08:00. The whole Shymbulak round trip takes most of the day once you add ticket queues, three lifts, transfers and the ride down — guides say allow at least 3 hours even without stopping, and the upper lift closes ~16:30.",
        "cost": "~2,000–4,000 ₸",
        "tip": "Buy the lift ticket in the Shymbulak app or on shymbulak.com the night before — reviewers say it’s cheaper than the desk and skips the desk queue (30–40 min on busy days; Monday is among the quietest). Screenshot the QR. Bus 12 also goes to Medeu but needs an Onay card bought with cash — a taxi is easier. The road above Medeu is closed to cars until 30 Nov, so the gondola is the only way up."
      },
      {
        "time": "08:45 AM – 09:15 AM",
        "type": "sight",
        "title": "Tickets at Medeu & a look at the dam",
        "getThere": "Get out at the Medeu cable car lower station; the ticket desk and turnstiles are in the station building. The dam is visible from the terrace.",
        "description": "Pick up or buy tickets (desk if you didn’t buy online), use the toilet — the next ones are at Shymbulak base — and look up at the Medeu dam. The ice rink is closed for reconstruction (possibly until 2028).",
        "image": "./assets/places/medeu.jpg"
      },
      {
        "time": "09:15 AM – 10:30 AM",
        "type": "alpine",
        "title": "Up to Talgar Pass (3,200 m): gondola + Combi-1 + Combi-2",
        "getThere": "① Gondola Medeu (1,690 m) → Shymbulak base (2,260 m): 4.5 km, ~15–20 min. ② Walk ~5–10 min across the base to the Combi-1 station (follow “Комби-1” signs). ③ Combi-1 to the mid station (~2,800 m): ~10–13 min. ④ Change to Combi-2 → Talgar Pass (3,200 m): ~5–8 min. Riding alone is ~35–40 min; with queues and transfers plan ~1 h 15 min.",
        "description": "Glacier and peak views, usually sunny above the city haze.",
        "tickets": "Adult 12,000 ₸ return Medeu ↔ Talgar Pass · 7,000 ₸ one way (Sep 2026 prices; the resort resets them each autumn — check the app). The glass “360°” cabin price for 2026 isn’t published. Lifts reopened after maintenance on 2 Nov; the KKD-4 chairlift stays shut until 10 Nov (you don’t need it).",
        "tip": "Last rides up close early: last winter Combi-2 ran to 16:30, Combi-1 to 17:00, the gondola to 18:00 — a reviewer missed the last Combi-2 after sitting in a café. No skiing this trip (season not open) — “TUBE” rental couldn’t be found anywhere (maybe “Tobe”, @tobe.kz).",
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
        "time": "10:30 AM – 12:30 PM",
        "type": "alpine",
        "icon": "🏔️",
        "title": "Talgar Pass: views, snow & a hot drink at 3,200 m",
        "getThere": "You’re at the Combi-2 top station; the viewpoints are a few minutes’ walk around it.",
        "description": "Take it slow for the first 30 minutes (altitude) and drink water. Walk the viewpoints around the top station towards the Tuyuksu glaciers, then warm up at Panorama Café or Bar 3200 next to Combi-2 (pricey, as reviewers note).",
        "tip": "It’s about −5…+5 °C with wind up here — sunglasses and sunscreen even in November. Horse rides are offered at Shymbulak from ~3,500 ₸ per 15 min (paid on the spot) if you want one at the base later."
      },
      {
        "time": "12:30 PM – 02:30 PM",
        "type": "food",
        "title": "Down to Shymbulak base: lunch & a wander",
        "getThere": "Combi-2 down (~5–8 min) → Combi-1 down (~10–13 min) to the base, ~30 min with the transfer.",
        "description": "A light lunch at a resort café at the base, then wander the resort and the snowy slopes — keep room for the early dinner at AUYL.",
        "cost": "Mountain prices — keep it light"
      },
      {
        "time": "02:30 PM – 03:15 PM",
        "type": "transfer",
        "title": "Gondola down to Medeu",
        "getThere": "Shymbulak base → Medeu by gondola, 4.5 km, ~15–20 min (allow 30 min with the queue). Then Medeu station → AUYL: walk 1.01 km down the road, ~13 min, or Yandex 1.1 km, ~3 min.",
        "description": "Head down before ~15:00 — reviewers say the gondola gets crowded near closing."
      },
      {
        "time": "03:30 PM – 05:30 PM",
        "type": "dinner",
        "icon": "🏔️",
        "title": "Early dinner at AUYL (book ahead)",
        "getThere": "Medeu station → AUYL: walk 1.01 km, ~13 min, or Yandex 1.1 km, ~3 min. Home afterwards: AUYL → Airbnb by Yandex 15.8 km, ~30–40 min (~2,000–4,000 ₸).",
        "description": "WhereToEat Kazakhstan 2025 #1 restaurant; recommended by 9 of 29 food sources; Yandex 5.0 from ~2,300 ratings — and next to the Medeu gondola.",
        "cost": "~12,000–25,000 ₸ per person",
        "tip": "Book a table (reviewers say days ahead at weekends; a Monday is easier). Repeated complaints: noisy, patchy service. Portions are big — share.",
        "links": [
          {
            "label": "AUYL on Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=AUYL+restaurant+Medeu+Almaty"
          }
        ],
        "order": [
          "Horse tartare",
          "Baursaks with balqaimaq",
          "Beshbarmak",
          "Marrow bones",
          "Dungan noodles with quail",
          "Kumys (to try)"
        ],
        "orderNote": "Horse tartare is the most-named dish in its reviews."
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
    "city": "Ile-Alatau foothills & Almaty",
    "title": "Horseback ride in Ile-Alatau National Park, Arasan baths & Georgian dinner",
    "subtitle": "A comfortable nature morning on calm horses in the mountains (pickup and drop-off at your door, picnic brunch included), then warm up in a Soviet bathhouse and finish with khachapuri and a 26th-floor city view.",
    "weatherNote": "Forecast on 6 Nov: mild (~9–17 °C) with a ~50% chance of showers — the better of the two free days for being outdoors; raincoats are provided on the ride. Sunset 16:34.",
    "bring": "Warm layers, long trousers, closed shoes with a heel, gloves, sunglasses; your own towel, flip-flops and a felt hat for the baths.",
    "planB": "Ride cancelled for weather: take the private Issyk Lake scenic drive instead (Kazia Tours, 4.5 h, car parks ~10 min on asphalt from the lake; new listing, no reviews yet) or simply do the baths in the morning and rest.",
    "events": [
      {
        "time": "Book by Sun 8 Nov",
        "type": "tour",
        "icon": "🎟️",
        "title": "Book: Horseback riding in Ile-Alatau National Park (Almaty Tourss)",
        "getThere": "Book on GetYourGuide (link below); Tue 10 showed as available on 6 Nov.",
        "description": "4.8 from 309 reviews, ₹4,913 per person. Hotel pickup, ~50 min drive to the Talgar side of the park, a 2.5 h ride on calm horses with a beginner briefing, then a 45-min picnic brunch. Park fees, helmets and raincoats included.",
        "tip": "Reviews from 2 and 4 Nov 2026 call it “calm, easy and highly rewarding”; repeated praise for well-kept horses and changing scenery, repeated complaint: less attention per rider in big groups. Weight limit 120 kg. 2.5 h in the saddle is tiring for first-timers — ask for a short break mid-ride.",
        "links": [
          {
            "label": "GYG horse ride",
            "href": "https://www.getyourguide.com/almaty-city-l1414/-t1298560/"
          }
        ]
      },
      {
        "time": "~08:30 AM – 02:00 PM",
        "type": "nature",
        "icon": "🐎",
        "title": "Horse ride in the Ile-Alatau foothills + picnic brunch",
        "getThere": "Pickup at the Airbnb (give the operator your address; confirm the time in the booking). ~50 min drive each way.",
        "description": "Mountain views, autumn forest and the first snow on the peaks — from the saddle, with almost no walking. Eat light before pickup; brunch is included."
      },
      {
        "time": "03:00 PM – 05:00 PM",
        "type": "spa",
        "title": "Arasan Wellness & SPA (1982 Soviet bathhouse)",
        "getThere": "Airbnb → Arasan (Tulebaev 78): Yandex 1.8 km, ~5 min (~800–1,000 ₸), or walk 1.84 km, ~25 min.",
        "description": "Russian banya, Finnish sauna, hammam and plunge pools in a grand Soviet building — the perfect way to warm up after the ride. Separate men’s and women’s sections.",
        "tickets": "07:00–23:30. Charged by the hour (weekday 2 h ~3,800–4,500 ₸); towel, sheet and slippers extra. Phone +7 727 390 10 10.",
        "tip": "First-timer routine repeated by reviewers: pay → wristband (opens your locker; extras are charged to it). Women left, men right. Shower before every sauna or pool; no phones past the lockers. Buy a venik at the entrance, soak it, use it only in the Russian banya.",
        "links": [
          {
            "label": "Arasan on Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Arasan+Wellness+SPA+Tulebaev+78+Almaty"
          }
        ]
      },
      {
        "time": "05:30 PM – 07:00 PM",
        "type": "dinner",
        "icon": "🥟",
        "title": "Georgian dinner at Daredzhani",
        "getThere": "Arasan → Daredzhani (Kurmangazy 11): Yandex 2.1 km, ~5 min (~800–1,000 ₸).",
        "description": "Georgian food is mainstream in Almaty; Daredzhani is the locals’ default pick (4 sources incl. Reddit and a sxodim readers’ vote; Yandex 5.0 from ~1,100 ratings for this branch). Alternative with the biggest rating count: Dadiani (Kabanbay Batyr 37; 2GIS 4.9 from ~4,900) — book; loud live music upstairs.",
        "order": [
          "Adjarian khachapuri",
          "Khinkali",
          "Shkmeruli (chicken in garlic-milk sauce)",
          "Chikhirtma soup"
        ],
        "orderNote": "Khachapuri 9× and khinkali 6× in reviews. Eat khinkali by hand: bite, sip the broth, leave the knot.",
        "cost": "~5,000–7,000 ₸"
      },
      {
        "time": "07:15 PM – 08:30 PM",
        "type": "sunset",
        "icon": "🌃",
        "title": "City lights from Bar Fly (26th floor, Hotel Kazakhstan)",
        "getThere": "Daredzhani → Hotel Kazakhstan (Dostyk 52/2): walk 0.45 km, ~6 min. Afterwards → Airbnb: walk 0.76 km, ~10 min.",
        "description": "Several nightlife guides name it the best indoor view over the city lights — a calm end to the day.",
        "tip": "Opening hours aren’t confirmed — ask at the hotel desk first. Smog can blur the view on still nights."
      }
    ],
    "placeIds": []
  },
  {
    "dayNumber": 5,
    "date": "2026-11-11",
    "weekday": "Wednesday",
    "city": "Huns nomad village & Almaty",
    "title": "Nomad village day (yurts, baursak class, horsemanship show) & farewell feast at Sandyq",
    "subtitle": "A culture-and-food day out of the city in and around yurts — little walking, lunch included — then the farewell dinner tonight, because the lakes tour fills Thursday and Friday. Early night: Airbnb checkout at 06:15.",
    "weatherNote": "Forecast on 6 Nov: rain in the city (~80%), 2–11 °C; snow falling in the mountains (the snow you’ll see at the lakes on Thursday). Much of the village programme is inside yurts; the horse show may be shortened in rain.",
    "bring": "Waterproof jacket, warm layers, cash for extras; pack for the tour tonight.",
    "planB": "If the village isn’t running, make it a slow city day: breakfast at Bon Bon (Abylai Khan 123; Yandex 2.0 km), Akku café (Airbnb → Akku Yandex 1.6 km), souvenirs at TSUM (Abylai Khan 62) and the Rakhat shop on the Arbat (Zhibek Zholy 47; TSUM → Rakhat walk 1.36 km), back by 17:00 to pack.",
    "events": [
      {
        "time": "Book by Sun 8 Nov",
        "type": "tour",
        "icon": "🎟️",
        "title": "Book: Huns nomad village (Kazakh aul) + Ak-Bulak (VOSTOK)",
        "getThere": "Book on GetYourGuide (link below); Wed 11 showed as available on 6 Nov.",
        "description": "4.3 from 38 reviews, ₹13,780 per person, 8 h. The newest review on the page is from May 2026 — message the operator before paying to confirm it is running this week and whether the horse show goes ahead in rain.",
        "tip": "Cancellation: only 50% back if you cancel less than 48 h ahead — confirm first. Comfortable alternative on the same day: the private Issyk Lake drive (Kazia Tours), but snow on the mountain road makes Wednesday the worse day for it.",
        "links": [
          {
            "label": "GYG Huns village day",
            "href": "https://www.getyourguide.com/almaty-city-l1414/-t470005/"
          },
          {
            "label": "Private Issyk Lake drive (alt.)",
            "href": "https://www.getyourguide.com/almaty-city-l1414/-t1460574/"
          }
        ]
      },
      {
        "time": "09:00 AM – 05:00 PM",
        "type": "tour",
        "icon": "🛖",
        "title": "Huns ethno-village: welcome ritual, baursak cooking, yurts, horsemanship show",
        "getThere": "Tour transfer from Almaty (pickup per the booking), ~2 h each way; back after 16:00.",
        "description": "Arrive ~11:00 to a welcome ritual, a baursak-cooking class with tea, a yurt demonstration, a horsemanship show (dzhigitovka, kyz kuu), plov lunch and archery.",
        "order": [
          "Baursaks you fry yourself",
          "Plov lunch",
          "Kazakh tea with milk"
        ],
        "orderNote": "Meals are part of the programme."
      },
      {
        "time": "05:00 PM – 06:30 PM",
        "type": "checkin",
        "icon": "🧳",
        "title": "Back at the Airbnb: pack for the tour & the flight",
        "getThere": "Tour drop-off → Airbnb (ask to be dropped at your address or Hotel Kazakhstan, 0.75 km away).",
        "description": "Pack a small overnight bag for the lakes tour (warm layers, boots, power bank, cash, passport) and the big bag for Hotel Kazakhstan. Message the tour operator to confirm Thursday’s pickup and your Airbnb host about the 06:15 checkout. Souvenirs you still want: felt crafts are also sold at the Green Bazaar (Sunday) and Rakhat chocolate at the airport is pricier — buy it in town if you can."
      },
      {
        "time": "07:00 PM – 09:00 PM",
        "type": "dinner",
        "icon": "🎶",
        "title": "Farewell feast at Sandyq (book)",
        "getThere": "Airbnb → Sandyq (Abylai Khan 55; Yandex lists it as Alimzhanov 55 — use the app pin): Yandex 3.0 km, ~5–10 min (~1,000–1,500 ₸). Back the same way.",
        "description": "WhereToEat Kazakhstan 2025 Best Kazakh Restaurant; the place food sources agree on most (12 of 29); Yandex 5.0 from ~4,300 and 2GIS 4.9 from ~9,300 ratings. Live music in the evenings and an English menu.",
        "order": [
          "Beshbarmak",
          "Baursaks stuffed with irimshik",
          "Smoked horse & kazy",
          "Kuyrdak",
          "Kumys (from the kumys bar)"
        ],
        "orderNote": "Most-named in Sandyq reviews: beshbarmak and kumys (4× each), baursaks and smoked horse (3×).",
        "cost": "~6,000–10,000 ₸ per person + 15% service",
        "tip": "Book ahead. Repeated complaints: slow on busy nights and dishes sometimes arrive lukewarm — say so and they’ll fix it. The 15% service is on the bill, so no extra tip. Early night: alarm ~05:45.",
        "links": [
          {
            "label": "Sandyq on Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Sandyq+restaurant+Almaty"
          }
        ]
      }
    ],
    "placeIds": []
  },
  {
    "dayNumber": 6,
    "date": "2026-11-12",
    "weekday": "Thursday",
    "city": "Black Canyon & Kolsai → yurt camp",
    "title": "2-day tour, day 1: Black & Moon canyons and Kolsai Lake (book now)",
    "subtitle": "Early pickup, the long drive east, two canyon viewpoints, then Kolsai Lake in fresh snow. Night in a heated yurt camp. Timings follow the Kazakhstan Guided Tours itinerary.",
    "weatherNote": "Forecast on 6 Nov: cold (city −1…+4 °C) with sleet early; the mountains have fresh snow from the 11th. Roads from Saty can hold snow — the operator decides on the Kaindy road. Sunset ~16:30, so Kolsai is the last stop before dark.",
    "bring": "Passport, tenge cash (no ATMs; shuttles ~1,000 ₸, park fees ~700–1,000 ₸), warm layers, waterproof jacket, gloves, hat, boots with grip, power bank (bus sockets often don’t work), snacks and water (no toilet on the bus), earplugs for the yurt, head torch.",
    "planB": "If the operator cancels for snow, swap to a city day (Shymbulak again for fresh snow, or the museums) and ask about Kaindy/Kolsai on a private driver.",
    "events": [
      {
        "time": "Book by Sun 8 Nov",
        "type": "tour",
        "icon": "🎟️",
        "title": "Book ONE 2-day tour: Kolsai, Kaindy, Black Canyon & Charyn",
        "getThere": "Book online (links below) and screenshot the voucher with the pickup point.",
        "description": "⭐ Recommended: Kazakhstan Guided Tours (GetYourGuide, 4.8 from 1,115 reviews). It departs only Sun 8, Tue 10 and Thu 12 — take <strong>Thu 12–Fri 13</strong>: fresh snow on the lakes and a dry day for Kaindy and Charyn, instead of the ~80% rain forecast for the 11th. Reviewers praise the guides and the heated yurts (7 winter reviews: “warm and cozy despite the cold”, heated showers).",
        "tickets": "From ₹7,545 per person (shown 6 Nov). Before paying, message them to confirm (1) a newer bus — 3 breakdowns were reported in Oct 2026, one stranding a group for 4 h; (2) the yurt is heated; (3) the Kaindy road after the 11 Nov snow. If they won’t confirm the bus, a private driver (~320,000 ₸ for two) removes that risk.",
        "tip": "Backup only if KGT is full: JoinMe (66 poor reviews since Jun 2025 — 40–45-seat coach, late-night arrivals, shared beds, extra charges). Avoid Panda’s 2-day (3.8, merged tours, no guide). Day trips (17 h, 1–1.5 h per site) aren’t worth it in November.",
        "links": [
          {
            "label": "⭐ GYG 2-day (Kazakhstan Guided Tours)",
            "href": "https://www.getyourguide.com/almaty-city-l1414/almaty-kolsai-kaindy-lakes-charyn-canyons-2-day-tour-t489855/"
          },
          {
            "label": "JoinMe 2-day (backup)",
            "href": "https://www.joinme.kz/en/tours/almaty-region/group-tours/kaindy-kolsai-2-days-early-start"
          }
        ]
      },
      {
        "time": "06:15 AM – 06:45 AM",
        "type": "checkin",
        "icon": "🧳",
        "title": "Check out of the Airbnb & drop bags at Hotel Kazakhstan",
        "getThere": "Airbnb → Hotel Kazakhstan (Dostyk 52/2): walk 0.75 km, ~10 min, or Yandex 0.7 km, ~2 min with bags.",
        "description": "Book Hotel Kazakhstan for the night of Fri 13 (one night only — you sleep in the yurt on the 12th). It’s the tour’s pickup and drop-off point, has a 24/7 desk for the 04:00 airport run, and can hold your big bag while you’re away — confirm luggage storage when you book.",
        "tip": "Confirm the self-checkout time with your Airbnb host the day before."
      },
      {
        "time": "07:00 AM – 11:30 AM",
        "type": "tour",
        "title": "Pickup & drive east",
        "getThere": "Pickup at Hotel Kazakhstan (confirm the exact time in your booking). Almaty → Saty region is ~278 km; the canyons are on the way.",
        "description": "Guide commentary in English; snack and toilet stops (bring tissue). Group of ~30 on a full-size coach."
      },
      {
        "time": "~11:30 AM – 12:30 PM",
        "type": "sight",
        "icon": "🏔️",
        "title": "Black Canyon & Moon Canyon viewpoints",
        "getThere": "Short stops on the way (~20 min each).",
        "description": "Dark gorges of the Charyn river system. Four reviewers wanted more time here — take your photos first, then look around.",
        "image": "./assets/places/black-canyon.jpg"
      },
      {
        "time": "~01:30 PM – 03:30 PM",
        "type": "nature",
        "icon": "🏞️",
        "title": "Kolsai Lake 1 in fresh snow",
        "getThere": "Tour bus to the Kolsai-1 car park (11.8 km from Saty), then a short walk to the shore.",
        "description": "Turquoise lake under snowy spruce slopes — winter reviewers call the snow “magical”. About 2 hours here. Lake edges ice up in November: don’t walk on the ice.",
        "image": "./assets/places/kolsai-kaindy-lakes.jpg"
      },
      {
        "time": "~04:30 PM – 10:00 PM",
        "type": "evening",
        "icon": "🔥",
        "title": "Yurt camp: dinner, bonfire & night",
        "getThere": "Tour bus to the camp near Saty. One reviewer had a slippery 5-minute walk to the yurts in the dark — use a head torch.",
        "description": "Heated yurts shared with ~4 people (a private yurt/room is an extra ~23,000 ₸ — agree the price before paying). Shared bathrooms with hot showers. Dinner and bonfire included.",
        "tip": "Earplugs — yurts aren’t soundproof. No mobile signal; download offline maps."
      }
    ],
    "placeIds": [
      "kolsai-kaindy-lakes"
    ]
  },
  {
    "dayNumber": 7,
    "date": "2026-11-13",
    "weekday": "Friday",
    "city": "Kaindy & Charyn → Almaty",
    "title": "2-day tour, day 2: Kaindy sunken forest & Charyn Canyon",
    "subtitle": "Kaindy in the morning light, the Valley of Castles in the afternoon, back at Hotel Kazakhstan around 20:00–21:00 for your last night.",
    "weatherNote": "Forecast on 6 Nov: dry and cold (city −2…+5 °C) — the best weather of the tour. Snow on the trails: wear boots with grip. Online check-in for KC907 opens ~07:05 today — do it whenever you have signal.",
    "bring": "Same as yesterday; sunglasses for the snow glare.",
    "planB": "If the Kaindy road is closed by snow, the group spends longer at Kolsai or Charyn. If the bus breaks down, ask the guide for an ETA early and tell Hotel Kazakhstan you’ll arrive late.",
    "events": [
      {
        "time": "07:30 AM – 08:15 AM",
        "type": "breakfast",
        "title": "Breakfast at the camp",
        "getThere": "At the camp."
      },
      {
        "time": "08:30 AM – 11:30 AM",
        "type": "nature",
        "icon": "🌲",
        "title": "Lake Kaindy — the sunken forest",
        "getThere": "Saty → Kaindy: 16.3 km. A new road reached Kaindy in 2026 (Sep 2026 review), so the bus may go further than the old UAZ stretch; then ~2.5 km on foot.",
        "description": "Spruce trunks rising out of turquoise water. About 3 hours here.",
        "tip": "Repeated by many: the walk down is easy (15–30 min), the climb back is steep and muddy or icy — ask the guide for the ride back if the slope is hard. Horses are ~1,000 ₸ return (Oct 2026), not the 8,000 ₸ some listings say. Squat toilets only at the parking.",
        "image": "./assets/places/kaindy.jpg"
      },
      {
        "time": "~01:30 PM – 04:00 PM",
        "type": "hike",
        "title": "Charyn Canyon: Valley of Castles",
        "getThere": "Saty → Charyn park entrance: 92.5 km on the tour bus.",
        "description": "Walk between the red rock towers down towards the river — about 2.5 hours here, finishing near sunset.",
        "cost": "Eco-shuttle back up ~500–1,000 ₸ (cash)",
        "tip": "How reviewers do it: walk down the Valley of Castles (~3 km), take the eco-shuttle back up. After snow the shuttle may not run and steps can be icy. The canyon cafés are cheaper than boxed lunches guides sell.",
        "image": "./assets/places/charyn-canyon.jpg"
      },
      {
        "time": "04:00 PM – 08:30 PM",
        "type": "transfer",
        "icon": "🚌",
        "title": "Bus back to Almaty (Hotel Kazakhstan)",
        "getThere": "Charyn → Almaty: 218 km, ~4 h on the tour bus.",
        "description": "Check in for KC907 online on the way if you have signal."
      },
      {
        "time": "08:30 PM – 09:30 PM",
        "type": "dinner",
        "title": "Check in at Hotel Kazakhstan & late dinner at Navat",
        "getThere": "Hotel Kazakhstan → Navat (Dostyk 48): walk 0.30 km, ~4 min.",
        "description": "Navat is open to midnight. At the hotel, settle the bill tonight, ask for a breakfast box and have reception book a backup taxi for 04:00 in writing.",
        "cost": "~3,500–8,000 ₸ + 10%",
        "order": [
          "Manti",
          "Guiru lagman",
          "Beshbarmak",
          "Baursaks"
        ],
        "orderNote": "Whatever you didn’t have on day 1."
      }
    ],
    "placeIds": [
      "charyn-canyon"
    ]
  },
  {
    "dayNumber": 8,
    "date": "2026-11-14",
    "weekday": "Saturday",
    "city": "Almaty → Delhi",
    "title": "Fly home: Air Astana KC907",
    "subtitle": "Leave Hotel Kazakhstan at 04:00 for the 07:05 flight from Terminal 2. Back in Delhi before lunch.",
    "weatherNote": "One of the coldest mornings of the trip (forecast on 6 Nov: about −3 °C at 04:00). Wear your warm jacket to the airport.",
    "bring": "Passport, boarding pass on your phone, warm jacket.",
    "planB": "If Yandex Go shows no cars, use the backup taxi reception booked last night.",
    "events": [
      {
        "time": "03:30 AM",
        "type": "morning",
        "title": "Wake up & grab the breakfast box",
        "getThere": "At Hotel Kazakhstan."
      },
      {
        "time": "04:00 AM – 04:30 AM",
        "type": "transfer",
        "title": "Taxi to ALA Terminal 2",
        "getThere": "Hotel Kazakhstan → ALA Terminal 2: Yandex 15.8 km, ~19–25 min at 04:00 (~2,500–4,500 ₸). Choose “International Terminal 2 / departures”.",
        "cost": "Yandex Go ~2,500–4,500 ₸",
        "tip": "Order 10–15 min before you go down and check the plate. The airport recommends arriving 3 hours before international flights — 04:45 would be too tight."
      },
      {
        "time": "04:30 AM – 06:20 AM",
        "type": "airport",
        "title": "Bag drop, security & passport control",
        "getThere": "Air Astana check-in counters are in the Terminal 2 departures hall.",
        "description": "Air Astana counters close 40 minutes before departure (06:25); the gate closes at 06:50.",
        "image": "./assets/places/almaty-airport.jpg"
      },
      {
        "time": "07:05 AM – 11:10 AM",
        "type": "flight",
        "title": "Air Astana KC907: ALA → DEL (3h 35m direct)",
        "getThere": "Gate shown on your boarding pass.",
        "description": "Land at Delhi T3 at 11:10 IST."
      }
    ],
    "placeIds": []
  }
];
