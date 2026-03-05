// ========================================
// CONTACT FORM
// ========================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    // Validación mejorada de formulario
    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '' && this.hasAttribute('required')) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(239, 68, 68)') {
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
    });

    // Manejo de envío
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            business: document.getElementById('business').value,
            message: document.getElementById('message').value
        };
        
        // Construir mensaje para WhatsApp
        const whatsappNumber = typeof CONFIG !== 'undefined' ? CONFIG.whatsappNumber : '1234567890';
        const whatsappMessage = `Hola, soy ${formData.name} de ${formData.business}. ${formData.message || 'Quiero solicitar un diagnóstico gratuito.'}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Redirigir a WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Limpiar formulario
        contactForm.reset();
        
        // Mostrar mensaje de éxito
        alert('¡Gracias! Te contactaremos pronto. Te estamos redirigiendo a WhatsApp para una respuesta más rápida.');
    });
}

// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactForm);
} else {
    initContactForm();
}
