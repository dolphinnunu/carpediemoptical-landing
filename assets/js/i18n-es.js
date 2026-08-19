(() => {
  const translations = new Map(Object.entries({
    'Eyewear manufacturing for international buyers': 'Fabricación de gafas para compradores internacionales',
    'OEM / ODM / Private label': 'OEM / ODM / Marca privada',
    'Response within 1 business day': 'Respuesta en 1 día laborable',
    'Eyewear Manufacturing & Supply': 'Fabricación y suministro de gafas',
    'Company': 'Empresa',
    'Collections': 'Colecciones',
    'Catalog': 'Catálogo',
    'Compliance': 'Certificaciones',
    'Buyer Support': 'Asistencia al comprador',
    'Contact': 'Contacto',
    'Request a quote': 'Solicitar presupuesto',
    'Home': 'Inicio',
    'B2B eyewear manufacturer': 'Fabricante B2B de gafas',
    'Frames built for brands that are going places.': 'Gafas creadas para marcas que quieren llegar más lejos.',
    'We develop, produce and prepare optical frames and sunglasses for brands, distributors and wholesalers who need a reliable partner from sampling to global delivery.': 'Desarrollamos y fabricamos monturas ópticas y gafas de sol para marcas, distribuidores y mayoristas que buscan un socio fiable, desde el muestreo hasta la entrega internacional.',
    'Start your project': 'Inicie su proyecto',
    'View collections': 'Ver colecciones',
    'Optical / Sunglasses / Private Label': 'Óptica / Sol / Marca privada',
    'Optical Frames': 'Monturas ópticas',
    'Magnetic Clip-On': 'Clip solar magnético',
    'Acetate · metal · mixed material': 'Acetato · metal · materiales combinados',
    'Sunglasses': 'Gafas de sol',
    'Private label collections': 'Colecciones de marca privada',
    'From concepts to samples': 'Del concepto a la muestra',
    'Packaging': 'Embalaje',
    'Retail-ready finishing': 'Acabado listo para la venta',
    'Talk To Sales': 'Hablar con ventas',
    'Share your project brief': 'Comparta los datos de su proyecto',
    'PRODUCT CATALOG': 'CATÁLOGO DE PRODUCTOS',
    'Core categories for the next collection.': 'Categorías esenciales para su próxima colección.',
    'Start with the right product direction. Each category can move into OEM development, private label customization, or repeat production planning.': 'Empiece con la categoría adecuada. Cada propuesta puede avanzar hacia un desarrollo OEM, una personalización de marca privada o una producción recurrente.',
    'Discuss a category': 'Consultar una categoría',
    'Acetate Optical': 'Monturas ópticas de acetato',
    'Custom fronts, temples, colors and signature details.': 'Frentes, varillas, colores y detalles distintivos personalizados.',
    'Metal Optical': 'Monturas ópticas de metal',
    'Refined silhouettes for everyday and premium programs.': 'Siluetas depuradas para líneas cotidianas y colecciones prémium.',
    'Sun Collection': 'Colección solar',
    'Private label sunglasses with full brand presentation.': 'Gafas de sol de marca privada con una presentación de marca integral.',
    'Custom Programs': 'Proyectos personalizados',
    'Mixed materials, special finishes and custom development.': 'Materiales combinados, acabados especiales y desarrollo a medida.',
    'THE COMPANY': 'LA EMPRESA',
    'A production partner with a clearer route from brief to delivery.': 'Un socio de producción con un proceso claro, desde el proyecto hasta la entrega.',
    'CarpeDiem Optic works with international eyewear brands, distributors and wholesalers on projects that need a sensible balance of product detail, MOQ, sampling, quality control and delivery planning.': 'CarpeDiem Optic colabora con marcas internacionales de gafas, distribuidores y mayoristas en proyectos que requieren un equilibrio adecuado entre detalle de producto, pedido mínimo, muestreo, control de calidad y planificación de la entrega.',
    'References, feasibility and product development.': 'Referencias, viabilidad y desarrollo de producto.',
    'Private Label': 'Marca privada',
    'Frames, branding and packaging in one plan.': 'Monturas, identidad de marca y embalaje en un único plan.',
    'Sampling': 'Muestreo',
    'Confirm fit, finish and market direction early.': 'Confirme desde el principio el ajuste, el acabado y la orientación comercial.',
    'Export Support': 'Asistencia para exportación',
    'Shipment planning for international orders.': 'Planificación de envíos para pedidos internacionales.',
    'QUALIFICATIONS & COMPLIANCE': 'CERTIFICACIONES Y CUMPLIMIENTO',
    'Documents that support a more confident sourcing decision.': 'Documentación para tomar decisiones de compra con mayor confianza.',
    'Verified company qualifications, product testing and compliance documents will be presented here. Document availability may vary by product, material and destination market.': 'Aquí se presentarán las acreditaciones verificadas de la empresa, los ensayos de producto y la documentación de cumplimiento. La disponibilidad puede variar según el producto, el material y el mercado de destino.',
    'Image pending': 'Imagen pendiente',
    'Company Qualifications': 'Acreditaciones de la empresa',
    'Company and manufacturing credentials relevant to international B2B cooperation.': 'Documentación empresarial y de fabricación relevante para la cooperación B2B internacional.',
    'Issuer and certificate number to be added': 'Emisor y número de certificado pendientes',
    'Quality Management': 'Gestión de calidad',
    'Quality-system documents and production controls applicable to eyewear projects.': 'Documentos del sistema de calidad y controles de producción aplicables a proyectos de gafas.',
    'Product Compliance': 'Cumplimiento del producto',
    'Testing and compliance records organized around product and destination requirements.': 'Ensayos y registros de cumplimiento adaptados al producto y a los requisitos del país de destino.',
    'Standard and report number to be added': 'Norma y número de informe pendientes',
    'Material Testing': 'Ensayos de materiales',
    'Material and component documentation available for relevant development programs.': 'Documentación de materiales y componentes disponible para los programas de desarrollo correspondientes.',
    'Laboratory and report number to be added': 'Laboratorio y número de informe pendientes',
    'Certificate images and verified details are being organized for publication.': 'Estamos organizando las imágenes y los datos verificados de los certificados para su publicación.',
    'VERIFIED DOCUMENT PREVIEWS': 'VISTAS PREVIAS DE DOCUMENTOS VERIFICADOS',
    'Selected compliance documents, presented with a clear product scope.': 'Documentos de conformidad seleccionados, presentados con un alcance de producto claramente definido.',
    'These protected, low-resolution previews relate specifically to the PD-400 pupillary distance meter used as supporting optical equipment. They do not represent blanket certification of every eyewear product.': 'Estas vistas previas protegidas y de baja resolución corresponden específicamente al pupilómetro PD-400 utilizado como equipo óptico auxiliar. No representan una certificación general de todos los productos de gafas.',
    'EU Equipment Conformity': 'Conformidad del equipo para la UE',
    'Certificate of Conformity for the PD-400 under the applicable EU Low Voltage and Electromagnetic Compatibility directives.': 'Certificado de conformidad del PD-400 conforme a las directivas aplicables de baja tensión y compatibilidad electromagnética de la Unión Europea.',
    'Scope: PD-400 pupillary distance meter': 'Alcance: pupilómetro PD-400',
    'CEPROM · Issued 27 May 2024': 'CEPROM · Emitido el 27 de mayo de 2024',
    'Product Identification Annex': 'Anexo de identificación del producto',
    'Supporting technical-file page identifying the PD-400 model, intended optical use and documented product configuration.': 'Página complementaria del expediente técnico que identifica el modelo PD-400, su uso óptico previsto y la configuración documentada del producto.',
    'Scope: Supporting optical equipment': 'Alcance: equipo óptico auxiliar',
    'Certificate 3442-CI-32024 · Annex': 'Certificado 3442-CI-32024 · Anexo',
    'RoHS Equipment Conformity': 'Conformidad RoHS del equipo',
    'Conformity document covering restricted hazardous substances for the PD-400 electrical and electronic equipment.': 'Documento de conformidad sobre sustancias peligrosas restringidas aplicable al equipo eléctrico y electrónico PD-400.',
    'Issued 25 January 2024': 'Emitido el 25 de enero de 2024',
    'For document security, only watermarked low-resolution previews are published. Full documents are reviewed and shared according to the product and destination market.': 'Por seguridad documental, solo se publican vistas previas de baja resolución con marca de agua. Los documentos completos se revisan y comparten según el producto y el mercado de destino.',
    'Request project-specific documentation': 'Solicitar documentación específica del proyecto',
    'BUYER SUPPORT': 'ASISTENCIA AL COMPRADOR',
    'The details behind a confident purchase order.': 'Los detalles que respaldan una orden de compra segura.',
    'A strong B2B project needs more than a product catalogue. It needs decisions, documentation and checkpoints at the right time.': 'Un proyecto B2B sólido requiere más que un catálogo: necesita decisiones, documentación y controles en el momento adecuado.',
    'Sampling & Revisions': 'Muestreo y revisiones',
    'Bring a concept into a reviewable sample before committing to volume production.': 'Convierta su concepto en una muestra evaluable antes de comprometerse con la producción en serie.',
    'Quality & Packaging': 'Calidad y embalaje',
    'Plan inspection, labeling and cartons so goods arrive ready for retail or distribution.': 'Planifique la inspección, el etiquetado y las cajas para que la mercancía llegue lista para su venta o distribución.',
    'After-Order Support': 'Asistencia posventa',
    'Keep repeat production, delivery schedules and product adjustments easier to manage.': 'Gestione con mayor facilidad las reposiciones, los plazos de entrega y los ajustes de producto.',
    'INTERNATIONAL DELIVERY': 'ENTREGA INTERNACIONAL',
    'Built for eyewear projects moving beyond one market.': 'Preparados para proyectos de gafas destinados a distintos mercados.',
    'We help align the factory, packaging and shipment plan so buyers have a clearer view of what happens before an order leaves for its destination.': 'Coordinamos la fábrica, el embalaje y el plan de envío para que el comprador tenga una visión clara antes de que el pedido salga hacia su destino.',
    'Countries served': 'Países atendidos',
    'Typical production days': 'Días habituales de producción',
    'MOQ from acetate styles': 'Pedido mínimo en modelos de acetato',
    'Questions buyers ask first.': 'Las primeras preguntas de nuestros compradores.',
    'Share the basics of your project and we will point you toward the most suitable development and production route.': 'Comparta los datos básicos de su proyecto y le orientaremos hacia el proceso de desarrollo y producción más adecuado.',
    'Email sales': 'Contactar por email',
    'What is your minimum order quantity?': '¿Cuál es la cantidad mínima de pedido?',
    'MOQ depends on frame construction and material. Standard acetate projects typically start from 300 pieces per style, while metal frames often begin from 500 pieces per style.': 'La cantidad mínima depende de la construcción y del material. Los proyectos estándar de acetato suelen comenzar en 300 unidades por modelo, mientras que las monturas metálicas suelen partir de 500 unidades por modelo.',
    'What should I include in a first inquiry?': '¿Qué información debo incluir en mi primera consulta?',
    'Frame type, reference images or tech pack, target quantity, material, market, timeline, branding requirements and destination country give us the best starting point.': 'Indique el tipo de montura, imágenes de referencia o ficha técnica, cantidad prevista, material, mercado, plazo, requisitos de marca y país de destino.',
    'Do you support OEM and ODM projects?': '¿Trabajan con proyectos OEM y ODM?',
    'Yes. We support OEM, ODM and private label work from feasibility review and sampling through production, inspection, packaging and international shipping.': 'Sí. Ofrecemos servicios OEM, ODM y de marca privada, desde el estudio de viabilidad y el muestreo hasta la producción, inspección, embalaje y envío internacional.',
    'Do you support international shipping?': '¿Realizan envíos internacionales?',
    'Yes. We work on international B2B shipments and can discuss delivery methods and export requirements based on your destination and schedule.': 'Sí. Gestionamos envíos B2B internacionales y estudiamos el método de entrega y los requisitos de exportación según el destino y el calendario.',
    'START A PROJECT': 'INICIE UN PROYECTO',
    'Send the brief. We will help build the next step.': 'Envíenos su proyecto. Le ayudaremos a definir el siguiente paso.',
    'Tell us what you are developing: frame type, material, target quantity, target market, packaging needs and delivery timing. The more context you share, the more useful our first reply can be.': 'Cuéntenos qué está desarrollando: tipo de montura, material, cantidad, mercado objetivo, necesidades de embalaje y fecha de entrega. Cuanto más contexto aporte, más precisa será nuestra primera respuesta.',
    'DIRECT B2B CONTACT': 'CONTACTO B2B DIRECTO',
    'For OEM, ODM, private label, sample, pricing, packaging and shipping inquiries.': 'Para consultas sobre OEM, ODM, marca privada, muestras, precios, embalaje y transporte.',
    'Email Sales': 'Contactar con ventas',
    'OEM, ODM and private label eyewear manufacturing for brands, distributors and wholesalers worldwide.': 'Fabricación OEM, ODM y de marca privada para marcas, distribuidores y mayoristas de todo el mundo.',
    'Qualifications': 'Certificaciones',
    'Sampling & Packaging': 'Muestreo y embalaje',
    'FOLLOW US': 'SÍGANOS',
    'Social profile links can be added when available.': 'Los enlaces a redes sociales se añadirán próximamente.',
    'All rights reserved.': 'Todos los derechos reservados.',
    'Global Shipping': 'Envíos internacionales',
    'Sample product catalog': 'Catálogo de muestras',
    'Find the right starting point for your next frame program.': 'Encuentre el punto de partida adecuado para su próximo proyecto de gafas.',
    'Explore real sample models from our current visual catalog. Select a model to view available information or send us your brief for OEM, ODM and private label options.': 'Explore modelos reales de nuestro catálogo visual. Seleccione un modelo para consultar la información disponible o envíenos su proyecto para valorar opciones OEM, ODM y de marca privada.',
    'All models': 'Todos los modelos',
    'All categories': 'Todas las categorías',
    'Optical frames': 'Monturas ópticas',
    'Featured': 'Destacados',
    'Sample catalog': 'Catálogo de muestras',
    'Search model code': 'Buscar código de modelo',
    'models shown': 'modelos mostrados',
    'Optical Frame': 'Montura óptica',
    'View colorway images, preliminary specifications and project inquiry options.': 'Consulte colores, especificaciones preliminares y opciones de consulta para su proyecto.',
    'Sample model available for project and colorway discussion.': 'Modelo de muestra disponible para estudiar el proyecto y los colores.',
    'DETAIL PAGE': 'FICHA DE PRODUCTO',
    'MAGNETIC CLIP-ON': 'CLIP SOLAR MAGNÉTICO',
    'SUN COLLECTION': 'COLECCIÓN SOLAR',
    'Acetate Sunglasses': 'Gafas de sol de acetato',
    'Review four photographed colorways, material details and on-model fit.': 'Consulte cuatro colores fotografiados, detalles del material y el ajuste sobre modelo.',
    'Review four photographed colorways, material details and project options.': 'Consulte cuatro colores fotografiados, detalles del material y opciones de proyecto.',
    'Four photographed colorways with layered acetate construction details.': 'Cuatro colores fotografiados con detalles de construcción en acetato laminado.',
    'Four photographed colorways with dimensional front and temple details.': 'Cuatro colores fotografiados con detalles dimensionales del frente y las varillas.',
    'Six photographed assembled colourways, plus the optical base and removable magnetic sun clip.': 'Seis colores del conjunto montado, además de la montura óptica base y el clip solar magnético extraíble.',
    'Four photographed colourways with an acetate front, sun lenses and construction detail views.': 'Cuatro colores fotografiados con frente de acetato, lentes solares y vistas de los detalles de construcción.',
    'Three photographed colourways with an acetate front, sun lenses and construction detail views.': 'Tres colores fotografiados con frente de acetato, lentes solares y vistas de los detalles de construcción.',
    'Three photographed colourways with an acetate front, sun lenses and profile views.': 'Tres colores fotografiados con frente de acetato, lentes solares y vistas de perfil.',
    'Our metal optical development is quoted by project. Share a reference or specification and we will send the suitable route.': 'Los desarrollos de monturas metálicas se cotizan por proyecto. Envíenos una referencia o especificación y le propondremos el proceso adecuado.',
    'Our sun collection is developed by project. Tell us your preferred shape, lens direction and target quantity.': 'La colección solar se desarrolla por proyecto. Indíquenos la forma, el tipo de lente y la cantidad prevista.',
    'Custom programs are scoped from your brief. Share materials, branding details, target market and timeline.': 'Los proyectos personalizados se definen a partir de su información. Indique materiales, requisitos de marca, mercado objetivo y plazo.',
    'Our components and packaging program can include lenses, hinge pins, temple inserts, cases and cleaning accessories. Share your requirements for a tailored quote.': 'Nuestro programa de componentes y embalaje puede incluir lentes, pasadores de bisagra, refuerzos de varilla, estuches y accesorios de limpieza. Envíenos sus requisitos para recibir una oferta a medida.',
    'CAN\'T FIND THE RIGHT STYLE?': '¿NO ENCUENTRA EL MODELO ADECUADO?',
    'Bring a reference. We can help scope the right route.': 'Envíenos una referencia y definiremos el proceso adecuado.',
    'Share a sketch, mood board, existing sample or target market. We can discuss product direction, color, branding, MOQ, packaging and production timing.': 'Comparta un boceto, panel de inspiración, muestra existente o mercado objetivo. Podemos estudiar el producto, el color, la marca, el pedido mínimo, el embalaje y el plazo de producción.',
    'Metal Optical': 'Monturas metálicas',
    'Accessories & Packaging': 'Accesorios y embalaje',
    'Acetate sunglasses / sample catalog': 'Gafas de sol de acetato / catálogo de muestras',
    'Available for project discussion': 'Disponible para estudiar su proyecto',
    'Frame material': 'Material de la montura',
    'Colourways shown': 'Colores mostrados',
    'Project support': 'Asistencia al proyecto',
    'View': 'Vista',
    'Front view': 'Vista frontal',
    'Select a photographed colourway or image view.': 'Seleccione un color fotografiado o una vista del producto.',
    'Request this model': 'Solicitar este modelo',
    'WhatsApp sales': 'Ventas por WhatsApp',
    'Need a variation?': '¿Necesita una variante?',
    'Ask about lens direction, colour, logo, packaging, quantities or a related frame route.': 'Consúltenos sobre lentes, color, logotipo, embalaje, cantidades o una montura relacionada.',
    'Technical information': 'Información técnica',
    'Details buyers need before they begin.': 'Información que el comprador necesita antes de comenzar.',
    'Project support': 'Asistencia al proyecto',
    'More than a product sample.': 'Mucho más que una muestra de producto.',
    'Move from a selected frame and lens direction into a clear sampling, branding and delivery conversation.': 'Pase de la selección de la montura y la lente a un plan claro de muestras, marca y entrega.',
    'OEM / Private Label': 'OEM / Marca privada',
    'Sample Review': 'Revisión de muestras',
    'Packaging & Delivery': 'Embalaje y entrega',
    'FRAME IN CONTEXT': 'LA MONTURA EN CONTEXTO',
    'Colour, profile and construction.': 'Color, perfil y construcción.',
    'Colour direction': 'Orientación de color',
    'Temple detail': 'Detalle de la varilla',
    'Hinge detail': 'Detalle de la bisagra',
    'Fit reference': 'Referencia de ajuste',
    'Sample dimensions': 'Dimensiones de la muestra',
    'Photographed product specification': 'Especificación del producto fotografiado',
    'Lens width': 'Ancho de lente',
    'Bridge': 'Puente',
    'Temple': 'Varilla',
    'Model': 'Modelo',
    'Product type': 'Tipo de producto',
    'Material': 'Material',
    'Size shown': 'Talla mostrada',
    'Front width': 'Ancho frontal',
    'Frame height': 'Altura de la montura',
    'Project options': 'Opciones del proyecto',
    'Acetate sunglasses sample': 'Muestra de gafas de sol de acetato',
    'Acetate optical frame sample': 'Muestra de montura óptica de acetato',
    'Magnetic clip-on optical frame sample': 'Muestra de montura óptica con clip solar magnético',
    'Structure': 'Estructura',
    'Optical base frame with removable magnetic sun clip': 'Montura óptica base con clip solar magnético extraíble',
    'Base frame + sun clip': 'Montura base + clip solar',
    'OEM, ODM, private label, packaging support': 'OEM, ODM, marca privada y asistencia de embalaje',
    'Product specifications shown here are for preliminary B2B discussion and subject to final confirmation.': 'Las especificaciones se facilitan para una evaluación B2B preliminar y están sujetas a confirmación final.',
    'Ready to discuss this sunglasses model?': '¿Desea consultar este modelo de gafas de sol?',
    'Send your target quantity, preferred colourway, lens direction, branding and delivery date. We will help identify the right next step for sampling or production.': 'Indique la cantidad prevista, el color preferido, el tipo de lente, la personalización de marca y la fecha de entrega. Le ayudaremos a definir el siguiente paso para el muestreo o la producción.',
    'Back to top': 'Volver arriba',
    'Chat with us on WhatsApp': 'Contactar por WhatsApp'
  }));

  function translateText(text) {
    const trimmed = text.trim();
    if (!trimmed) return text;
    let translated = translations.get(trimmed);
    if (!translated) {
      translated = trimmed
        .replace(/^View details/, 'Ver detalles')
        .replace(/^Request info/, 'Solicitar información')
        .replace(/^Phone:/, 'Teléfono:')
        .replace(/PROJECT INQUIRY$/, 'CONSULTA DE PROYECTO')
        .replace(/ models shown$/, ' modelos mostrados');
    }
    return translated === trimmed ? text : text.replace(trimmed, translated);
  }

  function translateTree() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return /^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentElement?.tagName || '') || !node.nodeValue.trim()
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => { node.nodeValue = translateText(node.nodeValue); });

    document.querySelectorAll('[placeholder]').forEach((element) => {
      element.placeholder = translateText(element.placeholder);
    });
    document.querySelectorAll('[aria-label]').forEach((element) => {
      element.setAttribute('aria-label', translateText(element.getAttribute('aria-label')));
    });
  }

  function localizeProductPage() {
    const info = document.querySelector('.product-info');
    if (!info) return;
    const model = info.querySelector('h1')?.textContent.trim() || 'este modelo';
    const isClipOn = Boolean(document.querySelector('script[src*="bcm-product-pages.js"]'));
    const isOptical = Boolean(document.querySelector('script[src*="jta-product-pages.js"]'));
    const eyebrow = info.querySelector('.eyebrow');
    const intro = info.querySelector('.intro');
    if (isClipOn) {
      document.title = `${model} | Montura óptica con clip magnético | CarpeDiem Optic`;
      if (eyebrow) eyebrow.textContent = 'Montura óptica con clip solar magnético / catálogo de muestras';
      if (intro) intro.textContent = 'Muestra dos en uno con una montura óptica base y un clip solar magnético extraíble. Revise los seis colores fotografiados y los componentes por separado como punto de partida para un desarrollo OEM, ODM o de marca privada.';
      const summaryLabels = info.querySelectorAll('.buyer-summary-item span');
      if (summaryLabels[0]) summaryLabels[0].textContent = 'Montura base + clip solar';
      if (summaryLabels[1]) summaryLabels[1].textContent = 'Colores mostrados';
      if (summaryLabels[2]) summaryLabels[2].textContent = 'Asistencia al proyecto';
      const note = info.querySelector('.contact-note');
      if (note) note.innerHTML = '<span>+</span><span><b>¿Necesita una variante?</b> Consúltenos sobre colores, lentes para el clip, logotipo, embalaje o cantidades.</span>';
    } else if (isOptical) {
      document.title = `${model} | Montura óptica de acetato | CarpeDiem Optic`;
      if (eyebrow) eyebrow.textContent = 'Montura óptica de acetato / catálogo de muestras';
      if (intro) intro.textContent = 'Muestra de montura óptica de acetato con un perfil definido, carácter de material en capas y una construcción cuidada de las varillas. Revise los colores fotografiados como punto de partida para un desarrollo OEM, ODM o de marca privada.';
      const note = info.querySelector('.contact-note');
      if (note) note.innerHTML = '<span>+</span><span><b>¿Necesita una variante?</b> Consúltenos sobre colores, logotipo, embalaje, cantidades o una montura óptica relacionada.</span>';
    } else if (intro) {
      const colourCount = document.querySelectorAll('.colors .color').length || 4;
      intro.textContent = `Muestra de gafas con un perfil definido y ${colourCount} colores fotografiados. Revise la forma, las lentes y los detalles de construcción como punto de partida para un desarrollo OEM, ODM o de marca privada.`;
    }
    const technicalIntro = document.querySelector('.technical-intro');
    if (technicalIntro) technicalIntro.textContent = isClipOn
      ? 'La información identifica la muestra dos en uno fotografiada. El material de la montura, las especificaciones de las lentes del clip, las cantidades y las condiciones de producción se confirman antes del pedido.'
      : 'La información identifica la muestra fotografiada. El color, las lentes, el embalaje, las cantidades y las condiciones de producción se confirman a partir de la ficha del proyecto antes del pedido.';
    const contextIntro = document.querySelector('.lookbook-head p');
    if (contextIntro) contextIntro.textContent = isClipOn
      ? 'Revise la montura base, el clip solar magnético por separado, el conjunto montado y la referencia de ajuste antes de estudiar un proyecto dos en uno.'
      : `Revise la muestra ${model} desde el perfil frontal hasta los detalles de las varillas y el ajuste antes de seleccionar el color para su desarrollo.`;
    const contextTitle = document.querySelector('.lookbook-head h2');
    if (contextTitle && isClipOn) contextTitle.textContent = 'Montura óptica base, clip magnético y conjunto montado.';
    if (contextTitle && isOptical) contextTitle.textContent = 'Carácter del material y construcción.';
    const servicesIntro = document.querySelector('.services-head p');
    if (servicesIntro) servicesIntro.textContent = isClipOn
      ? 'Pase de la selección de la montura base y el clip a un plan claro de muestras, marca y entrega.'
      : 'Pase de la selección de la montura a un plan claro de muestras, marca y entrega.';
    document.querySelectorAll('.service p')[0]?.replaceChildren(isClipOn
      ? 'Estudie el color, las lentes del clip, la ubicación del logotipo y la presentación del producto.'
      : 'Estudie el color, la ubicación del logotipo y la presentación del producto para este modelo.');
    document.querySelectorAll('.service p')[1]?.replaceChildren(isClipOn
      ? 'Confirme la montura base, la conexión magnética y los requisitos antes de planificar la producción.'
      : 'Confirme el material, el ajuste y los requisitos del proyecto antes de planificar la producción.');
    document.querySelectorAll('.service p')[2]?.replaceChildren('Planifique estuches, etiquetado, cajas y entrega internacional antes de confirmar el pedido.');
    const inquiryTitle = document.querySelector('.inquiry h2');
    const inquiryCopy = document.querySelector('.inquiry-grid > div > p');
    if (inquiryTitle) inquiryTitle.textContent = isClipOn ? '¿Desea consultar esta solución con clip magnético?' : '¿Desea consultar este modelo?';
    if (inquiryCopy) inquiryCopy.textContent = isClipOn
      ? 'Indique la cantidad prevista, el color preferido, el tipo de lente para el clip, la personalización de marca y la fecha de entrega. Le ayudaremos a definir el siguiente paso.'
      : 'Indique la cantidad prevista, el mercado, el color preferido, la personalización de marca y la fecha de entrega. Le ayudaremos a definir el siguiente paso para el muestreo o la producción.';
  }

  function localizeLinks() {
    document.querySelectorAll('a[href]').forEach((link) => {
      if (link.closest('.language-switcher')) return;
      const raw = link.getAttribute('href');
      if (!raw || /^(mailto:|tel:|https?:|javascript:)/i.test(raw)) return;
      if (raw.startsWith('#')) {
        const currentFile = location.pathname.split('/').pop() || 'index.html';
        link.setAttribute('href', `es/${currentFile}${raw}`);
        return;
      }
      if (/^(?:index|products|product-[^/]+)\.html/i.test(raw)) link.setAttribute('href', `es/${raw}`);
    });
  }

  document.documentElement.lang = 'es';
  translateTree();
  localizeProductPage();
  translateTree();
  localizeLinks();
})();
