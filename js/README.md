# JavaScript Architecture - KodePyme Landing Page

## 📁 Estructura de Archivos

Esta carpeta contiene los módulos JavaScript organizados según las mejores prácticas de desarrollo web.

### Archivos Core

#### `config.js`
**Propósito:** Configuración global de la aplicación  
**Contiene:**
- Número de WhatsApp
- Delays de autoplay para carruseles
- Thresholds de animación
- Duraciones de animaciones

**Uso:** Este archivo debe ser cargado primero para que las configuraciones estén disponibles en todos los módulos.

---

#### `main.js`
**Propósito:** Inicialización principal y funcionalidades globales  
**Contiene:**
- Tracking de botones CTA
- Actualización de enlaces de WhatsApp
- Branding en consola
- Inicialización general de la app

**Uso:** Debe ser cargado al final para asegurar que todos los módulos estén disponibles.

---

### Módulos de Funcionalidad

#### `particles.js`
**Propósito:** Animación de partículas en el hero section  
**Responsabilidades:**
- Crear y animar píxeles flotantes
- Gestionar efectos visuales del hero
- Auto-inicialización en DOMContentLoaded

---

#### `mobile-menu.js`
**Propósito:** Gestión del menú móvil  
**Responsabilidades:**
- Toggle del menú hamburguesa
- Animación del botón hamburguesa
- Cierre automático al hacer click en enlaces
- Auto-inicialización en DOMContentLoaded

---

#### `smooth-scroll.js`
**Propósito:** Scroll suave y efectos del header  
**Responsabilidades:**
- Scroll suave para enlaces ancla
- Ajuste por altura del header
- Sombra dinámica del header al hacer scroll
- Auto-inicialización en DOMContentLoaded

---

#### `contact-form.js`
**Propósito:** Gestión del formulario de contacto  
**Responsabilidades:**
- Validación de campos en tiempo real
- Envío de datos al WhatsApp
- Feedback visual de validación
- Limpieza del formulario
- Auto-inicialización en DOMContentLoaded

---

#### `scroll-animations.js`
**Propósito:** Animaciones al hacer scroll  
**Responsabilidades:**
- Intersection Observer para elementos visibles
- Fade-in y translateY de cards
- Auto-inicialización en DOMContentLoaded

---

#### `carousel.js`
**Propósito:** Gestión de carruseles (testimonios y tecnologías)  
**Responsabilidades:**
- Clase Carousel reutilizable
- Autoplay y controles manuales
- Swipe en dispositivos móviles
- Carrusel de logos de tecnologías con fetching de favicons
- Auto-inicialización en DOMContentLoaded

**Incluye:**
- `class Carousel` - Clase reutilizable para carruseles
- `initTechCarousel()` - Carrusel infinito de tecnologías
- `techUrls[]` - Array de URLs de tecnologías

---

#### `floating-whatsapp.js`
**Propósito:** Botón flotante de WhatsApp  
**Responsabilidades:**
- Mostrar/ocultar basado en scroll position
- Actualizar número de WhatsApp desde config
- Tracking de clicks
- Auto-inicialización en DOMContentLoaded

---

## 🔄 Orden de Carga

El orden de carga en `index.html` debe ser:

1. `config.js` - Configuración primero
2. `particles.js` - Efectos visuales
3. `mobile-menu.js` - Navegación mobile
4. `smooth-scroll.js` - Navegación y scroll
5. `contact-form.js` - Formulario
6. `scroll-animations.js` - Animaciones
7. `carousel.js` - Carruseles
8. `floating-whatsapp.js` - Botón flotante
9. `main.js` - Inicialización final

## 🎯 Buenas Prácticas Implementadas

### ✅ Separación de Responsabilidades
Cada archivo tiene una responsabilidad única y bien definida.

### ✅ Auto-inicialización
Todos los módulos se inicializan automáticamente cuando el DOM está listo:
```javascript
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFunction);
} else {
    initFunction();
}
```

### ✅ Configuración Centralizada
Todas las configuraciones están en `config.js`, evitando valores hardcoded.

### ✅ Manejo de Errores
- Verificación de existencia de elementos DOM antes de operar
- Error handlers para imágenes que no cargan
- Console.warn para debugging

### ✅ Performance
- Event listeners con opciones `{ passive: true }` donde es apropiado
- Debouncing en resize events
- Lazy loading de imágenes
- Will-change para animaciones

### ✅ Accesibilidad
- Aria labels en botones
- Navegación por teclado en carruseles
- Smooth scroll respetando preferencias del usuario

## 🔧 Personalización

### Cambiar número de WhatsApp
Edita `config.js`:
```javascript
const CONFIG = {
    whatsappNumber: 'TU_NUMERO_AQUI',
    // ...
};
```

### Ajustar velocidades de animación
Edita `config.js`:
```javascript
const CONFIG = {
    // ...
    autoplayDelay: 6000, // milisegundos
    techCarouselDuration: 60, // segundos
};
```

### Agregar nuevas tecnologías
Edita `carousel.js`:
```javascript
const techUrls = [
    'https://tu-tecnologia.com/',
    // ...
];
```

## 📊 Mantenimiento

### Agregar nuevo módulo
1. Crea el archivo en `/js/`
2. Usa el patrón de auto-inicialización
3. Agrégalo a `index.html` en el orden apropiado
4. Documenta en este README

### Debugging
Todos los módulos logean en consola cuando se inicializan:
- Abre DevTools (F12)
- Revisa la pestaña Console
- Deberías ver mensajes de cada módulo cargándose

## 🚀 Producción

Para producción, considera:
- Minificar todos los archivos JS
- Concatenar en un solo bundle
- Usar herramientas como Webpack o Rollup
- Implementar cache busting con hash en nombres de archivos

---

**Última actualización:** Marzo 2026  
**Mantenido por:** Equipo KodePyme
