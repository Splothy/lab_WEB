// Resolve the home URL from this file: works locally and under a GitHub Pages repo path.
(() => {
  const homeUrl = new URL('../index.html', document.currentScript.src).href;
  const isHome = document.body.hasAttribute('data-home');
  const navigation = document.createElement(isHome ? 'header' : 'nav');
  navigation.className = `shared-header shared-header--${isHome ? 'home' : 'lab'}`;

  if (isHome) {
    navigation.innerHTML = `
      <div class="shared-header-inner">
        <a class="shared-brand" href="${homeUrl}">
          <span>Ковальчук Ярослав Олегович</span>
          <span class="shared-group">Група КН-311</span>
        </a>
        <nav aria-label="Головна навігація">
          <a class="shared-current" href="${homeUrl}" aria-current="page">Головна</a>
        </nav>
      </div>`;
  } else {
    navigation.setAttribute('aria-label', 'Навігація портфоліо');
    navigation.innerHTML = `
      <a class="shared-home" href="${homeUrl}" aria-label="На головну" title="На головну">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m3 10 9-7 9 7M5 9v12h5v-7h4v7h5V9" />
        </svg>
      </a>`;
  }

  document.body.prepend(navigation);
})();
