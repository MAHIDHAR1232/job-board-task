// ============================================================
// filters.js — App state, filtering, sorting, and pagination
// ============================================================

// ── GLOBAL STATE ─────────────────────────────────────────────
let savedJobs      = JSON.parse(localStorage.getItem('savedJobs') || '[]');
let currentCategory = 'all';
let currentView     = 'list';
let currentPage     = 1;
const JOBS_PER_PAGE = 8;
let activeModalJob  = null;

// ── FILTER LOGIC ─────────────────────────────────────────────
// Reads every filter control and returns the matching subset of jobsData
function getFilteredJobs() {
  const query     = document.getElementById('searchInput').value.toLowerCase();
  const locFilter = document.getElementById('locationFilter').value;
  const salaryMax = parseInt(document.getElementById('salaryRange').value) * 1000;

  const checkedTypes  = [...document.querySelectorAll('input[id^="f-full"],input[id^="f-part"],input[id^="f-contract"],input[id^="f-intern"]')]
    .filter(c => c.checked).map(c => c.value);

  const checkedLevels = [...document.querySelectorAll('input[id^="f-entry"],input[id^="f-mid"],input[id^="f-senior"],input[id^="f-lead"]')]
    .filter(c => c.checked).map(c => c.value);

  const checkedModes  = [...document.querySelectorAll('input[id^="f-remote"],input[id^="f-hybrid"],input[id^="f-onsite"]')]
    .filter(c => c.checked).map(c => c.value);

  let jobs = jobsData.filter(j => {
    // Category pill filter
    if (currentCategory !== 'all' && j.category !== currentCategory) return false;
    // Keyword search
    if (query && !j.title.toLowerCase().includes(query)
               && !j.company.toLowerCase().includes(query)
               && !j.tags.some(t => t.toLowerCase().includes(query))) return false;
    // Location filter
    if (locFilter && !j.location.includes(locFilter) && !j.workMode.includes(locFilter)) return false;
    // Salary cap
    if (j.salary > salaryMax && salaryMax < 300000) return false;
    // Checkbox filters
    if (checkedTypes.length  && !checkedTypes.includes(j.type))                          return false;
    if (checkedLevels.length && !checkedLevels.some(l => j.level.includes(l)))           return false;
    if (checkedModes.length  && !checkedModes.includes(j.workMode))                      return false;
    return true;
  });

  // Sorting
  const sort = document.getElementById('sortSelect').value;
  if (sort === 'salary-high')  jobs.sort((a, b) => b.salary - a.salary);
  else if (sort === 'salary-low')  jobs.sort((a, b) => a.salary - b.salary);
  else if (sort === 'featured')    jobs.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return jobs;
}

// ── FILTER CONTROLS ──────────────────────────────────────────
// Called by every filter input — resets to page 1 and re-renders
function filterJobs() {
  currentPage = 1;
  renderJobs();
}

// Called by category pill buttons
function setCategory(cat, el) {
  currentCategory = cat;
  document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  filterJobs();
}

// Resets all filters back to defaults
function clearFilters() {
  document.getElementById('searchInput').value   = '';
  document.getElementById('locationFilter').value = '';
  document.getElementById('salaryRange').value    = 300;
  document.getElementById('salaryLabel').textContent = 'Up to $300k+';
  document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(c => c.checked = false);
  currentCategory = 'all';
  document.querySelectorAll('.category-pill').forEach((p, i) => p.classList.toggle('active', i === 0));
  filterJobs();
}

// Updates the salary slider label as the user drags
function updateSalaryLabel(val) {
  document.getElementById('salaryLabel').textContent =
    val >= 300 ? 'Up to $300k+' : `Up to $${val}k`;
}

// ── PAGINATION ────────────────────────────────────────────────
function goPage(n) {
  currentPage = n;
  renderJobs();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderPagination(total) {
  const pages = Math.ceil(total / JOBS_PER_PAGE);
  const pg    = document.getElementById('pagination');
  if (pages <= 1) { pg.innerHTML = ''; return; }

  let html = '';
  if (currentPage > 1)
    html += `<button class="page-btn" onclick="goPage(${currentPage - 1})">←</button>`;
  for (let i = 1; i <= pages; i++)
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goPage(${i})">${i}</button>`;
  if (currentPage < pages)
    html += `<button class="page-btn" onclick="goPage(${currentPage + 1})">→</button>`;

  pg.innerHTML = html;
}
