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


  function initializeHeroTypewriter() {
    var typewriter = document.querySelector('.home-main [data-typewriter]');

    if (!typewriter) {
      return;
    }

    var source = typewriter.querySelector('.visually-hidden');
    var visibleText = typewriter.querySelector('.hero-typewriter-text');
    var actionRow = typewriter.parentElement ? typewriter.parentElement.querySelector('.action-row') : null;

    if (!source || !visibleText || !actionRow) {
      return;
    }

    var fullText = source.textContent.trim();

    if (!fullText) {
      return;
    }

    if (reducedMotionQuery.matches) {
      visibleText.textContent = fullText;
      return;
    }

    var characterIndex = 0;
    var typingDelay = 450;
    var characterDelay = 20;
    var cursorHold = 450;

    typewriter.classList.add('typewriter-ready', 'typing-active');
    actionRow.classList.add('is-typewriter-pending');
    visibleText.textContent = '';

    function revealButtons() {
      actionRow.classList.remove('is-typewriter-pending');
      actionRow.classList.add('is-typewriter-visible');
    }

    function finishTyping() {
      typewriter.classList.remove('typing-active');
      typewriter.classList.add('typing-complete');
      revealButtons();

      window.setTimeout(function () {
        typewriter.classList.add('is-cursor-fading');

        window.setTimeout(function () {
          typewriter.classList.add('is-cursor-hidden');
        }, 220);
      }, cursorHold);
    }

    function typeNextCharacter() {
      if (characterIndex >= fullText.length) {
        finishTyping();
        return;
      }

      visibleText.textContent += fullText.charAt(characterIndex);
      characterIndex += 1;
      window.setTimeout(typeNextCharacter, characterDelay);
    }

    window.setTimeout(typeNextCharacter, typingDelay);
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

  function initializeMetricsSequence() {
    var metricsBlock = document.querySelector('.home-main .executive-metrics');

    if (!metricsBlock || !motionAllowed || reducedMotionQuery.matches) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      metricsBlock.classList.add('is-sequence-visible');
      return;
    }

    var sequenceObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio >= 0.4) {
          metricsBlock.classList.add('is-sequence-visible');
          return;
        }

        if (entry.intersectionRatio <= 0.05) {
          metricsBlock.classList.remove('is-sequence-visible');
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -6% 0px',
      threshold: [0, 0.05, 0.4]
    });

    sequenceObserver.observe(metricsBlock);
  }

  function initializeHeaderScrollState() {
    if (!siteHeader) {
      return;
    }

    var progressBar = siteHeader.querySelector('.scroll-progress-bar');
    var ticking = false;

    function updateHeaderAndProgress() {
      var scrollTop = window.scrollY;
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var progress = scrollable > 0 ? scrollTop / scrollable : 0;
      var clampedProgress = Math.min(Math.max(progress, 0), 1);

      siteHeader.classList.toggle('is-scrolled', scrollTop > 40);

      if (progressBar) {
        progressBar.style.transform = 'scaleX(' + clampedProgress + ')';
      }

      ticking = false;
    }

    updateHeaderAndProgress();

    function scheduleHeaderUpdate() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderAndProgress);
        ticking = true;
      }
    }

    window.addEventListener('scroll', scheduleHeaderUpdate, { passive: true });
    window.addEventListener('resize', scheduleHeaderUpdate, { passive: true });
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
  initializeHeroTypewriter();
  initializeReveals();
  initializeMetricsSequence();
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
