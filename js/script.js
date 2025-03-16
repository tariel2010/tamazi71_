// Общие скрипты для всех страниц
document.addEventListener('DOMContentLoaded', () => {
    // Анимация элементов при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < window.innerHeight * 0.85) {
                el.classList.add('animate__fadeInUp');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Обработчик формы
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Отправка данных
            alert('Заявка принята! Мастер свяжется с вами через 5 минут.');
            form.reset();
        });
    }
});
