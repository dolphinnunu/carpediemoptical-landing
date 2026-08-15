(() => {
  const isSpanish = location.pathname.replace(/\\/g, '/').includes('/es/');
  const currentFile = location.pathname.split('/').pop() || 'index.html';
  const suffix = `${location.search}${location.hash}`;
  const englishHref = `${currentFile}${suffix}`;
  const spanishHref = `es/${currentFile}${suffix}`;
  const utilityRight = document.querySelector('.utility-right');

  if (!utilityRight || utilityRight.querySelector('.language-switcher')) return;

  const switcher = document.createElement('div');
  switcher.className = 'language-switcher';
  switcher.setAttribute('aria-label', isSpanish ? 'Selector de idioma' : 'Language selector');
  switcher.innerHTML = `
    <a href="${englishHref}" lang="en" hreflang="en"${isSpanish ? '' : ' aria-current="page"'}>EN</a>
    <span aria-hidden="true"></span>
    <a href="${spanishHref}" lang="es" hreflang="es"${isSpanish ? ' aria-current="page"' : ''}>ES</a>`;

  utilityRight.appendChild(switcher);

  const style = document.createElement('style');
  style.textContent = `
    .language-switcher{display:flex;align-items:center;gap:6px;flex:0 0 auto;margin-left:2px;padding-left:12px;border-left:1px solid rgba(255,255,255,.24);font-size:10px;font-weight:700;letter-spacing:.1em;line-height:1}
    .language-switcher span{width:1px;height:11px;background:rgba(255,255,255,.28)}
    .language-switcher a{padding:3px 1px;color:#aebdb9;text-decoration:none}
    .language-switcher a[aria-current="page"]{color:#f6c46d}
    .language-switcher a:hover{color:#fff}
    @media(max-width:600px){.language-switcher{padding-left:8px}.utility-right{gap:8px}}
  `;
  document.head.appendChild(style);
})();
