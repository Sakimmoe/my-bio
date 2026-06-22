document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('canvas-container');

    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        petal.style.left = Math.random() * 100 + 'vw';
        
        const duration = Math.random() * 5 + 6;
        petal.style.animationDuration = duration + 's';
        
        petal.style.opacity = Math.random() * 0.4 + 0.4;
        
        const width = Math.random() * 10 + 8;
        petal.style.width = width + 'px';
        petal.style.height = (width * 0.6) + 'px';
        
        container.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }

    setInterval(createPetal, 500);

    for(let i = 0; i < 10; i++) {
        setTimeout(createPetal, Math.random() * 2000);
    }
});
