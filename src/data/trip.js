import { exchangeRates, currencySymbols, toINR, formatCurrency } from './currency.js?v=39';

export {
  exchangeRates,
  currencySymbols,
  toINR,
  formatCurrency
} from './currency.js?v=39';

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
        "description": "Navat chaikhana (Dostyk 48, 10:00–00:00; Google 4.5 from ~4,500 reviews). 🥗 Vegetarian: vegan lagman, vegan soup, grilled vegetables (HappyCow); ask “bez myasa?” for baursak (sometimes fried in mutton fat). 🍖 Meat: plov, manti, kuyrdak. Still fresh afterwards? Take the metro to Zhibek Zholy for the lit-up Arbat pedestrian street (route below).",
        "getThere": "MiG 2 → Navat (Dostyk 48): walk 0.55 km south along Dostyk, ~7 min. Navat → Airbnb afterwards: 0.47 km, ~6 min. For the Arbat instead: walk 1.00 km (~13 min) from Navat to Abay metro, ride 2 stops north to Zhibek Zholy (120 ₸, tap Visa/Mastercard), exit onto the pedestrian street; Yandex back ~800–1,200 ₸.",
        "cost": "~5,000–8,000 ₸ per person",
        "tip": "Bills often include 10–15% service (“обслуживание”) — no extra tip needed then. Rakhat chocolate shop is at Zhibek Zholy 47 × Kaldayakov.",
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
    "planB": "Rain all day: Central State Museum (Yandex ~10 min from the old town; price reports 500–5,000 ₸) and Akku café, still do the Green Bazaar (indoor hall). Move Kok Tobe to Thursday.",
    "events": [
      {
        "time": "09:00 AM – 10:00 AM",
        "type": "breakfast",
        "title": "Brunch at Six Coffee+Wine",
        "getThere": "Airbnb → Six Coffee (Abay 17): walk 1.08 km, ~14 min. Nedelka (Abay 19) is next door: 1.14 km, ~15 min.",
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
        "getThere": "Six Coffee → park’s war memorial: Yandex 3.2 km, ~5–10 min (~800–1,200 ₸), or walk 1.97 km, ~26 min. Memorial → cathedral: walk 0.25 km, ~3 min.",
        "tickets": "Free · open 07:00–18:00",
        "tip": "Women cover their heads; no flash photography inside. Morning light is best on the cathedral’s east side. Men take hats off inside; ask before photographing during a service. The eternal flame is in front of the black war memorial.",
        "image": "./assets/places/zenkov-cathedral.jpg"
      },
      {
        "time": "11:15 AM – 12:00 PM",
        "type": "museum",
        "icon": "🎻",
        "title": "Museum of Kazakh Folk Musical Instruments",
        "getThere": "Cathedral → museum (Zenkov 24a, east edge of the park): walk 0.44 km, ~6 min.",
        "description": "A Lonely Planet top pick in a 1908 wooden building inside Panfilov Park. 30–45 minutes.",
        "tickets": "At the door; price reports vary (500–1,500 ₸) · Tue–Sun 10:00–18:00 (some listings say 19:00) · closed Mondays",
        "image": "./assets/places/music-museum.jpg"
      },
      {
        "time": "12:15 PM – 01:30 PM",
        "type": "market",
        "title": "Green Bazaar (Kok Bazar) + coffee on the balcony",
        "description": "Dried fruit, nuts, honey, spices, kurt and kazy. 🥗 Vegetarian snack: morkovcha (Korean carrot salad) at the Korean-salad stalls — ask “bez ryby, bez myasa?”, some salads use fish sauce or meat. Upstairs, Bowler Coffee Roasters has a balcony view over the market floor.",
        "getThere": "Museum → Green Bazaar (Zhibek Zholy 53): walk 0.71 km north, ~9 min.",
        "cost": "Bring cash; coffee ~1,500–2,000 ₸",
        "tip": "Closed Mondays — so today is the day. Bargain on dried fruit and souvenirs, watch for pickpockets, taste before buying. The Rakhat factory store (Zenkov 2) is nearby. How reviewers do it: enter the main hall from Zhibek Zholy — dried fruit, nuts and spices at the front, then the Korean salads, then dairy (kurt, irimshik). The newer central pavilion (entrance from Makataev St) has farm produce, honey and cheese, and is said to be 20–30% cheaper for some goods. Taste freely but don’t overdo it; opening prices are inflated, so bargain politely for 5–10% off. Bring cash.",
        "links": [
          {
            "label": "Green Bazaar on Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Green+Bazaar+Zhibek+Zholy+53+Almaty"
          }
        ],
        "image": "./assets/places/green-bazaar.jpg"
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
        "time": "02:20 PM – 03:05 PM",
        "type": "food",
        "title": "Lunch at Tary (Kazakh-twist café)",
        "getThere": "Mosque → Tary (Abylai Khan 55): walk 1.53 km west, ~20 min, or Yandex 1.5 km, ~5 min (~800–1,000 ₸).",
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
        "time": "03:15 PM – 06:30 PM",
        "type": "sunset",
        "title": "Kok Tobe cable car for sunset & city lights",
        "description": "Ride up about an hour before the 16:36 sunset, watch the mountains turn pink, stay for the city lights. Cafés and restaurants on top.",
        "getThere": "Tary → Kok Tobe lower station (Dostyk 104B, opposite the Palace of the Republic): Yandex 4.2 km, ~10–15 min (~1,200–1,800 ₸); walking is 3.49 km, ~47 min. Station → Airbnb afterwards: walk 0.91 km north, ~12 min.",
        "tickets": "At the station: 10,000 ₸ return / 6,000 ₸ one way (confirmed 2 Nov 2026). Fri–Sun 10:00–00:00, Mon/Wed/Thu 10:00–23:00, Tue from 13:00 (morning maintenance). It closed for an overhaul in early–mid Nov 2025; no 2026 closure announced — check koktobe.com the day before.",
        "tip": "🥗 Kok Tobe’s restaurant menu (Aug 2025) lists meatless mini pumpkin samsa and vegetable shashlik — good dinner with a view. Skip the mini-zoo. Taxis can’t drive up (25,000 ₸ car fee) — the park shuttle from Dostyk is 3,000 ₸ one way if the cable car is closed. Reviewers repeat: it’s Sunday, so expect a queue (~20 min) — be at the station by ~15:30 for the 16:36 sunset. Buy a return: the walking path down has been closed since May 2026. Worth it at the top: the viewing decks and the Beatles bench; the TV tower is closed; food up there is mediocre.",
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
        "tip": "It’s about −5…+5 °C with wind up here — sunglasses and sunscreen even in November."
      },
      {
        "time": "10:30 AM – 01:30 PM",
        "type": "hike",
        "icon": "🧊",
        "title": "Option (not booked) instead: guided walk to the Bogdanovich Glacier viewpoint",
        "getThere": "Meet the guide where your booking says (Sputnik8: meets 09:00; the walk starts at the Combi-2 top station). From Talgar Pass a cairn-marked moraine path runs ~2 km south to the viewpoint (~3,370 m), 1–1.5 h each way.",
        "description": "Do it only with a guide — there are hidden crevasses under thin snow and avalanche slopes; the Emergencies Ministry logged 4 incidents on the route in 2025 and recommends a guide for beginners. Stay on the moraine viewpoint, not on the ice. If you do this, skip the 10:30–12:30 Talgar Pass slot.",
        "tickets": "Sputnik8 guided walk: 35,000 ₸ — guide, crampons, helmet and poles included, lift ticket not. Back ~13:30. Book today for Monday; if they can’t run it, skip the glacier.",
        "tip": "Register your walk (voluntary) on almatyhike.kz and mark your return afterwards. Rescue: 112. After the snowfall on 10–11 Nov, don’t attempt it on a later day.",
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
        "time": "12:30 PM – 02:30 PM",
        "type": "food",
        "title": "Down to Shymbulak base: lunch & a wander",
        "getThere": "Combi-2 down (~5–8 min) → Combi-1 down (~10–13 min) to the base, ~30 min with the transfer.",
        "description": "Lunch at one of the resort restaurants at the base, then wander the resort and the snowy slopes. (After the glacier walk: lunch ~14:00–15:00 instead.)",
        "cost": "Mountain prices — ~6,000–10,000 ₸ per person"
      },
      {
        "time": "02:30 PM – 04:00 PM",
        "type": "transfer",
        "title": "Gondola down & taxi back to the city",
        "getThere": "Shymbulak base → Medeu by gondola, 4.5 km, ~15–20 min (allow 30 min with the queue). Then Yandex from the Medeu cable car station to the Airbnb: 15.6 km, ~30–40 min.",
        "description": "Head down before ~15:00 — reviewers say the gondola gets crowded near closing. Order Yandex Go once you’re at Medeu; expect a short wait for a car.",
        "cost": "~2,000–4,000 ₸"
      },
      {
        "time": "07:30 PM – 09:00 PM",
        "type": "dinner",
        "title": "Dinner at Qaimaq (meat) or Navat (veg options)",
        "getThere": "Airbnb → Qaimaq (Abay 46A): Yandex 5.6 km, ~10–15 min (~1,000–1,500 ₸); walking is 3.75 km, ~50 min. Navat: walk 0.47 km, ~6 min.",
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
        "getThere": "Book online today (links below); screenshot the voucher with the meeting point.",
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
        "getThere": "JoinMe: Airbnb → Circus (Abay 50) by Yandex 4.8 km, ~7–10 min at 05:30 (~1,000–1,500 ₸); order 10 min before. GetYourGuide: walk 0.75 km south to Hotel Kazakhstan (Dostyk 52/2), ~10 min — wait in the lobby.",
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
        "getThere": "Almaty → Saty: 281 km by road, ~5 h with stops, on the tour bus.",
        "description": "Snack and toilet stops on the way. Guides speak English/Russian/Kazakh."
      },
      {
        "time": "10:30 AM – 01:00 PM",
        "type": "nature",
        "icon": "🌲",
        "title": "Lake Kaindy — the sunken forest",
        "getThere": "Saty → Kaindy: 16.3 km — tour UAZ 4x4 to the parking, then walk ~2.5 km to the lake.",
        "description": "UAZ 4x4 from Saty to the Kaindy parking (included), then a 2.5 km walk to the lake with its drowned spruce trunks.",
        "tip": "Sit near the front of the UAZ — the road is very bumpy. Walking is safer than the optional horses. Repeated by many: going down to the lake is easy (15–30 min) but the way back is uphill, steep and muddy in places — wear boots with grip. Squat toilets only at the parking, none on the trail. No ATMs near the lakes and no mobile signal — carry cash (park fee ~700–1,000 ₸) and offline maps.",
        "image": "./assets/places/kaindy.jpg"
      },
      {
        "time": "01:30 PM – 02:30 PM",
        "type": "food",
        "title": "Lunch in Saty",
        "getThere": "Kaindy → Saty: tour UAZ back down, ~16 km.",
        "description": "Included in the tour.",
        "image": "./assets/places/saty.jpg"
      },
      {
        "time": "02:30 PM – 05:00 PM",
        "type": "nature",
        "icon": "🏞️",
        "title": "Kolsai Lake 1",
        "getThere": "Saty → Kolsai-1 car park: 11.8 km, ~20 min on the tour bus, then a short walk to the shore.",
        "description": "Turquoise lake under snowy spruce slopes. Boats and catamarans are summer-only.",
        "image": "./assets/places/kolsai-kaindy-lakes.jpg"
      },
      {
        "time": "06:30 PM – 10:00 PM",
        "type": "evening",
        "icon": "🔥",
        "title": "Guest house in Saty: dinner, bonfire & evening programme",
        "getThere": "Kolsai-1 → Saty: 11.8 km, ~20 min on the tour bus.",
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
        "title": "Wake up & breakfast at the guest house",
        "getThere": "At the guest house."
      },
      {
        "time": "09:00 AM – 11:05 AM",
        "type": "sight",
        "icon": "🏔️",
        "title": "Black Canyon & Moon Canyon",
        "getThere": "On the tour bus, on the way from Saty towards Charyn (the whole Saty → Charyn leg is 92.5 km, ~3.5 h with stops).",
        "description": "Viewpoints over the dark gorges of the Charyn river system.",
        "image": "./assets/places/black-canyon.jpg"
      },
      {
        "time": "11:50 AM – 03:30 PM",
        "type": "hike",
        "title": "Charyn Canyon: Valley of Castles",
        "getThere": "Tour bus to the Charyn park entrance; walk down the Valley of Castles path (~30–40 min to the river), or take the park eco-taxi.",
        "description": "Walk between the red rock towers down towards the river — the highlight of the tour.",
        "cost": "Park eco-taxi 500–1,800 ₸ (optional)",
        "tip": "Windy and slippery in places — keep to the path. How reviewers do it: walk down the Valley of Castles (~3 km) to the river, then take the eco-shuttle back up (~500 ₸, cash). After snow the shuttle may not run and steps can be icy.",
        "image": "./assets/places/charyn-canyon.jpg"
      },
      {
        "time": "03:30 PM – 07:00 PM",
        "type": "transfer",
        "icon": "🚌",
        "title": "Bus back to Almaty (Circus car park, Abay 50)",
        "getThere": "Charyn → Almaty: 218 km, ~4 h on the tour bus. JoinMe drops at the Circus → Airbnb by Yandex 4.8 km, ~10–20 min (~1,000–1,500 ₸); GetYourGuide drops at the hotels it picked up from (Hotel Kazakhstan → Airbnb: walk 0.75 km, ~10 min)."
      },
      {
        "time": "07:30 PM",
        "type": "dinner",
        "title": "Easy dinner: Navat on Dostyk",
        "getThere": "Airbnb → Navat: walk 0.47 km, ~6 min.",
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
        "getThere": "Yandex with your bags. Times on this day assume Renion (Kaldayakov 21, old town): Airbnb → Renion 2.4 km, ~5–10 min (~1,000–1,500 ₸). Leave the bags at reception if the room isn’t ready.",
        "description": "Your Airbnb is booked Nov 7–12. The nights of Nov 12 and 13 are not booked yet — a hotel with a 24/7 desk makes the 04:00 airport run on Nov 14 easy.",
        "tip": "Check the checkout time in your Airbnb listing. Hotel Kazakhstan is in the same area; Renion and Voyage are better value near Panfilov Park."
      },
      {
        "time": "11:30 AM – 12:30 PM",
        "type": "breakfast",
        "title": "Brunch at Bowler Coffee (Green Bazaar balcony)",
        "getThere": "Renion → Green Bazaar (Zhibek Zholy 53): walk 0.50 km, ~7 min; Bowler is on the balcony inside the main hall.",
        "description": "Specialty coffee looking down on the market floor (Tue–Sun 09:00–18:00); pick up pastries, dried fruit or a morkovcha salad from the stalls below. Reviews on Tripadvisor and Trip.com praise the coffee and the view; it’s small and noisy.",
        "cost": "Coffee ~1,500–2,000 ₸",
        "tip": "If you’re not staying in the old town: ProCoffee (Dostyk 87A, opens 07:00, Yandex 5.0) is ~1 km / 13 min walk from the Airbnb — brunch there before you check out."
      },
      {
        "time": "01:00 PM – 03:00 PM",
        "type": "spa",
        "title": "Arasan Wellness & SPA (1982 Soviet bathhouse)",
        "tip": "First-timer pattern: pay at the desk → wristband (opens your locker; extras go on it and you pay on the way out). Women go left, men right. Charged by the hour, then per minute. Shower before every sauna or pool; no phones past the lockers. Bring your own towel, flip-flops and a felt hat; buy a venik (birch whisk) at the entrance, soak it, use it only in the Russian banya.",
        "getThere": "Green Bazaar → Arasan (Tulebaev 78): walk 1.03 km south-west, ~14 min.",
        "description": "Russian banya, hammam and plunge pools — reviewers call it the best way to warm up in Almaty. Separate men’s and women’s sections.",
        "tickets": "Tulebaev 78, 07:00–23:30. At the door: weekday 2 h ~3,800 ₸ (morning) / 4,500 ₸ (evening). Towel, sheet and slippers are extra (a few hundred ₸ each) — bring your own flip-flops and towel. Phone +7 727 390 10 10.",
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
        "getThere": "Arasan → Central State Museum (Samal-1, bldg 44): Yandex 4.2 km, ~10–15 min (~1,200–1,500 ₸); walking is 3.00 km uphill, ~40 min. ALMA instead: Yandex 6.4 km, ~15 min, to Al-Farabi 28 (entrance on Nazarbayev Ave).",
        "description": "Moved here from Friday to free Friday for Big Almaty Lake. Central State Museum: nomad history, the Golden Man replica and yurts (Samal-1 bldg 44; ~10:00–18:00; sources disagree on the closing day — Monday or Tuesday — and on price, 500 ₸ to 5,000 ₸ for foreigners; Thursday is open either way; phone +7 727 264 26 80). Prefer art? ALMA, a new private museum rated 4.8 (Al-Farabi 28, 11:00–21:00, 3,000 ₸, timed tickets).",
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
        "getThere": "Central Museum → Akku (Panfilov 123, Astana Square park): Yandex 2.9 km, ~10 min (~1,000–1,300 ₸); walking is 2.23 km, ~30 min.",
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
        "getThere": "Akku → Govinda’s (Abylai Khan 39): walk 1.85 km, ~25 min, or Yandex 2.1 km, ~5–10 min. Akku → Kishlak (Seifullin Ave): Yandex 3.4 km, ~10 min. Back to Renion: from Govinda’s 2.4 km, from Kishlak 5.1 km by Yandex (~800–1,500 ₸).",
        "description": "🍖 Kishlak (Seifullin Ave, 11:30–02:00): rated 4.3 from ~2,170 reviews for its plov and decor (plov is made with meat). 🥗 Vegetarian: an early pure-veg set meal at Govinda’s (Abylai Khan 39, set back from the street near Mametova; ~2,050 ₸; open to 20:00 — go by 18:30, it sells out). No 2025–26 review confirms Govinda’s is still open, so call +7 7272 71 32 35 first. Backup: Maharaja (Nazarbayev 229, 11:00–23:00, large veg menu).",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Kishlak+restaurant+Seifullin+Almaty"
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
        "time": "07:45 AM – 08:15 AM",
        "type": "breakfast",
        "title": "Quick breakfast near your hotel",
        "getThere": "Skipping the lake? Renion → Bon Bon (Abylai Khan 123): Yandex 2.9 km, ~10 min, or walk 2.83 km, ~38 min.",
        "description": "Skipping the lake? Have a slow breakfast at Bon Bon (Abylai Khan 123) instead: the “Bohemian” breakfast or syrniki, ~3,500 ₸."
      },
      {
        "time": "08:25 AM – 02:00 PM",
        "type": "nature",
        "icon": "🏔️",
        "title": "Option (not booked): Big Almaty Lake by car (Adam Hiking Tours)",
        "description": "Private cars are banned on the lake road, so go with a tour: authorised vehicles drive past the checkpoint (a short 300 m walk at the vehicle change), at the lake ~10:15. In November expect a frozen, snow-covered lake under the peaks rather than turquoise water. The Alma-Arasan hot-spring stop is often closed (rockfall risk) and swapped for Ayusai gorge.",
        "getThere": "Renion → Abai Opera Theatre (Kabanbay Batyr 110): Yandex 3.2 km, ~10–15 min (~1,200–1,500 ₸); walking is 2.43 km, ~32 min. Groups meet at the fountain — be there by 08:45; some operators don’t wait more than 15 min. Weekday departures only.",
        "tickets": "From ₹5,518 on GetYourGuide (shown 6 Nov) — eco fee, English guide, transfer, lunch, snacks and water included. 4.8 from 255 reviews. Check Fri 13 Nov is bookable.",
        "tip": "Choose by car, not on foot: the hiking option is ~14 km, runs Mondays only, and in fresh snow it isn’t worth the avalanche and ice risk. Skip the “apple orchard” tour link — it now opens a different Panda Travel 4-hour tour (4.5★) whose recent reviews mention closed springs and pricey photo add-ons, and apple harvest is over by November. Leave the hotel by 08:25 to be at the fountain by 08:45. Bring your passport for the checkpoint; there’s an eco-fee (~650 ₸) if it isn’t included.",
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
        "time": "02:30 PM – 03:15 PM",
        "type": "food",
        "title": "Late lunch (if the tour lunch was light)",
        "getThere": "Opera Theatre (tour drop-off) → Navat (Abylai Khan 58A): walk 1.86 km north, ~25 min, or Yandex 2.4 km, ~5–10 min.",
        "description": "🥗 Navat on Abylai Khan 58A — vegan lagman or grilled vegetables. 🍖 Rumi (Abylai Khan 92) is a plov house rated 4.6, set menus from ~6,500 ₸ — plov is made with meat."
      },
      {
        "time": "03:20 PM – 05:00 PM",
        "type": "shopping",
        "title": "Souvenirs: TSUM crafts & Rakhat chocolate",
        "getThere": "Navat → TSUM (Abylai Khan 62): walk 0.23 km, ~3 min. TSUM → Rakhat shop (Zhibek Zholy 47 × Kaldayakov): walk 1.36 km east along the pedestrian Arbat, ~18 min. Rakhat → Renion: 0.13 km, ~2 min.",
        "description": "Felt slippers (2,000–2,500 ₸), kalpak hats ($15–30) and felt crafts at TSUM (Abylai Khan 62, ~10:00–22:00). Kazakh chocolate at the Rakhat shop on the Arbat (Zhibek Zholy 47 × Kaldayakov) or the factory store (Zenkov 2, 09:00–20:00) — cheaper than supermarkets.",
        "tip": "Avoid airport and hotel shops — heavy mark-ups."
      },
      {
        "time": "05:30 PM – 06:30 PM",
        "type": "checkin",
        "icon": "✅",
        "title": "Online check-in, pack & prepare for 04:00",
        "getThere": "At your hotel.",
        "description": "Check in for KC907 online. If you’re in a hotel: settle the bill tonight, ask for a breakfast box and have reception book a backup taxi for 04:00 in writing."
      },
      {
        "time": "07:00 PM – 09:00 PM",
        "type": "dinner",
        "icon": "🎶",
        "title": "Farewell dinner at Sandyq",
        "getThere": "Renion → Sandyq: walk 1.78 km west along Zhibek Zholy, ~24 min, or Yandex 2.0 km, ~5–10 min (~800–1,200 ₸). Yandex lists Sandyq as Alimzhanov St 55, others Abylai Khan 55 — use the app pin.",
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
    "weatherNote": "One of the coldest mornings of the trip (forecast on 6 Nov: about −3 °C at 04:00). Wear your warm jacket to the airport.",
    "bring": "Passport, boarding pass on your phone, warm jacket.",
    "planB": "If Yandex Go shows no cars, use the backup taxi you arranged last night.",
    "events": [
      {
        "time": "03:30 AM",
        "type": "morning",
        "title": "Wake up & grab the breakfast box",
        "getThere": "At your hotel."
      },
      {
        "time": "04:00 AM – 04:30 AM",
        "type": "transfer",
        "title": "Taxi to ALA Terminal 2",
        "getThere": "Renion → ALA Terminal 2: Yandex 13.6 km, ~16–25 min at 04:00 (~2,500–4,500 ₸). Choose “International Terminal 2 / departures”.",
        "description": "About 20–25 minutes at this hour.",
        "cost": "Yandex Go ~2,500–4,500 ₸",
        "tip": "Order 10–15 min before you go down and check the plate. The airport recommends arriving 3 hours before international flights — 04:45 would be too tight."
      },
      {
        "time": "04:30 AM – 06:20 AM",
        "type": "airport",
        "title": "Bag drop, security & passport control",
        "getThere": "Air Astana check-in counters are in Terminal 2 departures hall.",
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
