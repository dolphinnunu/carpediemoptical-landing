(() => {
  const match = location.pathname.match(/product-((?:els|em)\d+)\.html$/i);
  if (!match) return;

  const products = {
    els8017: { model: 'ELS8017', size: ['56', '17', '145'] },
    els8037: { model: 'ELS8037', size: ['54', '19', '145'], front: '144' },
    els8038: { model: 'ELS8038', size: ['54', '18', '145'], front: '132', height: '54' },
    els8039: { model: 'ELS8039', size: ['51', '20', '145'], front: '144', height: '53' },
    els8040: { model: 'ELS8040', size: ['53', '18', '145'], front: '130', height: '53' },
    els8041: { model: 'ELS8041', size: ['55', '18', '145'], front: '129', height: '55' },
    els8043: { model: 'ELS8043', size: ['53', '19', '145'], front: '128', height: '53' },
    els8044: { model: 'ELS8044', size: ['54', '20', '145'], front: '140', height: '55' },
    els8050: { model: 'ELS8050', size: ['55', '18', '145'], front: '132', height: '49' },
    els8051: { model: 'ELS8051', size: ['54', '20', '145'], front: '131', height: '55' },
    els8055: { model: 'ELS8055', size: ['53', '18', '145'], front: '129', height: '48' },
    els8056: { model: 'ELS8056', size: ['55', '19', '145'], front: '134', height: '50' },
    els8057: { model: 'ELS8057', size: ['56', '18', '145'], front: '132', height: '54' },
    els8010: { model: 'ELS8010', size: ['55', '19', '140'], colors: 4, onModel: true },
    els8012: { model: 'ELS8012', size: ['53', '18', '140'], colors: 4, onModel: true },
    els8016: { model: 'ELS8016', size: ['56', '18', '145'], colors: 4, onModel: true },
    els8042: { model: 'ELS8042', size: ['51', '20', '145'], front: '128', height: '45', colors: 3, onModel: true },
    els8045: { model: 'ELS8045', size: ['56', '18', '145'], front: '132', height: '50', colors: 3, onModel: true },
    els8046: { model: 'ELS8046', size: ['53', '19', '145'], front: '129', height: '54', colors: 3, onModel: true },
    els8047: { model: 'ELS8047', size: ['52', '21', '145'], front: '146', height: '42', colors: 3, onModel: true },
    els8048: { model: 'ELS8048', size: ['54', '18', '140'], front: '137', height: '53', colors: 3, onModel: true },
    els8049: { model: 'ELS8049', size: ['56', '18', '145'], front: '133', height: '49', colors: 4, onModel: true },
    els8053: { model: 'ELS8053', size: ['54', '20', '145'], front: '132', height: '52', colors: 3, onModel: true },
    els8054: { model: 'ELS8054', size: ['53', '18', '145'], front: '129', height: '40', colors: 3, onModel: true },
    els8058: { model: 'ELS8058', size: ['54', '20', '145'], front: '134', height: '45', colors: 4, onModel: true },
    els8059: { model: 'ELS8059', size: ['54', '20', '145'], front: '134', height: '49', colors: 4, onModel: true },
    els8060: { model: 'ELS8060', size: ['52', '20', '145'], front: '130', height: '47', colors: 4, onModel: true },
    els8061: { model: 'ELS8061', size: ['51', '21', '145'], front: '127', height: '46', colors: 3, onModel: true },
    em1206: { model: 'EM1206', size: ['53', '19', '145'], front: '143', height: '53', colors: 3, onModel: true },
    em1207: { model: 'EM1207', size: ['53', '19', '145'], front: '142', height: '52', colors: 3, onModel: true }
  };
  const slug = match[1].toLowerCase();
  const product = products[slug];
  if (!product) return;

  const asset = (file) => `assets/products/${slug}/${slug}-${file}.jpg`;
  const stage = document.querySelector('.main-image');
  const stageImage = document.querySelector('#main-product-image');
  const thumbs = document.querySelector('.thumbs');
  const colors = document.querySelector('.colors');
  const selected = document.querySelector('#selected-color');
  const imageNote = document.querySelector('.image-note');
  const [lens, bridge, temple] = product.size;
  const colorsShown = Array.from({ length: product.colors || 4 }, (_, index) => `C${index + 1}`);
  const onModelThumb = product.onModel ? `<button class="thumb" type="button" data-image="${asset('on-model')}" data-color="On-model view" data-label="on-model fit"><img src="${asset('on-model')}" alt="${product.model} sunglasses shown on a model"></button>` : '';

  document.title = `${product.model} Acetate Sunglasses | CarpeDiem Optic`;
  const metaColourCopy = product.onModel ? `${colorsShown.length} photographed colourways` : 'four photographed colourways';
  document.querySelector('meta[name="description"]')?.setAttribute('content', `${product.model} acetate sunglasses by CarpeDiem Optic. Explore ${metaColourCopy}, construction details and OEM or private label inquiry options.`);
  document.querySelectorAll('.brand-name').forEach((element) => { element.textContent = 'CarpeDiem Optic'; });
  document.querySelectorAll('footer').forEach((element) => { element.innerHTML = element.innerHTML.replaceAll('Carpe Diem Optic', 'CarpeDiem Optic'); });
  document.head.insertAdjacentHTML('beforeend', `<style>.main-image:before{content:'${product.model}'}.main-image:after{content:'C1 / SUN'}.main-image img{transform:none!important}.main-image.model-view img{width:90%;height:90%;object-fit:cover}</style>`);
  document.querySelector('.crumbs .wrap').innerHTML = `<a href="index.html">Home</a><span>/</span><a href="products.html?category=sun">Sun Collection</a><span>/</span>${product.model}`;
  document.querySelector('.product-info .eyebrow').textContent = 'Acetate sunglasses / sample catalog';
  document.querySelector('.product-info h1').textContent = product.model;
  document.querySelector('.model-code').firstChild.textContent = `${product.model} / C1`;
  document.querySelector('.intro').textContent = `An acetate sunglasses sample with a defined fashion profile and ${colorsShown.length} photographed colour directions. Review the frame, lens direction and construction details as a starting point for OEM, ODM or private label development.`;
  document.querySelector('.status').textContent = 'Available for project discussion';
  document.querySelector('.buyer-summary').innerHTML = `<div class="buyer-summary-item"><strong>Acetate</strong><span>Frame material</span></div><div class="buyer-summary-item"><strong>${colorsShown.length}</strong><span>Colourways shown</span></div><div class="buyer-summary-item"><strong>OEM</strong><span>Project support</span></div>`;

  thumbs.innerHTML = `<button class="thumb active" type="button" data-image="${asset('front')}" data-color="Front view" data-label="Front view"><img src="${asset('front')}" alt="${product.model} acetate sunglasses front view"></button>` + colorsShown.map((code) => `<button class="thumb" type="button" data-image="${asset(code.toLowerCase())}" data-color="${code}" data-label="${code} photographed colourway"><img src="${asset(code.toLowerCase())}" alt="${product.model} ${code} acetate sunglasses"></button>`).join('') + `<button class="thumb" type="button" data-image="${asset('c1-detail')}" data-color="Construction detail" data-label="Construction detail"><img src="${asset('c1-detail')}" alt="${product.model} construction detail"></button>${onModelThumb}<button class="thumb" type="button" data-image="${asset('lookbook-stack')}" data-color="Colour board" data-label="Photographed colour board"><img src="${asset('lookbook-stack')}" alt="${product.model} photographed colour board"></button>`;
  colors.innerHTML = colorsShown.map((code) => `<button class="color" type="button" data-image="${asset(code.toLowerCase())}" data-color="${code}" data-label="${code} photographed colourway"><img src="${asset(code.toLowerCase())}" alt="Select ${product.model} ${code}"></button>`).join('');

  const zoomLens = document.querySelector('.zoom-lens');
  function selectImage(choice) {
    stageImage.src = choice.dataset.image;
    stageImage.alt = `${product.model} ${choice.dataset.label || choice.dataset.color} acetate sunglasses`;
    selected.textContent = choice.dataset.color;
    stage.classList.toggle('model-view', choice.dataset.color === 'On-model view');
    imageNote.textContent = choice.dataset.color === 'Colour board' ? 'COLOUR RANGE' : choice.dataset.color === 'On-model view' ? 'FIT REFERENCE' : 'PRODUCT SAMPLE';
    document.querySelectorAll('.thumb,.color').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll(`[data-color="${choice.dataset.color}"]`).forEach((item) => item.classList.add('active'));
    if (zoomLens) zoomLens.style.backgroundImage = `url("${stageImage.src}")`;
  }
  document.querySelectorAll('.thumb,.color').forEach((choice) => choice.addEventListener('click', () => selectImage(choice)));
  selectImage(thumbs.querySelector('.thumb'));

  const additionalMeasurements = product.front ? `<div class="spec"><span class="spec-key">Front width</span><span class="spec-value">${product.front} mm</span></div><div class="spec"><span class="spec-key">Frame height</span><span class="spec-value">${product.height} mm</span></div>` : '';
  document.querySelector('.technical .technical-intro').textContent = 'The information below identifies the photographed sunglasses sample. Final lens specification, colour, packaging, quantities and production terms are confirmed by project brief before ordering.';
  document.querySelector('.specs').innerHTML = `<div class="spec"><span class="spec-key">Model</span><span class="spec-value">${product.model}</span></div><div class="spec"><span class="spec-key">Product type</span><span class="spec-value">Acetate sunglasses sample</span></div><div class="spec"><span class="spec-key">Material</span><span class="spec-value">Acetate</span></div><div class="spec"><span class="spec-key">Size shown</span><span class="spec-value">${lens} - ${bridge} - ${temple}</span></div>${additionalMeasurements}<div class="spec"><span class="spec-key">Colourways shown</span><span class="spec-value">${colorsShown.join(', ')}</span></div><div class="spec"><span class="spec-key">Project options</span><span class="spec-value">OEM, ODM, private label, packaging support</span></div><p class="notice">Product specifications shown here are for preliminary B2B discussion and subject to final confirmation.</p>`;

  document.querySelector('.lookbook')?.remove();
  const context = document.createElement('section');
  context.className = 'lookbook';
  const contextLast = product.onModel ? `<figure class="lookbook-card"><img src="${asset('on-model')}" alt="${product.model} sunglasses fit reference"><figcaption class="lookbook-label">Fit reference</figcaption></figure>` : `<figure class="lookbook-card"><img src="${asset('lookbook-hinge')}" alt="${product.model} hinge detail"><figcaption class="lookbook-label">Hinge detail</figcaption></figure>`;
  const contextCopy = product.onModel ? 'Review the photographed sunglasses sample from its front profile to its temple details and fit reference before selecting a colour direction for development.' : 'Review the photographed sunglasses sample from its front profile to its temple and hinge details before selecting a colour direction for development.';
  context.innerHTML = `<div class="wrap"><div class="lookbook-head"><div><span class="eyebrow">FRAME IN CONTEXT</span><h2>Colour, profile and construction.</h2></div><p>${contextCopy}</p></div><div class="lookbook-grid"><figure class="lookbook-card lookbook-still"><img src="${asset('lookbook-still')}" alt="${product.model} sunglasses still life"><figcaption class="lookbook-label">Colour direction</figcaption></figure><figure class="lookbook-card"><img src="${asset('front')}" alt="${product.model} front view"><figcaption class="lookbook-label">Front view</figcaption></figure><figure class="lookbook-card"><img src="${asset('lookbook-temple')}" alt="${product.model} temple detail"><figcaption class="lookbook-label">Temple detail</figcaption></figure>${contextLast}<div class="lookbook-spec"><div class="lookbook-spec-title">Sample dimensions<small>Photographed product specification</small></div><div class="lookbook-measure"><strong>${lens} mm</strong><span>Lens width</span></div><div class="lookbook-measure"><strong>${bridge} mm</strong><span>Bridge</span></div><div class="lookbook-measure"><strong>${temple} mm</strong><span>Temple</span></div></div></div></div>`;
  document.querySelector('.technical').after(context);

  document.querySelector('.inquiry .eyebrow').textContent = `${product.model} PROJECT INQUIRY`;
  document.querySelector('.inquiry h2').textContent = 'Ready to discuss this sunglasses model?';
  document.querySelector('.inquiry p').textContent = 'Send your target quantity, preferred colourway, lens direction, branding and delivery date. We will help identify the right next step for sampling or production.';
  document.querySelectorAll('a[href*="Inquiry%20-%20BCC001"]').forEach((link) => link.href = `mailto:info@carpediemoptic.com?subject=Inquiry%20-%20${product.model}`);
  document.querySelector('.actions .quote').textContent = 'Request this model';
  document.querySelector('.actions .outline').href = `https://wa.me/8615869665316?text=Hello%2C%20I%20am%20interested%20in%20${product.model}%20sunglasses.`;

  stage.addEventListener('pointerenter', (event) => { if (event.pointerType !== 'touch') stage.classList.add('zooming'); });
  stage.addEventListener('pointerleave', () => stage.classList.remove('zooming'));
  stage.addEventListener('pointermove', (event) => {
    if (!zoomLens || event.pointerType === 'touch') return;
    const bounds = stage.getBoundingClientRect();
    const lensSize = zoomLens.offsetWidth;
    const x = Math.max(lensSize / 2, Math.min(event.clientX - bounds.left, bounds.width - lensSize / 2));
    const y = Math.max(lensSize / 2, Math.min(event.clientY - bounds.top, bounds.height - lensSize / 2));
    zoomLens.style.left = `${x - lensSize / 2}px`;
    zoomLens.style.top = `${y - lensSize / 2}px`;
    zoomLens.style.backgroundPosition = `${((event.clientX - bounds.left) / bounds.width) * 100}% ${((event.clientY - bounds.top) / bounds.height) * 100}%`;
    zoomLens.style.backgroundSize = `${bounds.width * 2.2}px auto`;
  });
  const backTop = document.querySelector('.back-top');
  window.addEventListener('scroll', () => backTop?.classList.toggle('visible', window.scrollY > 350), { passive: true });
  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();
