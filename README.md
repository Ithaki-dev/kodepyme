# KodePyme - Landing Page

Landing page profesional para KodePyme, empresa de soluciones tecnológicas enfocada en pequeñas y medianas empresas en Latinoamérica.

## 🎯 Descripción

Esta landing page está diseñada específicamente para convertir visitantes en leads a través de:
- Contacto por WhatsApp
- Formulario de contacto
- Solicitud de diagnóstico gratuito

## 🎨 Características

### Diseño
- ✅ 100% responsive (móvil, tablet, desktop)
- ✅ Diseño moderno y limpio
- ✅ Colores profesionales (azul primario #2563eb)
- ✅ Tipografía clara (Inter)
- ✅ Animaciones suaves

### Secciones incluidas
1. **Hero Section** - Mensaje principal con CTAs destacados
2. **Problemas del Cliente** - Empatía con dolores reales
3. **Solución KodePyme** - Cómo ayudamos
4. **Servicios** - 3 paquetes principales
5. **Diferenciadores** - Por qué elegir KodePyme
6. **Proceso de Trabajo** - 4 pasos simples
7. **Testimonios** - Historias de éxito
8. **CTA Final** - WhatsApp + Formulario de contacto

### Funcionalidades
- Menú mobile responsive
- Scroll suave entre secciones
- Formulario de contacto funcional
- Integración con WhatsApp
- Animaciones al hacer scroll
- Optimización SEO básica

## 📱 Integración con WhatsApp

**IMPORTANTE:** Antes de publicar, actualiza el número de WhatsApp en:

1. **script.js** línea 142:
```javascript
const WHATSAPP_NUMBER = '1234567890'; // Reemplazar con tu número real
```

El formato debe ser: código de país + número (sin espacios, guiones ni paréntesis)
- Ejemplo México: `5215512345678`
- Ejemplo Colombia: `573001234567`
- Ejemplo Argentina: `5491123456789`

## 🚀 Cómo usar

1. **Descarga los archivos:**
   - index.html
   - styles.css
   - script.js

2. **Personaliza tu información:**
   - Actualiza el número de WhatsApp en `script.js`
   - Cambia el correo electrónico en el footer
   - Añade tus redes sociales

3. **Abre index.html en tu navegador** para ver la página localmente

4. **Para publicar online:**
   - Opción 1: Sube los archivos a tu hosting web
   - Opción 2: Usa GitHub Pages (gratuito)
   - Opción 3: Usa Netlify o Vercel (gratuito)

## 📧 Configuración del Formulario

El formulario actualmente redirige a WhatsApp con los datos ingresados. 

Para integrarlo con un servicio de email:

### Opción 1: EmailJS (Gratuito)
1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Añade el script en `index.html`
3. Configura el envío en `script.js`

### Opción 2: Formspree (Gratuito)
1. Regístrate en [Formspree](https://formspree.io/)
2. Cambia el action del form en `index.html`

### Opción 3: Backend propio
Implementa un endpoint en tu servidor para procesar el formulario.

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

## 🔧 Estructura de Archivos

```
kodepyme/
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # JavaScript
└── README.md           # Este archivo
```

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
