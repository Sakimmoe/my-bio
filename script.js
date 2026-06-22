document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('canvas-container');
    const colors = ['#ffc2d1', '#eef5ff', '#fff5f8', '#d0e1ff'];

    // 创建漂浮装饰的小圆点
    function createBubble() {
        const bubble = document.createElement('div');
        const size = Math.random() * 60 + 20 + 'px';
        
        bubble.style.position = 'absolute';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.borderRadius = '50%';
        bubble.style.filter = 'blur(40px)';
        bubble.style.opacity = '0.4';
        
        // 随机初始位置
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.top = Math.random() * 100 + 'vh';
        
        container.appendChild(bubble);

        // 让泡泡缓缓移动
        animateBubble(bubble);
    }

    function animateBubble(el) {
        const duration = Math.random() * 20000 + 10000;
        const keyframes = [
            { transform: 'translate(0, 0)' },
            { transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` },
            { transform: 'translate(0, 0)' }
        ];

        el.animate(keyframes, {
            duration: duration,
            iterations: Infinity,
            easing: 'alternate'
        });
    }

    // 生成15个氛围泡泡
    for(let i=0; i<15; i++) {
        createBubble();
    }
});
