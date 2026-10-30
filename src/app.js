import { getItineraryPlaceIds, saveItineraryPlaceIds } from './data/itinerary-state.js?v=18';
import { itinerary } from './data/trip.js?v=18';
import { getExchangeRate, convertCurrency } from './data/currency.js?v=18';
import {
  getConverterState,
  renderExpenses,
  getExpenses,
  saveExpenses,
  setActiveCategory,
  setActiveStatus,
  setConverterState,
  toggleAddForm
} from './pages/expenses.js?v=18';
import { renderHome, loadHomeWeather } from './pages/home.js?v=23';
import { renderItinerary } from './pages/itinerary.js?v=18';
import { renderPlaces, setActiveCategory as setPlaceCategory } from './pages/places.js?v=18';
import { renderTravel } from './pages/travel.js?v=21';
import { renderPacking, packingGroups, packingStorageKey, getPackingChecked } from './pages/packing.js?v=18';
import { renderPrep, getEmergencyCity, setEmergencyCity, getPhraseCategory, setPhraseCategory } from './pages/prep.js?v=18';

const pages = {
  home: renderHome,
  itinerary: renderItinerary,
  places: renderPlaces,
  travel: renderTravel,
  prep: renderPrep,
  packing: renderPacking,
  expenses: renderExpenses
};

const root = document.querySelector('#page-root');

export function currentPage() {
  const hash = window.location.hash.replace(/^#\/?/, '').trim();
  return pages[hash] ? hash : 'home';
}

export function render(options = {}) {
  const page = currentPage();
  root.innerHTML = pages[page]();

  if (page === 'home') loadHomeWeather();

  // Home day strip: bring today's card into view
  const todayChip = root.querySelector('.day-chip.is-today');
  if (todayChip) todayChip.parentElement.scrollLeft = todayChip.offsetLeft - todayChip.parentElement.offsetLeft;

  document.querySelectorAll('[data-page]').forEach(link => {
    const active = link.dataset.page === page;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  if (options.scroll !== false) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

window.addEventListener('hashchange', () => render({ scroll: true }));

document.addEventListener('click', event => {
  // Phrase category filter chips
  const phraseCatBtn = event.target.closest('[data-phrase-cat]');
  if (phraseCatBtn) {
    const cat = phraseCatBtn.dataset.phraseCat;
    setPhraseCategory(cat);
    render({ scroll: false });
    return;
  }

  // Speak phrase pronunciation
  const speakTile = event.target.closest('[data-speak-phrase]');
  if (speakTile) {
    const textToSpeak = decodeURIComponent(speakTile.dataset.speakPhrase);
    if ('speechSynthesis' in window && textToSpeak) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.85;
      // Prefer Russian or Kazakh voice if available in browser
      const voices = window.speechSynthesis.getVoices();
      const matchVoice = voices.find(v => v.lang.startsWith('kk') || v.lang.startsWith('ru'));
      if (matchVoice) utterance.voice = matchVoice;
      window.speechSynthesis.speak(utterance);
    }
  }

  // Itinerary place toggles
  const itineraryAction = event.target.closest('[data-itinerary-action]');
  if (itineraryAction) {
    const ids = getItineraryPlaceIds();
    const placeId = itineraryAction.dataset.placeId;
    const next = itineraryAction.dataset.itineraryAction === 'remove'
      ? ids.filter(id => id !== placeId)
      : [...ids, placeId];
    saveItineraryPlaceIds(next);
    render({ scroll: false });
    return;
  }

  // Home day chips / "today's plan": open the itinerary at that day
  const gotoDay = event.target.closest('[data-goto-day]');
  if (gotoDay) {
    event.preventDefault();
    const target = `day-${gotoDay.dataset.gotoDay}`;
    if (currentPage() !== 'itinerary') {
      history.pushState(null, '', '#itinerary');
      render({ scroll: false });
    }
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }

  // Places category filter chips
  const placeCatBtn = event.target.closest('[data-place-cat]');
  if (placeCatBtn) {
    setPlaceCategory(placeCatBtn.dataset.placeCat);
    render({ scroll: false });
    return;
  }

  // Add/remove a place from the plan (Places cards and itinerary mini cards)
  const placeToggle = event.target.closest('.btn-toggle-itinerary, .btn-itinerary-remove');
  if (placeToggle) {
    const ids = getItineraryPlaceIds(itinerary.flatMap(day => day.placeIds || []));
    const placeId = placeToggle.dataset.placeId;
    const next = ids.includes(placeId) ? ids.filter(id => id !== placeId) : [...ids, placeId];
    saveItineraryPlaceIds(next);
    render({ scroll: false });
    return;
  }

  // Active page link smooth scroll to top
  const link = event.target.closest('a[data-page]');
  if (link && link.dataset.page === currentPage()) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Packing export
  if (event.target.closest('#download-packing')) downloadPackingBackup();

  // Prep page emergency city switcher
  const cityTab = event.target.closest('[data-prep-city]');
  if (cityTab) {
    const c = cityTab.dataset.prepCity;
    setEmergencyCity(c);
    render({ scroll: false });
    return;
  }

  // Currency Converter events
  const curSwitchBtn = event.target.closest('[data-switch-currency]');
  if (curSwitchBtn) {
    const cur = curSwitchBtn.dataset.switchCurrency;
    setConverterState({ currency: cur });
    render({ scroll: false });
    return;
  }

  const rateCard = event.target.closest('[data-select-rate]');
  if (rateCard) {
    const cur = rateCard.dataset.selectRate;
    setConverterState({ currency: cur });
    render({ scroll: false });
    return;
  }

  const quickChip = event.target.closest('[data-quick-amount]');
  if (quickChip) {
    const val = parseFloat(quickChip.dataset.quickAmount) || 0;
    setConverterState({ amount: val });
    const input = document.querySelector('#converter-input-amount');
    if (input) input.value = val;
    const state = getConverterState();
    const rate = getExchangeRate(state.currency);
    const converted = convertCurrency(val, state.currency, 'INR').toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const resNode = document.querySelector('#converter-inr-result');
    const formulaNode = document.querySelector('#converter-formula-sub');
    if (resNode) resNode.textContent = '₹' + converted;
    if (formulaNode) formulaNode.textContent = `(${val} ${state.currency} × ₹${rate.toFixed(2)})`;
    return;
  }

  // Category filter in expenses
  const catFilterBtn = event.target.closest('[data-cat-filter]');
  if (catFilterBtn) {
    const cat = catFilterBtn.dataset.catFilter;
    setActiveCategory(cat);
    render({ scroll: false });
    return;
  }

  // Status filter in expenses
  const statusFilterBtn = event.target.closest('[data-status-filter]');
  if (statusFilterBtn) {
    const st = statusFilterBtn.dataset.statusFilter;
    setActiveStatus(st);
    render({ scroll: false });
    return;
  }

  // Open / Close Log Expense Modal
  if (event.target.closest('#toggle-add-expense-btn')) {
    toggleAddForm(true);
    render({ scroll: false });
    return;
  }
  if (event.target.closest('#cancel-add-expense') || event.target.closest('#cancel-add-expense-alt')) {
    toggleAddForm(false);
    render({ scroll: false });
    return;
  }
  if (event.target.id === 'expense-modal-backdrop') {
    toggleAddForm(false);
    render({ scroll: false });
    return;
  }

  // Expense item action (Toggle paid / Delete)
  const expActionBtn = event.target.closest('[data-expense-action]');
  if (expActionBtn) {
    const action = expActionBtn.dataset.expenseAction;
    const id = expActionBtn.dataset.id;
    let items = getExpenses();

    if (action === 'toggle') {
      items = items.map(item => {
        if (item.id === id) {
          return { ...item, status: item.status === 'paid' ? 'estimated' : 'paid' };
        }
        return item;
      });
      saveExpenses(items);
      render({ scroll: false });
    } else if (action === 'delete') {
      items = items.filter(item => item.id !== id);
      saveExpenses(items);
      render({ scroll: false });
    }
    return;
  }
});

// Checkbox change for Packing
document.addEventListener('change', event => {
  const target = event.target;
  const packId = target.dataset.packItem;
  if (!packId) return;

  const checked = getPackingChecked();
  checked[packId] = target.checked;
  try {
    localStorage.setItem(packingStorageKey, JSON.stringify(checked));
  } catch {}

  const label = target.closest('.packing-item');
  if (label) label.classList.toggle('is-checked', target.checked);

  updatePackingProgress(checked);
});

function updatePackingProgress(checked) {
  const items = packingGroups.flatMap(group => group.items);
  const complete = items.filter(item => checked[item.id]).length;
  const progress = document.querySelector('.progress-track');
  const label = document.querySelector('.packing-progress-label');
  if (label) label.textContent = `${complete} of ${items.length} packed`;
  if (progress) {
    progress.setAttribute('aria-valuenow', String(complete));
    progress.querySelector('.progress-fill').style.width = `${Math.round(complete / items.length * 100)}%`;
  }
  packingGroups.forEach(group => {
    const count = group.items.filter(item => checked[item.id]).length;
    const node = document.querySelector(`[data-group-count="${group.id}"]`);
    if (node) node.textContent = `${count}/${group.items.length}`;
  });
}

function downloadPackingBackup() {
  const backup = {
    trip: 'Kazakhstan (Almaty)',
    dates: 'Nov 7 – Nov 14, 2026',
    savedAt: new Date().toISOString(),
    checkedItems: getPackingChecked(),
    checklist: packingGroups,
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'kazakhstan-packing-checklist.json';
  link.click();
  URL.revokeObjectURL(url);
}

// Log new expense form submit
root.addEventListener('submit', event => {
  const form = event.target.closest('#new-expense-form');
  if (!form) return;
  event.preventDefault();

  const data = new FormData(form);
  const newExp = {
    id: 'exp-' + Date.now(),
    title: data.get('title').trim(),
    amount: parseFloat(data.get('amount')),
    currency: data.get('currency'),
    category: data.get('category'),
    status: data.get('status'),
    paymentMethod: data.get('paymentMethod'),
    country: data.get('country'),
    date: new Date().toISOString().slice(0, 10),
    note: data.get('note').trim()
  };

  const list = getExpenses();
  list.unshift(newExp);
  saveExpenses(list);
  toggleAddForm(false);
  render({ scroll: false });
});

// Interactive Converter Input listener
root.addEventListener('input', event => {
  if (event.target.id === 'converter-input-amount') {
    const val = parseFloat(event.target.value) || 0;
    setConverterState({ amount: val });
    const state = getConverterState();
    const rate = getExchangeRate(state.currency);
    const converted = convertCurrency(val, state.currency, 'INR').toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const resNode = document.querySelector('#converter-inr-result');
    const formulaNode = document.querySelector('#converter-formula-sub');
    if (resNode) resNode.textContent = '₹' + converted;
    if (formulaNode) formulaNode.textContent = `(${val} ${state.currency} × ₹${rate.toFixed(2)})`;
  }
});

// Initial boot
render();
