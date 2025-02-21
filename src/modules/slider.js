const slider = () => {
    const slides = document.querySelectorAll('.item');
    const dotsContainer = document.querySelector('.dots-container');
    const textItems = document.querySelectorAll('.table-cell');
    const textContainer = document.querySelectorAll('.text-container');

    let currentIndex = 0;
    let autoSlide;

    // Создание точек навигации
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = index;

        // Обработчик события для кнопки
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.dataset.index);
            goToSlide(index);
        });

        dotsContainer.appendChild(dot);
    });

    // Функция для показа текущего слайда
    const showSlide = (index) => {
        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === index);
            dotsContainer.children[idx].classList.toggle('active', idx === index);
        });

        
        currentIndex = index;
    }

    // Функция перехода к слайду
    const goToSlide = (index) => {
        clearInterval(autoSlide);
        showSlide(index);
    }

    // Функция автоматического слайда
    const startAutoSlide = () => {
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 3000);
    }

    // Пауза при наведении на слайдер
    const topSlider = document.querySelector('.top-slider');
    topSlider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    topSlider.addEventListener('mouseleave', startAutoSlide);

    // Инициализация слайдера
    startAutoSlide();
};

export default slider;
