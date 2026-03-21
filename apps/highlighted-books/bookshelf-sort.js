(() => {
  const grid = document.getElementById("books-grid");
  const buttons = Array.from(document.querySelectorAll(".sort-button"));
  const yearFilter = document.getElementById("year-filter");
  let activeSortKey = "date";

  if (!grid || buttons.length === 0 || !yearFilter) {
    return;
  }

  function compareCards(a, b, sortKey, direction) {
    const multiplier = direction === "asc" ? 1 : -1;
    const aDate = Number(a.dataset.lastKey || "0");
    const bDate = Number(b.dataset.lastKey || "0");
    const aHighlights = Number(a.dataset.totalHighlights || "0");
    const bHighlights = Number(b.dataset.totalHighlights || "0");
    const aTitle = a.dataset.title || "";
    const bTitle = b.dataset.title || "";

    if (sortKey === "date" && aDate !== bDate) {
      return (aDate - bDate) * multiplier;
    }

    if (sortKey === "highlights" && aHighlights !== bHighlights) {
      return (aHighlights - bHighlights) * multiplier;
    }

    if (aDate !== bDate) {
      return bDate - aDate;
    }

    if (aHighlights !== bHighlights) {
      return bHighlights - aHighlights;
    }

    return aTitle.localeCompare(bTitle);
  }

  function renderSortButton(button, active) {
    const label = button.dataset.sort === "date" ? "Date" : "Highlights";
    const arrow = button.dataset.direction === "asc" ? "↑" : "↓";
    button.textContent = active ? `${label} ${arrow}` : label;
    button.setAttribute("aria-pressed", active ? "true" : "false");
  }

  function filterCards(cards, year) {
    cards.forEach((card) => {
      const years = String(card.dataset.years || "")
        .split(",")
        .filter(Boolean);
      const visible = year === "all" || years.includes(year);
      card.hidden = !visible;
    });

    return cards.filter((card) => !card.hidden);
  }

  function sortGrid(sortKey, direction) {
    activeSortKey = sortKey;
    const allCards = Array.from(grid.querySelectorAll(".card"));
    const cards = filterCards(allCards, yearFilter.value);
    cards.sort((a, b) => compareCards(a, b, sortKey, direction));
    cards.forEach((card) => grid.appendChild(card));

    buttons.forEach((button) => {
      renderSortButton(button, button.dataset.sort === sortKey);
    });
  }

  buttons.forEach((button) => {
    renderSortButton(button, button.dataset.sort === "date");
    button.addEventListener("click", () => {
      const nextDirection =
        button.dataset.direction === "desc" ? "asc" : "desc";
      button.dataset.direction = nextDirection;
      sortGrid(button.dataset.sort, nextDirection);
    });
  });

  yearFilter.addEventListener("change", () => {
    const activeButton = buttons.find(
      (button) => button.dataset.sort === activeSortKey,
    );
    const direction = activeButton ? activeButton.dataset.direction : "desc";
    sortGrid(activeSortKey, direction);
  });
})();
