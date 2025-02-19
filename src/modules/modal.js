import { animate } from './helpers.js';

const modal = () => {
    const modalOpenBtns = [document.querySelector('#modal-open'), document.querySelector('#button-services'), ...document.querySelectorAll('.absolute')];
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCallback = document.querySelector('.modal-callback');
    const modalClose = document.querySelector('.modal-close');

    const fadeEffect = (isVisible) => {
        const duration = 500;
        const startOpacity = isVisible ? 0 : 1;
        const endOpacity = isVisible ? 1 : 0;

        animate({
            timing: (timeFraction) => timeFraction,
            draw: (progress) => {
                modalOverlay.style.opacity = startOpacity + (endOpacity - startOpacity) * progress;
                modalCallback.style.opacity = startOpacity + (endOpacity - startOpacity) * progress;

                if (progress === 1 && !isVisible) {
                    modalOverlay.style.display = 'none';
                    modalCallback.style.display = 'none';
                } else {
                    modalOverlay.style.display = 'block';
                    modalCallback.style.display = 'block';
                }
            },
            duration: duration,
        });
    };

    const openModal = (e) => {
        e.preventDefault();
        fadeEffect(true);
    };

    modalOpenBtns.forEach(button => {
        if (button) {
            button.addEventListener('click', openModal);
        }
    });

    modalClose.addEventListener('click', () => {
        fadeEffect(false);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            fadeEffect(false);
        }
    });
};

export default modal;
