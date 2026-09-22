/* ════════════════════════════════════════════════════════════════════
   CONFIGURACIÓN DE TU PORTAFOLIO
   Este es el único archivo que necesitas editar.
   Cuando yo te entregue un diseño nuevo, solo reemplazas index.html
   y este archivo se queda igual.
   ════════════════════════════════════════════════════════════════════ */
window.PORTFOLIO_CONFIG = {
 
  /* ── Conexión con Drive (obligatorio) ─────────────────────────────── */
  API_URL: 'https://script.google.com/macros/s/AKfycbyZDFd0fZcWbYR9buN_Lbzq6ApLi09s_LhumJe5X4zVE02pDhikAYh9NtiqahxPUU_FYA/exec',
  GOOGLE_CLIENT_ID: '422500526386-30n229h03ksvj068f9eom2edvhqo051g.apps.googleusercontent.com',
 
  /* ── Tu marca ─────────────────────────────────────────────────────── */
  SITE_NAME: 'Mateo Gallego',   // en el menú se muestra en mayúsculas automáticamente
  // El texto grande de la portada. Escribe un guion largo « — » para separar dos estilos: lo de antes
  // sale en una serif fina en mayúsculas, y lo de después en una caligrafía elegante, como una firma.
  TAGLINE: 'FOTOGRAFÍA PROFESIONAL — Maestría Visual',
 
  /* ── Sobre mí (tu reseña y tu foto) ───────────────────────────────── */
  // BORRADOR: reemplázalo por tu propio texto.
  // Deja una línea en blanco entre párrafos. En el inicio se muestra solo el primero,
  // con el enlace "Leer más" hacia la página completa. Usa comillas invertidas ` `.
  ABOUT: `Soy fotógrafo colombiano y trabajo retrato, calle, paisaje y editorial. Mis imágenes combinan estética, concepto y emoción para contar historias con intención.

Mi trabajo parte de la observación y el análisis de cada contexto. La luz y la composición son mis herramientas para comunicar ideas y sensaciones.

Según el proyecto, trabajo desde distintos enfoques. En editorial, desarrollo imágenes que dialogan con el contenido y el mensaje, con síntesis visual y coherencia narrativa. En estudio, planifico y controlo el espacio para construir escenas que refuercen la identidad del sujeto o la idea a representar. En lo documental, registro la realidad con una mirada cercana y respetuosa, donde pesan la autenticidad y la honestidad visual.

Cada proyecto es una oportunidad para conectar con quien mira y convertir momentos reales en imágenes con significado.`,
 
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
 WATERMARK: false,
};
