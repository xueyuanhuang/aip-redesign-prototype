'use strict';

(function () {
  const input = document.querySelector('#navbar-search-input');
  const results = document.querySelector('#navbar-search-results');
  const assetRoot = new URL('.', document.currentScript && document.currentScript.src ? document.currentScript.src : document.baseURI);

  if (!input) {
    return;
  }

  input.addEventListener('focus', init);
  input.addEventListener('focus', search);
  input.addEventListener('keyup', search);
  document.addEventListener('keypress', focusSearchFieldOnKeyPress);

  function focusSearchFieldOnKeyPress(event) {
    if (input === document.activeElement) {
      return;
    }

    const characterPressed = String.fromCharCode(event.charCode);
    if (!isHotkey(characterPressed)) {
      return;
    }

    input.focus();
    event.preventDefault();
  }

  function isHotkey(character) {
    const dataHotkeys = input.getAttribute('data-hotkeys') || '';
    return dataHotkeys.indexOf(character) >= 0;
  }

  function init() {
    input.removeEventListener('focus', init);
    input.required = true;
    loadScript('flexsearch.min.js');
    loadScript('en.search-data.min.5cda4a35c8020b6a75b5bb03863fc59839fe454879237758a30a23e8cd0255c6.js', function () {
      input.required = false;
      search();
    });
  }

  function search() {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }

    if (!input.value || !window.newdocsSearchIndex) {
      return;
    }

    const searchHits = window.newdocsSearchIndex.search(input.value, 10);
    searchHits.forEach(function (page) {
      const li = element('<li><a href><h4></h4><small></small></a></li>');
      const a = li.querySelector('a');
      const title = li.querySelector('h4');
      const small = li.querySelector('small');
      const localHref = page.href && page.href.startsWith('/') ? page.href.slice(1) : page.href;

      a.href = new URL(localHref || '', assetRoot).href;
      title.textContent = page.title;
      small.textContent = page.section;
      results.appendChild(li);
    });
  }

  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.defer = true;
    script.async = false;
    script.src = new URL(src, assetRoot).href;
    script.onload = callback;
    document.head.appendChild(script);
  }

  function element(content) {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div.firstChild;
  }
})();
