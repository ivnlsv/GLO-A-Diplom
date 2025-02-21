import { animate } from './helpers';

const scrollUp = () => {
	const upButton = document.querySelector('.up');

	window.onscroll = () => {
		if (
			document.body.scrollTop > 100 ||
			document.documentElement.scrollTop > 100
		) {
			upButton.style.display = 'block';
		} else {
			upButton.style.display = 'none';
		}
	};
	const scrollToTop = () => {
		upButton.addEventListener('click', () => {
			const startPosition = window.scrollY;
			const targetPosition = 0;
			const distance = targetPosition - startPosition;
			const duration = 500;

			const timing = (timeFraction) => {
				return timeFraction;
			};

			const draw = (progress) => {
				const currentPosition = startPosition + distance * progress;
				window.scrollTo(0, currentPosition);
			};

			animate({ timing, draw, duration });
		});
	};

	scrollToTop();
};

export default scrollUp;
