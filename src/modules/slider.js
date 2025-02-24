const slider = () => {
	const slides = document.querySelectorAll('.item');
	const dotsContainer = document.querySelector('.dots-container');
	const textContainers = document.querySelectorAll('.table');

	let currentIndex = 0;
	let autoSlide;

	slides.forEach((_, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dot.dataset.index = index;

		dot.addEventListener('click', (e) => {
			const index = parseInt(e.target.dataset.index);
			goToSlide(index);
		});

		dotsContainer.appendChild(dot);
	});

	const showSlide = (index) => {
		slides.forEach((slide, idx) => {
			slide.classList.toggle('active', idx === index);
			textContainers[idx].classList.toggle('active', idx === index);

			dotsContainer.children[idx].classList.toggle('active', idx === index);
		});

		currentIndex = index;
	};

	const goToSlide = (index) => {
		clearInterval(autoSlide);
		showSlide(index);
		currentIndex = index;
	};

	const startAutoSlide = () => {
		autoSlide = setInterval(() => {
			currentIndex = (currentIndex + 1) % slides.length;
			showSlide(currentIndex);
		}, 3000);
	};

	const topSlider = document.querySelector('.top-slider');
	topSlider.addEventListener('mouseenter', () => clearInterval(autoSlide));
	topSlider.addEventListener('mouseleave', startAutoSlide);

	showSlide(currentIndex);
	startAutoSlide();
};

export default slider;
