/**
 * Authoritative currency rates and conversion utility for Kazakhstan trip.
 * Primary foreign currency: Kazakhstani Tenge (KZT, ₸).
 * Baseline currency: Indian Rupee (INR, ₹).
 */

export const exchangeRates = {
  INR: 1,
  KZT: 0.21,  // 1 Kazakhstani Tenge ≈ ₹0.21 INR (1,000 KZT ≈ ₹210 INR)
  USD: 84.00, // 1 US Dollar ≈ ₹84.00 INR
  EUR: 92.00, // 1 Euro ≈ ₹92.00 INR
};

export const currencySymbols = {
  INR: '₹',
  KZT: '₸',
  USD: '$',
  EUR: '€',
};

export const currencyNames = {
  INR: 'Indian Rupee',
  KZT: 'Kazakhstani Tenge',
  USD: 'US Dollar',
  EUR: 'Euro',
};

export function getExchangeRate(currency = 'INR') {
  const code = (currency || 'INR').toUpperCase();
  if (code in exchangeRates) {
    return exchangeRates[code];
  }
  return 1;
}

export function convertCurrency(amount, from = 'INR', to = 'INR') {
  const num = parseFloat(amount);
  if (isNaN(num)) return 0;

  const fromCode = (from || 'INR').toUpperCase();
  const toCode = (to || 'INR').toUpperCase();

  if (fromCode === toCode) return num;

  const fromRate = getExchangeRate(fromCode);
  const toRate = getExchangeRate(toCode);

  const inrAmount = num * fromRate;
  return inrAmount / toRate;
}

export function toINR(amount, fromCurrency = 'INR') {
  return Math.round(convertCurrency(amount, fromCurrency, 'INR'));
}

export function formatCurrency(amount, currency = 'INR', options = {}) {
  const num = parseFloat(amount) || 0;
  const code = (currency || 'INR').toUpperCase();
  const symbol = currencySymbols[code] || code;

  const decimals = options.decimals !== undefined ? options.decimals : (num % 1 !== 0 ? 2 : 0);
  const formatted = num.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    ...options
  });

  return `${symbol}${formatted}`;
}

export function formatEquivalentINR(amount, currency = 'INR') {
  const code = (currency || 'INR').toUpperCase();
  if (code === 'INR') return '';
  const inr = toINR(amount, code);
  return `≈ ₹${inr.toLocaleString('en-IN')}`;
}
