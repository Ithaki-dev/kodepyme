// ========================================
// TESTIMONIALS CAROUSEL
// ========================================

class Carousel {
    constructor(containerSelector, options = {}) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;
        
        this.carousel = this.container.querySelector('.testimonials-carousel, .technologies-carousel');
        this.prevBtn = this.container.querySelector('.carousel-prev, .tech-prev');
        this.nextBtn = this.container.querySelector('.carousel-next, .tech-next');
        this.indicatorsContainer = this.container.querySelector('.carousel-indicators');
        
        this.items = Array.from(this.carousel.children);
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;
        
        const defaultDelay = typeof CONFIG !== 'undefined' ? CONFIG.autoplayDelay : 5000;
        
        this.options = {
            autoplay: options.autoplay || false,
            autoplayDelay: options.autoplayDelay || defaultDelay,
            itemsToShow: options.itemsToShow || this.getItemsToShow(),
            gap: options.gap || 40
        };
        
        this.init();
    }
    
    getItemsToShow() {
        const width = window.innerWidth;
        if (width >= 1200) return 3;
        if (width >= 768) return 2;
        return 1;
    }
    
    init() {
        this.createIndicators();
        this.updateCarousel();
        this.attachEvents();
        
        if (this.options.autoplay) {
            this.startAutoplay();
        }
        
        // Pause autoplay on hover
        if (this.options.autoplay) {
            this.container.addEventListener('mouseenter', () => this.stopAutoplay());
            this.container.addEventListener('mouseleave', () => this.startAutoplay());
        }
    }
    
    createIndicators() {
        if (!this.indicatorsContainer) return;
        
        const totalPages = Math.ceil(this.items.length / this.options.itemsToShow);
        
        for (let i = 0; i < totalPages; i++) {
            const indicator = document.createElement('button');
            indicator.classList.add('carousel-indicator');
            indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
            
            if (i === 0) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => {
                this.currentIndex = i;
                this.updateCarousel();
                this.stopAutoplay();
            });
            
            this.indicatorsContainer.appendChild(indicator);
        }
    }
    
    updateCarousel() {
        const itemWidth = this.items[0].offsetWidth;
        const gap = this.options.gap;
        const offset = -this.currentIndex * (itemWidth + gap);
        
        this.carousel.style.transform = `translateX(${offset}px)`;
        
        // Update indicators
        if (this.indicatorsContainer) {
            const indicators = this.indicatorsContainer.querySelectorAll('.carousel-indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === this.currentIndex);
            });
        }
    }
    
    next() {
        const totalPages = Math.ceil(this.items.length / this.options.itemsToShow);
        this.currentIndex = (this.currentIndex + 1) % totalPages;
        this.updateCarousel();
    }
    
    prev() {
        const totalPages = Math.ceil(this.items.length / this.options.itemsToShow);
        this.currentIndex = (this.currentIndex - 1 + totalPages) % totalPages;
        this.updateCarousel();
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.next(), this.options.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
    
    attachEvents() {
        // Previous/Next buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prev();
                this.stopAutoplay();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.next();
                this.stopAutoplay();
            });
        }
        
        // Touch events for mobile swipe
        this.carousel.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        });
        
        this.carousel.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        // Keyboard navigation
        this.container.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // Recalculate on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.options.itemsToShow = this.getItemsToShow();
                this.updateCarousel();
            }, 250);
        });
    }
    
    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
            this.stopAutoplay();
        }
    }
}

// ========================================
// TECH LOGOS CAROUSEL
// ========================================

const techUrls = [
    'https://woocommerce.com/es/',
    'https://es-cr.wordpress.org/',
    'https://business.google.com/en-all/google-ads/',
    'https://marketingplatform.google.com/about/',
    'https://www.linkedin.com/feed/',
    'https://www.meta.com/',
    'https://www.semrush.com/',
    'https://www.hostinger.com/',
    'https://nodejs.org/',
    'https://react.dev/'
];

function getFaviconUrl(domain) {
    const url = new URL(domain);
    return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=128`;
}

function createLogoItem(url) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'tech-logo-item';
    link.setAttribute('data-tech', new URL(url).hostname);

    const img = document.createElement('img');
    const faviconUrl = getFaviconUrl(url);
    img.src = faviconUrl;
    img.alt = new URL(url).hostname;
    img.title = new URL(url).hostname;
    
    // Error handling for failed image loads
    img.onerror = function() {
        console.warn('⚠️ Failed to load:', new URL(url).hostname);
        // Show placeholder
        img.style.backgroundColor = '#374151';
        img.style.width = '64px';
        img.style.height = '64px';
    };

    link.appendChild(img);
    return link;
}

function initTechCarousel() {
    const container = document.getElementById('techCarousel');
    if (!container) {
        console.warn('Tech carousel container not found');
        return;
    }

    const track = document.createElement('div');
    track.className = 'tech-carousel-track';

    console.log('\n🚀 Initializing Tech Carousel...');
    console.log('📦 Technologies to load:', techUrls.length);
    
    // Create TWO complete sets for seamless infinite loop
    const sets = 2;
    
    for (let setIndex = 0; setIndex < sets; setIndex++) {
        techUrls.forEach((url) => {
            const item = createLogoItem(url);
            track.appendChild(item);
        });
    }

    container.appendChild(track);
    
    // Wait for images to load and get actual dimensions
    setTimeout(() => {
        const firstItem = track.querySelector('.tech-logo-item');
        if (!firstItem) return;
        
        // Calculate the width of one complete set
        const itemWidth = firstItem.offsetWidth;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const itemTotalWidth = itemWidth + gap;
        const oneSetWidth = itemTotalWidth * techUrls.length;
        
        console.log('\n📊 Carousel Dimensions:');
        console.log('   Item width:', itemWidth + 'px');
        console.log('   Gap:', gap + 'px');
        console.log('   One set width:', oneSetWidth + 'px');
        console.log('   Total track width:', track.scrollWidth + 'px');
        
        let position = 0;
        const speed = 0.5; // pixels per frame (adjust for speed)
        let animationId;
        let isPaused = false;
        
        function animate() {
            if (!isPaused) {
                position -= speed;
                
                // When we've scrolled one complete set, reset to 0
                if (Math.abs(position) >= oneSetWidth) {
                    position = 0;
                }
                
                track.style.transform = `translateX(${position}px)`;
            }
            
            animationId = requestAnimationFrame(animate);
        }
        
        // Pause on hover
        container.addEventListener('mouseenter', () => {
            isPaused = true;
        });
        
        container.addEventListener('mouseleave', () => {
            isPaused = false;
        });
        
        // Start animation
        animate();
        
        console.log('\n✅ Tech Carousel Ready');
        console.log('   Unique technologies:', techUrls.length);
        console.log('   Total items:', sets * techUrls.length);
        console.log('   Speed: ' + speed + ' pixels/frame');
        console.log('   Reset point:', oneSetWidth + 'px');
        console.log('   🎯 Seamless infinite scroll with no visible reset!');
    }, 500);
}

// ========================================
// INITIALIZE CAROUSELS
// ========================================

function initCarousels() {
    // Initialize Testimonials Carousel
    new Carousel('.carousel-container', {
        autoplay: true,
        autoplayDelay: typeof CONFIG !== 'undefined' ? CONFIG.autoplayDelay : 6000,
        itemsToShow: 3
    });

    // Initialize Tech Carousel
    initTechCarousel();
}

// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousels);
} else {
    initCarousels();
}
