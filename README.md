# Kazakhstan Trip Planner (Almaty & Tian Shan) 🏔️

A modular, zero-build client-side trip planner web app for traveling to **Almaty, Kazakhstan**, the Tian Shan alpine passes (Medeu & Shymbulak 3,200m), Charyn Canyon, and Kolsai & Kaindy Lakes.

Tailored for Indian passport travelers with 14-day visa-free regime, confirmed Air Astana direct flights (DEL ↔ ALA), and live Kazakhstani Tenge to Indian Rupee currency converter.

## Confirmed Flights & Dates
- **Dates:** Saturday, November 7 – Saturday, November 14, 2026 (8 Days / 7 Nights)
- **Outbound Flight:** Sat, 7 Nov 2026 · **Air Astana KC908** · 12:10 DEL → 15:10 ALA (3h 30m Direct)
- **Return Flight:** Sat, 14 Nov 2026 · **Air Astana KC907** · 07:05 ALA → 11:10 DEL (3h 35m Direct)
- **Base:** Almaty (Golden Square / Dostyk Avenue)

## Key Features
- **Overview & Confirmed Flight Cards:** Detailed outbound and inbound flight details matching official Air Astana ticket schedule.
- **Interactive Itinerary:** Complete 8-day day-by-day plan with timings, mountain elevations, event tags, and curated spot integrations.
- **Place Directory:** Filter by category (Alpine, Sights, Markets, Food, Day Trips) with one-click "+ Add to plan" toggles.
- **Flight & Ground Transit:** Air Astana flight details, Yandex Go taxi fare guidance, 2GIS offline transit navigation, and Almaty Metro map.
- **Visa & Prep Directory:** 14-day visa-free entry guide for Indian passports, offline 24/7 emergency dispatch (112, 102, 103), and Indian Consular Mission contacts in Almaty (`+7 701 220 7602`) and Embassy in Astana (`+7 701 220 7601`).
- **Packing Checklist:** November alpine layering checklist (Talgar Pass sub-zero weather, sturdy boots for Charyn Canyon, Type C/F Europlug adapters) with progress tracker and JSON export.
- **Currency Converter & Expenses:** Reference conversion cards (`1 KZT ≈ ₹0.21 INR`), interactive KZT $\leftrightarrow$ INR instant calculator with quick chips (1k, 5k, 10k, 25k, 50k ₸), categorized budget breakdown, and expense logger with localStorage persistence.

## Local Development
Run any standard static file server:
```bash
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

## Photo credits

Place photos are from [Wikimedia Commons](https://commons.wikimedia.org/) under their Creative Commons licenses; see each file's Commons page for author and license:

- Kok Tobe: `Вид на Кок-Тобе на Юг на закате с дрона.jpg`
- Zenkov (Ascension) Cathedral: `Zenkov cathedral.jpg`
- Green Bazaar: `Kok bazar.jpg`
- Medeu: `Медеу, Алматы, 2023 жылғы қаңтар (1).jpg`
- Charyn Canyon: `Charyn Canyon, Kazakhstan 03.jpg`
- Kolsai Lakes: `First Kolsay lake 2023.jpg`
- Zhibek Zholy: `Алматы, троллейбус на Жибек Жолы у базара (1).jpg`
