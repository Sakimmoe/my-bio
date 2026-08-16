/* 飘落樱花（克制版）：更少、更慢、更柔和 */
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('petals');
    if (!container) return;

    function createPetal() {
        const p = document.createElement('span');
        p.className = 'petal';

        p.style.left = Math.random() * 100 + 'vw';

        const dur = Math.random() * 8 + 10;      // 10~18s
        p.style.animationDuration = dur + 's';
        p.style.animationDelay = (-Math.random() * 10) + 's';

        p.style.opacity = (Math.random() * 0.22 + 0.28).toFixed(2); // 0.28~0.5

        const w = Math.random() * 7 + 7;         // 7~14px
        p.style.width = w + 'px';
        p.style.height = (w * 0.62) + 'px';

        container.appendChild(p);
        setTimeout(() => p.remove(), (dur + 12) * 1000);
    }

    for (let i = 0; i < 8; i++) {
        setTimeout(createPetal, Math.random() * 2200);
    }
    setInterval(createPetal, 1100);
});
