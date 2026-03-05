# KodePyme - Landing Page

Landing page profesional para KodePyme, empresa de soluciones tecnológicas enfocada en pequeñas y medianas empresas en Latinoamérica.

## 🎯 Descripción

Esta landing page está diseñada específicamente para convertir visitantes en leads a través de:
- Botón flotante de WhatsApp (scroll-activated)
- Formulario de contacto integrado
- Solicitud de diagnóstico gratuito

## 📁 Estructura del Proyecto

```
kodepyme/
├── index.html          # Página principal
├── styles.css          # Estilos globales
├── js/                 # Módulos JavaScript organizados
│   ├── config.js       # Configuración global
│   ├── particles.js    # Animación del hero
│   ├── mobile-menu.js  # Menú móvil
│   ├── smooth-scroll.js # Scroll suave y header
│   ├── contact-form.js # Formulario de contacto
│   ├── scroll-animations.js # Animaciones en scroll
│   ├── carousel.js     # Carruseles (testimonios y tech)
│   ├── floating-whatsapp.js # Botón flotante WhatsApp
│   ├── main.js         # Inicialización principal
│   └── README.md       # Documentación de arquitectura JS
└── README.md           # Este archivo
```

## 🎨 Características

### Diseño
- ✅ 100% responsive (móvil, tablet, desktop)
- ✅ Diseño minimalista inspirado en family.co
- ✅ Paleta monocromática (negro/blanco/gris)
- ✅ Tipografía clara y grande (Inter)
- ✅ Animaciones suaves y profesionales
- ✅ Botón flotante de WhatsApp con scroll detection

### Funcionalidades
- ✅ Carrusel infinito de testimonios con autoplay
- ✅ Carrusel infinito de logos de tecnologías (con favicons automáticos)
- ✅ Animaciones de partículas en hero section
- ✅ Scroll suave entre secciones
- ✅ Formulario de contacto con validación
- ✅ Integración directa con WhatsApp
- ✅ Menú móvil hamburguesa animado
- ✅ Animaciones al hacer scroll (fade-in)

### Secciones incluidas
1. **Hero Section** - Mensaje principal con CTAs destacados y animación de partículas
2. **Problemas del Cliente** - Empatía con dolores reales
3. **Solución KodePyme** - Cómo ayudamos
4. **Servicios** - 6 servicios principales (Estrategia Digital, Social Media, Diseño Web, E-commerce, Google/Meta Ads, SEO)
5. **Diferenciadores** - Por qué elegir KodePyme
6. **Proceso de Trabajo** - 4 pasos simples
7. **Testimonios** - Carrusel con historias de éxito
8. **Tecnologías** - Carrusel infinito con logos de plataformas
9. **CTA Final** - Formulario de contacto + WhatsApp

### Tecnología
- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript modular (ES6+)
- No requiere frameworks externos
- Optimizado para performance

## 📱 Integración con WhatsApp

**IMPORTANTE:** Antes de publicar, actualiza el número de WhatsApp en:

**`js/config.js`** línea 6:
```javascript
const CONFIG = {
    whatsappNumber: '1234567890', // Reemplazar con tu número real
    // ...
};
```

El formato debe ser: código de país + número (sin espacios, guiones ni paréntesis)
- Ejemplo Costa Rica: `50612345678`
- Ejemplo México: `5215512345678`
- Ejemplo Colombia: `573001234567`
- Ejemplo Argentina: `5491123456789`

## 🚀 Cómo usar

1. **Descarga el proyecto completo:**
   - Clona el repositorio o descarga el ZIP
   - Asegúrate de mantener la estructura de carpetas

2. **Personaliza tu información:**
   - Actualiza el número de WhatsApp en `js/config.js`
   - Cambia el correo electrónico en el footer
   - Añade tus redes sociales
   - Agrega/quita tecnologías en `js/carousel.js`

3. **Abre index.html en tu navegador** para ver la página localmente

4. **Para publicar online:**
   - Opción 1: Sube los archivos a tu hosting web (mantener estructura)
   - Opción 2: Usa GitHub Pages (gratuito)
   - Opción 3: Usa Netlify o Vercel (gratuito)

## 📧 Configuración del Formulario

El formulario actualmente redirige a WhatsApp con los datos ingresados. 

Para integrarlo con un servicio de email:

### Opción 1: EmailJS (Gratuito)
1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Añade el script en `index.html`
3. Configura el envío en `js/contact-form.js`

### Opción 2: Formspree (Gratuito)
1. Regístrate en [Formspree](https://formspree.io/)
2. Cambia el action del form en `index.html`

### Opción 3: Backend propio
Implementa un endpoint en tu servidor y modifica `js/contact-form.js`.

## 🎨 Personalización de Colores

Los colores principales están definidos en `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Azul principal */
    --secondary-color: #10b981;    /* Verde secundario */
    --whatsapp: #25d366;           /* Verde WhatsApp */
}
```

Puedes cambiarlos fácilmente modificando estos valores.

## 📊 Analíticas

Para rastrear conversiones, puedes agregar:
- Google Analytics
- Facebook Pixel
- Hotjar

Añade los scripts en la sección `<head>` de `index.html`.

## 🔧 Estructura de Archivos (Actualizada)

```
kodepyme/
├── index.html          # Página principal HTML
├── styles.css          # Estilos CSS globales
├── js/                 # Módulos JavaScript
│   ├── config.js       # Configuración global
│   ├── particles.js    # Animación de partículas
│   ├── mobile-menu.js  # Menú móvil
│   ├── smooth-scroll.js # Scroll y header
│   ├── contact-form.js # Formulario
│   ├── scroll-animations.js # Animaciones
│   ├── carousel.js     # Carruseles
│   ├── floating-whatsapp.js # Botón flotante
│   ├── main.js         # Inicialización
│   └── README.md       # Documentación de arquitectura JS
└── README.md           # Este archivo
```

📝 **Nota:** Ver `js/README.md` para documentación detallada de la arquitectura JavaScript.

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Móviles iOS y Android

## ⚡ Optimizaciones

- Tipografía optimizada con Google Fonts
- CSS minificable para producción
- Imágenes responsivas
- Código semántico para SEO
- Meta tags configurados

## 🎯 Próximos Pasos Recomendados

1. **Agregar imágenes reales:**
   - Fotos de equipo
   - Casos de éxito
   - Logo de la empresa

2. **Implementar backend:**
   - Base de datos para leads
   - Email automation
   - CRM integration

3. **Añadir más contenido:**
   - Blog
   - Casos de estudio detallados
   - Videos testimoniales

4. **Optimizar conversión:**
   - A/B testing
   - Heatmaps
   - Chat en vivo

## 📞 Soporte

Para consultas sobre la implementación:
- Email: contacto@kodepyme.com
- WhatsApp: [Actualizar con número real]

## 📄 Licencia

Este proyecto fue creado específicamente para KodePyme.

---

**Desarrollado con ❤️ para KodePyme**

*Tecnología simple para empresarios ocupados*
