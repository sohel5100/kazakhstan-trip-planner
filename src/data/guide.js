/**
 * Researched recommendations (30 Oct 2026): cafés and hotels.
 * Sources and review notes are in research/04-where-to-stay.md and research/07-cafes.md.
 */

const maps = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const cafes = [
  {
    name: 'Akku',
    kind: 'Heritage café',
    emoji: '🏛️',
    area: 'Panfilov St 123',
    why: 'Rebuilt cult Soviet-modernist park café: mosaics, panoramic windows, library corner.',
    order: 'Profiteroles 790 ₸ · condensed-milk wafer tube 1,290 ₸ · Soviet-style ice cream',
    rating: 'Yandex 4.8 (206)',
    hours: 'to 23:00',
    map: maps('Akku cafe Panfilov 123 Almaty')
  },
  {
    name: 'Six Coffee+Wine',
    kind: 'Specialty coffee & brunch',
    emoji: '☕',
    area: 'Abay Ave 17',
    why: 'Reviewers call it the best coffee in Almaty; wine bar at night.',
    order: 'Flat white · avocado-salmon toast 5,180 ₸ · tandoori chicken bowl 3,890 ₸',
    rating: 'Yandex 5.0 (148)',
    hours: 'Busy at peak times',
    map: maps('Six Coffee Wine Abay 17 Almaty')
  },
  {
    name: 'Bowler Coffee Roasters',
    kind: 'Coffee with a market view',
    emoji: '🛒',
    area: 'Balcony inside the Green Bazaar',
    why: 'Dutch-founded roaster looking down on the market floor.',
    order: 'Pour-over or flat white (~1,500–2,000 ₸)',
    rating: 'Google 4.3 (73)',
    hours: 'Tue–Sun 09:00–18:00 · closed Mon',
    map: maps('Bowler coffee Green Bazaar Almaty')
  },
  {
    name: 'Tary',
    kind: 'Kazakh-twist café, 24/7',
    emoji: '🌾',
    area: 'Abylai Khan Ave 55',
    why: 'Kazakh desserts and baursaks; a warm stop on a cold night.',
    order: 'Tary cheesecake · pancakes with camel-milk cream · baursaks',
    rating: 'Avg bill ~5,000 ₸',
    hours: 'Open 24/7',
    map: maps('Tary Abylai Khan 55 Almaty')
  },
  {
    name: 'JumpinGoat Coffee',
    kind: 'Specialty coffee',
    emoji: '🐐',
    area: 'Abay Ave 35/37',
    why: 'Locals’ favourite downtown coffee shop; order at the counter.',
    order: 'Syrniki · sea-buckthorn tea · cold brew',
    rating: 'Google 4.6 (619)',
    hours: '08:00–20:00',
    map: maps('JumpinGoat Coffee Abay Almaty')
  },
  {
    name: 'ProCoffee',
    kind: 'Design café & brunch',
    emoji: '🛋️',
    area: 'Dostyk Ave 87A',
    why: 'Sofas and sockets: the cosy spot for a smoggy or snowy day.',
    order: 'English breakfast 4,100 ₸ · pancakes 4,200 ₸ · cappuccino 1,800 ₸',
    rating: 'Yandex 5.0 (48)',
    hours: 'to 01:00',
    map: maps('ProCoffee Dostyk 87A Almaty')
  },
  {
    name: 'Bon Bon',
    kind: 'All-day breakfast',
    emoji: '🥞',
    area: 'Abylai Khan Ave 123',
    why: 'Locals’ go-to for breakfast, served all day.',
    order: '“Bohemian” breakfast · syrniki (~3,500 ₸)',
    rating: 'Google 4.6 (435)',
    hours: '~08:00–23:00',
    map: maps('Bon Bon Abylai Khan 123 Almaty')
  },
  {
    name: 'Nedelka',
    kind: 'Breakfast & cakes',
    emoji: '🍰',
    area: 'Abay Ave 19',
    why: 'Reliable and good value; cakes less sweet than usual.',
    order: 'Salmon quiche · eggs with mushrooms · cake',
    rating: 'Google 4.6 (2,703)',
    hours: 'Breakfast to 12:00',
    map: maps('Nedelka Abay 19 Almaty')
  }
];

export const hotels = [
  {
    name: 'Renion Almaty Hotel',
    badge: 'Top pick',
    area: 'Kaldayakov 21 · old town',
    price: '~37,600 ₸/night (7–14 Nov), room only',
    rating: 'Trip.com 9.4 (479) · Booking ~9.1',
    good: '360 m to Green Bazaar, 550 m to Zenkov Cathedral; clean, modern, English-speaking reception, 24/7 desk.',
    watch: 'One Oct 2026 guest missed an early flight — confirm your 04:00 checkout and taxi in writing.',
    map: maps('Renion Almaty Hotel Kaldayakov 21')
  },
  {
    name: 'Voyage',
    badge: 'Value backup',
    area: 'Nazarbayev (Furmanov) 97A',
    price: 'From ~26,000 ₸/night (check your dates)',
    rating: 'Booking 8.7 (1,867)',
    good: '200 m to Zhibek Zholy metro; staff packed a breakfast box for a 06:30 departure; free luggage storage.',
    watch: 'Dated rooms and thin walls — ask for a renovated, quiet room.',
    map: maps('Voyage hotel Furmanov 97A Almaty')
  },
  {
    name: 'Hotel Kazakhstan',
    badge: 'On Dostyk',
    area: 'Dostyk 52/2 · Golden Square',
    price: '~50,300 ₸/night',
    rating: 'Booking 8.2 (2,894)',
    good: 'Iconic tower with views; bus 12 to Medeu at the door; Kok Tobe cable car a short walk.',
    watch: 'Floors 11–13 are worn; busy front desk at peak times.',
    map: maps('Hotel Kazakhstan Dostyk 52 Almaty')
  }
];

// Bookings for the Home status list. No PNRs, IDs or names here — the site is public;
// each button opens the official page where you enter your own reference.
export const bookings = [
  {
    emoji: '🚆',
    name: 'Train: Bhopal → Delhi (Rajdhani 22691, 3A)',
    when: 'Fri 6 Nov, 21:05 → Sat 7 Nov, 05:30 (Hazrat Nizamuddin)',
    status: 'Waitlisted (RLWL) — check until the chart is prepared',
    tone: 'warn',
    actions: [
      { label: 'Check PNR status', href: 'https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en' }
    ]
  },
  {
    emoji: '✈️',
    name: 'Flights: Air Astana KC908 / KC907',
    when: 'Sat 7 Nov DEL 12:10 → ALA · Sat 14 Nov ALA 07:05 → DEL',
    status: 'Confirmed · check in online 24 h before',
    tone: 'ok',
    actions: [
      { label: 'Air Astana (manage / check-in)', href: 'https://airastana.com/ind-en' }
    ]
  },
  {
    emoji: '🏠',
    name: 'Airbnb near Dostyk Ave',
    when: 'Sat 7 Nov → Thu 12 Nov (5 nights)',
    status: 'Confirmed · ₹23,000 paid',
    tone: 'ok',
    actions: [
      { label: 'Open Airbnb trips', href: 'https://www.airbnb.com/trips/v1' }
    ]
  },
  {
    emoji: '🚌',
    name: '2-day tour: Kaindy, Kolsai, Black Canyon & Charyn',
    when: 'Tue 10 → Wed 11 Nov · GYG pickup ~07:00 at Hotel Kazakhstan, or JoinMe from Abay 50',
    status: 'Not booked yet — book by Sun 8 Nov (GYG recommended)',
    tone: 'bad',
    actions: [
      { label: 'GYG 2-day (recommended)', href: 'https://www.getyourguide.com/almaty-city-l1414/almaty-kolsai-kaindy-lakes-charyn-canyons-2-day-tour-t489855/' },
      { label: 'JoinMe 2-day', href: 'https://www.joinme.kz/en/tours/almaty-region/group-tours/kaindy-kolsai-2-days-early-start' },
      { label: 'WhatsApp JoinMe', href: 'https://wa.me/77772999767' }
    ]
  },
  {
    emoji: '🧊',
    name: 'Option: guided Bogdanovich Glacier walk',
    when: 'Mon 9 Nov · meet 09:00, back ~13:30 · 35,000 ₸ + lift ticket',
    status: 'Optional — book today if you want it',
    tone: 'warn',
    actions: [
      { label: 'Sputnik8 tour', href: 'https://www.sputnik8.com/ru/almaty/activities/85679-po-tropam-shymbulaka-k-ledniku-i-oktyabrskoy-peschere' }
    ]
  },
  {
    emoji: '🏔️',
    name: 'Option: Big Almaty Lake by car',
    when: 'Fri 13 Nov · 09:00–14:00 from Abai Opera Theatre',
    status: 'Optional — not booked',
    tone: 'warn',
    actions: [
      { label: 'GYG tour', href: 'https://www.getyourguide.com/almaty-city-l1414/big-almaty-lake-choose-adventure-on-foot-or-by-car-t703808/' }
    ]
  },
  {
    emoji: '🏨',
    name: 'Stay for Nov 12–14 (2 nights)',
    when: 'Thu 12 Nov → Sat 14 Nov (leave 04:00 for the airport)',
    status: 'Not booked yet',
    tone: 'bad',
    actions: [
      { label: 'See hotel options', href: '#travel' }
    ]
  },
  {
    emoji: '🛡️',
    name: 'Travel insurance',
    when: 'Valid 7–14 Nov',
    status: 'Paid',
    tone: 'ok',
    actions: []
  }
];

// Tour comparisons (researched 6 Nov 2026 from the live listings; prices as shown that day, not confirmed).
// One destination entry per trip; alternatives are listed under it. Details in research/08-nov6-update.md.
export const tourComparisons = [
  {
    title: 'Kaindy, Kolsai, Black Canyon & Charyn',
    when: 'Tue 10 – Wed 11 Nov',
    verdict: 'Book one 2-day tour. The lakes are beyond Charyn on the same road, so a 17-hour day trip gives only 1–1.5 h per site with a 04:30 start and half the driving in the dark.',
    options: [
      {
        name: 'Kazakhstan Guided Tours — 2 days',
        badge: '⭐ Recommended',
        price: 'From ₹7,545',
        rating: '4.8 (1,115)',
        format: '2 days · pickup at Hotel Kazakhstan, Holiday Inn Express, Novotel or Ibis Jetisu · back 20:00–21:00 day 2',
        good: 'Day 1 Black Canyon + Kolsai, night in a yurt or guest house; day 2 Kaindy (3 h) + Charyn (2.5 h). Meals, park entry and bonfire included; vegetarian options. Strong reviews up to 2 Nov 2026.',
        watch: 'Group size not stated; some reviewers wanted more time at key stops.',
        url: 'https://www.getyourguide.com/almaty-city-l1414/almaty-kolsai-kaindy-lakes-charyn-canyons-2-day-tour-t489855/'
      },
      {
        name: 'JoinMe — 2 days, early start',
        badge: 'Cheaper',
        price: 'From 30,000 ₸',
        rating: 'No ratings shown',
        format: '2 days · bus from Circus car park, Abay 50 (05:30 or 06:00 meet, 06:20 departure) · back ~19:00 day 2 · up to 40 people',
        good: 'Day 1 Kaindy + Kolsai, guest house in Saty; day 2 Black, Moon and Charyn. All meals, UAZ to Kaindy, eco fees and guide included.',
        watch: 'No November dates listed — confirm on WhatsApp. The link you saved is the closed 14 Sep departure.',
        url: 'https://www.joinme.kz/en/tours/almaty-region/group-tours/kaindy-kolsai-2-days-early-start'
      },
      {
        name: 'Panda Travel — day trip (17 h)',
        badge: 'Not recommended',
        price: 'From ₹5,565',
        rating: '4.7 (2,497)',
        format: '1 day · 04:30–05:00 from Baitursynov 104 · back ~20:30',
        good: 'Charyn (1.5 h), Black Canyon, Kolsai, Kaindy (1.5 h); tickets and guide included.',
        watch: 'Lunch ~5,000 ₸ and eco-taxi extra; recent reviews: messy pickup, freezing, no charging on the bus.',
        url: 'https://www.getyourguide.com/almaty-city-l1414/almaty-charyn-canyon-kolsay-and-kaindy-lakes-day-trip-t565634/'
      },
      {
        name: 'Panda Travel — budget day trip (17 h)',
        badge: 'Not recommended',
        price: 'From ₹4,527',
        rating: '4.6 (1,003)',
        format: '1 day · same pickup as above',
        good: 'Charyn (1 h), Kolsai (1 h), Kaindy (1.5 h); tickets and Kaindy transfer included.',
        watch: 'Very short stops; reviews mention a bus over an hour late and a poor lunch.',
        url: 'https://www.getyourguide.com/almaty-city-l1414/-t810106/'
      }
    ]
  },
  {
    title: 'Big Almaty Lake',
    when: 'Option for Fri 13 Nov',
    verdict: 'If you go, take the car tour. In November the lake is usually frozen and snow-covered; private cars are banned, so only tour vehicles drive up. The apple-orchard link now opens a different 4-hour tour, and apple season is over.',
    options: [
      {
        name: 'Adam Hiking Tours — by car',
        badge: '⭐ Recommended',
        price: 'From ₹5,518',
        rating: '4.8 (255)',
        format: '5 h · 09:00–14:00 weekdays · meet at Abai Opera Theatre',
        good: 'Drives past the checkpoint (300 m walk at the vehicle change), lake ~10:15. Eco fee, English guide, lunch, snacks and water included.',
        watch: 'Alma-Arasan springs may be closed (swapped for Ayusai). Passport required (border zone). Foot option is ~14 km, Mondays only.',
        url: 'https://www.getyourguide.com/almaty-city-l1414/big-almaty-lake-choose-adventure-on-foot-or-by-car-t703808/'
      },
      {
        name: 'Panda Travel — BAL + Alma-Arasan (your “apple orchard” link)',
        badge: 'Second choice',
        price: 'From ₹4,622',
        rating: '4.5 (445)',
        format: '4 h · from Baitursynov 104',
        good: 'No hiking; transport, guide, entry and a meal included.',
        watch: 'No orchard in the live listing. Recent reviews: hot springs closed on several days, a pricey costume photo add-on.',
        url: 'https://www.getyourguide.com/almaty-city-l1414/big-almaty-lake-and-legendary-almaty-apple-orchard-t950118/'
      }
    ]
  }
];

// Local dishes: veg = always meatless, ask = can be meatless but check, meat = contains meat
export const foodGuide = [
  { dish: 'Pumpkin samsa', veg: 'veg', where: 'Kok Tobe restaurant (“mini samsa with pumpkin, no meat”); Extra Virgin', note: 'Most samsa is meat — say “s tykvoy” (with pumpkin).' },
  { dish: 'Morkovcha (Korean carrot salad)', veg: 'ask', where: 'Korean-salad stalls in the Green Bazaar', note: 'Some salads use fish sauce or meat — ask “bez ryby, bez myasa?”.' },
  { dish: 'Baursak (fried dough)', veg: 'ask', where: 'Navat, Tary, Sandyq', note: 'Traditionally fried in mutton or tail fat; modern kitchens often use vegetable oil. Ask every time.' },
  { dish: 'Vegetable / mushroom shashlik', veg: 'veg', where: 'Kok Tobe restaurant; Nash Dvor', note: 'Grilled on the same grill as meat.' },
  { dish: 'Lamb, beef or chicken shashlik', veg: 'meat', where: 'Navat, most chaikhanas', note: 'The classic skewers — meat only.' },
  { dish: 'Vegan lagman, soup, grilled vegetables', veg: 'veg', where: 'Navat (Dostyk 48, next to the Airbnb)', note: 'Listed on HappyCow.' },
  { dish: 'Falafel / veg wrap', veg: 'veg', where: 'Harissa; Coco Street Food; Hummus & Falafel (MEGA Park)', note: 'The big doner chains (Doner King, Rommi) have no falafel found.' },
  { dish: 'Doner / shawarma', veg: 'meat', where: 'Street stalls everywhere', note: 'Meat only unless a stall lists falafel.' },
  { dish: 'Salam Bro burgers & hot dogs', veg: 'meat', where: 'Halal chain, 40+ branches (e.g. Altynsarin 26) — find the nearest in 2GIS', note: 'No vegetarian item found; avg bill ~1,000 ₸.' },
  { dish: 'Pure-veg Indian set meal', veg: 'veg', where: 'Govinda’s, Abylai Khan 39 (~12:00–20:00)', note: '~2,050 ₸; sells out by evening.' }
];
