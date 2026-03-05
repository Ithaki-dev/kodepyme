// ========================================
// FLOATING WHATSAPP BUTTON
// ========================================

function initFloatingWhatsApp() {
    const floatingBtn = document.getElementById('floatingWhatsApp');
    if (!floatingBtn) return;

    // Actualizar número de WhatsApp desde config
    const whatsappNumber = typeof CONFIG !== 'undefined' ? CONFIG.whatsappNumber : '1234567890';
    const currentHref = floatingBtn.getAttribute('href');
    
    if (currentHref) {
        const newHref = currentHref.replace(/wa\.me\/\d+/, `wa.me/${whatsappNumber}`);
        floatingBtn.setAttribute('href', newHref);
    }

    // Scroll behavior: ocultar el botón cuando está en el footer
    let lastScrollTop = 0;
    const showButtonAfter = 300; // Mostrar después de 300px de scroll

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Mostrar/ocultar basado en scroll position
        if (scrollTop > showButtonAfter) {
            floatingBtn.style.opacity = '1';
            floatingBtn.style.visibility = 'visible';
        } else {
            floatingBtn.style.opacity = '0';
            floatingBtn.style.visibility = 'hidden';
        }

        lastScrollTop = scrollTop;
    }, { passive: true });

    // Estado inicial
    if (window.pageYOffset < showButtonAfter) {
        floatingBtn.style.opacity = '0';
        floatingBtn.style.visibility = 'hidden';
    }

    // Tracking de clicks (opcional)
    floatingBtn.addEventListener('click', () => {
        // Aquí puedes integrar con Google Analytics, Facebook Pixel, etc.
        // Ejemplo con Google Analytics (si lo tienes instalado):
        // gtag('event', 'click', {
        //     'event_category': 'WhatsApp',
        //     'event_label': 'Floating Button'
        // });
    });
}

// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingWhatsApp);
} else {
    initFloatingWhatsApp();
}
