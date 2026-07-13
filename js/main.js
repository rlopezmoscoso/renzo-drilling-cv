(function () {
  var navToggle = document.querySelector('.nav-toggle');
  var primaryNav = document.querySelector('#primary-navigation');
  var siteHeader = document.querySelector('.site-header');
  var homeMain = document.querySelector('.home-main');
  var yearElements = document.querySelectorAll('[data-current-year]');
  var desktopQuery = window.matchMedia('(min-width: 48rem)');
  var reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var motionAllowed = homeMain && !reducedMotionQuery.matches;

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  function setVisible(elements) {
    elements.forEach(function (element) {
      element.classList.add('is-visible');
    });
  }

  function initializeHeroEntrance() {
    var heroElements = document.querySelectorAll('.home-main [data-hero-entrance]');

    if (!heroElements.length || !motionAllowed) {
      return;
    }

    heroElements.forEach(function (element) {
      var delay = Number.parseInt(element.getAttribute('data-reveal-delay') || '0', 10);
      element.style.setProperty('--reveal-delay', (Number.isNaN(delay) ? 0 : delay) + 'ms');
    });

    window.requestAnimationFrame(function () {
      setVisible(heroElements);
    });
  }

  function initializeReveals() {
    var revealElements = document.querySelectorAll('.home-main [data-reveal]');

    if (!revealElements.length) {
      return;
    }

    document.querySelectorAll('.home-main [data-reveal-delay]').forEach(function (element) {
      var delay = Number.parseInt(element.getAttribute('data-reveal-delay') || '0', 10);
      element.style.setProperty('--reveal-delay', (Number.isNaN(delay) ? 0 : delay) + 'ms');
    });

    if (!motionAllowed || reducedMotionQuery.matches) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setVisible(revealElements);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.15
    });

    revealElements.forEach(function (element) {
      observer.observe(element);
    });
  }

  function initializeHeaderScrollState() {
    if (!siteHeader) {
      return;
    }

    var ticking = false;

    function updateHeader() {
      siteHeader.classList.toggle('is-scrolled', window.scrollY > 32);
      ticking = false;
    }

    updateHeader();

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });
  }

  function closeMenu(options) {
    if (!navToggle || !primaryNav) {
      return;
    }
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
    if (options && options.restoreFocus) {
      navToggle.focus();
    }
  }

  function openMenu() {
    if (!navToggle || !primaryNav) {
      return;
    }
    navToggle.setAttribute('aria-expanded', 'true');
    primaryNav.classList.add('is-open');
  }

  if (motionAllowed) {
    homeMain.classList.add('motion-ready');
  }

  initializeHeroEntrance();
  initializeReveals();
  initializeHeaderScrollState();

  if (!navToggle || !primaryNav) {
    return;
  }

  navToggle.addEventListener('click', function () {
    var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  primaryNav.addEventListener('click', function (event) {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu({ restoreFocus: true });
    }
  });

  document.addEventListener('click', function (event) {
    if (navToggle.getAttribute('aria-expanded') !== 'true') {
      return;
    }
    if (event.target instanceof Node && !primaryNav.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  });

  function handleDesktopReset(event) {
    if (event.matches) {
      closeMenu();
    }
  }

  desktopQuery.addEventListener('change', handleDesktopReset);
})();
