// ========================================
// MAIN INITIALIZATION
// ========================================

// CTA Buttons Tracking
function initCTATracking() {
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-whatsapp');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log('CTA clicked:', buttonText);
            
            // Aquí puedes integrar con Google Analytics, Facebook Pixel, etc.
            // Ejemplo con Google Analytics (si lo tienes instalado):
            // gtag('event', 'click', {
            //     'event_category': 'CTA',
            //     'event_label': buttonText
            // });
        });
    });
}

// Update all WhatsApp links based on CONFIG
function updateWhatsAppLinks() {
    const whatsappNumber = typeof CONFIG !== 'undefined' ? CONFIG.whatsappNumber : '1234567890';
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        const currentHref = link.getAttribute('href');
        const newHref = currentHref.replace(/wa\.me\/\d+/, `wa.me/${whatsappNumber}`);
        link.setAttribute('href', newHref);
    });
}

// Console branding
function initConsoleBranding() {
    console.log('%c🚀 KodePyme Landing Page', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log('%cTecnología simple para empresarios ocupados', 'font-size: 14px; color: #6b7280;');
    console.log('%c¿Interesado en trabajar con nosotros? Escríbenos!', 'font-size: 12px; color: #10b981;');
}

// Main initialization function
function initApp() {
    updateWhatsAppLinks();
    initCTATracking();
    initConsoleBranding();
    
    console.log('✅ KodePyme website initialized successfully');
}

// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
