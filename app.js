const titles = [
  {
    id: 1, title: "Dune: Part Two", year: 2024, type: "Film", runtime: "2h 47m",
    genres: ["Sci-Fi", "Adventure"], label: "THE KINOSERA EDIT",
    description: "Paul Atreides unites with Chani and the Fremen while following a path of revenge against the conspirators who destroyed his family. A choice between love and the fate of the universe awaits.",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/o869RihWTdTyBcEZBjz0izvEsVf.jpg",
    tmdb: "https://www.themoviedb.org/movie/693134-dune-part-two",
    a: "#a75f2b", b: "#17131a", glow: "#e7a04b", symbol: "D"
  },
  {
    id: 2, title: "Severance", year: 2022, type: "Series", runtime: "2 seasons",
    genres: ["Drama", "Mystery", "Sci-Fi"], label: "MIND-BENDING",
    description: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. A mysterious colleague outside the office begins to unravel the truth.",
    poster: "https://image.tmdb.org/t/p/w500/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/ixgFmf1X59PUZam2qbAfskx2gQr.jpg",
    tmdb: "https://www.themoviedb.org/tv/95396-severance",
    a: "#356f8d", b: "#101b28", glow: "#7cc3e7", symbol: "S"
  },
  {
    id: 3, title: "The Batman", year: 2022, type: "Film", runtime: "2h 57m",
    genres: ["Crime", "Mystery", "Thriller"], label: "DARK & GRITTY",
    description: "In his second year fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    tmdb: "https://www.themoviedb.org/movie/414906-the-batman",
    a: "#632b2e", b: "#111116", glow: "#bc5044", symbol: "B"
  },
  {
    id: 4, title: "Interstellar", year: 2014, type: "Film", runtime: "2h 49m",
    genres: ["Sci-Fi", "Drama", "Adventure"], label: "BEYOND THE STARS",
    description: "As Earth becomes increasingly uninhabitable, a team of explorers travels through a newly discovered wormhole in search of a future for humanity.",
    poster: "https://cdn.ome.lt/legacy/images/galerias/Interstellar/Interstellar-Poster-18Set2014-1.jpg",
    tmdb: "https://www.themoviedb.org/movie/157336-interstellar",
    a: "#5c5869", b: "#11131b", glow: "#b2a3bd", symbol: "I"
  },
  {
    id: 5, title: "The Bear", year: 2022, type: "Series", runtime: "4 seasons",
    genres: ["Drama", "Comedy"], label: "CHARACTER-DRIVEN",
    description: "A young chef returns to Chicago to run his family's sandwich shop. In the heat of the kitchen, grief, ambition and an unlikely team collide.",
    poster: "https://image.tmdb.org/t/p/w500/9kwgN5FiJqQJ6GKhaLMNRakYzeG.jpg",
    tmdb: "https://www.themoviedb.org/tv/136315-the-bear",
    a: "#5f4632", b: "#191619", glow: "#d99a56", symbol: "C"
  },
  {
    id: 6, title: "Dark", year: 2017, type: "Series", runtime: "3 seasons",
    genres: ["Mystery", "Sci-Fi", "Thriller"], label: "A PUZZLE IN TIME",
    description: "A missing child sets four families on a frantic search for answers, exposing a mystery that stretches across generations in a small German town.",
    poster: "https://image.tmdb.org/t/p/w500/1DLjjvSWMYo17B7wuz6YikB96hH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/3jDXL4Xvj3AzDOF6UH1xeyHW8MH.jpg",
    tmdb: "https://www.themoviedb.org/tv/70523-dark",
    a: "#28463f", b: "#101617", glow: "#8aab91", symbol: "D"
  },
  {
    id: 7, title: "Breaking Bad", year: 2008, type: "Series", runtime: "5 seasons",
    genres: ["Crime", "Drama", "Thriller"], label: "THE SLOW-BURN CLASSIC",
    description: "A chemistry teacher diagnosed with cancer turns to manufacturing and selling methamphetamine to secure his family's future, changing everything around him.",
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    tmdb: "https://www.themoviedb.org/tv/1396-breaking-bad",
    a: "#756c35", b: "#151a16", glow: "#c2a74b", symbol: "W"
  },
  {
    id: 8, title: "Stranger Things", year: 2016, type: "Series", runtime: "5 seasons",
    genres: ["Sci-Fi", "Mystery", "Adventure"], label: "THE UNEXPECTED",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, supernatural forces and one extraordinary girl.",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    tmdb: "https://www.themoviedb.org/tv/66732-stranger-things",
    a: "#632b38", b: "#14131b", glow: "#d3573d", symbol: "11"
  },
  {
    id: 9, title: "The Last of Us", year: 2023, type: "Series", runtime: "2 seasons",
    genres: ["Drama", "Adventure", "Sci-Fi"], label: "HUMAN STORIES",
    description: "In a world changed by a devastating outbreak, a hardened survivor is tasked with escorting a teenage girl across what remains of the country.",
    poster: "https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg",
    tmdb: "https://www.themoviedb.org/tv/100088-the-last-of-us",
    a: "#48533d", b: "#131915", glow: "#8d9e66", symbol: "L"
  },
  {
    id: 10, title: "Arcane", year: 2021, type: "Series", runtime: "2 seasons",
    genres: ["Animation", "Action", "Drama"], label: "ANIMATED WORLDS",
    description: "Set between the gleaming city of Piltover and the undercity of Zaun, two sisters find themselves on opposing sides of an escalating conflict.",
    poster: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    tmdb: "https://www.themoviedb.org/tv/94605-arcane",
    a: "#3e4b79", b: "#16151f", glow: "#8a91db", symbol: "A"
  }
];

const rows = [
  { id: "start-here", eyebrow: "A GOOD PLACE TO START", title: "Stories worth your time", ids: [1, 2, 3, 4, 7, 8, 5, 6, 9, 10] },
  { id: "big-worlds", eyebrow: "GO A LITTLE FURTHER", title: "Worlds beyond the ordinary", ids: [1, 4, 6, 8, 9, 10] },
  { id: "series-picks", eyebrow: "ONE MORE EPISODE", title: "Series that stay with you", ids: [2, 5, 6, 7, 8, 9, 10] }
];

const grid = document.getElementById("searchGrid");
const railsRoot = document.getElementById("railsRoot");
const searchInput = document.getElementById("searchInput");
const searchView = document.getElementById("searchView");
const searchEmpty = document.getElementById("searchEmpty");
const searchHeading = document.getElementById("searchHeading");
const searchCount = document.getElementById("searchCount");
const catalogue = document.getElementById("catalogue");
const listEmpty = document.getElementById("listEmpty");
const listCount = document.getElementById("listCount");
const catalogueCount = document.getElementById("catalogueCount");
const dialog = document.getElementById("detailDialog");
const dialogContent = document.getElementById("dialogContent");
const toast = document.getElementById("toast");
let activeView = "all";
let activeGenre = "All";
let toastTimer;

function readStoredSet(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return new Set(Array.isArray(parsed) ? parsed.filter(Number.isInteger) : []);
  } catch (error) {
    return new Set();
  }
}
let saved = readStoredSet("kinosera-list");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, function (char) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
  });
}

function getTitle(id) {
  return titles.find(function (title) { return title.id === Number(id); });
}

function getFilteredTitles() {
  const query = searchInput.value.trim().toLowerCase();
  return titles.filter(function (title) {
    const matchesView = activeView === "all" || activeView === "list" ||
      (activeView === "film" && title.type === "Film") ||
      (activeView === "series" && title.type === "Series");
    const matchesGenre = activeGenre === "All" || title.genres.includes(activeGenre);
    const matchesQuery = !query || [title.title, title.type].concat(title.genres).join(" ").toLowerCase().includes(query);
    const matchesList = activeView !== "list" || saved.has(title.id);
    return matchesView && matchesGenre && matchesQuery && matchesList;
  });
}

function cardMarkup(title) {
  const isSaved = saved.has(title.id);
  return '<article class="poster-card" role="group" tabindex="0" data-open="' + title.id + '" aria-label="Open details for ' + escapeHTML(title.title) + '">' +
    '<div class="poster-frame" style="--poster-a:' + title.a + ';--poster-b:' + title.b + ';--poster-glow:' + title.glow + '">' +
      '<div class="poster-fallback" aria-hidden="true">' + escapeHTML(title.symbol) + '</div>' +
      '<img class="poster-art" src="' + title.poster + '" alt="' + escapeHTML(title.title) + ' poster" loading="lazy" decoding="async">' +
      '<div class="poster-topline"><span class="poster-badge">' + escapeHTML(title.label) + '</span>' +
      '<button class="poster-save ' + (isSaved ? "is-saved" : "") + '" data-save="' + title.id + '" aria-label="' + (isSaved ? "Remove from" : "Add to") + ' My List" aria-pressed="' + isSaved + '">' + (isSaved ? "✓" : "+") + '</button></div>' +
      '<div class="poster-overlay"><strong>' + escapeHTML(title.title) + '</strong><span>' + title.year + ' &nbsp;·&nbsp; ' + escapeHTML(title.type.toUpperCase()) + '</span></div>' +
    '</div>' +
    '<div class="poster-caption"><strong>' + escapeHTML(title.title) + '</strong><span>' + title.year + ' · ' + escapeHTML(title.genres.slice(0, 2).join(" / ")) + '</span></div>' +
  '</article>';
}

function sectionMarkup(section, list) {
  const cards = list.map(cardMarkup).join("");
  return '<section class="media-section" aria-labelledby="' + section.id + '-title">' +
    '<div class="section-heading"><div><p class="eyebrow">' + section.eyebrow + '</p><h2 id="' + section.id + '-title">' + section.title + '</h2></div>' +
    '<div class="rail-controls"><button class="rail-control" data-scroll="-1" aria-label="Scroll left"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"></path></svg></button><button class="rail-control" data-scroll="1" aria-label="Scroll right"><svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg></button></div></div>' +
    '<div class="poster-rail" id="' + section.id + '-rail">' + cards + '</div></section>';
}

function setNavState() {
  document.querySelectorAll(".nav-link").forEach(function (button) {
    button.classList.toggle("is-active", button.dataset.view === activeView);
  });
  document.querySelectorAll(".genre-chip").forEach(function (button) {
    button.classList.toggle("is-active", button.dataset.genre === activeGenre);
  });
}

function render() {
  const query = searchInput.value.trim();
  const listCountValue = saved.size;
  listCount.textContent = String(listCountValue);
  catalogueCount.textContent = String(titles.length) + " STORIES";
  document.getElementById("heroSaveText").textContent = saved.has(1) ? "In My List" : "My List";
  document.getElementById("heroSave").querySelector(".button-plus").textContent = saved.has(1) ? "✓" : "+";
  setNavState();

  if (query) {
    const matches = getFilteredTitles();
    searchView.hidden = false;
    catalogue.hidden = true;
    document.querySelector(".welcome-strip").hidden = true;
    document.querySelector(".discovery-tools").hidden = true;
    searchHeading.textContent = 'Results for "' + query + '"';
    searchCount.textContent = String(matches.length) + (matches.length === 1 ? " STORY" : " STORIES");
    grid.innerHTML = matches.map(cardMarkup).join("");
    searchEmpty.hidden = matches.length !== 0;
    return;
  }

  searchView.hidden = true;
  catalogue.hidden = false;
  document.querySelector(".welcome-strip").hidden = activeView === "list";
  document.querySelector(".discovery-tools").hidden = activeView === "list";
  let visible;
  let content = "";

  if (activeView === "list") {
    visible = titles.filter(function (title) { return saved.has(title.id); });
    if (visible.length) {
      content = sectionMarkup({ id: "my-list", eyebrow: "KEPT CLOSE", title: "Your personal shortlist" }, visible);
    }
    listEmpty.hidden = visible.length !== 0;
  } else if (activeView !== "all" || activeGenre !== "All") {
    visible = getFilteredTitles();
    const title = activeGenre !== "All" ? activeGenre + " stories" : (activeView === "film" ? "Films to get lost in" : "Series to settle into");
    content = sectionMarkup({ id: "filtered", eyebrow: "THE KINOSERA INDEX", title: title }, visible);
  } else {
    listEmpty.hidden = true;
    rows.forEach(function (section) {
      const list = section.ids.map(getTitle).filter(Boolean);
      content += sectionMarkup(section, list);
    });
    const recentlyViewed = readStoredSet("kinosera-recent");
    const recent = Array.from(recentlyViewed).map(getTitle).filter(Boolean);
    if (recent.length) {
      content += sectionMarkup({ id: "recently-opened", eyebrow: "PICK UP YOUR CURIOSITY", title: "Recently explored" }, recent);
    }
  }

  railsRoot.innerHTML = content;
  if (activeView !== "list") listEmpty.hidden = true;
  document.querySelectorAll(".poster-art").forEach(function (image) {
    image.addEventListener("error", function () {
      const card = image.closest(".poster-card");
      if (card) card.classList.add("no-art");
      image.remove();
    }, { once: true });
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(function () { toast.classList.remove("is-visible"); }, 1900);
}

function persistSaved() {
  try {
    localStorage.setItem("kinosera-list", JSON.stringify(Array.from(saved)));
  } catch (error) {
    showToast("This browser could not save your list.");
  }
}

function toggleSave(id) {
  const title = getTitle(id);
  if (!title) return;
  if (saved.has(title.id)) {
    saved.delete(title.id);
    showToast("Removed from My List");
  } else {
    saved.add(title.id);
    showToast("Added to My List");
  }
  persistSaved();
  render();
  if (dialog.open && Number(dialog.dataset.titleId) === title.id) showDetail(title.id, false);
}

function showDetail(id, recordVisit) {
  const title = getTitle(id);
  if (!title) return;
  const shouldRecord = recordVisit !== false;
  if (shouldRecord) {
    try {
      const recent = readStoredSet("kinosera-recent");
      recent.delete(title.id);
      recent.add(title.id);
      localStorage.setItem("kinosera-recent", JSON.stringify(Array.from(recent).slice(-5)));
    } catch (error) {}
  }
  const isSaved = saved.has(title.id);
  dialog.dataset.titleId = String(title.id);
  dialogContent.innerHTML =
    '<div class="detail-layout">' +
      '<div class="detail-art-wrap"><img class="detail-art" src="' + title.poster + '" alt="' + escapeHTML(title.title) + ' poster" onerror="this.style.display=\'none\'"></div>' +
      '<div class="detail-info"><div class="detail-label"><span class="overline-rule"></span> ' + escapeHTML(title.label) + '</div>' +
        '<h2 id="detailTitle">' + escapeHTML(title.title) + '</h2>' +
        '<div class="detail-meta"><span>' + title.year + '</span><span>' + escapeHTML(title.type.toUpperCase()) + '</span><span>' + escapeHTML(title.runtime.toUpperCase()) + '</span></div>' +
        '<p>' + escapeHTML(title.description) + '</p>' +
        '<div class="detail-tags">' + title.genres.map(function (genre) { return '<span>' + escapeHTML(genre) + '</span>'; }).join("") + '</div>' +
        '<div class="detail-actions"><button class="button button-secondary" data-save-detail="' + title.id + '"><span class="button-plus">' + (isSaved ? "✓" : "+") + '</span>' + (isSaved ? "In My List" : "Add to My List") + '</button>' +
        '<a class="detail-source" href="' + title.tmdb + '" target="_blank" rel="noopener noreferrer">Title information ↗</a></div>' +
      '</div>' +
    '</div>';
  if (!dialog.open) dialog.showModal();
}

function handleCardAction(event) {
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    event.stopPropagation();
    toggleSave(Number(saveButton.dataset.save));
    return;
  }
  const detailButton = event.target.closest("[data-open]");
  if (detailButton) showDetail(Number(detailButton.dataset.open));
}

[railsRoot, grid].forEach(function (root) {
  root.addEventListener("click", handleCardAction);
  root.addEventListener("keydown", function (event) {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-open]")) {
      event.preventDefault();
      showDetail(Number(event.target.dataset.open));
    }
  });
});

dialogContent.addEventListener("click", function (event) {
  const button = event.target.closest("[data-save-detail]");
  if (button) toggleSave(Number(button.dataset.saveDetail));
});

document.getElementById("heroDetails").addEventListener("click", function () { showDetail(1); });
document.getElementById("heroSave").addEventListener("click", function () { toggleSave(1); });
document.getElementById("dialogClose").addEventListener("click", function () { dialog.close(); });
dialog.addEventListener("click", function (event) {
  if (event.target === dialog) dialog.close();
});
document.getElementById("backToDiscover").addEventListener("click", function () {
  activeView = "all";
  activeGenre = "All";
  searchInput.value = "";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("genreChips").addEventListener("click", function (event) {
  const button = event.target.closest("[data-genre]");
  if (!button) return;
  activeGenre = button.dataset.genre;
  activeView = "all";
  searchInput.value = "";
  render();
});
document.querySelector(".main-nav").addEventListener("click", function (event) {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  activeView = button.dataset.view;
  activeGenre = "All";
  searchInput.value = "";
  render();
  if (activeView === "list") document.getElementById("catalogue").scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
});
searchInput.addEventListener("input", render);
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    searchInput.value = "";
    render();
    searchInput.blur();
  }
});
document.getElementById("searchToggle").addEventListener("click", function () {
  const field = document.getElementById("searchField");
  const isOpen = field.classList.toggle("is-open");
  this.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) searchInput.focus();
});
document.getElementById("profileToggle").addEventListener("click", function () {
  const menu = document.getElementById("profileMenu");
  const isHidden = menu.hidden;
  menu.hidden = !isHidden;
  this.setAttribute("aria-expanded", String(isHidden));
});
document.addEventListener("click", function (event) {
  if (!event.target.closest(".top-actions")) {
    document.getElementById("profileMenu").hidden = true;
    document.getElementById("profileToggle").setAttribute("aria-expanded", "false");
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
    event.preventDefault();
    document.getElementById("searchField").classList.add("is-open");
    document.getElementById("searchToggle").setAttribute("aria-expanded", "true");
    searchInput.focus();
  }
});
railsRoot.addEventListener("click", function (event) {
  const scrollButton = event.target.closest("[data-scroll]");
  if (!scrollButton) return;
  const section = scrollButton.closest(".media-section");
  const rail = section && section.querySelector(".poster-rail");
  if (rail) rail.scrollBy({ left: Number(scrollButton.dataset.scroll) * Math.max(300, rail.clientWidth * .78), behavior: "smooth" });
});
window.addEventListener("scroll", function () {
  document.getElementById("topbar").classList.toggle("scrolled", window.scrollY > 18);
}, { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();
render();