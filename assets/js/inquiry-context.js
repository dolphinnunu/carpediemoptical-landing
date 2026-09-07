(() => {
  const model = location.pathname.match(/product-([^/]+)\.html$/i)?.[1].toUpperCase();
  if (!model) return;
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const raw = link.getAttribute('href');
    const email = raw.startsWith('mailto:info@carpediemoptic.com');
    const whatsapp = raw.startsWith('https://wa.me/8615869665316');
    if (!email && !whatsapp) return;
    const es = document.documentElement.lang === 'es';
    const selected = document.querySelector('.colors .color.active');
    const color = selected?.getAttribute('data-color') || selected?.getAttribute('title') || '';
    const message = es
      ? `Hola, me interesa el modelo ${model}.\nColor: ${color}\nCantidad prevista: \nPaís de destino: \nPersonalización: \nFecha de entrega deseada: `
      : `Hello, I am interested in model ${model}.\nColour: ${color}\nTarget quantity: \nDestination country: \nCustomization: \nRequested delivery date: `;
    link.href = email
      ? `mailto:info@carpediemoptic.com?subject=${encodeURIComponent(`${es ? 'Consulta' : 'Inquiry'} - ${model}`)}&body=${encodeURIComponent(message)}`
      : `https://wa.me/8615869665316?text=${encodeURIComponent(message)}`;
  }, true);
})();
