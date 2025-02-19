const items = document.querySelectorAll('.item');
const dotsContainer = document.querySelector('.dots-container');
let currentIndex = 0;

const createDots = () => {
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });
    
}

const updateDots = () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}
//updateDots();

const updateSlider = () => {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
    updateDots();
}

const nextSlide = () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider();
}


createDots();
updateSlider();
setInterval(nextSlide, 3000);
