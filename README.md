# Sitio web de KLENDARS — `klendars.com`

Landing page estática para KLENDARS. **Sin dependencias** (HTML/CSS/JS puro), bilingüe ES/EN, lista para hostear **gratis**.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Página principal (hero, funciones, quiénes somos, novedades, contacto) |
| `privacy.html` | **Política de Privacidad** — generada del texto legal real de la app |
| `terms.html` | **Términos y Condiciones** — texto legal real de la app |
| `styles.css` | Estilos (paleta neón de la app) |
| `script.js` | Interacciones + traducción ES/EN |
| `404.html` | Página de error |
| `CNAME` | Dominio para GitHub Pages (`klendars.com`) |
| `robots.txt` | Para buscadores |

> 📌 **Importante para la App Store:** Apple exige una URL pública de Política de Privacidad. Una vez publicado el sitio, usa **`https://klendars.com/privacy.html`** en App Store Connect.

## Cómo verlo localmente

Abre `index.html` en el navegador (doble clic), o sirve la carpeta:

```bash
cd website
python3 -m http.server 8000   # luego abre http://localhost:8000
```

## Cómo publicarlo GRATIS (elige una)

### Opción A — Cloudflare Pages (recomendada: dominio + HTTPS gratis y fácil)
1. Entra a Cloudflare Pages → *Create a project* → *Direct Upload*.
2. Sube el contenido de la carpeta `website/`.
3. En *Custom domains*, agrega `klendars.com` y sigue los pasos de DNS (si el dominio ya está en Cloudflare, es automático).

### Opción B — GitHub Pages
1. Crea un repo (p. ej. `klendars-web`) y sube **el contenido** de `website/` a la raíz.
2. Settings → Pages → Source: `main` / `/root`.
3. El archivo `CNAME` ya apunta a `klendars.com`. En Settings → Pages → *Custom domain*, confirma `klendars.com`.
4. Configura el DNS (ver abajo).

### Opción C — Netlify
1. netlify.com → *Add new site* → *Deploy manually* → arrastra la carpeta `website/`.
2. *Domain settings* → *Add custom domain* → `klendars.com`.

## DNS para `klendars.com`

En tu proveedor de dominio, apunta a tu host:

- **GitHub Pages** — registros `A` de apex a: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; y un `CNAME` de `www` → `<tu-usuario>.github.io`.
- **Cloudflare Pages / Netlify** — usa el `CNAME` / nameservers que te indique el panel (suele ser automático).

El HTTPS lo emiten los tres de forma gratuita y automática.

## Personalizar

- **Screenshots reales:** el hero usa una maqueta CSS del teléfono. Cuando tengas capturas, reemplázala por una `<img>` (déjame avisarte y lo cambio).
- **Novedades:** edita las tarjetas en la sección `#news` de `index.html` y sus traducciones en `script.js` (claves `news1.*`, `news2.*`, …).
- **Formulario de contacto:** hoy abre el correo del usuario (mailto, sin backend ni cuentas). Si quieres recibir mensajes en una bandeja, se puede conectar a Formspree/Resend (gratis) más adelante.
- **Badge App Store:** cuando publiques la app, reemplaza “Próximamente” por el botón oficial de descarga.

## Marca
Colores tomados de `AppNeonTheme.swift`: azul `#4F8CFF`, morado `#A855F7`, verde `#34D399`, ámbar `#FFA630`, base oscura `#080A14`.
