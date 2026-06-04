// ============================================================
// actions.js — Save jobs, apply, post a job, toast notifications
// ============================================================

// ── SAVE JOBS ─────────────────────────────────────────────────
// Toggles a job in/out of localStorage saved list
function toggleSave(id, btn) {
  const idx = savedJobs.indexOf(id);
  if (idx === -1) {
    savedJobs.push(id);
    btn.classList.add('saved');
    btn.textContent = '♥';
    showToast('Job saved! ♥');
  } else {
    savedJobs.splice(idx, 1);
    btn.classList.remove('saved');
    btn.textContent = '♡';
    showToast('Job removed from saved');
  }
  localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
}

// Renders only the user's saved jobs
function showSaved() {
  clearFilters();
  if (!savedJobs.length) {
    showToast('No saved jobs yet. Save some!');
    return;
  }

  const saved = jobsData.filter(j => savedJobs.includes(j.id));
  document.getElementById('jobCount').innerHTML =
    `<strong>${saved.length}</strong> <span>saved job${saved.length !== 1 ? 's' : ''}</span>`;

  document.getElementById('jobsGrid').innerHTML = saved.map((j, i) => `
    <div class="job-card" style="animation-delay:${i * 0.05}s" onclick="openJobModal(${j.id})">
      <div class="job-card-top">
        <div class="company-logo" style="background:${j.logoBg}; color:${j.logoColor}">${j.logo}</div>
        <button class="save-btn saved"
                onclick="event.stopPropagation(); toggleSave(${j.id}, this)">♥</button>
      </div>
      <div class="job-title">${j.title}</div>
      <div class="company-name">${j.company}</div>
      <div class="job-footer">
        <span class="salary">${j.salaryDisplay}</span>
        <button class="btn-apply"
                onclick="event.stopPropagation(); applyDirect(${j.id})">Apply →</button>
      </div>
    </div>
  `).join('');

  document.getElementById('pagination').innerHTML = '';
}

// Saves the job currently open in the detail modal
function saveModalJob() {
  if (!activeModalJob) return;
  const id  = activeModalJob.id;
  const idx = savedJobs.indexOf(id);
  if (idx === -1) { savedJobs.push(id);          showToast('Job saved! ♥'); }
  else            { savedJobs.splice(idx, 1);     showToast('Job removed from saved'); }
  localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
}

// ── APPLY ─────────────────────────────────────────────────────
// Apply button inside the detail modal
function applyToJob() {
  closeJobModal();
  showToast('🎉 Application submitted! Good luck!');
}

// Quick apply button on a job card
function applyDirect(id) {
  showToast('🎉 Application submitted! Good luck!');
}

// ── POST A JOB ────────────────────────────────────────────────
// Reads form, validates, creates a new job object, adds to list
function submitJob() {
  const title   = document.getElementById('p-title').value.trim();
  const company = document.getElementById('p-company').value.trim();
  const email   = document.getElementById('p-email').value.trim();

  if (!title || !company || !email) {
    showToast('⚠️ Please fill in required fields');
    return;
  }

  const newJob = {
    id:           Date.now(),
    featured:     false,
    title,
    company,
    logo:         company.substring(0, 2).toUpperCase(),
    logoColor:    '#333',
    logoBg:       '#f0f0f0',
    location:     document.getElementById('p-location').value || 'Remote',
    type:         document.getElementById('p-type').value,
    workMode:     document.getElementById('p-workmode').value,
    category:     document.getElementById('p-category').value,
    level:        'Mid',
    salary:       100000,
    salaryDisplay: document.getElementById('p-salary').value || 'Competitive',
    tags:         [],
    posted:       'Just now',
    description:  document.getElementById('p-desc').value,
    requirements: document.getElementById('p-reqs').value.split('\n').filter(Boolean),
    perks:        ['Competitive package', 'Great team']
  };

  jobsData.unshift(newJob);   // add to top of list
  document.getElementById('postModal').classList.remove('open');
  clearFilters();
  showToast('✅ Job posted successfully!');
}

// ── TOAST NOTIFICATION ────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent  = msg;
  t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 3000);
}
