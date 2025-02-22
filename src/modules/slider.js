const slider = () => {
    const slidesData = [
        {
            imgSrc: './images/slide1.jpg',
            title: 'Шаблон сайта электрика',
            text: 'Решите свою проблему прямо сейчас! Низкие цены. <br /> Найдете дешевле - вернем разницу!'
        },
        {
            imgSrc: './images/slide2.jpg',
            title: 'Другой кричащий заголовок!',
            text: 'В этом блоке можно разместить несколько слайдов на любую тематику, с необходимыми вам заголовками и текстами.'
        },
        {
            imgSrc: './images/slide3.jpg',
            title: 'Услуги электрика',
            text: 'Решите свою проблему прямо сейчас! Низкие цены. <br /> Найдете дешевле - вернем разницу!'
        }
    ];

    const sliderContainer = document.querySelector('.top-slider');
    let currentIndex = 0;
    let intervalId;

    function createSlides() {
        slidesData.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('item');
            if (index === 0) slideDiv.classList.add('active');

            slideDiv.innerHTML = `
                <div class="slider-overlay"></div>
                <img src="${slide.imgSrc}" alt="Слайд ${index + 1}" class="slide-image"/>
                <div class="table">
                    <div class="table-cell">
                        <div class="text-container">
                            <div class="title-h1 big">${slide.title}</div>
                            <div class="text">${slide.text}</div>
                        </div>
                    </div>
                </div>
            `;
            sliderContainer.insertBefore(slideDiv, sliderContainer.querySelector('.dots-container'));
        });
        createDots();
    }

    function createDots() {
        const dotsContainer = document.querySelector('.dots-container');
        slidesData.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');

            dot.addEventListener('click', () => setSlide(index));

            dotsContainer.appendChild(dot);
        });
    }

    function setSlide(index) {
        const slides = document.querySelectorAll('.item');
        const dots = document.querySelectorAll('.dot');

        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = index;

        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');

        resetInterval();
    }

    function startAutoSlide() {
        intervalId = setInterval(() => {
            let nextIndex = (currentIndex + 1) % slidesData.length;
            setSlide(nextIndex);
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    function resetInterval() {
        stopAutoSlide();
        startAutoSlide();
    }

    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    // Инициализация
    createSlides();
    startAutoSlide();
}
export default slider;
