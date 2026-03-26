document.addEventListener('mousemove', (e) => {
    // Criamos um "fantasma" do cursor
    const ghost = document.createElement('div');
    
    // Estilização do rastro (você pode ajustar as cores aqui)
    Object.assign(ghost.style, {
        position: 'fixed',
        top: e.clientY + 'px',
        left: e.clientX + 'px',
        width: '10px',
        height: '10px',
        background: '#ff00ff', // Cor Pink Valley
        pointerEvents: 'none',
        zIndex: '9999',
        opacity: '0.6',
        boxShadow: '0 0 8px #ff00ff'
    });

    document.body.appendChild(ghost);

    // O rastro desaparece e se move um pouco para dar o efeito de erro
    setTimeout(() => {
        ghost.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px) scale(0)`;
        ghost.style.opacity = '0';
        setTimeout(() => ghost.remove(), 300);
    }, 50);
});