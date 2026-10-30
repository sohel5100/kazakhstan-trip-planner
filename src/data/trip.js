import { exchangeRates, currencySymbols, toINR, formatCurrency } from './currency.js';

export {
  exchangeRates,
  currencySymbols,
  toINR,
  formatCurrency
} from './currency.js';

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
  stayAreaName: 'Golden Square / Dostyk Avenue, Almaty',
  stayAreaNote: 'Walkable, leafy central district with direct metro access, top cafes, and Kok Tobe cable car base.',
  stayAreaCoordinates: '43.2389,76.9455',
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
  observedFareINR: 23500
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
    id: 'exp-del-ala-flight',
    title: 'Roundtrip Flights: Delhi (DEL) ↔ Almaty (ALA)',
    amount: 23500,
    currency: 'INR',
    category: 'flights',
    status: 'paid',
    paymentMethod: 'Card',
    date: '2026-11-07',
    country: 'Kazakhstan',
    note: 'Direct Air Astana KC908 (DEL→ALA, 12:10) & KC907 (ALA→DEL, 07:05)'
  },
  {
    id: 'exp-almaty-hotel',
    title: 'Central Almaty Hotel (7 nights near Dostyk / Golden Square)',
    amount: 175000,
    currency: 'KZT',
    category: 'stay',
    status: 'estimated',
    paymentMethod: 'Card',
    date: '2026-11-07',
    country: 'Kazakhstan',
    note: '~25,000 ₸/night planning estimate for comfortable boutique hotel (Nov 7–14)'
  },
  {
    id: 'exp-airport-taxi-arrival',
    title: 'Airport Transfer: ALA Airport → Central Hotel (Yandex Go)',
    amount: 4500,
    currency: 'KZT',
    category: 'transport',
    status: 'estimated',
    paymentMethod: 'Card',
    date: '2026-11-07',
    country: 'Kazakhstan',
    note: 'Yandex Go Comfort class from Almaty International Airport (15:10 arrival)'
  },
  {
    id: 'exp-kok-tobe-cable',
    title: 'Kok Tobe Cable Car Roundtrip + Park Entry',
    amount: 5000,
    currency: 'KZT',
    category: 'activities',
    status: 'estimated',
    paymentMethod: 'Card',
    date: '2026-11-08',
    country: 'Kazakhstan',
    note: 'Gondola lift from Dostyk Ave to summit for city sunset'
  },
  {
    id: 'exp-shymbulak-medeu',
    title: 'Medeu to Shymbulak Cable Car Combo (to Talgar Pass 3,200m)',
    amount: 9500,
    currency: 'KZT',
    category: 'activities',
    status: 'estimated',
    paymentMethod: 'Card',
    date: '2026-11-09',
    country: 'Kazakhstan',
    note: 'Full 3-stage gondola ride from Medeu up to highest Talgar Pass'
  },
  {
    id: 'exp-charyn-kolsai-tour',
    title: 'Guided Day Tour: Charyn Canyon & Valley of Castles',
    amount: 24000,
    currency: 'KZT',
    category: 'activities',
    status: 'estimated',
    paymentMethod: 'Card',
    date: '2026-11-10',
    country: 'Kazakhstan',
    note: 'Full-day excursion including transport, guide, and national park admissions'
  },
  {
    id: 'exp-kolsai-kaindy-tour',
    title: 'Excursion: Kolsai Lakes & Lake Kaindy (Sunken Forest)',
    amount: 28000,
    currency: 'KZT',
    category: 'activities',
    status: 'estimated',
    paymentMethod: 'Card',
    date: '2026-11-11',
    country: 'Kazakhstan',
    note: 'Deep mountain trip to Saty village, 4x4 UAZ ride to Kaindy Lake'
  },
  {
    id: 'exp-kazakh-insurance',
    title: 'Travel & Medical Health Insurance Policy',
    amount: 900,
    currency: 'INR',
    category: 'visa',
    status: 'estimated',
    paymentMethod: 'Card',
    date: '2026-11-01',
    country: 'Kazakhstan',
    note: 'Comprehensive travel medical policy covering alpine excursions'
  },
  {
    id: 'exp-airport-taxi-departure',
    title: 'Early Morning Airport Transfer: Hotel → ALA Airport',
    amount: 4500,
    currency: 'KZT',
    category: 'transport',
    status: 'estimated',
    paymentMethod: 'Card',
    date: '2026-11-14',
    country: 'Kazakhstan',
    note: '04:30 AM early morning taxi on Yandex Go for 07:05 AM flight'
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
    admission: '5,000 ₸ return cable car',
    lat: 43.2339,
    lng: 76.9764,
    tags: ['Must-see', 'Viewpoint', 'Sunset'],
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=900&q=80',
    whyGo: 'The sensory heart of Almaty. Friendly vendors offer generous samples of dried apricots, smoked cheese (kurt), local honey, and Almaty apples (Aport).'
  },
  {
    id: 'medeu-shymbulak',
    name: 'Medeu Rink & Shymbulak Mountain Resort',
    city: 'Almaty Mountains',
    category: 'Alpine & Nature',
    shortDescription: 'World-famous outdoor high-altitude ice rink at 1,691m, connected by a scenic 4.5km gondola to Shymbulak Ski Resort and Talgar Pass at 3,200m.',
    bestTime: 'Full half-day (10:00 – 15:00)',
    admission: 'Combo cable car ~9,500 ₸',
    lat: 43.1578,
    lng: 77.0592,
    tags: ['Mountains', 'Snow', 'Highlights'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=900&q=80',
    whyGo: 'Just 30 minutes from downtown by bus #12 or Yandex taxi. Step straight from modern city life into crisp alpine air, dramatic snow peaks, and warm chalet cafes.'
  },
  {
    id: 'charyn-canyon',
    name: 'Charyn Canyon (Valley of Castles)',
    city: 'Almaty Region (East)',
    category: 'Day Trip Wonder',
    shortDescription: 'Spectacular 154km red sandstone canyon carved by the Charyn River, often compared to Arizona’s Grand Canyon with towering wind-sculpted pillars.',
    bestTime: 'Full day excursion (08:00 – 19:00)',
    admission: 'Park entry ~2,000 ₸ (usually in tour)',
    lat: 43.3516,
    lng: 79.0808,
    tags: ['Day Excursion', 'Landscape', 'Geology'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80',
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
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80',
    whyGo: 'Great place to soak in local Almaty evening atmosphere, grab Kazakh samsa or tea, and buy local handicrafts.'
  }
];

export const itinerary = [
  {
    dayNumber: 1,
    date: '2026-11-07',
    weekday: 'Saturday',
    title: 'Outbound Flight DEL → ALA & Welcome to Almaty',
    subtitle: 'Board Air Astana KC908 direct from Delhi, arrive in Almaty by 15:10, and take your first evening stroll on Arbat.',
    city: 'Delhi → Almaty',
    events: [
      {
        time: '09:30 AM',
        type: 'flight',
        title: 'Check-in at Delhi IGI Airport (T3)',
        description: 'Complete check-in and immigration at Terminal 3 for Air Astana flight KC908.'
      },
      {
        time: '12:10 PM – 03:10 PM',
        type: 'flight',
        title: 'Air Astana KC908: DEL → ALA (3h 30m Direct)',
        description: 'Enjoy inflight meals and movies while flying north across the Himalayan and Tian Shan ranges. Lands in Almaty at 15:10 local time (UTC+5).'
      },
      {
        time: '03:10 PM – 04:00 PM',
        type: 'arrival',
        title: 'Immigration & Baggage Claim (14-Day Visa-Free)',
        description: 'Smooth passport stamp at Almaty Airport (ALA). No visa paperwork required for Indian citizens.'
      },
      {
        time: '04:15 PM – 05:00 PM',
        type: 'transfer',
        title: 'Yandex Go transfer to central hotel (~4,500 ₸)',
        description: 'Order a Yandex Go Comfort taxi directly to your Golden Square / Dostyk Avenue hotel.'
      },
      {
        time: '06:30 PM – 09:30 PM',
        type: 'evening',
        title: 'Evening walk along Panfilov & Arbat streets',
        description: 'Stroll the lively pedestrian promenade, listen to local street buskers, and savor your first authentic dinner of Manti dumplings and hot mountain tea.'
      }
    ],
    placeIds: ['arbat-pedestrian']
  },
  {
    dayNumber: 2,
    date: '2026-11-08',
    weekday: 'Sunday',
    title: 'Wooden Masterpiece, Green Bazaar & Kok Tobe Sunset',
    subtitle: 'Step into historical Almaty: the candy-colored Zenkov Cathedral, feast on bazaar samples, and take the cable car to Kok Tobe.',
    city: 'Almaty',
    events: [
      {
        time: '09:30 AM – 11:30 AM',
        type: 'sight',
        title: 'Zenkov Cathedral & Panfilov Park',
        description: 'Marvel at the 1907 wooden cathedral built entirely without nails. Walk through the park to the monumental WWII memorial.'
      },
      {
        time: '11:45 AM – 01:45 PM',
        type: 'market',
        title: 'Green Bazaar (Zelyony Bazar) Food Tasting',
        description: 'Sample walnuts, dried apricots, kurt cheese, mountain honey, and visit the Rakhat chocolate shop next door.'
      },
      {
        time: '02:00 PM – 03:15 PM',
        type: 'food',
        title: 'Traditional Kazakh Teahouse Lunch',
        description: 'Try hot Baursaks (puffy golden bread), Lagman noodles, and fresh tea with lemon.'
      },
      {
        time: '04:30 PM – 07:30 PM',
        type: 'sunset',
        title: 'Kok Tobe Cable Car & Mountain Sunset',
        description: 'Take the aerial cable car from Dostyk station. Watch the sunset glow turn the Tian Shan snow peaks pink and view the glittering city skyline below.'
      }
    ],
    placeIds: ['zenkov-cathedral', 'green-bazaar', 'kok-tobe']
  },
  {
    dayNumber: 3,
    date: '2026-11-09',
    weekday: 'Monday',
    title: 'Alpine Highs: Medeu to Shymbulak (3,200m)',
    subtitle: 'Ascend into the snow peaks: the world-famous Medeu rink and 3-stage gondola ride up to Talgar Pass.',
    city: 'Almaty Mountains',
    events: [
      {
        time: '09:15 AM',
        type: 'transfer',
        title: 'Bus #12 or Yandex taxi to Medeu (1,691m)',
        description: 'Short 25-minute scenic ride up the mountain gorge from Hotel Kazakhstan.'
      },
      {
        time: '10:00 AM – 11:30 AM',
        type: 'sight',
        title: 'Medeu High-Altitude Rink & Dam Staircase',
        description: 'View the highest outdoor speed-skating rink in the world and climb the 842-step "Staircase of Health".'
      },
      {
        time: '11:30 AM – 03:00 PM',
        type: 'alpine',
        title: 'Gondola to Shymbulak & Talgar Pass (3,200m)',
        description: 'Ride three connected cable cars above the pine forests to the glacier pass. Enjoy hot chocolate and lunch at an alpine chalet.'
      },
      {
        time: '04:00 PM – 06:30 PM',
        type: 'return',
        title: 'Descend to city & warm up at Arasan Baths / Cafe',
        description: 'Warm up after the mountain chill at the historic Arasan Wellness Baths or a cozy coffee shop on Abylai Khan Ave.'
      }
    ],
    placeIds: ['medeu-shymbulak']
  },
  {
    dayNumber: 4,
    date: '2026-11-10',
    weekday: 'Tuesday',
    title: 'Grand Canyon of Central Asia: Charyn Canyon',
    subtitle: 'Full-day excursion eastward through the vast steppe to the dramatic red sandstone towers of the Valley of Castles.',
    city: 'Charyn National Park',
    events: [
      {
        time: '08:00 AM',
        type: 'departure',
        title: 'Hotel pickup & scenic steppe drive',
        description: 'Drive east past the snow-capped Trans-Ili Alatau range and rural roadside fruit markets.'
      },
      {
        time: '11:30 AM – 02:30 PM',
        type: 'hike',
        title: 'Hike through the Valley of Castles',
        description: 'Walk 3km through 12-million-year-old sandstone cliffs to the roaring turquoise Charyn River.'
      },
      {
        time: '02:30 PM – 03:30 PM',
        type: 'food',
        title: 'Picnic / Lunch by the eco-park',
        description: 'Enjoy grilled shashlik, fresh bread, and tea before heading back.'
      },
      {
        time: '07:00 PM',
        type: 'evening',
        title: 'Return to Almaty & dinner at Navat',
        description: 'Rest your feet and enjoy an authentic Central Asian dinner.'
      }
    ],
    placeIds: ['charyn-canyon']
  },
  {
    dayNumber: 5,
    date: '2026-11-11',
    weekday: 'Wednesday',
    title: 'The Turquoise Pearls: Kolsai & Kaindy Lakes',
    subtitle: 'Deep expedition into the Tian Shan wilderness: pristine Lower Kolsai Lake and the eerie sunken forest of Lake Kaindy.',
    city: 'Kolsai Lakes National Park',
    events: [
      {
        time: '07:00 AM',
        type: 'departure',
        title: 'Early morning mountain drive toward Saty',
        description: 'Travel through remote mountain passes near the border of Kyrgyzstan.'
      },
      {
        time: '11:00 AM – 01:30 PM',
        type: 'sight',
        title: 'Lake Kaindy (The Sunken Forest)',
        description: 'Transfer via rugged 4x4 UAZ to the remarkable lake where ghostlike dried spruce trunks emerge from clear blue water.'
      },
      {
        time: '02:00 PM – 04:30 PM',
        type: 'sight',
        title: 'Lower Kolsai Lake Boardwalk Stroll',
        description: 'Stroll along the alpine wooden boardwalks of Kolsai Lake, framed by towering spruce forests.'
      },
      {
        time: '08:30 PM',
        type: 'evening',
        title: 'Return to Almaty hotel',
        description: 'Late evening arrival back in Almaty city center.'
      }
    ],
    placeIds: ['kolsai-kaindy-lakes']
  },
  {
    dayNumber: 6,
    date: '2026-11-12',
    weekday: 'Thursday',
    title: 'Mountain Gorges, Botanical Gardens & Modern Almaty',
    subtitle: 'Relaxed mountain and city day: explore the Alma-Arasan gorge, tranquil botanical gardens, and trendy Dostyk cafes.',
    city: 'Almaty',
    events: [
      {
        time: '10:00 AM – 01:00 PM',
        type: 'nature',
        title: 'Alma-Arasan Mountain Gorge & Viewpoint',
        description: 'Take a scenic morning drive into the nearby gorge for pristine river air and mineral springs.'
      },
      {
        time: '01:30 PM – 03:00 PM',
        type: 'food',
        title: 'Mountain river chalet lunch',
        description: 'Dine on fresh trout or hot soup in a heated wooden gazebo.'
      },
      {
        time: '03:30 PM – 06:00 PM',
        type: 'walk',
        title: 'Almaty Main Botanical Garden & Dostyk Cafes',
        description: 'Stroll through the Japanese garden and quiet pine pathways, followed by specialty coffee.'
      },
      {
        time: '07:30 PM',
        type: 'evening',
        title: 'Dinner at Auyl or Tarih (Modern Kazakh)',
        description: 'Experience contemporary Kazakh cuisine blending nomadic heritage with modern culinary art.'
      }
    ],
    placeIds: ['arbat-pedestrian']
  },
  {
    dayNumber: 7,
    date: '2026-11-13',
    weekday: 'Friday',
    title: 'Nomadic Heritage, Chocolate Souvenirs & Farewell Dinner',
    subtitle: 'Discover the Golden Man at Central Museum, stock up on world-famous Rakhat chocolates, and enjoy a farewell feast.',
    city: 'Almaty',
    events: [
      {
        time: '10:00 AM – 12:30 PM',
        type: 'culture',
        title: 'Central State Museum of Kazakhstan',
        description: 'Explore ancient Saka warrior culture, the iconic Golden Man (Altyn Adam), and nomadic yurt exhibits.'
      },
      {
        time: '01:00 PM – 02:30 PM',
        type: 'food',
        title: 'Leisurely brunch on Panfilov Avenue',
        description: 'Relaxed cafe brunch along the tree-lined pedestrian avenue.'
      },
      {
        time: '02:30 PM – 05:30 PM',
        type: 'shopping',
        title: 'Rakhat Chocolate Store & Artisan Wool Crafts',
        description: 'Stock up on iconic blue-wrapped Kazakhstan chocolate bars and traditional felt souvenirs.'
      },
      {
        time: '07:30 PM – 10:00 PM',
        type: 'dinner',
        title: 'Celebratory Farewell Dinner with Live Dombra',
        description: 'Celebrate your journey with authentic national dish Beshbarmak and live traditional Kazakh string music.'
      }
    ],
    placeIds: ['green-bazaar']
  },
  {
    dayNumber: 8,
    date: '2026-11-14',
    weekday: 'Saturday',
    title: 'Return Flight: Almaty → Delhi (Air Astana KC907)',
    subtitle: 'Early morning transfer to ALA airport, 07:05 AM departure, and landing back in Delhi before noon.',
    city: 'Almaty → Delhi',
    events: [
      {
        time: '04:30 AM',
        type: 'morning',
        title: 'Check out from Almaty hotel',
        description: 'Early morning express check-out and luggage loading.'
      },
      {
        time: '04:45 AM',
        type: 'transfer',
        title: 'Yandex Go transfer to Almaty International Airport (ALA)',
        description: 'Fast 25-minute early morning taxi transfer to the international departures terminal.'
      },
      {
        time: '05:15 AM – 06:30 AM',
        type: 'airport',
        title: 'Check-in, Security & Passport Control for KC907',
        description: 'Drop bags, clear passport exit control, and proceed to the boarding gate.'
      },
      {
        time: '07:05 AM – 11:10 AM',
        type: 'flight',
        title: 'Air Astana KC907: ALA → DEL (3h 35m Direct)',
        description: 'Depart Almaty at 07:05 ALMT, landing at Delhi Indira Gandhi International (T3) at 11:10 AM IST. Back home in India before lunch!'
      }
    ],
    placeIds: []
  }
];
