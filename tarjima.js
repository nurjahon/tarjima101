// Простой код для анимации нажатия на кнопку
document.querySelector('button').addEventListener('click', () => {
    alert('Thank you for your interest!');
});

// Дополнительные анимации при скролле страницы (если нужно)
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.card, .hero-text h2, .hero-text p');
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.style.animationPlayState = 'running';
        }
    });
});
