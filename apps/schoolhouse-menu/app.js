const state = {
  allWhiskies: [],
  filteredWhiskies: [],
};

const elements = {
  searchInput: document.getElementById("search-input"),
  categorySelect: document.getElementById("category-select"),
  subcategorySelect: document.getElementById("subcategory-select"),
  ibStatusSelect: document.getElementById("ib-status-select"),
  ibNameSelect: document.getElementById("ib-name-select"),
  priceFieldSelect: document.getElementById("price-field-select"),
  maxPriceInput: document.getElementById("max-price-input"),
  sortSelect: document.getElementById("sort-select"),
  resetButton: document.getElementById("reset-filters"),
  resultsSummary: document.getElementById("results-summary"),
  resultsGrid: document.getElementById("results-grid"),
  cardTemplate: document.getElementById("whiskey-card-template"),
};

function currency(value) {
  return `$${Number(value).toFixed(2)}`;
}

function getSelectedFilters() {
  return {
    search: elements.searchInput.value.trim().toLowerCase(),
    category: elements.categorySelect.value,
    subcategory: elements.subcategorySelect.value,
    ibStatus: elements.ibStatusSelect.value,
    ibName: elements.ibNameSelect.value,
    priceField: elements.priceFieldSelect.value,
    maxPrice: elements.maxPriceInput.value.trim(),
    sort: elements.sortSelect.value,
  };
}

function populateCategoryOptions() {
  const categories = [...new Set(state.allWhiskies.map((item) => item.category))].sort();
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.categorySelect.append(option);
  }
}

function populateSubcategoryOptions() {
  const selectedCategory = elements.categorySelect.value;
  const subcategories = [
    ...new Set(
      state.allWhiskies
        .filter((item) => !selectedCategory || item.category === selectedCategory)
        .map((item) => item.subcategory),
    ),
  ].sort();

  const previousValue = elements.subcategorySelect.value;
  elements.subcategorySelect.innerHTML = '<option value="">All subcategories</option>';

  for (const subcategory of subcategories) {
    const option = document.createElement("option");
    option.value = subcategory;
    option.textContent = subcategory;
    elements.subcategorySelect.append(option);
  }

  if (subcategories.includes(previousValue)) {
    elements.subcategorySelect.value = previousValue;
  }
}

function populateIndependentBottlerOptions() {
  const selectedStatus = elements.ibStatusSelect.value;
  const selectedCategory = elements.categorySelect.value;

  const bottlers = [
    ...new Set(
      state.allWhiskies
        .filter((item) => !selectedCategory || item.category === selectedCategory)
        .filter((item) => {
          if (selectedStatus === "yes") {
            return Boolean(item.independentBottler);
          }

          if (selectedStatus === "no") {
            return false;
          }

          return Boolean(item.independentBottler);
        })
        .map((item) => item.independentBottler)
        .filter(Boolean),
    ),
  ].sort();

  const previousValue = elements.ibNameSelect.value;
  elements.ibNameSelect.innerHTML = '<option value="">All bottlers</option>';

  for (const bottler of bottlers) {
    const option = document.createElement("option");
    option.value = bottler;
    option.textContent = bottler;
    elements.ibNameSelect.append(option);
  }

  if (bottlers.includes(previousValue)) {
    elements.ibNameSelect.value = previousValue;
  }
}

function sortWhiskies(items, sort, priceField) {
  const sorted = [...items];

  sorted.sort((left, right) => {
    if (sort === "name-asc") {
      return left.name.localeCompare(right.name);
    }

    if (sort === "name-desc") {
      return right.name.localeCompare(left.name);
    }

    const leftPrice = Number(left[priceField]);
    const rightPrice = Number(right[priceField]);

    if (leftPrice !== rightPrice) {
      return sort === "price-asc" ? leftPrice - rightPrice : rightPrice - leftPrice;
    }

    return left.name.localeCompare(right.name);
  });

  return sorted;
}

function applyFilters() {
  const filters = getSelectedFilters();
  const maxPrice = filters.maxPrice ? Number(filters.maxPrice) : null;

  const filtered = state.allWhiskies.filter((item) => {
    const haystack = `${item.name} ${item.category} ${item.subcategory}`.toLowerCase();
    if (filters.search && !haystack.includes(filters.search)) {
      return false;
    }

    if (filters.category && item.category !== filters.category) {
      return false;
    }

    if (filters.subcategory && item.subcategory !== filters.subcategory) {
      return false;
    }

    if (filters.ibStatus === "yes" && !item.independentBottler) {
      return false;
    }

    if (filters.ibStatus === "no" && item.independentBottler) {
      return false;
    }

    if (filters.ibName && item.independentBottler !== filters.ibName) {
      return false;
    }

    if (maxPrice !== null && Number(item[filters.priceField]) > maxPrice) {
      return false;
    }

    return true;
  });

  state.filteredWhiskies = sortWhiskies(filtered, filters.sort, filters.priceField);
  renderResults();
}

function renderResults() {
  const fragment = document.createDocumentFragment();
  const count = state.filteredWhiskies.length;
  const priceFieldLabel = elements.priceFieldSelect.options[elements.priceFieldSelect.selectedIndex].text;
  const maxPrice = elements.maxPriceInput.value.trim();
  const sortLabel = elements.sortSelect.options[elements.sortSelect.selectedIndex].text;

  const summaryParts = [`${count} whisk${count === 1 ? "y" : "ies"} shown`];

  if (maxPrice) {
    summaryParts.push(`${priceFieldLabel} max $${Number(maxPrice).toFixed(2)}`);
  }

  if (sortLabel.toLowerCase().includes("price")) {
    summaryParts.push(sortLabel);
  }

  elements.resultsSummary.textContent = summaryParts.join(" · ");
  elements.resultsGrid.innerHTML = "";

  if (count === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No whiskies match the current filters.";
    elements.resultsGrid.append(empty);
    return;
  }

  for (const item of state.filteredWhiskies) {
    const card = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".card-category").textContent = item.category;
    card.querySelector(".card-subcategory").textContent = item.subcategory;
    card.querySelector(".card-name").textContent = item.name;
    card.querySelector(".price-one-oz").textContent = currency(item.oneOz);
    card.querySelector(".price-one-point-five-oz").textContent = currency(item.onePointFiveOz);
    card.querySelector(".price-two-oz").textContent = currency(item.twoOz);
    card.querySelector(".source-link").href = item.sourcePage;
    fragment.append(card);
  }

  elements.resultsGrid.append(fragment);
}

function resetFilters() {
  elements.searchInput.value = "";
  elements.categorySelect.value = "";
  populateSubcategoryOptions();
  elements.subcategorySelect.value = "";
  elements.ibStatusSelect.value = "";
  populateIndependentBottlerOptions();
  elements.ibNameSelect.value = "";
  elements.priceFieldSelect.value = "oneOz";
  elements.maxPriceInput.value = "";
  elements.sortSelect.value = "name-asc";
  applyFilters();
}

function wireEvents() {
  elements.searchInput.addEventListener("input", applyFilters);
  elements.categorySelect.addEventListener("change", () => {
    populateSubcategoryOptions();
    populateIndependentBottlerOptions();
    applyFilters();
  });
  elements.subcategorySelect.addEventListener("change", applyFilters);
  elements.ibStatusSelect.addEventListener("change", () => {
    populateIndependentBottlerOptions();
    applyFilters();
  });
  elements.ibNameSelect.addEventListener("change", applyFilters);
  elements.priceFieldSelect.addEventListener("change", applyFilters);
  elements.maxPriceInput.addEventListener("input", applyFilters);
  elements.sortSelect.addEventListener("change", applyFilters);
  elements.resetButton.addEventListener("click", resetFilters);
}

async function init() {
  try {
    const response = await fetch("./output/whiskies.json");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    state.allWhiskies = await response.json();
    populateCategoryOptions();
    populateSubcategoryOptions();
    populateIndependentBottlerOptions();
    wireEvents();
    applyFilters();
  } catch (error) {
    elements.resultsSummary.textContent = "Failed to load whiskey data.";
    elements.resultsGrid.innerHTML = `<div class="empty-state">${error.message}</div>`;
  }
}

init();
