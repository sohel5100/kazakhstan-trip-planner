import { defaultExpenses, expenseCategories } from '../data/trip.js?v=31';
import {
  exchangeRates,
  currencySymbols,
  currencyNames,
  getExchangeRate,
  convertCurrency,
  toINR,
  formatCurrency,
  formatEquivalentINR
} from '../data/currency.js?v=31';
import { pageHeader, icon } from '../components/shared.js?v=31';

export const expensesStorageKey = 'fieldnotes-kazakhstan-expenses-v4';

// Older saved lists may hold booking IDs or the old ₹23,500 fare; drop them.
try {
  localStorage.removeItem('fieldnotes-kazakhstan-expenses-v1');
  localStorage.removeItem('fieldnotes-kazakhstan-expenses-v2');
  localStorage.removeItem('fieldnotes-kazakhstan-expenses-v3');
} catch {
  // Ignore storage access issues
}

export function getExpenses() {
  try {
    const raw = localStorage.getItem(expensesStorageKey);
    if (!raw) {
      localStorage.setItem(expensesStorageKey, JSON.stringify(defaultExpenses));
      return defaultExpenses;
    }
    return JSON.parse(raw);
  } catch {
    return defaultExpenses;
  }
}

export function saveExpenses(items) {
  localStorage.setItem(expensesStorageKey, JSON.stringify(items));
}

let converterState = { amount: 5000, currency: 'KZT' };
export function getConverterState() { return converterState; }
export function setConverterState(next) { converterState = { ...converterState, ...next }; }

let activeCategory = 'all';
let activeStatus = 'all';
let showAddForm = false;

export function setActiveCategory(cat) { activeCategory = cat; }
export function setActiveStatus(st) { activeStatus = st; }
export function toggleAddForm(show) {
  if (show !== undefined) showAddForm = show;
  else showAddForm = !showAddForm;
}

export function renderExpenses() {
  const expenses = getExpenses();

  // Calculate high-level summary metrics in INR
  const totalEstimated = expenses.reduce((acc, item) => acc + toINR(item.amount, item.currency), 0);
  const totalPaid = expenses
    .filter(item => item.status === 'paid')
    .reduce((acc, item) => acc + toINR(item.amount, item.currency), 0);
  const remaining = totalEstimated - totalPaid;

  // Filter items
  const filtered = expenses.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchStatus = activeStatus === 'all' || item.status === activeStatus;
    return matchCat && matchStatus;
  });

  const convAmount = converterState.amount;
  const convCurrency = converterState.currency;
  const rate = getExchangeRate(convCurrency);
  const convertedINR = convertCurrency(convAmount, convCurrency, 'INR');

  return `
    ${pageHeader('BUDGET & CONVERSION', 'Trip Expenses & KZT Converter', 'Live currency calculator (₸ KZT → ₹ INR), estimated trip budget, and expense logging.')}

    <!-- Prominent Reference Rates & Interactive Currency Converter -->
    <section class="rate-banner-section" aria-label="Kazakhstani Tenge Exchange Rates">
      <div class="rate-banner-header">
        <div class="rate-banner-title">
          <span class="rate-icon" aria-hidden="true">💱</span>
          <div>
            <p class="eyebrow">REFERENCE CONVERSION RATE</p>
            <h2>Kazakhstani Tenge to Indian Rupee</h2>
          </div>
        </div>
        <div class="rate-source-tag">
          <span>Official Baseline: 1 KZT ≈ ₹0.21 INR</span>
        </div>
      </div>

      <!-- Prominent Rate Cards -->
      <div class="prominent-rate-cards-grid">
        <div class="prominent-rate-card active" data-select-rate="KZT">
          <div class="rate-country">
            <span class="flag">🇰🇿</span>
            <strong>Kazakhstan (Almaty)</strong>
          </div>
          <div class="rate-value-row">
            <span class="rate-formula">1 KZT (₸)</span>
            <span class="rate-arrow">≈</span>
            <span class="rate-result">₹0.21 INR</span>
          </div>
          <small class="rate-hint">Rule of thumb: 1,000 ₸ ≈ ₹210 INR · 5,000 ₸ ≈ ₹1,050 INR</small>
        </div>

        <div class="prominent-rate-card" data-select-rate="INR">
          <div class="rate-country">
            <span class="flag">🇮🇳</span>
            <strong>Indian Rupee (Baseline)</strong>
          </div>
          <div class="rate-value-row">
            <span class="rate-formula">₹100 INR</span>
            <span class="rate-arrow">≈</span>
            <span class="rate-result">476 ₸ KZT</span>
          </div>
          <small class="rate-hint">Divide KZT amounts roughly by 5 to get approximate Rupees</small>
        </div>
      </div>

      <!-- Interactive Calculator Tool -->
      <div class="converter-box" id="currency-calculator">
        <div class="converter-box-header">
          <div>
            <span class="converter-badge">INSTANT CHECK</span>
            <h3>Convert Kazakhstan Tenge to Indian Rupees</h3>
          </div>
          <span class="converter-subtitle">Enter amount in ₸ to see exact ₹ cost</span>
        </div>

        <div class="converter-input-output-grid">
          <div class="converter-input-side">
            <label for="converter-input-amount" class="conv-label">Enter Foreign Amount (${convCurrency}):</label>
            <div class="conv-input-wrap">
              <span class="conv-currency-prefix">${currencySymbols[convCurrency] || convCurrency}</span>
              <input
                type="number"
                id="converter-input-amount"
                class="converter-big-input"
                value="${convAmount}"
                min="0"
                step="any"
                placeholder="5000"
              />
            </div>
            <div class="conv-quick-chips">
              <span class="quick-label">Quick test:</span>
              <button type="button" class="quick-chip" data-quick-amount="1000">1k ₸ (₹210)</button>
              <button type="button" class="quick-chip" data-quick-amount="5000">5k ₸ (₹1,050)</button>
              <button type="button" class="quick-chip" data-quick-amount="10000">10k ₸ (₹2,100)</button>
              <button type="button" class="quick-chip" data-quick-amount="25000">25k ₸ (₹5,250)</button>
              <button type="button" class="quick-chip" data-quick-amount="50000">50k ₸ (₹10,500)</button>
            </div>
          </div>

          <div class="converter-equal-side">
            <span class="equal-symbol">=</span>
          </div>

          <div class="converter-output-side">
            <span class="conv-label">Equivalent in Indian Rupees (INR):</span>
            <div class="converter-result-box">
              <strong id="converter-inr-result">₹${convertedINR.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong>
              <small id="converter-formula-sub" class="converter-formula">
                (${convAmount} ${convCurrency} × ₹${rate.toFixed(2)})
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expense Summary Metrics -->
    <section class="expense-metrics-grid" aria-label="Budget summary">
      <div class="expense-metric-card total">
        <span class="metric-label">TOTAL ESTIMATED BUDGET</span>
        <strong>₹${totalEstimated.toLocaleString('en-IN')}</strong>
        <small>Includes flights, central stay, transport & tours</small>
      </div>
      <div class="expense-metric-card paid">
        <span class="metric-label">PAID / SETTLED</span>
        <strong>₹${totalPaid.toLocaleString('en-IN')}</strong>
        <small>${Math.round((totalPaid / (totalEstimated || 1)) * 100)}% of total budget</small>
      </div>
      <div class="expense-metric-card remaining">
        <span class="metric-label">PENDING / TO PAY</span>
        <strong>₹${remaining.toLocaleString('en-IN')}</strong>
        <small>Estimated on-trip spending</small>
      </div>
    </section>

    <div class="expense-actions-bar">
      <button type="button" class="button button-outline" id="toggle-add-expense-btn">
        + Log new expense
      </button>
    </div>

    ${showAddForm ? `
    <div class="modal-backdrop" id="expense-modal-backdrop">
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-header">
          <div>
            <p class="eyebrow">NEW EXPENSE</p>
            <h2 id="modal-title">Log a trip cost</h2>
          </div>
          <button type="button" class="modal-close-btn" id="cancel-add-expense" aria-label="Close dialog">✕</button>
        </div>
        <form id="new-expense-form" class="expense-form">
          <div class="form-row">
            <label class="form-field full-width">
              <span>Title / Description *</span>
              <input type="text" name="title" placeholder="e.g. Dinner on Panfilov St, Yandex taxi to Medeu, Shymbulak Cable Car" autofocus required />
            </label>
          </div>
          <div class="form-grid-3">
            <label class="form-field">
              <span>Amount *</span>
              <input type="number" step="any" min="0" name="amount" placeholder="0" required />
            </label>
            <label class="form-field">
              <span>Currency</span>
              <select name="currency">
                <option value="KZT" selected>KZT (₸ · Kazakhstan Tenge)</option>
                <option value="INR">INR (₹ · Indian Rupee)</option>
              </select>
            </label>
            <label class="form-field">
              <span>Category</span>
              <select name="category">
                <option value="food">Food & Dining</option>
                <option value="transport">Local Transport / Taxi</option>
                <option value="stay">Accommodation</option>
                <option value="activities">Sights & Tours</option>
                <option value="flights">Flights & Transit</option>
                <option value="shopping">Shopping & Misc</option>
              </select>
            </label>
          </div>
          <div class="form-grid-3">
            <label class="form-field">
              <span>Status</span>
              <select name="status">
                <option value="paid">Paid</option>
                <option value="estimated" selected>Estimated / Planned</option>
              </select>
            </label>
            <label class="form-field">
              <span>Payment Method</span>
              <select name="paymentMethod">
                <option value="Card" selected>Card / Forex</option>
                <option value="Cash">Cash (KZT)</option>
              </select>
            </label>
            <label class="form-field">
              <span>City / Context</span>
              <select name="country">
                <option value="Kazakhstan" selected>Almaty (Kazakhstan)</option>
                <option value="India">India / Pre-trip</option>
              </select>
            </label>
          </div>
          <div class="form-row">
            <label class="form-field full-width">
              <span>Note (optional)</span>
              <input type="text" name="note" placeholder="e.g. Card payment, receipt in email, cash at bazaar" />
            </label>
          </div>
          <div class="form-actions">
            <button type="submit" class="button button-solid">Add to expenses</button>
            <button type="button" class="button button-outline" id="cancel-add-expense-alt">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    ` : ''}

    <div class="expense-filter-bar">
      <div class="filter-chip-group">
        ${expenseCategories.map(cat => `
          <button type="button" class="filter-chip ${activeCategory === cat.id ? 'active selected' : ''}" data-cat-filter="${cat.id}">
            ${cat.name}
          </button>
        `).join('')}
      </div>
      <div class="status-chip-group">
        <button type="button" class="filter-chip status-chip ${activeStatus === 'all' ? 'active selected' : ''}" data-status-filter="all">All status</button>
        <button type="button" class="filter-chip status-chip ${activeStatus === 'paid' ? 'active selected' : ''}" data-status-filter="paid">Paid</button>
        <button type="button" class="filter-chip status-chip ${activeStatus === 'estimated' ? 'active selected' : ''}" data-status-filter="estimated">Estimated</button>
      </div>
    </div>

    <section class="expense-list" aria-label="List of expenses">
      ${filtered.length === 0 ? `
        <div class="empty-state">
          <p class="eyebrow">NO ENTRIES</p>
          <h3>No expenses found.</h3>
          <p class="muted">Try selecting a different filter or tap "+ Log new expense" above.</p>
        </div>
      ` : filtered.map(item => {
        const inr = toINR(item.amount, item.currency);
        const formattedOriginal = formatCurrency(item.amount, item.currency);
        const equivINR = formatEquivalentINR(item.amount, item.currency);
        const isPaid = item.status === 'paid';
        const catInfo = expenseCategories.find(c => c.id === item.category) || { name: item.category, icon: 'pin' };

        return `
          <article class="expense-card ${isPaid ? 'is-paid' : 'is-estimated'}" data-expense-id="${item.id}">
            <div class="expense-card-left">
              <span class="expense-icon-badge ${item.category}">${icon(catInfo.icon || 'pin')}</span>
              <div class="expense-info">
                <div class="expense-title-row">
                  <h3>${item.title}</h3>
                  <span class="status-pill ${isPaid ? 'paid' : 'estimated'}">
                    ${isPaid ? '✓ Paid' : '○ Estimated'}
                  </span>
                </div>
                <div class="expense-meta">
                  <span class="expense-cat-tag">${catInfo.name}</span>
                  <span class="dot">·</span>
                  <span class="expense-country-tag">${item.country}</span>
                  ${item.paymentMethod ? `<span class="dot">·</span><span class="expense-method-tag">${item.paymentMethod}</span>` : ''}
                  ${item.date ? `<span class="dot">·</span><span>${item.date}</span>` : ''}
                </div>
                ${item.note ? `<p class="expense-note">${item.note}</p>` : ''}
              </div>
            </div>
            <div class="expense-card-right">
              <div class="expense-amount-display">
                <strong class="original-amount">${formattedOriginal}</strong>
                ${equivINR ? `<small class="inr-subtext">${equivINR}</small>` : ''}
              </div>
              <div class="expense-card-actions">
                <button type="button" class="btn-expense-action" data-expense-action="toggle" data-id="${item.id}" title="Toggle Paid/Estimated">
                  ${isPaid ? 'Mark estimated' : 'Mark paid'}
                </button>
                <button type="button" class="btn-expense-delete" data-expense-action="delete" data-id="${item.id}" title="Delete expense" aria-label="Delete">
                  ✕
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('')}
    </section>
  `;
}
