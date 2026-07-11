(function () {
  var navToggle = document.querySelector('.nav-toggle');
  var primaryNav = document.querySelector('#primary-navigation');
  var yearElements = document.querySelectorAll('[data-current-year]');
  var desktopQuery = window.matchMedia('(min-width: 48rem)');

  yearElements.forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });

  if (!navToggle || !primaryNav) {
    return;
  }

  function closeMenu(options) {
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
    if (options && options.restoreFocus) {
      navToggle.focus();
    }
  }

  function openMenu() {
    navToggle.setAttribute('aria-expanded', 'true');
    primaryNav.classList.add('is-open');
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
