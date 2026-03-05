// ========================================
// HERO PARTICLES ANIMATION
// ========================================

function initParticles() {
    const heroBackground = document.querySelector('.hero-background-animation');
    if (!heroBackground) return;

    const randNum = function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    const addPixel = function(color, startPos, toX, toY) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.65);
            top: ${startPos[1]}px;
            left: ${startPos[0]}px;
            box-shadow: 0px 0px 7px 7px rgba(${color[0] - 5}, ${color[1] - 5}, ${color[2] - 5}, 0.55);
            border-radius: 50%;
            pointer-events: none;
            opacity: 0;
        `;
        
        heroBackground.appendChild(pixel);
        
        // Fade in
        setTimeout(() => {
            pixel.style.transition = 'opacity 0.75s ease';
            pixel.style.opacity = '1';
        }, 10);
        
        // Animate
        setTimeout(() => {
            pixel.style.transition = 'left 6s ease-out, top 6s ease-out, opacity 1s ease';
            pixel.style.left = (startPos[0] + toX) + 'px';
            pixel.style.top = (startPos[1] + toY) + 'px';
            
            // Fade out and remove
            setTimeout(() => {
                pixel.style.opacity = '0';
                setTimeout(() => {
                    pixel.remove();
                }, 1000);
            }, 6000);
        }, 750);
    };
    
    const letFly = function() {
        setInterval(function() {
            const angle = randNum(0, 361);
            const dist = randNum(100, 450);
            const heroRect = heroBackground.getBoundingClientRect();
            const wWidth = heroRect.width;
            const wHeight = heroRect.height;
            const toX = Math.cos(angle * Math.PI / 180) * dist;
            const toY = Math.sin(angle * Math.PI / 180) * (dist / 1.5);
            const color = [
                randNum(40, 80),
                randNum(100, 140),
                randNum(120, 160)
            ];
            const startPos = [
                randNum(0, wWidth),
                randNum(0, wHeight)
            ];
            
            addPixel(color, startPos, toX, toY);
        }, 100);
    };
    
    letFly();
}

// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
} else {
    initParticles();
}
