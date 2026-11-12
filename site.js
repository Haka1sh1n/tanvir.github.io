
(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('#themeToggle');
  const menuButton = document.querySelector('#menuToggle');
  const navLinks = document.querySelector('#navLinks');
  const progress = document.querySelector('#readingProgress');

  try {
    const saved = localStorage.getItem('tonmoy-portfolio-theme');
    if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  } catch { /* private browsing is fine */ }

  function updateThemeButton() {
    if (!themeButton) return;
    const light = root.dataset.theme === 'light';
    themeButton.textContent = light ? '☾' : '☀';
    themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
    themeButton.title = light ? 'Dark theme' : 'Light theme';
  }
  updateThemeButton();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('tonmoy-portfolio-theme', root.dataset.theme); } catch { /* optional */ }
    updateThemeButton();
  });

  menuButton?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = open ? '✕' : '☰';
  });
  document.querySelectorAll('#navLinks a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      if (menuButton) {
        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      }
    });
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.project-card[data-category]');
  const filterCount = document.querySelector('#filterCount');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      let visible = 0;
      cards.forEach((card) => {
        const show = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.hidden = !show;
        if (show) visible += 1;
      });
      filterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      if (filterCount) filterCount.textContent = visible + ' projects shown';
    });
  });

  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? Math.min(100, Math.max(0, 100 * window.scrollY / max)) : 0;
    progress.style.width = percent + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
  }

  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('.nav-links a').forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-20% 0px -65% 0px' });
    sections.forEach((section) => navObserver.observe(section));
  }

  document.querySelector('#copyEmail')?.addEventListener('click', async (event) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText('tanvir.ahmed.tonmoy@g.bracu.ac.bd');
      const old = button.textContent;
      button.textContent = '✓ Email copied';
      window.setTimeout(() => { button.textContent = old; }, 1900);
    } catch {
      window.location.href = 'mailto:tanvir.ahmed.tonmoy@g.bracu.ac.bd';
    }
  });

  document.querySelector('#year').textContent = String(new Date().getFullYear());
})();
