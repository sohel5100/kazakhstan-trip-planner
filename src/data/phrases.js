/**
 * Essential communication phrases and emergency vocabulary for Kazakhstan (Almaty).
 * Both Kazakh (official national language) and Russian (widely spoken lingua franca in Almaty)
 * are provided with phonetic pronunciation guides.
 */

export const phraseCategories = [
  { id: 'essentials', name: 'Essentials & Greetings' },
  { id: 'numbers', name: 'Numbers & Prices' },
  { id: 'transit', name: 'Transport & Taxis' },
  { id: 'dining', name: 'Food & Dietary' },
  { id: 'emergency', name: 'Urgent & Health' }
];

export const handyPhrases = [
  // Essentials & Greetings
  {
    id: 'p-hello',
    cat: 'essentials',
    en: 'Hello (Formal)',
    kz: 'Сәлеметсіз бе',
    ru: 'Здравствуйте',
    pron: 'sah-leh-met-SIZ beh / ZDRAST-vuy-tye',
    note: 'Universal respectful greeting for shops, hotels, and elders.',
    speak: 'Сәлеметсіз бе'
  },
  {
    id: 'p-hi',
    cat: 'essentials',
    en: 'Hi / Peace (Casual)',
    kz: 'Сәлем / Ассалаумағалейкум',
    ru: 'Привет',
    pron: 'sah-LEM / as-sah-lah-oo-mah-alay-KOOM',
    note: 'Common friendly greeting in Central Asia.',
    speak: 'Сәлем'
  },
  {
    id: 'p-thanks',
    cat: 'essentials',
    en: 'Thank you',
    kz: 'Рақмет',
    ru: 'Спасибо',
    pron: 'rahkh-MET / spah-SEE-bah',
    note: 'Always appreciated by drivers, waiters, and shopkeepers.',
    speak: 'Рақмет'
  },
  {
    id: 'p-welcome',
    cat: 'essentials',
    en: 'Please / You’re welcome',
    kz: 'Мархабат / Оқасы жоқ',
    ru: 'Пожалуйста',
    pron: 'mar-khah-BAT / pah-ZHAHL-oo-stah',
    note: 'Used for both "please" and replying to "thank you".',
    speak: 'Мархабат'
  },
  {
    id: 'p-yes-no',
    cat: 'essentials',
    en: 'Yes / No',
    kz: 'Иә / Жоқ',
    ru: 'Да / Нет',
    pron: 'ee-YAH / ZHOQ (DAH / NYET)',
    note: 'Quick simple confirmation.',
    speak: 'Иә, Жоқ'
  },
  {
    id: 'p-sorry',
    cat: 'essentials',
    en: 'Excuse me / Sorry',
    kz: 'Кешіріңіз',
    ru: 'Извините',
    pron: 'keh-sheer-ING-iz / eez-vee-NEET-yeh',
    note: 'Use to get someone\'s attention or apologize on crowded metro.',
    speak: 'Кешіріңіз'
  },
  {
    id: 'p-english',
    cat: 'essentials',
    en: 'Do you speak English?',
    kz: 'Сіз ағылшынша сөйлейсіз бе?',
    ru: 'Вы говорите по-английски?',
    pron: 'siz ah-ghuhl-shuhn-shah soy-lay-siz beh?',
    note: 'Many younger residents in Almaty speak conversational English.',
    speak: 'Сіз ағылшынша сөйлейсіз бе?'
  },
  {
    id: 'p-bye',
    cat: 'essentials',
    en: 'Goodbye',
    kz: 'Сау болыңыз',
    ru: 'До свидания',
    pron: 'sah-oo bohl-uhng-UHZ / dah svee-DAH-nyah',
    note: 'Polite farewell when leaving restaurants and shops.',
    speak: 'Сау болыңыз'
  },

  // Numbers & Prices
  {
    id: 'p-cost',
    cat: 'numbers',
    en: 'How much does this cost?',
    kz: 'Бұл қанша тұрады?',
    ru: 'Сколько это стоит?',
    pron: 'bool qahn-SHAH too-rah-DUH? / SKOHL-kah EH-tah STOH-eet?',
    note: 'Crucial at Green Bazaar fruit, dried nuts, and souvenir stalls.',
    speak: 'Бұл қанша тұрады?'
  },
  {
    id: 'p-expensive',
    cat: 'numbers',
    en: 'Too expensive / Discount?',
    kz: 'Өте қымбат / Түсіріңізші',
    ru: 'Слишком дорого',
    pron: 'ooh-TEH quhm-BAHT / SLEESH-kahm DOH-rah-gah',
    note: 'Friendly bargaining is standard in traditional bazaars.',
    speak: 'Өте қымбат'
  },
  {
    id: 'p-1to5',
    cat: 'numbers',
    en: '1, 2, 3, 4, 5',
    kz: 'Бір, Екі, Үш, Төрт, Бес',
    ru: 'Один, Два, Три, Четыре, Пять',
    pron: 'beer, yeh-kee, oosh, toort, byes',
    note: 'Basic counting for ordering portions or items.',
    speak: 'Бір, екі, үш, төрт, бес'
  },
  {
    id: 'p-tens',
    cat: 'numbers',
    en: '10, 20, 50, 100, 1000 ₸',
    kz: 'Он, Жиырма, Елу, Жүз, Мың теңге',
    ru: 'Десять, Двадцать, Пятьдесят, Сто, Тысяча',
    pron: 'ohn, zhee-yuhr-MAH, yeh-LOO, zhooz, muhng TEN-geh',
    note: 'Common Kazakh banknote denominations.',
    speak: 'Он, жиырма, елу, жүз, мың теңге'
  },
  {
    id: 'p-card',
    cat: 'numbers',
    en: 'Can I pay by card?',
    kz: 'Картамен төлеуге бола ма?',
    ru: 'Можно оплатить картой?',
    pron: 'kahr-tah-MEN toh-lay-oo-GEH boh-lah mah?',
    note: 'Kaspi QR and Visa/Mastercard are accepted in 95% of stores.',
    speak: 'Картамен төлеуге бола ма?'
  },

  // Transport & Taxis
  {
    id: 'p-airport',
    cat: 'transit',
    en: 'Almaty Airport',
    kz: 'Алматы әуежайы',
    ru: 'Аэропорт Алматы',
    pron: 'ahl-mah-TUH ah-weh-zhah-YUH / ah-eh-rah-PORT',
    note: 'Show to your Yandex driver or bus conductor.',
    speak: 'Алматы әуежайы'
  },
  {
    id: 'p-metro-bus',
    cat: 'transit',
    en: 'Where is the metro / bus stop?',
    kz: 'Метро / аялдама қайда?',
    ru: 'Где метро / остановка?',
    pron: 'met-ROH / ah-yahl-dah-MAH qahy-DAH?',
    note: 'Almaty metro stations are clean and fast across the city center.',
    speak: 'Метро қайда?'
  },
  {
    id: 'p-shymbulak',
    cat: 'transit',
    en: 'Medeu & Shymbulak Cable Car',
    kz: 'Медеу / Шымбұлақ аспалы жолы',
    ru: 'Медеу / Канатная дорога Шымбулак',
    pron: 'meh-DEH-oo / shuhm-boo-LAHQ ahs-pah-LUH zhoh-LUH',
    note: 'Bus #12 from Dostyk Hotel takes you direct to Medeu.',
    speak: 'Медеу және Шымбұлақ'
  },
  {
    id: 'p-stop-here',
    cat: 'transit',
    en: 'Stop here, please',
    kz: 'Осы жерден тоқтаңызшы',
    ru: 'Остановите здесь, пожалуйста',
    pron: 'oh-SUH zher-den toq-tah-NUHNG-uhz-shee',
    note: 'Useful in marshrutka minibuses or taxi drop-offs.',
    speak: 'Осы жерден тоқтаңызшы'
  },
  {
    id: 'p-address',
    cat: 'transit',
    en: 'Take me to this address',
    kz: 'Мені мына мекенжайға апарыңызшы',
    ru: 'Отвезите меня по этому адресу',
    pron: 'meh-NEE muh-nah meh-ken-zhy-GAH ah-pah-ruhng-uhz-shee',
    note: 'Hand your phone with the 2GIS / Google address to the driver.',
    speak: 'Мені мына мекенжайға апарыңызшы'
  },

  // Food & Dietary
  {
    id: 'p-water',
    cat: 'dining',
    en: 'Water (still / non-carbonated)',
    kz: 'Газсыз су',
    ru: 'Вода без газа',
    pron: 'GAHZ-suhz SOO / vah-DAH bez GAH-zah',
    note: 'Specify "gas-syz" if you don\'t want sparkling mineral water.',
    speak: 'Газсыз су'
  },
  {
    id: 'p-tea',
    cat: 'dining',
    en: 'Tea with milk (Shai)',
    kz: 'Сүт қосылған шай',
    ru: 'Чай с молоком',
    pron: 'soot qoh-suhl-GHAN SHAHY / CHAI s mah-lah-KOHM',
    note: 'Kazakh milk tea poured into bowls (kese) is legendary hospitalty.',
    speak: 'Сүт қосылған шай'
  },
  {
    id: 'p-veg',
    cat: 'dining',
    en: 'Without meat / Vegetarian',
    kz: 'Етсіз / Вегетариандық тағам',
    ru: 'Без мяса / Вегетарианское',
    pron: 'yet-SIZ / vyeh-gyeh-tah-ree-AHN-skah-yeh',
    note: 'Crucial phrase in meat-loving Central Asian cuisine.',
    speak: 'Етсіз тағам'
  },
  {
    id: 'p-delicious',
    cat: 'dining',
    en: 'Delicious! Thank you',
    kz: 'Өте дәмді! Рақмет',
    ru: 'Очень вкусно! Спасибо',
    pron: 'ooh-TEH dam-DEE! rahkh-MET / OH-chen VKOO-snah',
    note: 'Warm compliment to your host or restaurant chef.',
    speak: 'Өте дәмді! Рақмет'
  },
  {
    id: 'p-bill',
    cat: 'dining',
    en: 'Bill / Check, please',
    kz: 'Шотты әкеліңізші',
    ru: 'Счёт, пожалуйста',
    pron: 'shoht-TUH ah-keh-ling-iz-shee / SCHYOT, pah-ZHAHL-stah',
    note: 'Request the payment check at restaurants.',
    speak: 'Шотты әкеліңізші'
  },

  // Urgent & Health
  {
    id: 'p-help',
    cat: 'emergency',
    en: 'Help me! (Urgent)',
    kz: 'Көмектесіңіздер!',
    ru: 'Помогите!',
    pron: 'koh-mek-teh-SING-iz-der! / pah-mah-GEE-tye!',
    note: 'Call out in an urgent distress situation.',
    speak: 'Көмектесіңіздер!'
  },
  {
    id: 'p-call-112',
    cat: 'emergency',
    en: 'Call 112 / Ambulance (103)',
    kz: '112 / Жедел жәрдем шақырыңыз!',
    ru: 'Вызовите скорую помощь (103)',
    pron: 'zheh-DEL zhar-DEM shah-quh-ruhng-UHZ!',
    note: 'Unified dispatch for medical, rescue, or mountain incidents.',
    speak: 'Жедел жәрдем шақырыңыз'
  },
  {
    id: 'p-doctor',
    cat: 'emergency',
    en: 'I need a doctor / Pharmacy',
    kz: 'Маған дәрігер / Дәріхана керек',
    ru: 'Мне нужен врач / Аптека',
    pron: 'mah-GAHN dah-ree-GER / dah-ree-KHAH-nah keh-REK',
    note: 'Pharmacies ("Därihana" / "Аптека") are everywhere in Almaty.',
    speak: 'Маған дәрігер керек'
  },
  {
    id: 'p-police',
    cat: 'emergency',
    en: 'Call the police (102)',
    kz: 'Полиция шақырыңыз!',
    ru: 'Вызовите полицию!',
    pron: 'pah-LEET-see-yah shah-quh-ruhng-UHZ!',
    note: 'Direct municipal police patrol contact.',
    speak: 'Полиция шақырыңыз'
  },
  {
    id: 'p-consulate',
    cat: 'emergency',
    en: 'Indian Citizen / Indian Mission',
    kz: 'Мен Үндістан азаматымын',
    ru: 'Я гражданин Индии',
    pron: 'men OON-dee-stahn ah-zah-mah-tuh-MUHN',
    note: 'Identifies you to authorities and consular emergency officers.',
    speak: 'Мен Үндістан азаматымын'
  }
];
