(() => {
  const match = location.pathname.match(/product-(bcm\d+)\.html$/i);
  if (!match) return;

  const products = {
    bcm301: { model: 'BCM301', size: ['55', '18', '142'], hasOnModel: true },
    bcm302: { model: 'BCM302', size: ['51', '19', '142'], hasOnModel: true },
    bcm303: { model: 'BCM303', size: ['53', '18', '142'], hasOnModel: true },
    bcm304: { model: 'BCM304', size: ['54', '17', '142'], hasOnModel: true },
    bcm305: { model: 'BCM305', size: ['54', '16', '145'], hasOnModel: false },
    bcm306: { model: 'BCM306', size: ['54', '16', '145'], hasOnModel: false },
    bcm307: { model: 'BCM307', size: ['55', '18', '145'], hasOnModel: false },
    bcm308: { model: 'BCM308', size: ['56', '15', '145'], hasOnModel: false }
  };
  const slug = match[1].toLowerCase();
  const product = products[slug];
  if (!product) return;

  const [lens, bridge, temple] = product.size;
  const asset = (file) => `assets/products/${slug}/${slug}-${file}.jpg`;
  const stage = document.querySelector('.main-image');
  const stageImage = document.querySelector('#main-product-image');
  const thumbs = document.querySelector('.thumbs');
  const colors = document.querySelector('.colors');
  const selected = document.querySelector('#selected-color');
  const imageNote = document.querySelector('.image-note');
  const lensElement = document.querySelector('.zoom-lens');
  const colorways = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'];

  document.title = `${product.model} Magnetic Clip-On Optical Frame | CarpeDiem Optic`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${product.model} magnetic clip-on optical frame by CarpeDiem Optic. Review six photographed assembled colourways, the optical base and removable sun clip for B2B development.`);
  document.querySelectorAll('.brand-name').forEach((element) => { element.textContent = 'CarpeDiem Optic'; });
  document.querySelectorAll('footer').forEach((element) => { element.innerHTML = element.innerHTML.replaceAll('Carpe Diem Optic', 'CarpeDiem Optic'); });
  document.head.insertAdjacentHTML('beforeend', `<style>.main-image:before{content:'${product.model}'}.main-image:after{content:'C1 / VIEW'}.main-image img{transform:none!important}.component-preview{position:absolute;top:58px;z-index:3;width:44%;padding:9px 9px 7px;background:rgba(255,253,250,.96);border:1px solid var(--gold);box-shadow:5px 5px 0 rgba(188,127,34,.18);pointer-events:none}.component-preview img{display:block;width:100%;height:auto;max-height:none;object-fit:contain;position:static;z-index:auto}.component-preview span{display:block;margin-top:4px;color:var(--ink);font-size:7px;font-weight:700;letter-spacing:.09em;text-align:center;text-transform:uppercase}.base-preview{left:18px}.clip-preview{right:18px}@media(max-width:600px){body{overflow-x:hidden}.nav .quote{display:none}.product-grid,.gallery,.main-image{width:100%;max-width:100%;min-width:0}.product-info{min-width:0}.product-info .eyebrow{line-height:1.45;overflow-wrap:anywhere}.intro{overflow-wrap:anywhere}.thumbs{width:100%;max-width:100%;grid-template-columns:repeat(4,minmax(0,1fr))}.thumb{min-width:0}.component-preview{box-sizing:border-box;top:48px;width:48%;padding:6px}.component-preview span{font-size:6px}.base-preview{left:12px}.clip-preview{right:12px}}</style>`);
  document.querySelector('.crumbs .wrap').innerHTML = `<a href="index.html">Home</a><span>/</span><a href="products.html?category=clipon">Magnetic Clip-On</a><span>/</span>${product.model}`;
  document.querySelector('.product-info .eyebrow').textContent = 'Magnetic clip-on optical frame / sample catalog';
  document.querySelector('.product-info h1').textContent = product.model;
  document.querySelector('.model-code').firstChild.textContent = `${product.model} / C1`;
  document.querySelector('.intro').textContent = 'A two-in-one frame sample with an optical base and removable magnetic sun clip. Review the six photographed assembled colour directions, plus the separate base and clip components, as a starting point for OEM, ODM or private label development.';
  document.querySelector('.status').textContent = 'Available for project discussion';
  document.querySelector('.buyer-summary').innerHTML = '<div class="buyer-summary-item"><strong>2-in-1</strong><span>Base frame + sun clip</span></div><div class="buyer-summary-item"><strong>6</strong><span>Colourways shown</span></div><div class="buyer-summary-item"><strong>OEM</strong><span>Project support</span></div>';
  document.querySelector('.contact-note').innerHTML = '<span>+</span><span><b>Need a variation?</b> Ask about colour direction, clip-on lens route, logo, packaging or quantities.</span>';

  const choice = (file, color, label, alt, active = false) => `<button class="thumb${active ? ' active' : ''}" type="button" data-image="${asset(file)}" data-color="${color}" data-label="${label}"><img src="${asset(file)}" alt="${alt}"></button>`;
  thumbs.innerHTML = colorways.map((code, index) => choice(`c${index + 1}`, code, `${code} frame + magnetic sun clip`, `${product.model} ${code} optical frame with magnetic sun clip attached`, index === 0)).join('') + choice('c1-detail', 'Optical base', 'Optical base frame', `${product.model} C1 optical base frame`) + choice('c1-profile', 'Magnetic sun clip', 'Separate magnetic sun clip', `${product.model} C1 separate magnetic sun clip`) + (product.hasOnModel ? choice('on-model', 'On model', 'On-model fit reference', `${product.model} optical base frame on-model fit reference`) : '');
  colors.innerHTML = colorways.map((code, index) => `<button class="color${index === 0 ? ' active' : ''}" type="button" data-image="${asset(`c${index + 1}`)}" data-color="${code}" data-label="${code} frame + magnetic sun clip"><img src="${asset(`c${index + 1}`)}" alt="Select ${product.model} ${code} with magnetic sun clip"></button>`).join('');
  document.querySelector('.field-label').firstChild.textContent = 'View ';
  stage.insertAdjacentHTML('beforeend', `<figure class="component-preview base-preview"><img src="${asset('c1-base')}" alt="${product.model} C1 optical base frame"><span>Optical base frame</span></figure><figure class="component-preview clip-preview"><img src="${asset('c1-clip')}" alt="${product.model} C1 removable magnetic sun clip"><span>Removable magnetic sun clip</span></figure>`);
  const basePreviewImage = stage.querySelector('.base-preview img');
  const clipPreviewImage = stage.querySelector('.clip-preview img');

  function selectImage(item) {
    stageImage.src = item.dataset.image;
    stageImage.alt = `${product.model} ${item.dataset.label || item.dataset.color}`;
    selected.textContent = item.dataset.color;
    imageNote.textContent = item.dataset.color === 'On model' ? 'ON-MODEL REFERENCE' : item.dataset.color === 'Optical base' || item.dataset.color === 'Magnetic sun clip' ? 'PRODUCT COMPONENT' : 'FRAME + SUN CLIP';
    const colorIndex = item.dataset.color.match(/^C(\d)$/)?.[1] || '1';
    basePreviewImage.src = asset(`c${colorIndex}-base`);
    basePreviewImage.alt = `${product.model} C${colorIndex} optical base frame`;
    clipPreviewImage.src = asset(`c${colorIndex}-clip`);
    clipPreviewImage.alt = `${product.model} C${colorIndex} removable magnetic sun clip`;
    document.querySelectorAll('.thumb,.color').forEach((control) => control.classList.remove('active'));
    document.querySelectorAll(`[data-color="${item.dataset.color}"]`).forEach((control) => control.classList.add('active'));
    if (lensElement) lensElement.style.backgroundImage = `url("${stageImage.src}")`;
  }
  document.querySelectorAll('.thumb,.color').forEach((item) => item.addEventListener('click', () => selectImage(item)));
  selectImage(thumbs.querySelector('.thumb'));

  document.querySelector('.technical .technical-intro').textContent = 'The information below identifies the photographed two-in-one sample. Frame material, clip lens specification, quantities and production terms are confirmed by project brief before ordering.';
  document.querySelector('.specs').innerHTML = `<div class="spec"><span class="spec-key">Model</span><span class="spec-value">${product.model}</span></div><div class="spec"><span class="spec-key">Product type</span><span class="spec-value">Magnetic clip-on optical frame sample</span></div><div class="spec"><span class="spec-key">Structure</span><span class="spec-value">Optical base frame with removable magnetic sun clip</span></div><div class="spec"><span class="spec-key">Size shown</span><span class="spec-value">${lens} - ${bridge} - ${temple}</span></div><div class="spec"><span class="spec-key">Colourways shown</span><span class="spec-value">${colorways.join(', ')}</span></div><div class="spec"><span class="spec-key">Project options</span><span class="spec-value">OEM, ODM, private label, packaging support</span></div><p class="notice">Product specifications shown here are for preliminary B2B discussion and subject to final confirmation.</p>`;

  const frameContext = document.createElement('section');
  frameContext.className = 'lookbook';
  frameContext.setAttribute('aria-label', `${product.model} frame details`);
  const fourthContextCard = product.hasOnModel
    ? `<figure class="lookbook-card lookbook-portrait"><img src="${asset('on-model')}" alt="${product.model} optical base frame on-model fit reference"><figcaption class="lookbook-label">On-model fit reference</figcaption></figure>`
    : `<figure class="lookbook-card lookbook-portrait"><img src="${asset('c1')}" alt="${product.model} C1 optical frame with magnetic sun clip attached"><figcaption class="lookbook-label">C1 / assembled view</figcaption></figure>`;
  const contextDescription = product.hasOnModel
    ? 'Review the base frame, the separate magnetic sun clip, an assembled colour direction and an on-model fit reference before discussing a two-in-one product program.'
    : 'Review the optical base, separate magnetic sun clip and assembled colour directions before discussing a two-in-one product program.';
  frameContext.innerHTML = `<div class="wrap"><div class="lookbook-head"><div><span class="eyebrow">FRAME IN CONTEXT</span><h2>Optical base, magnetic clip and assembled view.</h2></div><p>${contextDescription}</p></div><div class="lookbook-grid"><figure class="lookbook-card lookbook-still"><img src="${asset('c1-detail')}" alt="${product.model} C1 optical base frame"><figcaption class="lookbook-label">C1 / optical base</figcaption></figure><figure class="lookbook-card lookbook-portrait"><img src="${asset('c1-profile')}" alt="${product.model} C1 separate magnetic sun clip"><figcaption class="lookbook-label">C1 / magnetic sun clip</figcaption></figure><figure class="lookbook-card lookbook-portrait"><img src="${asset('c2')}" alt="${product.model} C2 optical frame with magnetic sun clip"><figcaption class="lookbook-label">C2 / assembled view</figcaption></figure>${fourthContextCard}<div class="lookbook-spec"><div class="lookbook-spec-title">Sample dimensions<small>Photographed product specification</small></div><div class="lookbook-measure"><strong>${lens} mm</strong><span>Lens width</span></div><div class="lookbook-measure"><strong>${bridge} mm</strong><span>Bridge</span></div><div class="lookbook-measure"><strong>${temple} mm</strong><span>Temple</span></div></div></div></div>`;
  document.querySelector('.technical').after(frameContext);

  document.querySelector('.services-head p').textContent = 'Move from a selected optical base and clip-on direction into a clear sampling, branding and delivery conversation.';
  const serviceCopy = [
    ['OEM / Private Label', 'Discuss colour direction, clip-on lens route, logo placement and product presentation.'],
    ['Sample Review', 'Confirm the optical base, magnetic connection and project requirements before production planning.'],
    ['Packaging & Delivery', 'Plan cases, labeling, cartons and international delivery requirements before an order is confirmed.']
  ];
  document.querySelectorAll('.service').forEach((service, index) => { service.querySelector('h3').textContent = serviceCopy[index][0]; service.querySelector('p').textContent = serviceCopy[index][1]; });

  document.querySelector('.inquiry .eyebrow').textContent = `${product.model} PROJECT INQUIRY`;
  document.querySelector('.inquiry h2').textContent = 'Ready to discuss this magnetic clip-on route?';
  document.querySelector('.inquiry p').textContent = 'Send your target quantity, preferred colourway, clip lens direction, branding and delivery date. We will help identify the right next step for sampling or production.';
  document.querySelectorAll('.actions .quote,.inquiry-card .quote').forEach((link) => link.href = `mailto:info@carpediemoptic.com?subject=Inquiry%20-%20${product.model}`);
  document.querySelector('.actions .quote').textContent = 'Request this model';
  document.querySelector('.actions .outline').href = `https://wa.me/8615869665316?text=Hello%2C%20I%20am%20interested%20in%20${product.model}%20magnetic%20clip-on%20frame.`;

  if (lensElement) {
    stage.addEventListener('pointerenter', (event) => { if (event.pointerType !== 'touch') stage.classList.add('zooming'); });
    stage.addEventListener('pointerleave', () => stage.classList.remove('zooming'));
    stage.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'touch') return;
      const bounds = stage.getBoundingClientRect();
      const lensSize = lensElement.offsetWidth || 166;
      const x = Math.max(lensSize / 2, Math.min(event.clientX - bounds.left, bounds.width - lensSize / 2));
      const y = Math.max(lensSize / 2, Math.min(event.clientY - bounds.top, bounds.height - lensSize / 2));
      lensElement.style.left = `${x - lensSize / 2}px`;
      lensElement.style.top = `${y - lensSize / 2}px`;
      lensElement.style.backgroundSize = `${bounds.width * 2.2}px auto`;
      lensElement.style.backgroundPosition = `${(x / bounds.width) * 100}% ${(y / bounds.height) * 100}%`;
    });
  }
  const backTop = document.querySelector('.back-top');
  window.addEventListener('scroll', () => backTop?.classList.toggle('visible', window.scrollY > 350), { passive: true });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const whatsappIcon = '<svg viewBox="0 0 32 32" aria-hidden="true" width="27" height="27" fill="currentColor"><path d="M16 3.5A12.3 12.3 0 0 0 5.4 22L4 29l7.1-1.9A12.3 12.3 0 1 0 16 3.5Zm0 22.4a10 10 0 0 1-5.1-1.4l-.4-.2-4.2 1.1 1.1-4.1-.2-.4A10 10 0 1 1 16 25.9Zm5.5-7.5c-.3-.2-1.8-.9-2-.9-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.4.2-.7.1-1.4-.7-2.9-2-3.8-3.5-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.4.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.3.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"/></svg>';
  document.querySelectorAll('.whatsapp').forEach((link) => { link.innerHTML = whatsappIcon; });
})();
