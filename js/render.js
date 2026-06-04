// ============================================================
// render.js — Builds and injects job card HTML into the DOM
// ============================================================

function renderJobs() {
  const jobs  = getFilteredJobs();
  const grid  = document.getElementById('jobsGrid');
  const count = document.getElementById('jobCount');
  const total = jobs.length;

  // Paginate
  const start = (currentPage - 1) * JOBS_PER_PAGE;
  const paged = jobs.slice(start, start + JOBS_PER_PAGE);

  // Update count label
  count.innerHTML = `<strong>${total}</strong> <span>job${total !== 1 ? 's' : ''} found</span>`;

  // Empty state
  if (!paged.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="icon">🔍</div>
        <h3>No jobs match your filters</h3>
        <p>Try adjusting your search or clearing filters</p>
      </div>`;
    document.getElementById('pagination').innerHTML = '';
    return;
  }

  // Render each card
  grid.innerHTML = paged.map((j, i) => `
    <div class="job-card${j.featured ? ' featured' : ''}"
         style="animation-delay:${i * 0.05}s"
         onclick="openJobModal(${j.id})">

      <div class="job-card-top">
        <div class="company-logo" style="background:${j.logoBg}; color:${j.logoColor}">${j.logo}</div>
        <div class="card-right">
          ${j.featured ? '<span class="badge-featured">⭐ Featured</span>' : ''}
          <button class="save-btn ${savedJobs.includes(j.id) ? 'saved' : ''}"
                  onclick="event.stopPropagation(); toggleSave(${j.id}, this)"
                  title="Save job">
            ${savedJobs.includes(j.id) ? '♥' : '♡'}
          </button>
        </div>
      </div>

      <div class="job-title">${j.title}</div>
      <div class="company-name">${j.company}</div>

      <div class="job-meta">
        <span class="meta-tag"><span class="meta-icon">📍</span>${j.location}</span>
        <span class="meta-tag">
          <span class="meta-icon">💼</span>
          <span class="job-type-badge type-${
            j.type === 'Full-Time' ? 'full' :
            j.type === 'Part-Time' ? 'part' :
            j.type === 'Contract'  ? 'contract' : 'intern'
          }">${j.type}</span>
        </span>
        <span class="meta-tag">
          <span class="meta-icon">${
            j.workMode === 'Remote' ? '🌐' :
            j.workMode === 'Hybrid' ? '🔀' : '🏢'
          }</span>${j.workMode}
        </span>
      </div>

      <div class="job-tags">
        ${j.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>

      <div class="job-footer">
        <div>
          <span class="salary">${j.salaryDisplay}</span>
          <span class="salary-period">/yr</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="posted-date">${j.posted}</span>
          <button class="btn-apply"
                  onclick="event.stopPropagation(); applyDirect(${j.id})">Apply →</button>
        </div>
      </div>

    </div>
  `).join('');

  renderPagination(total);
}

// ── VIEW TOGGLE (list vs 2-column grid) ──────────────────────
function setView(v) {
  currentView = v;
  const grid = document.getElementById('jobsGrid');
  document.getElementById('listViewBtn').classList.toggle('active', v === 'list');
  document.getElementById('gridViewBtn').classList.toggle('active', v === 'grid');
  grid.classList.toggle('grid-2', v === 'grid');
}
