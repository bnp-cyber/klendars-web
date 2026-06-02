/* =========================================================================
   KLENDARS — sitio web. Interacciones + i18n (ES/EN). Sin dependencias.
   ========================================================================= */

const I18N = {
  es: {
    "nav.features": "Funciones",
    "nav.mochi": "Mochi",
    "nav.about": "Quiénes somos",
    "nav.faq": "FAQ",
    "nav.news": "Novedades",
    "nav.contact": "Contacto",
    "nav.cta": "Contáctanos",

    "hero.badge": "Próximamente en la App Store",
    "hero.title1": "Tu vida,",
    "hero.title2": "organizada.",
    "hero.lead": "Cuentas, presupuestos, listas inteligentes y eventos compartidos con tus amigos — todo en una sola app, con Mochi como tu asistente. Simple y privada.",
    "hero.cta1": "Descubre qué hace",
    "hero.cta2": "Mantente al tanto",
    "hero.trust1": "Privada por diseño",
    "hero.trust2": "Español e inglés",
    "hero.trust3": "Para iPhone",

    "mock.title": "Resumen del mes",
    "mock.bill": "Cuentas por pagar", "mock.bill.s": "Vence en 3 días",
    "mock.save": "Meta de ahorro", "mock.save.s": "68% completada",
    "mock.list": "Lista del súper", "mock.list.s": "Compartida con Ana",
    "mock.event": "Cena de cumpleaños", "mock.event.s": "4 amigos · sáb",
    "mock.insight": "Gastas menos que el mes pasado", "mock.insight.s": "-12% en comida · dice Mochi",

    "features.eyebrow": "Todo en un lugar",
    "features.title": "Una app, todo organizado",
    "features.sub": "Desde tus finanzas del día a día hasta los planes con amigos. KLENDARS lo mantiene simple.",
    "feat.finance.t": "Cuentas y pagos",
    "feat.finance.d": "Registra tus cuentas, métodos de pago y recordatorios para no olvidar ningún vencimiento.",
    "feat.budget.t": "Presupuestos e ideas",
    "feat.budget.d": "Lleva ingresos, deudas y metas de ahorro, y recibe ideas claras sobre cómo va tu mes.",
    "feat.lists.t": "Listas inteligentes",
    "feat.lists.d": "Escanea códigos de barras y fechas, organiza tus compras y encuentra tiendas cercanas.",
    "feat.shared.t": "Compartido con amigos",
    "feat.shared.d": "Comparte listas, eventos y gastos. Lleven juntos la cuenta sin enredos ni capturas de pantalla.",
    "feat.remind.t": "Recordatorios",
    "feat.remind.d": "Notificaciones a tiempo para pagos, eventos y tareas, para que nada se te escape.",
    "feat.privacy.t": "Privacidad primero",
    "feat.privacy.d": "Tus datos son tuyos. Bloqueo con Face ID y sin números de tarjeta completos. No es un banco.",

    "deep.eyebrow": "Funciones a fondo",
    "deep.title": "Cinco módulos, una sola app",
    "deep.sub": "Cada parte de KLENDARS está pensada para un momento de tu día. Así se ven por dentro.",
    "deep.money.tag": "Money",
    "deep.money.t": "Tu mes financiero, de un vistazo",
    "deep.money.d": "Calendario, facturas y presupuesto en un mismo lugar. Mira lo gastado, lo compartido y lo que viene — por semana, mes o año.",
    "deep.money.l1": "Vista semana · mes · año",
    "deep.money.l2": "Gastado, compartido y próximos pagos",
    "deep.money.l3": "Resumen anual exportable para impuestos",
    "deep.money.mh": "Gastado este mes",
    "deep.money.r1": "Personal", "deep.money.r2": "Compras", "deep.money.r3": "Eventos",
    "deep.budget.tag": "Presupuesto",
    "deep.budget.t": "Sabe si llegas a fin de mes",
    "deep.budget.d": "Un puntaje de salud financiera, tu disponible en tiempo real y una proyección del próximo mes. Sin sorpresas.",
    "deep.budget.l1": "Salud financiera 0–100 con insights",
    "deep.budget.l2": "Disponible y proyección al cierre",
    "deep.budget.l3": "Ingresos, deudas y metas de ahorro",
    "deep.budget.mh": "Salud financiera: Excelente",
    "deep.budget.pill": "✓ En ruta · $4,000 disponible",
    "deep.lists.tag": "Listas",
    "deep.lists.t": "Listas inteligentes y carpetas",
    "deep.lists.d": "Organiza todo por carpetas, escanea códigos de barras y fechas de caducidad, y comparte listas con quien quieras.",
    "deep.lists.l1": "Carpetas y listas ilimitadas",
    "deep.lists.l2": "Escaneo de código de barras y caducidad",
    "deep.lists.l3": "Listas compartidas en tiempo real",
    "deep.lists.mh": "Lista del súper",
    "deep.lists.i1": "Café", "deep.lists.i2": "Pan", "deep.lists.i3": "Aguacates", "deep.lists.i4": "Leche de avena",
    "deep.lists.pill": "👥 Compartida con Ana",
    "deep.friends.tag": "Amigos",
    "deep.friends.t": "Cuentas claras con tu gente",
    "deep.friends.d": "Conecta por código QR, divide gastos y salda cuentas sin enredos. Todo sincronizado al instante.",
    "deep.friends.l1": "Agrega amigos con tu QR",
    "deep.friends.l2": "Divide gastos y eventos compartidos",
    "deep.friends.l3": "Salda cuentas — sin capturas ni notas sueltas",
    "deep.friends.r1": "te debe", "deep.friends.r2": "le debes",
    "deep.friends.pill": "⚖️ Saldo del grupo: equilibrado",
    "deep.bills.tag": "Facturas",
    "deep.bills.t": "Registra una factura en segundos",
    "deep.bills.d": "Escanea el recibo y KLENDARS detecta monto, fecha y comercio. Asigna categoría y método de pago — guardamos la referencia, nunca el número completo.",
    "deep.bills.l1": "Escaneo de recibo con detección automática",
    "deep.bills.l2": "10 categorías + recordatorios",
    "deep.bills.l3": "Métodos de pago seguros (solo últimos 4 dígitos)",
    "deep.bills.scan": "Escanear recibo",
    "deep.bills.mh": "Nueva factura",
    "deep.bills.pill": "💳 Crédito ···· 1234",

    "mochi.eyebrow": "Conoce a Mochi",
    "mochi.title": "Tu asistente que entiende tu día",
    "mochi.sub": "Mochi vive en la app, te da ideas sobre tu dinero y cambia de personalidad según dónde estés. Háblale por voz o tócalo desde la Isla Dinámica.",
    "mochi.money": "Money · Análisis financiero",
    "mochi.today": "Today · Pendientes del día",
    "mochi.lists": "Lists · Orden y listas",
    "mochi.friends": "Friends · Tu círculo",
    "mochi.settings": "Settings · Configuración",
    "mochi.f1.t": "Comandos de voz",
    "mochi.f1.d": "\"Marca la renta como pagada\" o \"¿cuánto debo?\" — Mochi te responde.",
    "mochi.f2.t": "Isla Dinámica",
    "mochi.f2.d": "Tu presupuesto y pendientes en vivo, sin abrir la app.",
    "mochi.f3.t": "Ideas con sentido",
    "mochi.f3.d": "Patrones de gasto y avisos útiles, en lenguaje claro.",

    "about.eyebrow": "Quiénes somos",
    "about.title": "Organizar tu vida, sin fricción",
    "about.p1": "KLENDARS nace para resolver algo simple: tener tus pagos, listas y planes con amigos en un mismo lugar, sin saltar entre hojas de cálculo y apps separadas.",
    "about.p2": "Es una herramienta de organización personal — no un banco ni asesoría financiera. No movemos tu dinero; te ayudamos a verlo y llevar el control, siempre de forma privada.",
    "about.mission.l": "Nuestro objetivo",
    "about.mission.d": "Que organizar tu vida sea tan simple que de verdad lo hagas cada día — claro, bilingüe y privado por diseño.",
    "about.company": "KLENDARS es un producto de New Horizons y Cargo LLC.",
    "about.pill1": "Privacidad primero", "about.pill2": "Diseño claro",
    "about.pill3": "Bilingüe", "about.pill4": "Hecho con cariño",
    "about.stat1": "Módulos en una app", "about.stat2": "Idiomas",
    "about.stat3": "Tus datos, tuyos", "about.stat4": "Compras dentro de la app",

    "trust.eyebrow": "Confianza",
    "trust.title": "Pensada para cuidar lo tuyo",
    "trust.sub": "Tu información financiera es sensible. Así la tratamos.",
    "trust.b1": "No es un banco", "trust.b1d": "No movemos ni tocamos tu dinero.",
    "trust.b2": "No vendemos tus datos", "trust.b2d": "Tu información no se vende ni se usa para anuncios.",
    "trust.b3": "Bloqueo con Face ID", "trust.b3d": "Protege la app con tu rostro o código.",
    "trust.b4": "Sin tarjetas completas", "trust.b4d": "Solo guardamos un alias y los últimos 4 dígitos.",

    "faq.q1": "¿Cuánto cuesta KLENDARS?",
    "faq.a1": "KLENDARS es una app de pago única en la App Store, sin compras dentro de la app ni suscripciones. Pagas una vez y listo.",
    "faq.q2": "¿Ya está disponible?",
    "faq.a2": "Estamos en los últimos detalles antes de publicarla. Déjanos tu correo y te avisamos en cuanto esté en la App Store.",
    "faq.q3": "¿En qué dispositivos funciona?",
    "faq.a3": "KLENDARS está hecha para iPhone, con widgets, Isla Dinámica y Live Activities. Tu información se sincroniza entre tus dispositivos.",
    "faq.q4": "¿Necesito conectar mi banco?",
    "faq.a4": "No. KLENDARS no se conecta a tu banco ni mueve dinero. Tú registras lo que quieres llevar — es una herramienta de organización, no un banco.",
    "faq.q5": "¿Es seguro y privado?",
    "faq.a5": "Sí. Bloqueo con Face ID, no guardamos números de tarjeta completos, y no vendemos tus datos. Puedes borrar tu cuenta y tu información cuando quieras.",
    "faq.q6": "¿En qué idiomas está?",
    "faq.a6": "En español e inglés. La app sigue el idioma de tu iPhone automáticamente.",

    "news.eyebrow": "Novedades",
    "news.title": "Lo último de KLENDARS",
    "news.sub": "Sigue el camino hacia el lanzamiento y las nuevas funciones.",
    "news1.tag": "Lanzamiento", "news1.title": "Camino a la App Store",
    "news1.body": "Estamos en los últimos detalles para llevar KLENDARS a tu iPhone. Muy pronto podrás descargarla.",
    "news1.date": "Próximamente",
    "news2.tag": "Funciones", "news2.title": "Listas y gastos compartidos",
    "news2.body": "Comparte listas y divide gastos con amigos de forma simple, con todo sincronizado al instante.",
    "news2.date": "Recién llegado",
    "news3.tag": "Funciones", "news3.title": "Escaneo de productos",
    "news3.body": "Escanea códigos de barras y fechas de caducidad para organizar tus compras sin escribir nada.",
    "news3.date": "Recién llegado",

    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos",
    "contact.sub": "¿Tienes dudas, ideas o quieres enterarte del lanzamiento? Escríbenos, leemos todo.",
    "form.name": "Nombre", "form.name.ph": "Tu nombre",
    "form.email": "Correo", "form.email.ph": "tucorreo@ejemplo.com",
    "form.msg": "Mensaje", "form.msg.ph": "Cuéntanos en qué podemos ayudarte…",
    "form.send": "Enviar mensaje",
    "form.note": "Se abrirá tu app de correo para enviar el mensaje.",

    "cta.title": "Sé de los primeros en probar KLENDARS",
    "cta.sub": "Déjanos tu correo y te avisamos en cuanto esté disponible en la App Store.",
    "cta.btn": "Quiero enterarme",

    "footer.tagline": "Tu vida, organizada. Cuentas, listas y planes compartidos en una sola app, con Mochi.",
    "footer.product": "Producto", "footer.legal": "Legal", "footer.contacth": "Contacto",
    "footer.privacy": "Política de Privacidad", "footer.terms": "Términos y Condiciones",
    "footer.disclaimer": "KLENDARS es una herramienta de organización, no un banco ni asesor financiero.",
    "footer.productOf": "KLENDARS es un producto de New Horizons y Cargo LLC."
  },

  en: {
    "nav.features": "Features",
    "nav.mochi": "Mochi",
    "nav.about": "About",
    "nav.faq": "FAQ",
    "nav.news": "News",
    "nav.contact": "Contact",
    "nav.cta": "Contact us",

    "hero.badge": "Coming soon to the App Store",
    "hero.title1": "Your life,",
    "hero.title2": "organized.",
    "hero.lead": "Bills, budgets, smart lists, and shared events with your friends — all in one app, with Mochi as your assistant. Simple and private.",
    "hero.cta1": "See what it does",
    "hero.cta2": "Stay in the loop",
    "hero.trust1": "Private by design",
    "hero.trust2": "Spanish & English",
    "hero.trust3": "Built for iPhone",

    "mock.title": "This month",
    "mock.bill": "Bills due", "mock.bill.s": "Due in 3 days",
    "mock.save": "Savings goal", "mock.save.s": "68% complete",
    "mock.list": "Grocery list", "mock.list.s": "Shared with Ana",
    "mock.event": "Birthday dinner", "mock.event.s": "4 friends · Sat",
    "mock.insight": "You're spending less than last month", "mock.insight.s": "-12% on food · says Mochi",

    "features.eyebrow": "All in one place",
    "features.title": "One app, everything organized",
    "features.sub": "From your everyday finances to plans with friends. KLENDARS keeps it simple.",
    "feat.finance.t": "Bills & payments",
    "feat.finance.d": "Track your bills, payment methods, and reminders so you never miss a due date.",
    "feat.budget.t": "Budgets & insights",
    "feat.budget.d": "Keep tabs on income, debts, and savings goals, and get clear insights on your month.",
    "feat.lists.t": "Smart lists",
    "feat.lists.d": "Scan barcodes and dates, organize your shopping, and find nearby stores.",
    "feat.shared.t": "Shared with friends",
    "feat.shared.d": "Share lists, events, and expenses. Keep track together — no mess, no screenshots.",
    "feat.remind.t": "Reminders",
    "feat.remind.d": "Timely notifications for payments, events, and tasks so nothing slips by.",
    "feat.privacy.t": "Privacy first",
    "feat.privacy.d": "Your data is yours. Face ID lock and no full card numbers. It's not a bank.",

    "deep.eyebrow": "Features in depth",
    "deep.title": "Five modules, one app",
    "deep.sub": "Each part of KLENDARS is built for a moment in your day. Here's how they look inside.",
    "deep.money.tag": "Money",
    "deep.money.t": "Your financial month, at a glance",
    "deep.money.d": "Calendar, bills, and budget in one place. See what you've spent, what's shared, and what's coming — by week, month, or year.",
    "deep.money.l1": "Week · month · year view",
    "deep.money.l2": "Spent, shared, and upcoming payments",
    "deep.money.l3": "Exportable yearly summary for taxes",
    "deep.money.mh": "Spent this month",
    "deep.money.r1": "Personal", "deep.money.r2": "Shopping", "deep.money.r3": "Events",
    "deep.budget.tag": "Budget",
    "deep.budget.t": "Know if you'll make it to month-end",
    "deep.budget.d": "A financial health score, your available balance in real time, and a projection for next month. No surprises.",
    "deep.budget.l1": "Financial health 0–100 with insights",
    "deep.budget.l2": "Available balance and end-of-month projection",
    "deep.budget.l3": "Income, debts, and savings goals",
    "deep.budget.mh": "Financial health: Excellent",
    "deep.budget.pill": "✓ On track · $4,000 available",
    "deep.lists.tag": "Lists",
    "deep.lists.t": "Smart lists and folders",
    "deep.lists.d": "Organize everything in folders, scan barcodes and expiration dates, and share lists with anyone.",
    "deep.lists.l1": "Unlimited folders and lists",
    "deep.lists.l2": "Barcode and expiry-date scanning",
    "deep.lists.l3": "Shared lists in real time",
    "deep.lists.mh": "Grocery list",
    "deep.lists.i1": "Coffee", "deep.lists.i2": "Bread", "deep.lists.i3": "Avocados", "deep.lists.i4": "Oat milk",
    "deep.lists.pill": "👥 Shared with Ana",
    "deep.friends.tag": "Friends",
    "deep.friends.t": "Clear tabs with your people",
    "deep.friends.d": "Connect by QR code, split expenses, and settle up with no mess. Everything synced instantly.",
    "deep.friends.l1": "Add friends with your QR",
    "deep.friends.l2": "Split expenses and shared events",
    "deep.friends.l3": "Settle up — no screenshots or loose notes",
    "deep.friends.r1": "owes you", "deep.friends.r2": "you owe",
    "deep.friends.pill": "⚖️ Group balance: even",
    "deep.bills.tag": "Bills",
    "deep.bills.t": "Log a bill in seconds",
    "deep.bills.d": "Scan the receipt and KLENDARS detects amount, date, and merchant. Set a category and payment method — we keep the reference, never the full number.",
    "deep.bills.l1": "Receipt scanning with auto-detection",
    "deep.bills.l2": "10 categories + reminders",
    "deep.bills.l3": "Secure payment methods (last 4 digits only)",
    "deep.bills.scan": "Scan receipt",
    "deep.bills.mh": "New bill",
    "deep.bills.pill": "💳 Credit ···· 1234",

    "mochi.eyebrow": "Meet Mochi",
    "mochi.title": "Your assistant that gets your day",
    "mochi.sub": "Mochi lives in the app, gives you insights about your money, and changes personality based on where you are. Talk to it by voice or tap it from the Dynamic Island.",
    "mochi.money": "Money · Financial insights",
    "mochi.today": "Today · Today's to-dos",
    "mochi.lists": "Lists · Order and lists",
    "mochi.friends": "Friends · Your circle",
    "mochi.settings": "Settings · Settings",
    "mochi.f1.t": "Voice commands",
    "mochi.f1.d": "\"Mark rent as paid\" or \"how much do I owe?\" — Mochi answers.",
    "mochi.f2.t": "Dynamic Island",
    "mochi.f2.d": "Your budget and to-dos live, without opening the app.",
    "mochi.f3.t": "Insights that make sense",
    "mochi.f3.d": "Spending patterns and helpful nudges, in plain language.",

    "about.eyebrow": "About us",
    "about.title": "Organize your life, friction-free",
    "about.p1": "KLENDARS was born to solve something simple: keep your payments, lists, and plans with friends in one place, without jumping between spreadsheets and separate apps.",
    "about.p2": "It's a personal-organization tool — not a bank or financial advisor. We don't move your money; we help you see it and stay in control, always privately.",
    "about.mission.l": "Our mission",
    "about.mission.d": "To make organizing your life so simple you actually do it every day — clear, bilingual, and private by design.",
    "about.company": "KLENDARS is a product of New Horizons y Cargo LLC.",
    "about.pill1": "Privacy first", "about.pill2": "Clean design",
    "about.pill3": "Bilingual", "about.pill4": "Made with care",
    "about.stat1": "Modules in one app", "about.stat2": "Languages",
    "about.stat3": "Your data, yours", "about.stat4": "In-app purchases",

    "trust.eyebrow": "Trust",
    "trust.title": "Built to protect what's yours",
    "trust.sub": "Your financial information is sensitive. Here's how we treat it.",
    "trust.b1": "Not a bank", "trust.b1d": "We don't move or touch your money.",
    "trust.b2": "We don't sell your data", "trust.b2d": "Your info is never sold or used for ads.",
    "trust.b3": "Face ID lock", "trust.b3d": "Protect the app with your face or passcode.",
    "trust.b4": "No full card numbers", "trust.b4d": "We only store an alias and the last 4 digits.",

    "faq.q1": "How much does KLENDARS cost?",
    "faq.a1": "KLENDARS is a one-time paid app on the App Store, with no in-app purchases or subscriptions. Pay once and you're done.",
    "faq.q2": "Is it available yet?",
    "faq.a2": "We're putting the final touches before release. Leave us your email and we'll let you know the moment it's on the App Store.",
    "faq.q3": "What devices does it work on?",
    "faq.a3": "KLENDARS is built for iPhone, with widgets, Dynamic Island, and Live Activities. Your info syncs across your devices.",
    "faq.q4": "Do I need to connect my bank?",
    "faq.a4": "No. KLENDARS doesn't connect to your bank or move money. You log what you want to track — it's an organization tool, not a bank.",
    "faq.q5": "Is it secure and private?",
    "faq.a5": "Yes. Face ID lock, no full card numbers stored, and we don't sell your data. You can delete your account and information whenever you want.",
    "faq.q6": "What languages is it in?",
    "faq.a6": "Spanish and English. The app follows your iPhone's language automatically.",

    "news.eyebrow": "News",
    "news.title": "The latest from KLENDARS",
    "news.sub": "Follow the road to launch and new features.",
    "news1.tag": "Launch", "news1.title": "On the way to the App Store",
    "news1.body": "We're putting the final touches to bring KLENDARS to your iPhone. You'll be able to download it very soon.",
    "news1.date": "Coming soon",
    "news2.tag": "Features", "news2.title": "Shared lists & expenses",
    "news2.body": "Share lists and split expenses with friends easily, with everything synced instantly.",
    "news2.date": "Just landed",
    "news3.tag": "Features", "news3.title": "Product scanning",
    "news3.body": "Scan barcodes and expiration dates to organize your shopping without typing a thing.",
    "news3.date": "Just landed",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.sub": "Questions, ideas, or want to hear about the launch? Write to us — we read everything.",
    "form.name": "Name", "form.name.ph": "Your name",
    "form.email": "Email", "form.email.ph": "you@example.com",
    "form.msg": "Message", "form.msg.ph": "Tell us how we can help…",
    "form.send": "Send message",
    "form.note": "Your email app will open to send the message.",

    "cta.title": "Be among the first to try KLENDARS",
    "cta.sub": "Leave us your email and we'll let you know the moment it's on the App Store.",
    "cta.btn": "Keep me posted",

    "footer.tagline": "Your life, organized. Bills, lists, and shared plans in one app, with Mochi.",
    "footer.product": "Product", "footer.legal": "Legal", "footer.contacth": "Contact",
    "footer.privacy": "Privacy Policy", "footer.terms": "Terms & Conditions",
    "footer.disclaimer": "KLENDARS is an organization tool, not a bank or financial advisor.",
    "footer.productOf": "KLENDARS is a product of New Horizons y Cargo LLC."
  }
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });

  // Recalcular la altura de las FAQ abiertas (el texto cambió de tamaño).
  document.querySelectorAll(".faq-item.open .faq-a").forEach((a) => {
    a.style.maxHeight = a.scrollHeight + "px";
  });

  try { localStorage.setItem("klendars_lang", lang); } catch (_) {}
}

document.addEventListener("DOMContentLoaded", () => {
  // Idioma inicial: guardado → idioma del navegador → español.
  let saved = null;
  try { saved = localStorage.getItem("klendars_lang"); } catch (_) {}
  const initial = saved || (navigator.language && navigator.language.startsWith("en") ? "en" : "es");
  applyLang(initial);

  // Toggle de idioma.
  document.querySelectorAll(".lang-toggle button").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.getAttribute("data-lang")));
  });

  // Menú móvil.
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("open"))
    );
  }

  // Año del footer.
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // FAQ acordeón.
  document.querySelectorAll(".faq-q").forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const a = item.querySelector(".faq-a");
      const isOpen = item.classList.toggle("open");
      a.style.maxHeight = isOpen ? a.scrollHeight + "px" : null;
    });
  });

  // Reveal on scroll.
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Formulario de contacto → abre el correo (sin backend / sin cuenta).
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (document.getElementById("cName").value || "").trim();
      const email = (document.getElementById("cEmail").value || "").trim();
      const msg = (document.getElementById("cMsg").value || "").trim();
      const subject = encodeURIComponent(`KLENDARS — mensaje de ${name || "la web"}`);
      const body = encodeURIComponent(`${msg}\n\n— ${name}\n${email}`);
      window.location.href = `mailto:support@klendars.com?subject=${subject}&body=${body}`;
    });
  }
});
