(() => {
  const model = document.querySelector('.product-info h1')?.textContent.trim();
  if (!model) return;
  let color = 'C1';
  const stage = document.querySelector('.main-image');
  const sync = () => {
    stage.style.setProperty('--current-view', JSON.stringify(`${color} / VIEW`));
    const code = document.querySelector('.model-code');
    if (code?.firstChild) code.firstChild.textContent = `${model} / ${color} `;
    const url = `https://www.carpediemoptic.com/product-${model.toLowerCase()}.html`;
    const body = `Hello, I am interested in ${model}, colour ${color}.\n${url}\n\nQuantity:\nDestination market:\nBranding requirements:\nRequired delivery date:\n\nPlease confirm sample availability, MOQ and lead time.`;
    document.querySelectorAll('a[href*="wa.me"]').forEach(a => a.href = `https://wa.me/8615869665316?text=${encodeURIComponent(body)}`);
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => a.href = `mailto:info@carpediemoptic.com?subject=${encodeURIComponent(`Inquiry - ${model} / ${color}`)}&body=${encodeURIComponent(body)}`);
    document.querySelectorAll('.color').forEach(b => { const active = b.dataset.color === color; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active)); });
  };
  document.querySelectorAll('.thumb,.color').forEach(b => b.addEventListener('click', () => {
    if (/^C\d+$/.test(b.dataset.color || '')) color = b.dataset.color;
    sync();
    for (const [selector, suffix] of [['.base-preview img','base'],['.clip-preview img','clip']]) {
      const img = document.querySelector(selector);
      if (img) img.src = `assets/products/${model.toLowerCase()}/${model.toLowerCase()}-${color.toLowerCase()}-${suffix}.webp`;
    }
  }));
  if (!document.querySelector('#buyer-tools-style')) {
    const css = document.createElement('style'); css.id = 'buyer-tools-style';
    css.textContent = '.main-image:after{content:var(--current-view)!important}.buyer-note{margin-top:16px;color:var(--muted);font-size:12px;line-height:1.6}.product-lightbox{max-width:95vw;max-height:95vh;padding:12px;border:0}.product-lightbox::backdrop{background:#000b}.product-lightbox img{max-width:85vw;max-height:80vh;object-fit:contain}.product-lightbox button{display:block;margin-left:auto;padding:10px}.main-image>img{cursor:zoom-in}';
    document.head.append(css);
  }
  document.querySelectorAll('.lookbook img').forEach(img => {img.loading='lazy'; img.decoding='async';});
  const main = document.querySelector('#main-product-image');
  main.loading='eager'; main.setAttribute('fetchpriority','high');
  main.tabIndex=0; main.setAttribute('role','button'); main.setAttribute('aria-label',`Enlarge ${model} image`);
  function enlarge() {
    const dialog=document.createElement('dialog'); dialog.className='product-lightbox';
    const close=document.createElement('button'); close.textContent='Close'; close.type='button';
    const img=document.createElement('img'); img.src=main.src; img.alt=main.alt;
    dialog.append(close,img); document.body.append(dialog);
    close.onclick=()=>dialog.close(); dialog.addEventListener('close',()=>dialog.remove()); dialog.showModal();
  }
  main.addEventListener('click',enlarge);
  main.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();enlarge();}});
  if (!document.querySelector('.buyer-note')) {
    const note=document.createElement('p'); note.className='buyer-note';
    note.textContent='For a quotation, specify quantity, colour allocation, destination and branding. Sample availability, MOQ per style/colour, production timing and included packaging are confirmed with your quotation.';
    document.querySelector('.actions').after(note);
  }
  document.querySelectorAll('.lookbook-label').forEach(label=>{if(/model|lifestyle|fit reference/i.test(label.textContent)) label.textContent='Styling reference';});
  if (document.querySelector('img[src*="on-model-accurate"]')) {
    const p=document.querySelector('.lookbook-head p');
    if(p) p.textContent='AI-generated styling reference. Refer to the real product photographs and confirmed measurements for colour, construction and sizing. The styling image does not change with your selected colourway.';
  }
  sync();
})();
