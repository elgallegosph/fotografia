/* ════════════════════════════════════════════════════════════════════
   CONFIGURACIÓN DE TU PORTAFOLIO
   Este es el único archivo que necesitas editar.
   Cuando yo te entregue un diseño nuevo, solo reemplazas index.html
   y este archivo se queda igual.
   ════════════════════════════════════════════════════════════════════ */
window.PORTFOLIO_CONFIG = {

  /* ── Conexión con Drive (obligatorio) ─────────────────────────────── */
  API_URL: 'https://script.google.com/macros/s/AKfycby5npuEV0z37ucUtgW8zKVcWluXSkHWEeF4arWbjNSwuucdRz8NanYL5RaHQMnyF3T0oA/exec',
  GOOGLE_CLIENT_ID: '422500526386-30n229h03ksvj068f9eom2edvhqo051g.apps.googleusercontent.com',

  /* ── Tu marca ─────────────────────────────────────────────────────── */
  SITE_NAME: 'Mateo Gallego',   // en el menú se muestra en mayúsculas automáticamente
  TAGLINE: 'Fotografía de retrato, calle, paisaje y editorial.',   // frase bajo el menú, en el inicio

  /* ── Sobre mí (tu reseña y tu foto) ───────────────────────────────── */
  // BORRADOR: reemplázalo por tu propio texto.
  // Deja una línea en blanco entre párrafos. En el inicio se muestra solo el primero,
  // con el enlace "Leer más" hacia la página completa. Usa comillas invertidas ` `.
  ABOUT: ` Soy Mateo Gallego , un fotógrafo colombiano con experiencia en fotografía editorial, de estudio y documental, enfocado en la creación de narrativas visuales que combinan estética, concepto y emoción.
            Mi trabajo parte de la observación y el análisis de cada contexto, utilizando la luz y la composición como herramientas para comunicar ideas y sensaciones.
            En la fotografía editorial desarrollo imágenes que dialogan con el contenido y el mensaje de cada proyecto, buscando síntesis visual y coherencia narrativa.
            En el estudio, trabajo desde la planificación y el control del espacio para construir escenas que refuercen la identidad del sujeto o la idea a representar.
            En el enfoque documental, registro realidades desde una mirada cercana y respetuosa, priorizando la autenticidad y la honestidad visual.
            Cada proyecto representa para mí una oportunidad de contar historias con intención, generar conexión con el espectador y transformar momentos reales en imágenes significativas.`,

  // Foto de perfil (se muestra en un círculo). Tres formas de indicarla:
  //   1) Un archivo subido a este repositorio, junto a index.html. Ej: 'fotoperfil.jpg'
  //   2) Una dirección completa. Ej: 'https://…/foto.jpg'
  //   3) El ID de un archivo de Drive (la página lo reduce sola, ideal si la foto pesa mucho)
  ABOUT_PHOTO: 'fotoperfil.jpg',
  // Hacia dónde se centra el recorte del círculo. Si te cortan la frente: 'center 15%'; si te cortan la barbilla: 'center 40%'
  ABOUT_PHOTO_POSITION: 'center 25%',

  /* ── Contacto (opcional; deja vacío lo que no quieras mostrar) ────── */
  CONTACT_EMAIL: '',
  INSTAGRAM: 'https://www.instagram.com/_soy_mateo_',
  WHATSAPP: '',           // Con código de país, solo números. Ej: '573001234567'
  LOCATION: '',           // Ej: 'Manizales, Colombia'
};
