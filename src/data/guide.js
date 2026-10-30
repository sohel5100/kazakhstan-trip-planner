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
