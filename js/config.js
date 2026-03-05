// ========================================
// GLOBAL CONFIGURATION
// ========================================

const CONFIG = {
    whatsappNumber: '1234567890', // Formato: código de país + número sin espacios
    autoplayDelay: 6000, // Delay para carruseles en milisegundos
    animationThreshold: 0.1, // Threshold para IntersectionObserver
    techCarouselDuration: 60, // Duración de animación del carrusel de tecnologías (segundos)
};

// Exportar configuración
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
