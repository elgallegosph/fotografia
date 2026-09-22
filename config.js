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
  ABOUT: `Soy fotógrafo y trabajo retrato, calle, paisaje y editorial.`,

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
  WHATSAPP: '573218870891',           // Con código de país, solo números. Ej: '573001234567'
  LOCATION: 'SAN JOSE, CALDAS',           // Ej: 'Manizales, Colombia'
};
