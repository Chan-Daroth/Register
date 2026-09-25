// ── Translations ──────────────────────────────────────────
const i18n = {
  en: {
    'hdr-sub':       'Driver Partner Recruitment',
    'tn-form':       '📝  Apply Now',
    'tn-qr':         '📱  QR Code & Hosting',
    'banner-link':   'Set up →',
    's1-title':      'Personal Information',
    'lbl-name':      'English Full Name',
    'e-name':        'Please enter your full name in English (as on ID).',
    'lbl-nid':       'National ID Number',
    'e-nid':         'Please enter your National ID number.',
    'lbl-exp':       'ID Expiry Date',
    'e-exp':         'ID must be valid for at least 6 months.',
    'lbl-phone':     'Phone Number',
    'e-phone':       'Please enter your phone number.',
    'lbl-tg':        'Telegram',
    'e-tg':          'Please enter your Telegram username or number.',
    'lbl-commune':   'District (Khan) — Phnom Penh',
    'e-commune':     'Please select your district.',
    'lbl-svc':       'Preferred Service',
    'e-svc':         'Please select your preferred service.',
    'svc-bike-name': 'GrabBike',
    'svc-bike-desc': 'Passenger rides',
    'svc-food-name': 'GrabFood Delivery',
    'svc-food-desc': 'Food & parcel delivery',
    's4-title':      'Interview Schedule',
    'lbl-slot':      'Interview Slot',
    'hint-slot':     'Pick one date and time. Slots marked FULL cannot be selected.',
    'e-slot':        'Please select an interview slot.',
    'docs-title':    'Documents to Bring on Interview Day',
    'docs-list':     '<div style="display:flex;flex-direction:column;gap:7px;"><div style="display:flex;align-items:center;gap:10px;background:#fff8ee;border-radius:8px;padding:9px 11px;"><span style="font-size:1.25rem;">🪪</span><div><div style="font-weight:700;font-size:.86rem;color:#78350f;">National ID Card</div><div style="font-size:.77rem;color:#92400e;">Original + 1 photocopy</div></div></div><div style="display:flex;align-items:center;gap:10px;background:#fff8ee;border-radius:8px;padding:9px 11px;"><span style="font-size:1.25rem;">📄</span><div><div style="font-weight:700;font-size:.86rem;color:#78350f;">Vehicle Registration Card</div><div style="font-size:.77rem;color:#92400e;">1 photocopy</div></div></div><div style="display:flex;align-items:center;gap:10px;background:#fff8ee;border-radius:8px;padding:9px 11px;"><span style="font-size:1.25rem;">📋</span><div><div style="font-weight:700;font-size:.86rem;color:#78350f;">CV / Resume</div><div style="font-size:.77rem;color:#92400e;">1 photocopy</div></div></div><div style="margin-top:6px;font-size:.8rem;color:#92400e;font-weight:600;">⚠️ Please bring all required documents before your interview.</div></div>',
    'time-am-text':  '9:00 AM – 11:00 AM',
    'time-am-sub':   'Morning session',
    'time-pm-text':  '1:00 PM – 3:00 PM',
    'time-pm-sub':   'Afternoon session',
    'lbl-confirm':   'Attendance Confirmation',
    'confirm-text':  'I confirm that I will attend the interview on my selected date and time, and will arrive 10 minutes early with all required documents.',
    'e-confirm':     'Please confirm your attendance.',
    'submit-btn':    'Submit Application',
    'submit-note':   'By submitting you agree to be contacted by Grab for the interview process.',
    'submitting':    'Submitting…',
    'success-title': 'Application Submitted!',
    'success-msg1':  'Thank you! Our team will review your application and contact you to confirm the interview.',
    'success-msg2':  'Please bring your <strong>National ID</strong>, <strong>Vehicle Registration Card</strong>, and <strong>CV / Resume</strong> to the interview.',
    'btn-another':   'Submit Another',
    'sc-name':       'Name',
    'sc-service':    'Service',
    'sc-date':       'Interview Date',
    'sc-time':       'Time Slot',
    'sc-phone':      'Phone',
    'sc-tg':         'Telegram',
    'setup-toggle-lbl': '⚙️  Google Sheets Setup',
  },
  km: {
    'hdr-sub':       'ការជ្រើសរើសដៃគូបើកបរ',
    'tn-form':       '📝  ដាក់ពាក្យ',
    'tn-qr':         '📱  QR Code & Hosting',
    'banner-link':   'រៀបចំ →',
    's1-title':      'ព័ត៌មានផ្ទាល់ខ្លួន',
    'lbl-name':      'ឈ្មោះពេញ (ជាអក្សរឡាតាំង)',
    'e-name':        'សូមបំពេញឈ្មោះពេញជាភាសាអង់គ្លេស (ដូចលើអត្តសញ្ញាណប័ណ្ណ)។',
    'lbl-nid':       'លេខអត្តសញ្ញាណប័ណ្ណ',
    'e-nid':         'លេខអត្តសញ្ញាណប័ណ្ណត្រូវតែមាន ៩ ខ្ទង់។',
    'lbl-exp':       'កាលបរិច្ឆេទផុតកំណត់',
    'e-exp':         'អត្តសញ្ញាណប័ណ្ណត្រូវតែមានសុពលភាពយ៉ាងហោចណាស់ ៦ ខែទៀត។',
    'lbl-phone':     'លេខទូរស័ព្ទ',
    'e-phone':       'លេខទូរស័ព្ទត្រូវតែមាន ៩ ដល់ ១០ ខ្ទង់។',
    'lbl-tg':        'Telegram',
    'e-tg':          'សូមបំពេញ username ឬ លេខ Telegram។',
    'lbl-commune':   'ខណ្ឌ — ភ្នំពេញ',
    'e-commune':     'សូមជ្រើសរើសខណ្ឌ។',
    'lbl-svc':       'ប្រភេទសេវាកម្ម',
    'e-svc':         'សូមជ្រើសរើសសេវាដែលចូលចិត្ត។',
    'svc-bike-name': 'GrabBike',
    'svc-bike-desc': 'ដឹកអ្នកដំណើរ',
    'svc-food-name': 'GrabFood Delivery',
    'svc-food-desc': 'ដឹកអាហារ និងកញ្ចប់',
    's4-title':      'ការវិភាគសម្ភាស',
    'lbl-slot':      'កៅអី',
    'hint-slot':     'ជ្រើសរើសកាលបរិច្ឆេទ និងម៉ោង។ កៅអី ដែលមានសញ្ញា ពេញ មិនអាចជ្រើសរើស។',
    'e-slot':        'សូមជ្រើសរើសកៅអី។',
    'docs-title':    'ឯកសារដែលត្រូវយកមកថ្ងៃសម្ភាស',
    'docs-list':     '<div style="display:flex;flex-direction:column;gap:7px;"><div style="display:flex;align-items:center;gap:10px;background:#fff8ee;border-radius:8px;padding:9px 11px;"><span style="font-size:1.25rem;">🪪</span><div><div style="font-weight:700;font-size:.86rem;color:#78350f;">អត្តសញ្ញាណប័ណ្ណ</div><div style="font-size:.77rem;color:#92400e;">ដើម + ច្បាប់ចម្លង ១ ច្បាប់</div></div></div><div style="display:flex;align-items:center;gap:10px;background:#fff8ee;border-radius:8px;padding:9px 11px;"><span style="font-size:1.25rem;">📄</span><div><div style="font-weight:700;font-size:.86rem;color:#78350f;">កាតគ្រីម៉ូតូ</div><div style="font-size:.77rem;color:#92400e;">ច្បាប់ចម្លង ១ ច្បាប់</div></div></div><div style="display:flex;align-items:center;gap:10px;background:#fff8ee;border-radius:8px;padding:9px 11px;"><span style="font-size:1.25rem;">📋</span><div><div style="font-weight:700;font-size:.86rem;color:#78350f;">ប្រវិត្តរូបសង្ខេប (CV)</div><div style="font-size:.77rem;color:#92400e;">ច្បាប់ចម្លង ១ ច្បាប់</div></div></div><div style="margin-top:6px;font-size:.8rem;color:#92400e;font-weight:600;">⚠️ សូមយកឯកសារតាមលក្ខខណ្ឌមុនចូលសម្ភាស</div></div>',
    'lbl-days':      'សូមជ្រើសរើសថ្ងៃសំភាសដែលអ្នកអាចចូលរួមបាន',
    'hint-days':     'ជ្រើសរើសថ្ងៃដែលអ្នកចូលរួមបាន។',
    'e-days':        'សូមជ្រើសរើសថ្ងៃសំភាសយ៉ាងហោចណាស់មួយ។',
    'day-mon':       'ថ្ងៃច័ន្ទ',
    'day-wed':       'ថ្ងៃពុធ',
    'day-fri':       'ថ្ងៃសុក្រ',
    'badge-avail':   'ទំនេរ',
    'badge-opt':     'ស្រេចចិត្ត',
    'lbl-time':      'វេលាដែលចូលចិត្ត',
    'e-time':        'សូមជ្រើសរើសវេលា។',
    'time-am-text':  '9:00 AM – 11:00 AM',
    'time-am-sub':   'វេនព្រឹក',
    'time-pm-text':  '1:00 PM – 3:00 PM',
    'time-pm-sub':   'វេនរសៀល',
    'lbl-confirm':   'ការបញ្ជាក់ការចូលរួម',
    'confirm-text':  'ខ្ញុំបញ្ជាក់ថានឹងចូលរួមការសំភាសតាមថ្ងៃ និងម៉ោងដែលបានជ្រើស ហើយនឹងមកដល់មុន ១០ នាទី ជាមួយឯកសារទាំងអស់ដែលត្រូវការ។',
    'e-confirm':     'សូមបញ្ជាក់ការចូលរួមរបស់អ្នក។',
    'submit-btn':    'ដាក់ពាក្យ',
    'submit-note':   'ដោយការដាក់ស្នើ អ្នកយល់ព្រមឱ្យ Grab ទំនាក់ទំនងអ្នកសម្រាប់ដំណើរការសំភាស។',
    'submitting':    'កំពុងដាក់ស្នើ…',
    'success-title': 'ដាក់ពាក្យបានជោគជ័យ!',
    'success-msg1':  'អរគុណ! ក្រុមការងាររបស់យើងនឹងពិនិត្យពាក្យ​ ហើយទំនាក់ទំនងអ្នកដើម្បីបញ្ជាក់ការសំភាស។',
    'success-msg2':  'សូមនាំ <strong>អត្តសញ្ញាណប័ណ្ណ</strong>, <strong>កាតគ្រីម៉ូតូ</strong>, និង <strong>ប្រវិត្តរូបសង្ខេប (CV)</strong> ទៅការសម្ភាស។',
    'btn-another':   'ដាក់ពាក្យម្នាក់ទៀត',
    'sc-name':       'ឈ្មោះ',
    'sc-service':    'សេវា',
    'sc-days':       'ថ្ងៃសំភាស',
    'sc-time':       'វេលា',
    'sc-phone':      'ទូរស័ព្ទ',
    'sc-tg':         'Telegram',
    'setup-toggle-lbl': '⚙️  Google Sheets Setup',
  }
};

let currentLang = 'km';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('grab_lang', lang);
  const t = i18n[lang];

  document.body.classList.toggle('lang-km', lang === 'km');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-ph-en]').forEach(el => {
    el.placeholder = lang === 'en'
      ? el.getAttribute('data-ph-en')
      : (el.getAttribute('data-ph-km') || el.getAttribute('data-ph-en'));
  });

  const bannerHTML = {
    en: `<strong>Google Sheet not connected.</strong> Submissions won't be saved until you set it up. <a onclick="openSetup()">Set up →</a>`,
    km: `<strong>Google Sheet មិនទាន់ភ្ជាប់ទេ។</strong> ព័ត៌មានដែលដាក់ស្នើនឹងមិនត្រូវបានរក្សាទុក។ <a onclick="openSetup()">រៀបចំ →</a>`,
  };
  document.getElementById('banner-msg-span').innerHTML = bannerHTML[lang];

  const langBtnText = document.getElementById('lang-btn-text');
  if (langBtnText) langBtnText.textContent = lang === 'en' ? 'ខ្មែរ' : 'English';

  populateDistrictSelect();
  checkExpiry();
}


// ── State ────────────────────────────────────────────────
let SCRIPT_URL = localStorage.getItem('grab_sheet_url') || '';
let selService = '';
let selSlot    = null; // { dateLabel, session, time, key }
let activeWeek = 0;
let schedCounts = {};

// ── Spam prevention ───────────────────────────────────────
const SUBMISSIONS_KEY = 'grab_submissions';
const COOLDOWN_SHORT  = 30 * 60 * 1000;
const COOLDOWN_LONG   = 7 * 60 * 60 * 1000;
const SPAM_THRESHOLD  = 3;

function getApplicableCooldown() {
  return getSavedSubmissions().length > SPAM_THRESHOLD ? COOLDOWN_LONG : COOLDOWN_SHORT;
}
let cooldownTimer;

function getSavedSubmissions() {
  try { return JSON.parse(localStorage.getItem(SUBMISSIONS_KEY) || '[]'); } catch(e) { return []; }
}
function saveSubmission(sub) {
  const subs = getSavedSubmissions();
  subs.push(sub);
  localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(subs));
}
function getLatestSubmission() {
  const subs = getSavedSubmissions();
  return subs.length ? subs.reduce((a, b) => a.timestamp > b.timestamp ? a : b) : null;
}
function findDuplicate(phone, nid) {
  const cutoff = Date.now() - getApplicableCooldown();
  return getSavedSubmissions().find(s => s.timestamp > cutoff && (s.phone === phone || s.nid === nid)) || null;
}

function parseDateLabel(label) {
  try {
    const mo = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const p  = label.replace(/^[A-Za-z]+,\s*/, '').split(' ');
    const m  = mo.indexOf(p[0]), d = parseInt(p[1]), y = parseInt(p[2]);
    return (m < 0 || isNaN(d) || isNaN(y)) ? null : new Date(y, m, d);
  } catch(e) { return null; }
}

function updateAlreadyBtn(cooldown) {
  const latest = getLatestSubmission();
  const btn = document.getElementById('already-new-btn');
  if (!latest || !btn) return;
  clearInterval(cooldownTimer);
  const fmtRemaining = r => {
    if (cooldown >= COOLDOWN_LONG) {
      const h = Math.floor(r / 3600000), m = Math.floor((r % 3600000) / 60000);
      return currentLang === 'en' ? h + 'h ' + m + 'm' : h + 'ម ' + m + 'ន';
    }
    const mins = Math.ceil(r / 60000);
    return currentLang === 'en' ? mins + 'm' : mins + 'ន';
  };
  const tick = () => {
    const r = cooldown - (Date.now() - latest.timestamp);
    if (r <= 0) {
      clearInterval(cooldownTimer);
      btn.disabled = false;
      btn.style.background = '#374151';
      btn.textContent = currentLang === 'en' ? 'Submit a New Application' : 'ដាក់ពាក្យថ្មី';
      return;
    }
    btn.disabled = true;
    btn.style.background = '#9ca3af';
    btn.textContent = currentLang === 'en'
      ? 'Submit Again (available in ' + fmtRemaining(r) + ')'
      : 'ដាក់ម្តងទៀត (' + fmtRemaining(r) + ' ទៀត)';
  };
  tick();
  cooldownTimer = setInterval(tick, 30000);
}

function checkPreviousSubmission() {
  const latest = getLatestSubmission();
  if (!latest) return false;

  const SIX_MONTHS_MS  = 6 * 30.44 * 24 * 60 * 60 * 1000;
  const interviewDate  = parseDateLabel(latest.dateLabel);
  const now            = Date.now();

  if (interviewDate && interviewDate.getTime() < now) {
    const reapplyDate = new Date(interviewDate.getTime() + SIX_MONTHS_MS);
    if (now < reapplyDate.getTime()) {
      showAlreadyScreen(latest, true, reapplyDate);
      return true;
    }
    return false;
  }

  const cooldown = getApplicableCooldown();
  if (now - latest.timestamp > cooldown) return false;
  showAlreadyScreen(latest, false, null, cooldown);
  return true;
}

function showAlreadyScreen(latest, isInterviewLock, reapplyDate, cooldown) {
  document.getElementById('form').style.display = 'none';
  document.getElementById('success-screen').classList.remove('on');
  document.getElementById('already-screen').classList.add('on');
  const t  = i18n[currentLang];
  const en = currentLang === 'en';
  document.getElementById('already-back-btn').textContent = en ? '← Back to Form' : '← ត្រឡប់ទៅទម្រង់';

  if (isInterviewLock) {
    const rd = reapplyDate.toLocaleDateString(en ? 'en-GB' : 'km-KH', { year:'numeric', month:'long', day:'numeric' });
    document.getElementById('already-title').textContent =
      en ? 'Interview Period Active' : 'រយៈពេលសំភាសសកម្ម';
    document.getElementById('already-msg1').textContent = en
      ? 'You have already attended an interview. You may reapply after 6 months from your interview date.'
      : 'អ្នកបានចូលរួមការសំភាសរួចហើយ។ អ្នកអាចដាក់ពាក្យបានម្តងទៀតបន្ទាប់ពី ៦ ខែ។';
    document.getElementById('already-card').innerHTML =
      '<div class="sc-row"><span class="sc-lbl">' + (t['sc-name']||'Name') + '</span><span class="sc-val">' + latest.name + '</span></div>'
      + '<div class="sc-row"><span class="sc-lbl">' + (t['sc-date']||'Interview Date') + '</span><span class="sc-val">' + latest.dateLabel + '</span></div>'
      + '<div class="sc-row"><span class="sc-lbl">' + (en ? 'Re-apply From' : 'ដាក់ពាក្យបានពី') + '</span><span class="sc-val" style="color:var(--grab-dark)">' + rd + '</span></div>';
    document.getElementById('already-msg2').textContent = en
      ? 'If you have any questions, please contact us directly.'
      : 'ប្រសិនបើមានសំណួរ សូមទំនាក់ទំនងយើងផ្ទាល់។';
    const btn = document.getElementById('already-new-btn');
    btn.disabled = true;
    btn.style.background = '#9ca3af';
    btn.textContent = en ? 'Re-apply opens ' + rd : 'ដាក់ពាក្យបាននៅ ' + rd;
  } else {
    document.getElementById('already-title').textContent =
      en ? 'Already Submitted' : 'បានដាក់ពាក្យរួចហើយ';
    document.getElementById('already-msg1').textContent = en
      ? 'You already submitted an application from this device. Our team will contact you to confirm your interview.'
      : 'អ្នកបានដាក់ពាក្យពីឧបករណ៍នេះរួចហើយ។ ក្រុមការងារយើងនឹងទំនាក់ទំនងអ្នក។';
    document.getElementById('already-card').innerHTML =
      '<div class="sc-row"><span class="sc-lbl">' + (t['sc-name']||'Name') + '</span><span class="sc-val">' + latest.name + '</span></div>'
      + '<div class="sc-row"><span class="sc-lbl">' + (t['sc-date']||'Interview Date') + '</span><span class="sc-val">' + latest.dateLabel + '</span></div>'
      + '<div class="sc-row"><span class="sc-lbl">' + (t['sc-time']||'Time Slot') + '</span><span class="sc-val">' + latest.timeSlot + '</span></div>'
      + '<div class="sc-row"><span class="sc-lbl">' + (t['sc-phone']||'Phone') + '</span><span class="sc-val">' + latest.phone + '</span></div>';
    document.getElementById('already-msg2').textContent = en
      ? 'If you need to change your slot or made a mistake, please contact us directly.'
      : 'ប្រសិនបើចង់ប្តូរពេលវេលា ឬមានកំហុស សូមទំនាក់ទំនងយើងផ្ទាល់។';
    updateAlreadyBtn(cooldown);
  }
}

function goBackToForm() {
  clearInterval(cooldownTimer);
  document.getElementById('already-screen').classList.remove('on');
  document.getElementById('form').reset();
  document.getElementById('form').style.display = 'block';
  document.querySelectorAll('.sel-card').forEach(c => c.classList.remove('active'));
  document.getElementById('confirm-wrap').classList.remove('active');
  document.getElementById('exp-badge').className = 'exp-badge';
  selService = ''; selSlot = null; renderSlotPicker();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function forceNewSubmission() {
  if (!confirm(currentLang === 'en'
    ? 'You already submitted once. Submitting again may create a duplicate record. Continue?'
    : 'អ្នកបានដាក់ពាក្យម្តងរួចហើយ។ ការដាក់ម្តងទៀតអាចបង្កើតការស្នើស្នើច្រំដែល។ បន្តឬ?')) return;
  clearInterval(cooldownTimer);
  document.getElementById('already-screen').classList.remove('on');
  document.getElementById('form').reset();
  document.getElementById('form').style.display = 'block';
  document.querySelectorAll('.sel-card').forEach(c => c.classList.remove('active'));
  document.getElementById('confirm-wrap').classList.remove('active');
  document.getElementById('exp-badge').className = 'exp-badge';
  selService = ''; selSlot = null; renderSlotPicker();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const SCHED_DEFAULT = { startDate:'', weeks:2, days:[1,3,5], amTime:'9:00 AM – 11:00 AM', pmTime:'1:00 PM – 3:00 PM', amMax:20, pmMax:20 };
let schedConfig = Object.assign({}, SCHED_DEFAULT);

const DISTRICTS = [
  { en:'Khan Chamkar Mon',      km:'ខណ្ឌចំការមន' },
  { en:'Khan Daun Penh',        km:'ខណ្ឌដូនពេញ' },
  { en:'Khan 7 Makara',         km:'ខណ្ឌ៧មករា' },
  { en:'Khan Toul Kork',        km:'ខណ្ឌទួលគោក' },
  { en:'Khan Boeng Keng Kang',  km:'ខណ្ឌបឹងកេងកង' },
  { en:'Khan Mean Chey',        km:'ខណ្ឌមានជ័យ' },
  { en:'Khan Russey Keo',       km:'ខណ្ឌរុស្សីកែវ' },
  { en:'Khan Sen Sok',          km:'ខណ្ឌសែនសុខ' },
  { en:'Khan Por Sen Chey',     km:'ខណ្ឌពោធ៍សែនជ័យ' },
  { en:'Khan Chbar Ampov',      km:'ខណ្ឌច្បារអំពៅ' },
  { en:'Khan Chroy Changvar',   km:'ខណ្ឌជ្រោយចង្វារ' },
  { en:'Khan Prek Phnov',       km:'ខណ្ឌព្រែកព្នៅ' },
  { en:'Khan Kambol',           km:'ខណ្ឌកំបូល' },
  { en:'Khan Stueng Mean Chey', km:'ខណ្ឌស្ទឹងមានជ័យ' },
];

function populateDistrictSelect() {
  const sel = document.getElementById('f-commune');
  if (!sel || sel.tagName !== 'SELECT') return;
  const cur = sel.value;
  const placeholder = currentLang === 'km' ? 'ជ្រើសរើសខណ្ឌ…' : 'Select your district…';
  let html = '<option value="">' + placeholder + '</option>';
  DISTRICTS.forEach(d => {
    const label = currentLang === 'km' ? d.km : d.en;
    html += '<option value="' + d.en + '"' + (cur === d.en ? ' selected' : '') + '>' + label + '</option>';
  });
  sel.innerHTML = html;
}

const MONTHS    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS_KM = ['មករា','កុម្ភៈ','មីនា','មេសា','ឧសភា','មិថុនា','កក្កដា','សីហា','កញ្ញា','តុលា','វិច្ឆិកា','ធ្នូ'];
const DAYS_EN   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

let adminMode = false;
let tapCount = 0, tapTimer;

// ── Boot ─────────────────────────────────────────────────
(function init() {
  document.getElementById('setup-section').style.display = 'none';
  checkBanner();
  if (SCRIPT_URL) document.getElementById('url-input').value = SCRIPT_URL;
  document.getElementById('f-exp').min = new Date().toISOString().split('T')[0];
  loadScheduleCfg();
  setLang(currentLang);
  populateDistrictSelect();
  renderSlotPicker();
  fetchScheduleCounts();
  checkPreviousSubmission();
})();

const ADMIN_PASS = 'dax2024';

function adminTap() {
  clearTimeout(tapTimer);
  tapCount++;
  if (tapCount >= 7) {
    tapCount = 0;
    if (adminMode) {
      adminMode = false;
      document.getElementById('setup-section').style.display = 'none';
      checkBanner();
      toast('Admin mode off');
      return;
    }
    const entered = prompt('Enter admin password:');
    if (entered !== ADMIN_PASS) {
      toast('Wrong password.');
      return;
    }
    adminMode = true;
    document.getElementById('setup-section').style.display = 'block';
    checkBanner();
    loadSchedAdminUI();
    toast('Admin mode on');
    return;
  }
  tapTimer = setTimeout(() => { tapCount = 0; }, 2000);
}

function checkBanner() {
  if (!adminMode) { document.getElementById('setup-banner').classList.add('hidden'); return; }
  const inAppsScript = typeof google !== 'undefined' && google.script;
  document.getElementById('setup-banner').classList.toggle('hidden', inAppsScript || !!SCRIPT_URL);
}


// ── ID Expiry ─────────────────────────────────────────────
function checkExpiry() {
  const val   = document.getElementById('f-exp').value;
  const badge = document.getElementById('exp-badge');
  if (!val) { badge.className = 'exp-badge'; return; }
  const expiry = new Date(val);
  const today  = new Date(); today.setHours(0,0,0,0);
  const min6   = new Date(); min6.setMonth(min6.getMonth() + 6);
  if (expiry < today) {
    badge.textContent = currentLang === 'en' ? '✗ Already expired' : '✗ ផុតសុពលភាព';
    badge.className   = 'exp-badge on exp-bad';
    setErr('e-exp','f-exp',true);
  } else if (expiry < min6) {
    const mo = Math.floor((expiry - today) / (1e3*60*60*24*30.44));
    badge.textContent = currentLang === 'en'
      ? `⚠ ${mo} month(s) left — need 6+`
      : `⚠ ${mo} ខែ — ជិតផុតសុពលភាព`;
    badge.className   = 'exp-badge on exp-warn';
    setErr('e-exp','f-exp',true);
  } else {
    const mo = Math.floor((expiry - today) / (1e3*60*60*24*30.44));
    badge.textContent = currentLang === 'en'
      ? `✓ Valid — ${mo} months`
      : `✓ នៅសុពលភាព — ${mo} ខែ`;
    badge.className   = 'exp-badge on exp-ok';
    setErr('e-exp','f-exp',false);
  }
}

// ── Card selectors ────────────────────────────────────────
function selectService(val, id) {
  selService = val;
  document.querySelectorAll('#svc-bike,#svc-food').forEach(c => c.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  setErr('e-svc',null,false);
}
function toggleConfirm(e) {
  if (e.target.tagName === 'INPUT') return;
  const cb = document.getElementById('f-confirm');
  cb.checked = !cb.checked;
  syncConfirm();
}
function syncConfirm() {
  const on = document.getElementById('f-confirm').checked;
  document.getElementById('confirm-wrap').classList.toggle('active', on);
  if (on) setErr('e-confirm',null,false);
}

// ── Live digit checker ───────────────────────────────────
const LIVE_CFG = {
  phone: { hintId:'hint-phone', min:9, max:10, label:'ខ្ទង់', over:'លើសពីការកំណត់! ត្រូវការ ៩–១០ ខ្ទង់' },
  nid:   { hintId:'hint-nid',   min:9, max:9,  label:'ខ្ទង់', over:'លើសពីការកំណត់! ត្រូវការ ៩ ខ្ទង់ប៉ុណ្ណោះ' }
};
function sanitizeNid() {
  const el = document.getElementById('f-nid');
  el.value = el.value.replace(/\D/g, '');
  liveCheck('nid');
}
function sanitizePhone() {
  const el = document.getElementById('f-phone');
  el.value = el.value.replace(/\D/g, '').slice(0, 10);
  liveCheck('phone');
}

function liveCheck(field) {
  const cfg    = LIVE_CFG[field];
  const digits = document.getElementById(field === 'phone' ? 'f-phone' : 'f-nid').value.replace(/\D/g,'').length;
  const hint   = document.getElementById(cfg.hintId);
  if (!digits) { hint.className = 'digit-hint'; return; }
  if (digits >= cfg.min && digits <= cfg.max) {
    hint.textContent = '✓ ' + digits + ' ' + cfg.label;
    hint.className   = 'digit-hint on ok';
  } else if (digits > cfg.max) {
    hint.textContent = '✗ ' + digits + ' ' + cfg.label + ' — ' + cfg.over;
    hint.className   = 'digit-hint on over';
  } else {
    const range = cfg.min === cfg.max ? cfg.min : cfg.min + '–' + cfg.max;
    hint.textContent = digits + ' / ' + range + ' ' + cfg.label;
    hint.className   = 'digit-hint on under';
  }
}

// ── Error helpers ─────────────────────────────────────────
function setErr(errId, inputId, show) {
  document.getElementById(errId).classList.toggle('on', show);
  if (inputId) document.getElementById(inputId).classList.toggle('err', show);
}

// ── Validation ────────────────────────────────────────────
function validate() {
  let ok = true;
  const v = id => document.getElementById(id).value.trim();
  if (!v('f-name'))    { setErr('e-name','f-name',true);      ok=false; } else setErr('e-name','f-name',false);
  const nidDigits = v('f-nid').replace(/\D/g,'');
  if (nidDigits.length !== 9) { setErr('e-nid','f-nid',true); ok=false; } else setErr('e-nid','f-nid',false);
  const phoneDigits = v('f-phone').replace(/\D/g,'');
  if (phoneDigits.length < 9 || phoneDigits.length > 10) { setErr('e-phone','f-phone',true); ok=false; } else setErr('e-phone','f-phone',false);
  if (!v('f-tg'))      { setErr('e-tg','f-tg',true);          ok=false; } else setErr('e-tg','f-tg',false);
  if (!v('f-commune')) { setErr('e-commune','f-commune',true); ok=false; } else setErr('e-commune','f-commune',false);
  const expVal = document.getElementById('f-exp').value;
  if (!expVal) {
    setErr('e-exp','f-exp',true); ok=false;
  } else {
    const expiry = new Date(expVal);
    const min6   = new Date(); min6.setMonth(min6.getMonth()+6);
    if (expiry < min6) { setErr('e-exp','f-exp',true); ok=false; } else setErr('e-exp','f-exp',false);
  }
  if (!selService) { setErr('e-svc',null,true);  ok=false; } else setErr('e-svc',null,false);
  if (!selSlot)    { setErr('e-slot',null,true); ok=false; } else setErr('e-slot',null,false);
  if (!document.getElementById('f-confirm').checked) { setErr('e-confirm',null,true); ok=false; } else setErr('e-confirm',null,false);
  return ok;
}

// ── Iframe POST ───────────────────────────────────────────
function iframePost(url, data) {
  return new Promise(resolve => {
    const uid    = 'frm' + Date.now();
    const iframe = document.createElement('iframe');
    iframe.id = iframe.name = uid;
    iframe.style.cssText = 'display:none;position:fixed;';
    document.body.appendChild(iframe);
    const form  = document.createElement('form');
    form.method = 'POST';
    form.action = url;
    form.target = uid;
    const inp   = document.createElement('input');
    inp.type    = 'hidden';
    inp.name    = 'data';
    inp.value   = JSON.stringify(data);
    form.appendChild(inp);
    document.body.appendChild(form);
    iframe.addEventListener('load', () => { form.remove(); iframe.remove(); resolve(); }, { once:true });
    setTimeout(() => { try { form.remove(); iframe.remove(); } catch(_){} resolve(); }, 10000);
    form.submit();
  });
}

// ── Submit ────────────────────────────────────────────────
document.getElementById('form').addEventListener('submit', async e => {
  e.preventDefault();
  if (!validate()) {
    document.querySelector('.err-msg.on')
      ?.closest('.scard-body,.field')
      ?.scrollIntoView({ behavior:'smooth', block:'center' });
    return;
  }
  const btn = document.getElementById('submit-btn');
  const dup = findDuplicate(
    document.getElementById('f-phone').value.trim(),
    document.getElementById('f-nid').value.trim()
  );
  if (dup) {
    const dupDate = new Date(dup.timestamp).toLocaleDateString();
    if (!confirm(currentLang === 'en'
      ? 'A submission with this phone number or ID was already recorded on ' + dupDate + '. Submit again anyway?'
      : 'ព័ត៌មានទូរស័ព្ទ ឬ ID នេះបានដាក់ស្នើនៅ ' + dupDate + '។ ដាក់ម្តងទៀតឬ?')) return;
  }
  btn.disabled    = true;
  btn.textContent = i18n[currentLang]['submitting'];
  const payload = {
    fullName:   document.getElementById('f-name').value.trim(),
    nationalId: document.getElementById('f-nid').value.trim(),
    idExpiry:   document.getElementById('f-exp').value,
    phone:      document.getElementById('f-phone').value.trim(),
    telegram:   document.getElementById('f-tg').value.trim(),
    commune:    document.getElementById('f-commune').value.trim(),
    service:    selService,
    days:       selSlot ? selSlot.dateLabel : '',
    timeSlot:   selSlot ? selSlot.time : '',
    confirmed:  'Yes',
  };
  const inAppsScript = typeof google !== 'undefined' && google.script;
  if (inAppsScript) {
    await new Promise((resolve, reject) => {
      google.script.run
        .withSuccessHandler(resolve)
        .withFailureHandler(reject)
        .submitApplication(payload);
    });
  } else if (SCRIPT_URL) {
    await iframePost(SCRIPT_URL, payload);
  }
  showSuccess(payload);
  btn.disabled    = false;
  btn.textContent = i18n[currentLang]['submit-btn'];
});

// ── Success ───────────────────────────────────────────────
function showSuccess(d) {
  saveSubmission({ phone: d.phone, nid: d.nationalId, name: d.fullName, timestamp: Date.now(), dateLabel: d.days, timeSlot: d.timeSlot });
  document.getElementById('form').style.display = 'none';
  document.getElementById('success-screen').classList.add('on');
  const t = i18n[currentLang];
  document.getElementById('success-card').innerHTML = `
    <div class="sc-row"><span class="sc-lbl">${t['sc-name']}</span>    <span class="sc-val">${d.fullName}</span></div>
    <div class="sc-row"><span class="sc-lbl">${t['sc-service']}</span> <span class="sc-val">${d.service}</span></div>
    <div class="sc-row"><span class="sc-lbl">${t['sc-date']||'Interview Date'}</span> <span class="sc-val">${d.days}</span></div>
    <div class="sc-row"><span class="sc-lbl">${t['sc-time']}</span>    <span class="sc-val">${d.timeSlot}</span></div>
    <div class="sc-row"><span class="sc-lbl">${t['sc-phone']}</span>   <span class="sc-val">${d.phone}</span></div>
    <div class="sc-row"><span class="sc-lbl">${t['sc-tg']}</span>      <span class="sc-val">${d.telegram}</span></div>`;
  window.scrollTo({ top:0, behavior:'smooth' });
}

function resetForm() {
  const latest = getLatestSubmission();
  if (latest) {
    const cooldown = getApplicableCooldown();
    const r = cooldown - (Date.now() - latest.timestamp);
    if (r > 0) {
      const elapsed = Math.floor((Date.now() - latest.timestamp) / 60000);
      if (!confirm(currentLang === 'en'
        ? 'You submitted ' + elapsed + ' minute(s) ago. Submit for a different person?'
        : 'អ្នកបានដាក់ស្នើ ' + elapsed + 'ន មុន។ ដាក់ពាក្យសម្រាប់នរណាម្នាក់ទៀតឬ?')) return;
    }
  }
  document.getElementById('form').reset();
  document.getElementById('form').style.display = 'block';
  document.getElementById('success-screen').classList.remove('on');
  document.querySelectorAll('.sel-card').forEach(c => c.classList.remove('active'));
  document.getElementById('confirm-wrap').classList.remove('active');
  document.getElementById('exp-badge').className = 'exp-badge';
  selService = ''; selSlot = null; renderSlotPicker();
  window.scrollTo({ top:0, behavior:'smooth' });
}

// ── Setup section ─────────────────────────────────────────
function openSetup() {
  setTimeout(() => {
    document.getElementById('setup-section').scrollIntoView({ behavior:'smooth' });
    document.getElementById('setup-body').classList.add('on');
    document.getElementById('setup-arrow').textContent = '▲';
  }, 100);
}
function toggleSetup() {
  const body = document.getElementById('setup-body');
  body.classList.toggle('on');
  document.getElementById('setup-arrow').textContent = body.classList.contains('on') ? '▲' : '▼';
}
function saveUrl() {
  const url = document.getElementById('url-input').value.trim();
  if (!url.startsWith('https://script.google.com')) { toast('Enter a valid Apps Script URL.'); return; }
  SCRIPT_URL = url;
  localStorage.setItem('grab_sheet_url', url);
  document.getElementById('url-ok').style.display = 'block';
  checkBanner();
  toast('Google Sheet connected!');
}
async function testUrl() {
  const url = document.getElementById('url-input').value.trim();
  const el  = document.getElementById('url-test-result');
  el.style.display = 'block';
  if (!url.startsWith('https://script.google.com')) { el.style.color='#dc2626'; el.textContent='✗ Enter a valid URL first.'; return; }
  el.style.color='#6b7280'; el.textContent='Testing…';
  try {
    await fetch(url, { mode:'no-cors' });
    el.style.color='#15803d'; el.textContent='✓ URL is reachable. Submit a test form to confirm rows appear in your sheet.';
  } catch(err) {
    el.style.color='#dc2626'; el.textContent='✗ Cannot reach URL — check your internet or re-deploy the script.';
  }
}
function copyScript() {
  navigator.clipboard.writeText(document.getElementById('script-code').textContent)
    .then(() => toast('Script copied!'));
}

// ── Schedule ─────────────────────────────────────────────
function loadScheduleCfg() {
  try { schedConfig = Object.assign({}, SCHED_DEFAULT, JSON.parse(localStorage.getItem('dax_schedule') || '{}')); }
  catch(e) {}
}

async function fetchScheduleCounts() {
  if (!SCRIPT_URL) return;
  try {
    const r = await fetch(SCRIPT_URL, { redirect:'follow' });
    const j = await r.json();
    if (j && j.counts) { schedCounts = j.counts; renderSlotPicker(); }
  } catch(e) {}
}

function renderSlotPicker() {
  const el = document.getElementById('slot-picker');
  if (!el) return;
  if (!schedConfig.startDate) {
    el.innerHTML = '<div class="slot-no-cfg">' + (currentLang==='en'
      ? 'No interview schedule configured yet.<br>Admin must set up the schedule first.'
      : 'មិនទាន់មានកាលវិភាគសំភាស។<br>Admin ត្រូវរៀបចំជាមុនសិន។') + '</div>';
    return;
  }
  const start = new Date(schedConfig.startDate + 'T00:00:00');
  const mo  = i => currentLang === 'km' ? MONTHS_KM[i] : MONTHS[i];
  const fmt = d => mo(d.getMonth()) + ' ' + d.getDate();
  const totalWeeks = schedConfig.weeks;

  if (activeWeek >= totalWeeks) activeWeek = 0;

  let opts = '';
  for (let w = 0; w < totalWeeks; w++) {
    const ws = new Date(start); ws.setDate(ws.getDate() + w * 7);
    const we = new Date(ws);    we.setDate(we.getDate() + 6);
    opts += '<option value="' + w + '"' + (w === activeWeek ? ' selected' : '') + '>'
          + (currentLang==='km' ? 'សប្តាហ៍' : 'Week') + ' ' + (w+1)
          + '  —  ' + fmt(ws) + ' – ' + fmt(we) + ', ' + we.getFullYear()
          + '</option>';
  }
  let html = '<div class="week-select-wrap"><select class="week-select" onchange="setWeek(parseInt(this.value))">' + opts + '</select></div>';

  const ws = new Date(start); ws.setDate(ws.getDate() + activeWeek * 7);
  let hasDate = false;
  for (let d = 0; d < 7; d++) {
    const dt = new Date(ws); dt.setDate(dt.getDate() + d);
    if (!schedConfig.days.includes(dt.getDay())) continue;
    hasDate = true;
    const fullLabel = DAYS_EN[dt.getDay()] + ', ' + MONTHS[dt.getMonth()] + ' ' + dt.getDate() + ', ' + dt.getFullYear();
    const amKey = fullLabel + '|AM';
    const pmKey = fullLabel + '|PM';
    const amLeft = schedConfig.amMax - (schedCounts[amKey] || 0);
    const pmLeft = schedConfig.pmMax - (schedCounts[pmKey] || 0);
    const amFull = amLeft <= 0;
    const pmFull = pmLeft <= 0;
    const amActive = selSlot && selSlot.key === amKey;
    const pmActive = selSlot && selSlot.key === pmKey;
    const seatSvg = '<svg style="width:13px;height:13px;vertical-align:-1px;margin-right:3px;" viewBox="0 0 16 16" fill="currentColor"><rect x="3" y="1" width="10" height="6" rx="1.5"/><rect x="2" y="8" width="12" height="3" rx="1"/><rect x="3" y="11" width="2" height="4" rx="1"/><rect x="11" y="11" width="2" height="4" rx="1"/></svg>';
    const seatsHtml = (left, max, full) => {
      if (full) return '<span class="slot-seats seats-full">' + seatSvg + 'ពេញ</span>';
      if (left <= Math.max(1, Math.ceil(max * 0.25))) return '<span class="slot-seats seats-low">' + seatSvg + left + ' left</span>';
      return '<span class="slot-seats seats-ok">' + seatSvg + (currentLang==='km'?'ទំនេរ':'Available') + '</span>';
    };
    const le = s => s.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
    html += '<div class="slot-row">'
      + '<div class="slot-date-cell"><div class="slot-date">' + DAYS_EN[dt.getDay()] + ' ' + dt.getDate() + '</div>'
      + '<div class="slot-date-mo">' + mo(dt.getMonth()) + ' ' + dt.getFullYear() + '</div></div>'
      + '<button type="button" class="slot-btn' + (amActive?' active':'') + '" ' + (amFull?'disabled':'') + ' onclick="selectSlot(\'' + le(fullLabel) + '\',\'AM\',\'' + le(schedConfig.amTime) + '\')">'
      + '<div class="slot-time">' + schedConfig.amTime + '</div>' + seatsHtml(amLeft,schedConfig.amMax,amFull) + '</button>'
      + '<button type="button" class="slot-btn' + (pmActive?' active':'') + '" ' + (pmFull?'disabled':'') + ' onclick="selectSlot(\'' + le(fullLabel) + '\',\'PM\',\'' + le(schedConfig.pmTime) + '\')">'
      + '<div class="slot-time">' + schedConfig.pmTime + '</div>' + seatsHtml(pmLeft,schedConfig.pmMax,pmFull) + '</button>'
      + '</div>';
  }
  if (!hasDate) html += '<div style="font-size:.8rem;color:var(--muted);padding:6px 0 10px;">'
    + (currentLang==='km' ? 'មិនមានថ្ងៃសំភាសសប្តាហ៍នេះ។' : 'No interview days in this week.') + '</div>';
  el.innerHTML = html;
}

function setWeek(w) {
  activeWeek = w;
  renderSlotPicker();
}

function selectSlot(dateLabel, session, time) {
  selSlot = { dateLabel, session, time, key: dateLabel + '|' + session };
  setErr('e-slot', null, false);
  renderSlotPicker();
}

function loadSchedAdminUI() {
  const el = document.getElementById('sched-start');
  if (!el) return;
  if (schedConfig.startDate) el.value = schedConfig.startDate;
  document.querySelectorAll('.sched-wk').forEach(b => b.classList.toggle('active', parseInt(b.dataset.wk) === schedConfig.weeks));
  document.querySelectorAll('.sched-day').forEach(b => b.classList.toggle('active', schedConfig.days.includes(parseInt(b.dataset.day))));
  document.getElementById('sched-am-time').value = schedConfig.amTime;
  document.getElementById('sched-pm-time').value = schedConfig.pmTime;
  document.getElementById('sched-am-max').value  = schedConfig.amMax;
  document.getElementById('sched-pm-max').value  = schedConfig.pmMax;
}

function setSchedWeeks(n) {
  schedConfig.weeks = n;
  document.querySelectorAll('.sched-wk').forEach(b => b.classList.toggle('active', parseInt(b.dataset.wk) === n));
}

function toggleSchedDay(n) {
  const idx = schedConfig.days.indexOf(n);
  if (idx >= 0) schedConfig.days.splice(idx, 1); else schedConfig.days.push(n);
  schedConfig.days.sort((a,b) => a-b);
  document.querySelectorAll('.sched-day').forEach(b => b.classList.toggle('active', schedConfig.days.includes(parseInt(b.dataset.day))));
}

function saveSchedule() {
  schedConfig.startDate = document.getElementById('sched-start').value;
  schedConfig.amTime    = document.getElementById('sched-am-time').value.trim() || '9:00 AM - 11:00 AM';
  schedConfig.pmTime    = document.getElementById('sched-pm-time').value.trim() || '1:00 PM - 3:00 PM';
  schedConfig.amMax     = Math.max(1, parseInt(document.getElementById('sched-am-max').value) || 20);
  schedConfig.pmMax     = Math.max(1, parseInt(document.getElementById('sched-pm-max').value) || 20);
  localStorage.setItem('dax_schedule', JSON.stringify(schedConfig));
  const ok = document.getElementById('sched-saved');
  ok.style.display = 'inline';
  setTimeout(() => { ok.style.display = 'none'; }, 2500);
  renderSlotPicker();
  toast('Schedule saved!');
}

function switchTab(tab) {
  document.getElementById('tab-form').style.display  = tab === 'form'  ? 'block' : 'none';
  document.getElementById('tab-guide').style.display = tab === 'guide' ? 'block' : 'none';
  document.getElementById('tn-form').classList.toggle('active',  tab === 'form');
  document.getElementById('tn-guide').classList.toggle('active', tab === 'guide');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('on');
  setTimeout(() => el.classList.remove('on'), 3000);
}
