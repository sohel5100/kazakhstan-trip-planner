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
        good: 'Day 1 Black Canyon + Kolsai, night in a yurt or guest house; day 2 Kaindy (3 h) + Charyn (2.5 h). Meals, park entry and bonfire included. Strong reviews up to 2 Nov 2026.',
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

// Must-try dishes, ranked by how many independent sources recommend them (food sweep of 29 sources, 6 Nov 2026).
// meat = contains meat, ask = usually meatless but check, veg = meatless. Details: research/08-nov6-update.md
export const foodGuide = [
  { dish: 'Beshbarmak', veg: 'meat', sources: 15, what: 'Boiled horse/lamb/beef on flat noodles with onion broth (sorpa) — the national dish.', where: 'Sandyq (most praised on Yandex), Qaimaq, AUYL, Bauyrdaq (cheapest, 4,390 ₸), Navat', price: '4,390–8,400 ₸ · portions are big, share one' },
  { dish: 'Plov', veg: 'meat', sources: 12, what: 'Rice pilaf with carrots and meat; Navat does a horse-meat version.', where: 'Navat, AUYL (kazan plov), Qaganat canteen (2,410 ₸)', price: '1,500–3,500 ₸' },
  { dish: 'Baursak', veg: 'ask', sources: 12, what: 'Fried dough puffs with tea, kaymak cream or honey; often free with tea.', where: 'Navat (free with tea), AUYL with balqaimaq, Tary, Qaimaq', price: '0–1,500 ₸' },
  { dish: 'Kazy', veg: 'meat', sources: 11, what: 'Horse-rib sausage, usually served cold in platters.', where: 'Sandyq, Navat, Tarih; free samples at the Green Bazaar meat hall', price: 'in platters' },
  { dish: 'Lagman', veg: 'meat', sources: 11, what: 'Uyghur/Dungan hand-pulled noodles — guyru (topped) or tsomyan (fried).', where: 'Navat guyru lagman, As-Kazan tsomyan (Gogol 13)', price: '1,500–3,500 ₸' },
  { dish: 'Manti', veg: 'meat', sources: 10, what: 'Large steamed dumplings, lamb or beef (pumpkin version exists).', where: 'Navat, AUYL (hoshan manti), Kese', price: '2,290–4,500 ₸' },
  { dish: 'Shashlik', veg: 'meat', sources: 8, what: 'Charcoal-grilled skewers of lamb, beef or chicken.', where: 'Navat, AUYL (layered horse), Na Kirova Shashlychnaya (Bogenbai Batyr 72)', price: '~1,500–3,000 ₸ a skewer' },
  { dish: 'Kuyrdak', veg: 'meat', sources: 8, what: 'Fried meat, offal and tail fat with onion and potato.', where: 'Sandyq (7,790 ₸), Qaimaq (served in a pumpkin), Mura', price: '4,000–7,800 ₸' },
  { dish: 'Tandoor samsa', veg: 'meat', sources: 8, what: 'Flaky pastry baked on the tandoor wall; pumpkin is the meatless version.', where: 'Navat (chicken or lamb), Green Bazaar tandoor stalls', price: '300–900 ₸' },
  { dish: 'Kumys / shubat', veg: 'veg', sources: 8, what: 'Fermented mare’s milk / camel’s milk — sour and fizzy.', where: 'Sandyq kumys bar, AUYL', price: '500–1,500 ₸' },
  { dish: 'Dungan noodles with quail', veg: 'meat', sources: 5, what: 'AUYL’s signature dish — almost every AUYL review mentions it.', where: 'AUYL (next to the Medeu gondola)', price: '~5,300 ₸' },
  { dish: 'Horse tartare', veg: 'meat', sources: 3, what: 'The most-praised dish in AUYL’s Yandex reviews.', where: 'AUYL', price: '4,000–6,000 ₸' },
  { dish: 'Korean salads (morkovcha)', veg: 'ask', sources: 5, what: 'Spicy carrot and other salads from the local Korean community.', where: 'Green Bazaar salad row', price: 'by weight' },
  { dish: 'Kurt / irimshik', veg: 'veg', sources: 5, what: 'Salty dried cheese balls / sweet dried curd — divisive, try a sample first.', where: 'Green Bazaar dairy section, Tary', price: 'cheap' },
  { dish: 'Rakhat chocolate & Aport apples', veg: 'veg', sources: 3, what: 'The classic edible souvenirs; Aport apples are in season in autumn.', where: 'Rakhat shop on Zhibek Zholy 47 or Zenkov 2; apples at the Green Bazaar', price: 'by weight' }
];

// Restaurants that several independent sources agree on (food sweep, 6 Nov 2026)
export const restaurants = [
  { name: 'Sandyq', sources: 12, area: 'Abylai Khan 55', order: 'Beshbarmak, kuyrdak, cheese baursaks, smoked horse, kumys', price: '6,000–10,000 ₸ + 15% service', tip: 'Book dinner; live music. Reviews: slow on busy nights, food sometimes arrives cold.', plan: 'Farewell dinner, Fri 13' },
  { name: 'Navat', sources: 11, area: 'Dostyk 48 · Abylai Khan 58A', order: 'Beshbarmak, horse plov, guyru lagman, samsa, manti; baursaks free with tea', price: '3,500–8,000 ₸ + 10%', tip: 'Chain — quality varies by branch; noisy and slow when full.', plan: 'Sat 7 dinner · Fri 13 lunch' },
  { name: 'AUYL', sources: 9, area: 'Next to the Medeu gondola (1 km)', order: 'Horse tartare, Dungan noodles with quail, beshbarmak, baursak with balqaimaq, kazan plov', price: '12,000–25,000 ₸', tip: 'Book ahead. Noisy, patchy service per reviews.', plan: 'Mon 9 after Shymbulak' },
  { name: 'Qaimaq', sources: 6, area: 'Abay 46A (near the Circus)', order: 'Beshbarmak (share it), kuyrdak in a pumpkin, kaymak with bread', price: '~7,000 ₸', tip: 'Book at weekends; the priciest beshbarmak in one guide.', plan: 'Wed 11 after the tour' },
  { name: 'Tarih', sources: 4, area: 'Abylai Khan 104', order: 'Tarih soup (horse broth, kazy), horse-meat ravioli, modern beshbarmak', price: '4,500–15,000 ₸', tip: 'Modern take on Kazakh food — “not traditional, but tastes as it should”.', plan: 'Thu 12 dinner' },
  { name: 'Bauyrdaq', sources: 4, area: 'Several branches, 24/7', order: 'Beshbarmak 4,390 ₸, Nauryz kozhe, baursak burger with kazy', price: '~2,200 ₸', tip: 'Cheapest good beshbarmak; manti weaker.', plan: 'Backup any night' },
  { name: 'Qaganat', sources: 3, area: 'Canteen chain, e.g. Dostyk 108 by Kok Tobe', order: 'Point-and-pay plov, cutlets, soups', price: '1,500–3,000 ₸, no service charge', tip: 'Cheap and fast; quality varies by branch.', plan: 'Sun 8 after Kok Tobe' }
];
