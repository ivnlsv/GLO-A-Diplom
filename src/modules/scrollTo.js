import { animate } from './helpers';

const scrollTo = () => {
	const upButton = document.querySelector('.up');
	const menuLinks = document.querySelectorAll('.top-menu ul li a');

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

	const scrollToItem = (target) => {
		const targetElement = document.querySelector(target);
		const startPosition = window.scrollY;
		const targetPosition =
			targetElement.getBoundingClientRect().top + startPosition;
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
	};

	menuLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			const targetId = link.getAttribute('href');
			scrollToItem(targetId);
		});
	});

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

	scrollToTop();
};

export default scrollTo;
