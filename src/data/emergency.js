/**
 * Essential emergency contacts, hotline numbers, and Indian consular missions
 * for Kazakhstan (Almaty & Astana).
 */

export const emergencyContacts = {
  almaty: {
    region: 'Almaty & Southern Kazakhstan',
    code: '+7',
    city: 'Almaty',
    currency: 'KZT (₸)',
    flag: '🇰🇿',
    services: [
      { name: 'Unified Emergency (Police, Ambulance, Rescue)', number: '112', note: '24/7 toll-free dispatch from any mobile (Kazakh, Russian, English)' },
      { name: 'Police Dispatch', number: '102', note: 'Direct municipal police patrol response' },
      { name: 'Emergency Medical / Ambulance', number: '103', note: 'Urgent medical assistance & paramedics' },
      { name: 'Fire & Rescue', number: '101', note: 'Emergency fire services' }
    ],
    embassy: {
      name: 'Representative Office of India / Consulate, Almaty',
      address: '156-158 Kabanbay Batyr Street (corner of Chaikovskogo), Almaty, 050012',
      phone: '+7 727 278 4466',
      emergencyPhone: '+7 701 220 7602',
      email: 'cons.almaty@mea.gov.in',
      mapQuery: 'Representative+Office+of+India+Almaty+Kazakhstan'
    },
    practicalTips: [
      'Yandex Go is the essential taxi & food app in Almaty; avoids airport taxi haggling.',
      'Indian citizens have 14-day VISA-FREE entry; keep return flight & hotel confirmation handy.',
      'Download 2GIS app offline for Almaty navigation — it shows building entrance gates and live bus tracking.',
      'Tap water in Almaty is generally clean mountain runoff, but boiled/bottled water is recommended for travelers.'
    ]
  },
  astana: {
    region: 'Astana & Northern Kazakhstan',
    code: '+7',
    city: 'Astana (Capital)',
    currency: 'KZT (₸)',
    flag: '🇰🇿',
    services: [
      { name: 'Unified Emergency', number: '112', note: 'National unified emergency hotline' },
      { name: 'Police', number: '102', note: 'Direct police line' },
      { name: 'Ambulance', number: '103', note: 'Medical dispatch' }
    ],
    embassy: {
      name: 'Embassy of India, Astana',
      address: 'Kabanbay Batyr Ave 6/1, "Cascade" Business Centre, Astana, 010000',
      phone: '+7 7172 925700',
      emergencyPhone: '+7 701 220 7601',
      email: 'cons.astana@mea.gov.in',
      mapQuery: 'Embassy+of+India+Astana+Kazakhstan'
    },
    practicalTips: [
      'Astana is one of the coldest capital cities in the world; November brings snow and wind chill.',
      'High-speed Talgo sleeper train links Almaty and Astana in ~9 to 14 hours.'
    ]
  }
};
