import './style.css';

const services = [
  {
    icon: '✈️',
    title: 'Airport transfers',
    text: 'On-time pickups and drop-offs at Ben Gurion and Ramon airports with flight tracking.',
  },
  {
    icon: '💼',
    title: 'Business travel',
    text: 'Discreet, professional rides for meetings, conferences, and corporate accounts.',
  },
  {
    icon: '🗺️',
    title: 'Day trips & tours',
    text: 'Explore Israel with a private driver — from the Dead Sea to the Galilee.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Group shuttles',
    text: 'Comfortable vans for families and groups, with room for luggage and gear.',
  },
];

const features = [
  {
    title: 'Fixed, upfront pricing',
    text: 'Know your fare before you ride. No surge pricing, no surprises.',
  },
  {
    title: 'Professional drivers',
    text: 'Vetted, licensed, English-speaking drivers who know the roads.',
  },
  {
    title: 'Always on time',
    text: 'We monitor traffic and flights so you never wait and never miss a connection.',
  },
  {
    title: 'Available 24/7',
    text: 'Early flight or late arrival? Book any time, day or night.',
  },
];

function renderCards() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = services
    .map(
      (s) => `
      <article class="card">
        <div class="card-icon" aria-hidden="true">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </article>`
    )
    .join('');
}

function renderFeatures() {
  const grid = document.getElementById('features-grid');
  if (!grid) return;
  grid.innerHTML = features
    .map(
      (f) => `
      <article class="feature">
        <span class="feature-check" aria-hidden="true">✓</span>
        <div>
          <h3>${f.title}</h3>
          <p>${f.text}</p>
        </div>
      </article>`
    )
    .join('');
}

function initForm() {
  const form = document.getElementById('booking-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    status.textContent = `Thanks${name ? `, ${name}` : ''}! We'll confirm your ride shortly.`;
    status.classList.add('is-visible');
    form.reset();
  });
}

function initYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

renderCards();
renderFeatures();
initForm();
initYear();
