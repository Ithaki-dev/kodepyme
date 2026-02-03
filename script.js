// ========================================
// MOBILE MENU
// ========================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Animar el botón hamburguesa
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Cerrar menú al hacer click en un enlace
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // No prevenir comportamiento para enlaces que solo son #
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// CONTACT FORM
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
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
        
        // Aquí puedes integrar con tu servicio de backend
        // Por ahora, mostraremos un mensaje de confirmación
        
        // Construir mensaje para WhatsApp (opcional)
        const whatsappMessage = `Hola, soy ${formData.name} de ${formData.business}. ${formData.message || 'Quiero solicitar un diagnóstico gratuito.'}`;
        const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Redirigir a WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Limpiar formulario
        contactForm.reset();
        
        // Mostrar mensaje de éxito
        alert('¡Gracias! Te contactaremos pronto. Te estamos redirigiendo a WhatsApp para una respuesta más rápida.');
        
        // Aquí podrías enviar los datos a tu servidor
        console.log('Datos del formulario:', formData);
    });
}

// ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos que queremos animar
const animatedElements = document.querySelectorAll('.problem-card, .solution-card, .service-card, .diff-card, .testimonial-card');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================

let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// BOTONES CTA - TRACKING (OPCIONAL)
// ========================================

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

// ========================================
// VALIDACIÓN DE FORMULARIO MEJORADA
// ========================================

const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

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

// ========================================
// PERSONALIZACIÓN DEL NÚMERO DE WHATSAPP
// ========================================

// IMPORTANTE: Reemplaza este número con el número real de WhatsApp de KodePyme
const WHATSAPP_NUMBER = '1234567890'; // Formato: código de país + número sin espacios ni caracteres especiales

// Actualizar todos los enlaces de WhatsApp
function updateWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        const currentHref = link.getAttribute('href');
        const newHref = currentHref.replace(/wa\.me\/\d+/, `wa.me/${WHATSAPP_NUMBER}`);
        link.setAttribute('href', newHref);
    });
}

// Ejecutar al cargar la página
updateWhatsAppLinks();

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log('%c🚀 KodePyme Landing Page', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cTecnología simple para empresarios ocupados', 'font-size: 14px; color: #6b7280;');
console.log('%c¿Interesado en trabajar con nosotros? Escríbenos!', 'font-size: 12px; color: #10b981;');
