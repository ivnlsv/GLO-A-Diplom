const modal = () => {
    const modalOpen = document.getElementById('modal-open');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCallback = document.querySelector('.modal-callback');
    const modalClose = document.querySelector('.modal-close');

    const toggleModal = (isVisible) => {
        const displayValue = isVisible ? 'block' : 'none';
        modalOverlay.style.display = displayValue;
        modalCallback.style.display = displayValue;
    };

    modalOpen.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal(true);
    });

    modalClose.addEventListener('click', () => {
        toggleModal(false);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            toggleModal(false);
        }
    });
};

export default modal;

