document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('canvas-container');

    // 动态生成落樱的函数
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // 随机起点位置（整个屏幕宽度）
        petal.style.left = Math.random() * 100 + 'vw';
        
        // 随机下落时间 (5秒 到 10秒之间)
        const duration = Math.random() * 5 + 5;
        petal.style.animationDuration = duration + 's';
        
        // 随机透明度，增加层次感
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        
        // 随机大小
        const width = Math.random() * 10 + 8; // 8px - 18px
        petal.style.width = width + 'px';
        petal.style.height = (width * 0.6) + 'px'; // 保持花瓣形状比例
        
        container.appendChild(petal);

        // 动画结束后清理 DOM 节点，防止浏览器卡顿
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }

    // 每 400 毫秒生成一片新的樱花
    setInterval(createPetal, 400);

    // 初始先生成几片，避免刚打开页面时太空
    for(let i = 0; i < 8; i++) {
        setTimeout(createPetal, Math.random() * 2000);
    }
});
