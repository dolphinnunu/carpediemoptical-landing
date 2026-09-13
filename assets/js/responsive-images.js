(() => {
  const manifest = window.CARPE_RESPONSIVE_IMAGES || {};

  function normalizeSource(image) {
    const raw = image.getAttribute('src') || '';
    try {
      const url = new URL(raw, location.href);
      return url.pathname.replace(/^\/(?:es\/)?/, '');
    } catch {
      return raw.replace(/^\.\.\//, '').replace(/^\//, '');
    }
  }

  function enhance(image) {
    const source = normalizeSource(image);
    if (image.dataset.responsiveSource === source) return;
    const variants = manifest[source];
    const isPrimary = image.id === 'main-product-image' || image.closest('.hero-visual');
    image.decoding = 'async';
    if (isPrimary) {
      image.loading = 'eager';
      image.fetchPriority = 'high';
    } else if (!image.hasAttribute('loading')) {
      image.loading = 'lazy';
    }
    if (variants) {
      image.srcset = variants.map(([url, width]) => `${location.pathname.startsWith('/es/') ? '../' : ''}${url} ${width}w`).join(', ');
      image.sizes = image.closest('.thumb, .color')
        ? '(max-width: 700px) 72px, 90px'
        : image.closest('.lookbook-card')
          ? '(max-width: 700px) 92vw, 46vw'
          : '(max-width: 700px) 92vw, 55vw';
    }
    image.dataset.responsiveSource = source;
  }

  document.querySelectorAll('img').forEach(enhance);
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') enhance(mutation.target);
      mutation.addedNodes.forEach((node) => {
      if (!(node instanceof Element)) return;
      if (node.matches('img')) enhance(node);
      node.querySelectorAll?.('img').forEach(enhance);
      });
    });
  }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
})();
