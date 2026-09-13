(() => {
  function contactType(link) {
    const href = link.getAttribute('href') || '';
    if (href.includes('wa.me/')) return 'whatsapp';
    if (href.startsWith('mailto:')) return 'email';
    return null;
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const channel = contactType(link);
    if (!channel) return;
    const model = location.pathname.match(/product-([^/]+)\.html/i)?.[1]?.toUpperCase() || 'general';
    const payload = { channel, model, language: document.documentElement.lang || 'en', page: location.pathname };
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'contact_click', ...payload });
    if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', payload);
    if (typeof window.va === 'function') window.va('event', { name: 'Contact Click', data: payload });
    window.dispatchEvent(new CustomEvent('carpediem:contact-click', { detail: payload }));
  }, true);
})();
