/* MannsForum prototype — minimal, accessible interactions */
(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Helpline status demo toggle — flips the whole site between
  // "i drift" (open) and "ute av drift" (down → crisis fallbacks promoted).
  // Demonstrates the single-CMS-field status pattern: a down service never blanks.
  var KEY = 'mf-helpline';
  var root = document.documentElement;
  var saved = null;
  try { saved = window.localStorage.getItem(KEY); } catch (e) {}
  if (saved === 'ute') { root.setAttribute('data-helpline', 'ute'); }

  var demo = document.querySelector('.demo-toggle');
  if (demo) {
    var label = demo.querySelector('[data-demo-label]');
    var sync = function () {
      var ute = root.getAttribute('data-helpline') === 'ute';
      if (label) { label.textContent = ute ? 'ute av drift' : 'i drift'; }
      demo.setAttribute('aria-pressed', ute ? 'true' : 'false');
    };
    sync();
    demo.addEventListener('click', function () {
      var ute = root.getAttribute('data-helpline') === 'ute';
      if (ute) { root.removeAttribute('data-helpline'); }
      else { root.setAttribute('data-helpline', 'ute'); }
      try { window.localStorage.setItem(KEY, ute ? 'drift' : 'ute'); } catch (e) {}
      sync();
    });
  }

  // Footer year
  var y = document.querySelector('[data-year]');
  if (y) { y.textContent = new Date().getFullYear(); }
})();
