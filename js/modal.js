// ============================================================
// modal.js — Open/close job detail modal and post job modal
// ============================================================

// ── JOB DETAIL MODAL ─────────────────────────────────────────
function openJobModal(id) {
  const j = jobsData.find(j => j.id === id);
  activeModalJob = j;

  // Fill in logo
  const logo = document.getElementById('modal-logo');
  logo.textContent       = j.logo;
  logo.style.background  = j.logoBg;
  logo.style.color       = j.logoColor;

  // Fill in header text
  document.getElementById('modal-title').textContent   = j.title;
  document.getElementById('modal-company').textContent = `${j.company} · ${j.location}`;

  // Fill in metadata badges
  document.getElementById('modal-meta').innerHTML = `
    <span class="modal-meta-item">💼 ${j.type}</span>
    <span class="modal-meta-item">${
      j.workMode === 'Remote' ? '🌐' : j.workMode === 'Hybrid' ? '🔀' : '🏢'
    } ${j.workMode}</span>
    <span class="modal-meta-item">💰 ${j.salaryDisplay}/yr</span>
    <span class="modal-meta-item">📅 Posted ${j.posted}</span>
    <span class="modal-meta-item">🏷️ ${j.category}</span>
    <span class="modal-meta-item">📊 ${j.level} Level</span>
  `;

  // Fill in body sections
  document.getElementById('modal-desc').innerHTML  = `<p>${j.description}</p>`;
  document.getElementById('modal-reqs').innerHTML  =
    `<ul>${j.requirements.map(r => `<li>${r}</li>`).join('')}</ul>`;
  document.getElementById('modal-perks').innerHTML =
    `<ul>${j.perks.map(p => `<li>${p}</li>`).join('')}</ul>`;

  document.getElementById('jobModal').classList.add('open');
}

function closeJobModal() {
  document.getElementById('jobModal').classList.remove('open');
}

// Close job modal when clicking outside it
function closeModal(e) {
  if (e.target.id === 'jobModal') closeJobModal();
}

// ── POST JOB MODAL ────────────────────────────────────────────
function openPostModal() {
  document.getElementById('postModal').classList.add('open');
}

function closePostModal(e) {
  if (e.target.id === 'postModal')
    document.getElementById('postModal').classList.remove('open');
}

// ── KEYBOARD SHORTCUT ─────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeJobModal();
    document.getElementById('postModal').classList.remove('open');
  }
});
