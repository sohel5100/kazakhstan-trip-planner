import { getExchangeRate } from '../data/currency.js?v=43';

// Adds the rupee value in brackets after every tenge amount on the page,
// e.g. "10,000 ₸" → "10,000 ₸ (≈₹2,100)" and "2,000–4,000 ₸" → "2,000–4,000 ₸ (≈₹420–840)".
// Skips amounts that already show rupees and the converter/expense widgets.
const NUMBER = String.raw`(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?`;
const TENGE = new RegExp(String.raw`(?<![\d.,])(${NUMBER})(?:\s*[–-]\s*~?(${NUMBER}))?\s*₸(?!\s*\(≈₹)(?!\s*≈)`, 'g');
const SKIP = '.rate-guide, .home-converter, #currency-calculator, .rate-banner-section, .expense-card, .expense-metrics-grid, .modal-backdrop, script, style, textarea';

function toRupees(text) {
  const inr = Number(text.replace(/,/g, '')) * getExchangeRate('KZT');
  const rounded = inr < 100 ? Math.round(inr) : Math.round(inr / 10) * 10;
  return rounded.toLocaleString('en-IN');
}

export function addRupees(rootEl) {
  if (!rootEl) return;
  const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, {
    acceptNode: node => (node.nodeValue.includes('₸') && !node.parentElement.closest(SKIP)
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT)
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    node.nodeValue = node.nodeValue.replace(TENGE, (match, low, high) =>
      `${match} (≈₹${toRupees(low)}${high ? `–${toRupees(high)}` : ''})`);
  });
}
