(() => {
  const match = location.pathname.match(/product-((?:yg|he)\d+)\.html$/i);
  if (!match) return;

  const products = {
    yg21285: { model: 'YG21285', size: ['53', '21', '145'] },
    yg21287: { model: 'YG21287', size: ['53', '17', '145'] },
    yg21288: { model: 'YG21288', size: ['56', '19', '145'] },
    yg21289: { model: 'YG21289', size: ['53', '18', '145'] },
    yg21290: { model: 'YG21290', size: ['55', '18', '145'] },
    yg21291: { model: 'YG21291', size: ['54', '17', '145'] },
    yg78145: { model: 'YG78145', size: ['55', '16', '145'] },
    yg78146: { model: 'YG78146', size: ['55', '17', '145'] },
    he3111: { model: 'HE3111', size: ['56', '17', '145'], main: 'front', context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3111 photographed colorway board' } },
    he3112: { model: 'HE3112', size: ['57', '16', '145'], main: 'front', context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3112 photographed colorway board' } },
    he3113: {
      model: 'HE3113',
      size: ['56', '18', '145'],
      main: 'front',
      colorways: [
        { code: 'C1', name: 'Brown Tortoiseshell' },
        { code: 'C2', name: 'Black Red' },
        { code: 'C3', name: 'Blue Tortoiseshell' },
        { code: 'C4', name: 'Black Brown' }
      ],
      context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3113 photographed colorway board' }
    },
    he3114: { model: 'HE3114', size: ['56', '18', '145'], main: 'front', context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3114 photographed colorway board' } },
    he3115: { model: 'HE3115', size: ['55', '18', '145'], main: 'front', context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3115 photographed colorway board' } },
    he3116: { model: 'HE3116', size: ['55', '18', '145'], main: 'front', context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3116 photographed colorway board' } },
    he3117: { model: 'HE3117', size: ['54', '18', '145'], front: '134', height: '48', main: 'front', context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3117 photographed colorway board' } },
    he3118: { model: 'HE3118', size: ['55', '18', '145'], front: '136', height: '47', main: 'front', context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3118 photographed colorway board' } },
    he3119: {
      model: 'HE3119',
      size: ['54', '17', '145'],
      front: '135',
      height: '47',
      main: 'front',
      colorways: [
        { code: 'C1', name: 'Black' },
        { code: 'C2', name: 'Tortoiseshell' },
        { code: 'C3', name: 'Blue' },
        { code: 'C4', name: 'Pink' }
      ],
      context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3119 photographed colorway board' }
    },
    he3120: { model: 'HE3120', size: ['54', '17', '145'], front: '134', height: '48', main: 'front', context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3120 photographed colorway board' } },
    he3121: { model: 'HE3121', size: ['54', '18', '145'], front: '136', height: '49', main: 'front', context: { file: 'lookbook-stack', label: 'Color board', alt: 'HE3121 photographed colorway board' } }
  };
  const slug = match[1].toLowerCase();
  const product = products[slug];
  if (!product) return;

  const [lens, bridge, temple] = product.size;
  const asset = (file) => `assets/products/${slug}/${slug}-${file}.jpg`;
  const c1 = asset('c1');
  const stage = document.querySelector('.main-image');
  const stageImage = document.querySelector('#main-product-image');
  const thumbs = document.querySelector('.thumbs');
  const colors = document.querySelector('.colors');
  const selected = document.querySelector('#selected-color');
  const imageNote = document.querySelector('.image-note');
  const colorways = product.colorways || ['C1', 'C2', 'C3', 'C4'].map((code) => ({ code, name: `${code} photographed sample` }));
  const context = product.context || { file: 'on-model', label: 'On model', alt: `${product.model} worn by a model` };
  const mainView = product.main ? { file: product.main, label: product.mainLabel || 'Front view' } : null;
  const lensElement = document.querySelector('.zoom-lens');

  document.title = `${product.model} Acetate Optical Frame | CarpeDiem Optic`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${product.model} acetate optical frame by CarpeDiem Optic. Explore four sample colorways, construction details and OEM or private label inquiry options.`);
  document.querySelectorAll('.brand-name').forEach((element) => { element.textContent = 'CarpeDiem Optic'; });
  document.querySelectorAll('footer').forEach((element) => { element.innerHTML = element.innerHTML.replaceAll('Carpe Diem Optic', 'CarpeDiem Optic'); });
  document.head.insertAdjacentHTML('beforeend', `<style>.main-image:before{content:'${product.model}'}.main-image:after{content:'C1 / VIEW'}.main-image img{transform:none!important}</style>`);
  document.querySelector('.crumbs .wrap').innerHTML = `<a href="index.html">Home</a><span>/</span><a href="products.html">Optical Frames</a><span>/</span>${product.model}`;
  document.querySelector('.product-info .eyebrow').textContent = 'Acetate optical frame / sample catalog';
  document.querySelector('.product-info h1').textContent = product.model;
  document.querySelector('.model-code').firstChild.textContent = `${product.model} / C1`;
  document.querySelector('.intro').textContent = 'An acetate optical frame sample with a defined profile, layered material character and a considered temple construction. Review the photographed colorways as a starting point for OEM, ODM or private label development.';
  document.querySelector('.status').textContent = 'Available for project discussion';
  document.querySelector('.buyer-summary').innerHTML = '<div class="buyer-summary-item"><strong>Acetate</strong><span>Frame material</span></div><div class="buyer-summary-item"><strong>4</strong><span>Colorways shown</span></div><div class="buyer-summary-item"><strong>OEM</strong><span>Project support</span></div>';
  document.querySelector('.contact-note').innerHTML = '<span>+</span><span><b>Need a variation?</b> Ask about colour direction, logo, packaging, quantities or a related optical frame route.</span>';

  thumbs.innerHTML = (mainView ? `<button class="thumb active" type="button" data-image="${asset(mainView.file)}" data-color="${mainView.label}" data-label="${mainView.label}"><img src="${asset(mainView.file)}" alt="${product.model} front view acetate optical frame"></button>` : '') + colorways.map((color, index) => `<button class="thumb${!mainView && index === 0 ? ' active' : ''}" type="button" data-image="${asset(color.code.toLowerCase())}" data-color="${color.code}" data-label="${color.name}"><img src="${asset(color.code.toLowerCase())}" alt="${product.model} ${color.code} ${color.name} acetate optical frame"></button>`).join('') + `<button class="thumb" type="button" data-image="${asset('c1-detail')}" data-color="C1 detail" data-label="Construction detail"><img src="${asset('c1-detail')}" alt="${product.model} temple construction detail"></button><button class="thumb" type="button" data-image="${asset(context.file)}" data-color="${context.label}" data-label="${context.label}"><img src="${asset(context.file)}" alt="${context.alt}"></button>`;
  colors.innerHTML = colorways.map((color, index) => `<button class="color${index === 0 ? ' active' : ''}" type="button" data-image="${asset(color.code.toLowerCase())}" data-color="${color.code}" data-label="${color.name}"><img src="${asset(color.code.toLowerCase())}" alt="Select ${product.model} ${color.code}"></button>`).join('');
  if (mainView) {
    document.querySelector('.field-label').firstChild.textContent = 'View ';
    document.querySelectorAll('.color').forEach((item) => item.classList.remove('active'));
  }

  function selectImage(choice) {
    const isModel = choice.dataset.color === 'On model';
    stageImage.src = choice.dataset.image;
    stageImage.alt = `${product.model} ${choice.dataset.label || choice.dataset.color} acetate optical frame`;
    selected.textContent = choice.dataset.color;
    imageNote.textContent = isModel ? 'ON MODEL' : 'PRODUCT SAMPLE';
    stage.classList.toggle('model-view', isModel);
    document.querySelectorAll('.thumb,.color').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll(`[data-color="${choice.dataset.color}"]`).forEach((item) => item.classList.add('active'));
    if (lensElement) lensElement.style.backgroundImage = `url("${stageImage.src}")`;
  }
  document.querySelectorAll('.thumb,.color').forEach((choice) => choice.addEventListener('click', () => selectImage(choice)));
  selectImage(thumbs.querySelector('.thumb'));

  document.querySelector('.technical .technical-intro').textContent = 'The information below identifies the photographed sample supplied for review. Final color, packaging, quantities and production terms are confirmed by project brief before ordering.';
  const additionalMeasurements = product.front ? `<div class="spec"><span class="spec-key">Front width</span><span class="spec-value">${product.front} mm</span></div><div class="spec"><span class="spec-key">Frame height</span><span class="spec-value">${product.height} mm</span></div>` : '';
  document.querySelector('.specs').innerHTML = `<div class="spec"><span class="spec-key">Model</span><span class="spec-value">${product.model}</span></div><div class="spec"><span class="spec-key">Product type</span><span class="spec-value">Acetate optical frame sample</span></div><div class="spec"><span class="spec-key">Material</span><span class="spec-value">Acetate</span></div><div class="spec"><span class="spec-key">Size shown</span><span class="spec-value">${lens} - ${bridge} - ${temple}</span></div>${additionalMeasurements}<div class="spec"><span class="spec-key">Colorways shown</span><span class="spec-value">${colorways.map((color) => color.code).join(', ')}</span></div><div class="spec"><span class="spec-key">Project options</span><span class="spec-value">OEM, ODM, private label, packaging support</span></div><p class="notice">Product specifications shown here are for preliminary B2B discussion and subject to final confirmation.</p>`;

  document.querySelector('.lookbook')?.remove();
  const frameContext = document.createElement('section');
  frameContext.className = 'lookbook';
  frameContext.setAttribute('aria-label', `${product.model} frame in context`);
  frameContext.innerHTML = `<div class="wrap"><div class="lookbook-head"><div><span class="eyebrow">FRAME IN CONTEXT</span><h2>Material character and construction.</h2></div><p>Review the photographed sample as a complete frame system: the acetate front, temple construction, hinge detailing and available color directions.</p></div><div class="lookbook-grid"><figure class="lookbook-card lookbook-still"><img src="${asset('lookbook-still')}" alt="${product.model} acetate optical frame front view"><figcaption class="lookbook-label">C1 / front view</figcaption></figure><figure class="lookbook-card lookbook-portrait"><img src="${asset(context.file)}" alt="${context.alt}"><figcaption class="lookbook-label">${context.label}</figcaption></figure><figure class="lookbook-card lookbook-portrait"><img src="${asset('lookbook-temple')}" alt="${product.model} acetate temple detail"><figcaption class="lookbook-label">Temple detail</figcaption></figure><figure class="lookbook-card lookbook-portrait"><img src="${asset('lookbook-hinge')}" alt="${product.model} hinge construction detail"><figcaption class="lookbook-label">Hinge detail</figcaption></figure><div class="lookbook-spec"><div class="lookbook-spec-title">Sample dimensions<small>Photographed product specification</small></div><div class="lookbook-measure"><strong>${lens} mm</strong><span>Lens width</span></div><div class="lookbook-measure"><strong>${bridge} mm</strong><span>Bridge</span></div><div class="lookbook-measure"><strong>${temple} mm</strong><span>Temple</span></div></div></div></div>`;
  document.querySelector('.technical').after(frameContext);

  document.querySelector('.services-head .eyebrow').textContent = 'Project support';
  document.querySelector('.services h2').textContent = 'More than a product sample.';
  document.querySelector('.services-head p').textContent = 'Move from a selected optical frame direction into a clear sampling, branding and delivery conversation.';
  const serviceCopy = [
    ['OEM / Private Label', 'Discuss colour direction, logo placement and product presentation around this acetate optical style.'],
    ['Sample Review', 'Confirm the material, fit direction and project requirements before production planning.'],
    ['Packaging & Delivery', 'Plan cases, labeling, cartons and international delivery requirements before an order is confirmed.']
  ];
  document.querySelectorAll('.service').forEach((service, index) => {
    service.querySelector('h3').textContent = serviceCopy[index][0];
    service.querySelector('p').textContent = serviceCopy[index][1];
  });

  document.querySelector('.inquiry .eyebrow').textContent = `${product.model} PROJECT INQUIRY`;
  document.querySelector('.inquiry h2').textContent = 'Ready to discuss this model?';
  document.querySelector('.inquiry p').textContent = 'Send your target quantity, market, preferred colorway, branding and required delivery date. We will help identify the right next step for sampling or production.';
  document.querySelectorAll('.actions .quote,.inquiry-card .quote').forEach((link) => link.href = `mailto:info@carpediemoptic.com?subject=Inquiry%20-%20${product.model}`);
  document.querySelector('.actions .quote').textContent = 'Request this model';
  document.querySelector('.actions .outline').href = `https://wa.me/8615869665316?text=Hello%2C%20I%20am%20interested%20in%20${product.model}.`;

  if (lensElement) {
    stage.addEventListener('mouseenter', () => {
      if (!window.matchMedia('(max-width: 600px)').matches) stage.classList.add('zooming');
    });
    stage.addEventListener('mouseleave', () => stage.classList.remove('zooming'));
    stage.addEventListener('mousemove', (event) => {
      if (window.matchMedia('(max-width: 600px)').matches) return;
      const rect = stage.getBoundingClientRect();
      const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
      const y = Math.max(0, Math.min(event.clientY - rect.top, rect.height));
      const lensSize = lensElement.offsetWidth || 166;
      lensElement.style.left = `${Math.max(0, Math.min(x - lensSize / 2, rect.width - lensSize))}px`;
      lensElement.style.top = `${Math.max(0, Math.min(y - lensSize / 2, rect.height - lensSize))}px`;
      lensElement.style.backgroundImage = `url("${stageImage.src}")`;
      lensElement.style.backgroundSize = `${rect.width * 2}px ${rect.height * 2}px`;
      lensElement.style.backgroundPosition = `${-x * 2 + lensSize / 2}px ${-y * 2 + lensSize / 2}px`;
    });
  }

  const backTop = document.querySelector('.back-top');
  window.addEventListener('scroll', () => backTop?.classList.toggle('visible', window.scrollY > 360));
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const whatsapp = document.querySelector('.whatsapp');
  if (whatsapp) whatsapp.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true" width="27" height="27" fill="currentColor"><path d="M16.02 3.5a12.3 12.3 0 0 0-10.6 18.56L4 29l7.12-1.87A12.31 12.31 0 1 0 16.02 3.5Zm0 22.4a10.03 10.03 0 0 1-5.12-1.41l-.37-.22-4.23 1.11 1.13-4.12-.24-.39a10.04 10.04 0 1 1 8.83 5.03Zm5.5-7.52c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.1 4.52.71.31 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>';
})();
