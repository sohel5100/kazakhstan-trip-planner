import { exchangeRates, currencySymbols, toINR, formatCurrency } from './currency.js?v=34';

export {
  exchangeRates,
  currencySymbols,
  toINR,
  formatCurrency
} from './currency.js?v=34';

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
    "title": "Tele2 tourist SIM (50 GB, 30 days)",
    "amount": 5590,
    "category": "shopping",
    "date": "2026-11-07",
    "note": "Counter in ALA Terminal 2 arrivals; bring passport"
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
    "title": "JoinMe 2-day tour: Kaindy, Kolsai, Black Canyon & Charyn",
    "amount": 30000,
    "category": "activities",
    "date": "2026-11-10",
    "note": "From 30,000 ₸ per person: bus, guest house, meals, UAZ, eco fees, guide"
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
    "date": "2026-11-13",
    "note": "Closed Tuesdays"
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
    name: 'Zenkov Cathedral & Panfilov Park',
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
        "title": "SIM card, cash & taxi app (arrivals hall)",
        "description": "Tele2 and Kcell/Activ counters are open 24/7 on the arrivals ground floor, before the exit. ATMs and exchange desks are next to them.",
        "tickets": "Tele2 tourist SIM 5,590 ₸ (50 GB + 240 min, 30 days). Bring your passport.",
        "tip": "Change only a little money at the airport (rates are 3–5% worse). In the city use Halyk or Kaspi ATMs and pick “charge in KZT”. RuPay probably won’t work — use Visa/Mastercard."
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
        "time": "06:30 PM – 09:00 PM",
        "type": "evening",
        "title": "First Kazakh dinner at Navat (walk from the Airbnb)",
        "description": "Navat chaikhana on Dostyk Ave is a short walk from your Airbnb: plov, lagman, manti and baursak. Still fresh afterwards? Ride the metro from Almaly to Zhibek Zholy for the lit-up Arbat pedestrian street.",
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
    "title": "Old town, Green Bazaar & Kok Tobe sunset",
    "subtitle": "Zenkov Cathedral, the folk-instrument museum and the Green Bazaar on foot, then the cable car up Kok Tobe for sunset and city lights.",
    "weatherNote": "A wet spell is possible around 8–10 Nov. Do Kok Tobe only if the air is clear (check the IQAir app): smog can hide the view by afternoon. Sunset 16:36.",
    "bring": "Cash for the bazaar (5,000–10,000 ₸), a scarf for women at the cathedral, warm layers for Kok Tobe after dark.",
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
        "title": "Zenkov Cathedral & Panfilov Park",
        "description": "The 1907 wooden cathedral built without nails, in the middle of Panfilov Park. Free.",
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
        "time": "12:15 PM – 01:45 PM",
        "type": "market",
        "title": "Green Bazaar (Kok Bazar) + coffee on the balcony",
        "description": "Dried fruit, nuts, honey, spices, kurt and kazy. Upstairs, Bowler Coffee Roasters has a balcony view over the market floor.",
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
        "time": "02:00 PM – 03:00 PM",
        "type": "food",
        "title": "Lunch at Tary (Kazakh-twist café)",
        "description": "Baursaks, irimshik and the signature tary (roasted-millet) cheesecake. Sandyq next door if you want a full beshbarmak.",
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
        "tip": "Skip the mini-zoo. Taxis can’t drive up (25,000 ₸ car fee) — the park shuttle from Dostyk is 3,000 ₸ one way if the cable car is closed.",
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
      "kok-tobe"
    ]
  },
  {
    "dayNumber": 3,
    "date": "2026-11-09",
    "weekday": "Monday",
    "city": "Almaty mountains",
    "title": "Shymbulak gondola to Talgar Pass (3,200 m)",
    "subtitle": "Three gondolas from Medeu up to 3,200 m, above the city smog. Museums and the bazaar are shut on Mondays anyway.",
    "weatherNote": "Up top it is around −5…+5 °C with strong wind. Check lift status on shymbulak.com before leaving. Go up early: the top lift stops around 16:00–16:30. If today looks cloudy or snowy, swap with Thursday.",
    "bring": "Warm jacket, hat, gloves, sunglasses (snow glare), grippy shoes, a card for lift tickets.",
    "planB": "Lifts stopped by wind or bad forecast: Central State Museum (open Mondays) + Arasan baths, and do the mountains on Thursday.",
    "events": [
      {
        "time": "08:30 AM – 09:15 AM",
        "type": "transfer",
        "title": "Yandex Go to the Medeu gondola station",
        "description": "Straight up Dostyk Ave and the Medeu valley from your Airbnb — about 30–40 minutes.",
        "cost": "~2,000–4,000 ₸",
        "tip": "City buses (12/21) need an Onay card that you can only buy with cash, and foreign cards usually fail — a taxi is easier. The road beyond Medeu is closed to taxis until 30 Nov, so the gondola is the only way up."
      },
      {
        "time": "09:15 AM – 09:45 AM",
        "type": "sight",
        "title": "Medeu dam viewpoint",
        "description": "The famous ice rink is closed for reconstruction until about 2027, but the dam viewpoint is open. The ~842-step staircase is optional — skip it if icy.",
        "image": "./assets/places/medeu.jpg"
      },
      {
        "time": "09:45 AM – 02:30 PM",
        "type": "alpine",
        "title": "Gondolas: Medeu → Shymbulak → Talgar Pass",
        "description": "Medeu to Shymbulak base (2,260 m), then Combi-1 and Combi-2 to Talgar Pass at 3,200 m. Glacier views, often sunny above the smog. Lunch at the Shymbulak base cafés.",
        "tickets": "Medeu ticket office or shymbulak.com: 12,000 ₸ return to Talgar Pass · 7,000 ₸ one way · 14,000 ₸ glass “360°” cabin.",
        "tip": "Lifts reopened after maintenance on 1 Nov; no skiing until late November. If wind stops the top lifts, stay at Shymbulak base.",
        "image": "./assets/places/talgar-pass.jpg"
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
        "title": "Dinner at Qaimaq",
        "description": "Rated 4.6 from ~1,250 reviews: kuyrdak served in a pumpkin and a big beshbarmak (8,400 ₸). Portions are large.",
        "getThere": "Abay 46A, near Baikonur metro.",
        "cost": "~8,000–12,000 ₸ per person",
        "links": [
          {
            "label": "Maps",
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
    "title": "JoinMe 2-day tour, day 1: Kaindy & Kolsai lakes",
    "subtitle": "Early bus from Almaty to the mountain lakes: Kaindy’s sunken forest, lunch in Saty, then Kolsai. Night in a Saty guest house with a bonfire evening.",
    "weatherNote": "Lakes start icing in November and walking on the ice is banned. Kaindy is a 2.5 km walk from the parking — trails can be snowy. Dark by ~16:30, so the walking happens before mid-afternoon.",
    "bring": "Passport/ID, cash in tenge for snacks and optional horses or boats, power bank, warm layers, gloves, hat, grippy shoes, motion-sickness tablets for the UAZ, small overnight bag. Leave your big luggage at the Airbnb.",
    "planB": "If the Kaindy road or trail is closed, the group spends longer at Kolsai and in Saty. Heavy snow forecast? Ask JoinMe on WhatsApp (+7 777 299 97 67) about moving dates.",
    "events": [
      {
        "time": "05:30 AM",
        "type": "transfer",
        "title": "Taxi to the meeting point: Circus car park, Abay 50",
        "description": "About 10 minutes from the Airbnb by Yandex Go. Gathering 05:30–06:00; the bus leaves at 06:20 sharp — “no latecomers”.",
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
        "description": "JoinMe group tour (up to 40 people, guide in English/Russian/Kazakh). Snack and toilet stops on the way.",
        "tickets": "Booked on joinme.kz: from 30,000 ₸ per person — bus, guest house, all meals, UAZ to Kaindy, eco fees, guide and evening programme included.",
        "links": [
          {
            "label": "Tour page",
            "href": "https://www.joinme.kz/en/tours/almaty-region/group-tours/kaindy-kolsai-2-days-early-start"
          }
        ]
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
    "title": "JoinMe 2-day tour, day 2: Black Canyon & Charyn",
    "subtitle": "Canyon day on the way home: Black Canyon, Moon Canyon and Charyn’s Valley of Castles, back in Almaty around 19:00.",
    "weatherNote": "Canyon around −2…+10 °C and very windy at the rim. Dark by ~16:30; the bus leaves Charyn at 15:30.",
    "bring": "Same as yesterday; windproof layer and sunglasses for the canyon.",
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
        "title": "Easy dinner: Navat on Dostyk or Bauyrdaq",
        "description": "Navat is next to the Airbnb; Bauyrdaq is budget and open 24/7 (beshbarmak 4,390 ₸)."
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
    "title": "Airbnb checkout, Arasan baths, art & the spare slot",
    "subtitle": "Check out of the Airbnb and move to your last 2 nights’ stay, then an easy indoor day. Also the buffer day for anything the weather cancelled.",
    "weatherNote": "Use this as your swap day: if Monday’s mountains were cloudy, go to Shymbulak today; if Sunday’s Kok Tobe was hazy, do its sunset today (open 10:00–22:00). Sunset 16:32.",
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
        "title": "Almaty Museum of Arts (ALMA) or Kasteev Museum",
        "description": "ALMA is a new private museum rated 4.8 (Al-Farabi 28, 11:00–21:00, 3,000 ₸, timed tickets). Kasteev reopened in January 2026 after renovation (10:00–18:00).",
        "tickets": "ALMA: almaty.art · Kasteev: at the door (price reports vary 500–5,000 ₸). Both closed Mondays.",
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
        "title": "Dinner at Kishlak (Uzbek)",
        "description": "Rated 4.3 from ~2,170 reviews for its plov and decor. Some find it greasy — order the plov and salads.",
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
    "title": "Museum, souvenirs & farewell dinner",
    "subtitle": "The colder spell starts around today, so it is mostly indoors. Check in online, pack, and have an early farewell dinner.",
    "weatherNote": "Forecast turns colder from ~13 Nov (days −3…+2 °C). Online check-in for KC907 opens about 24 h before (from ~07:05 today). Early night: your alarm is 03:30.",
    "bring": "Passport (museums may ask), a shopping bag, cash for souvenirs.",
    "planB": "Central Museum too crowded: ALMA (open Fridays) or the Dostyk Plaza / Esentai malls.",
    "events": [
      {
        "time": "09:30 AM – 10:30 AM",
        "type": "breakfast",
        "title": "Breakfast at Bon Bon",
        "description": "Locals’ breakfast favourite: the “Bohemian” breakfast or syrniki, served all day.",
        "cost": "~3,500 ₸",
        "links": [
          {
            "label": "Maps",
            "href": "https://www.google.com/maps/search/?api=1&query=Bon+Bon+Abylai+Khan+123+Almaty"
          }
        ]
      },
      {
        "time": "11:00 AM – 01:00 PM",
        "type": "museum",
        "title": "Central State Museum of Kazakhstan",
        "description": "Nomad history, the Golden Man replica and yurts. Its renovation finished in May 2026.",
        "getThere": "Samal-1, bldg 44 — Yandex ~1,500 ₸ from the centre.",
        "tickets": "At the desk (until 17:30): foreigners 5,000 ₸, or 10,000 ₸ with an English tour. Closed Tuesdays.",
        "image": "./assets/places/central-museum.jpg"
      },
      {
        "time": "01:30 PM – 02:30 PM",
        "type": "food",
        "title": "Plov lunch at Rumi",
        "description": "Plov chain rated 4.6 on Yandex; set menus from ~6,500 ₸."
      },
      {
        "time": "03:00 PM – 05:00 PM",
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
        "description": "Neo-nomad restaurant with live music in the evenings and an English menu. Beshbarmak 7,990 ₸, kuyrdak 7,790 ₸.",
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
    "placeIds": []
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
