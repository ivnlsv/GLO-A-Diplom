const accordeon = () => { 
    const elements = document.querySelectorAll('.element');

    elements.forEach(element => {
        element.querySelector('.title').addEventListener('click', () => {
            elements.forEach(el => {
                if (el !== element) {
                    el.classList.remove('active');
                    el.querySelector('.element-content').style.display = 'none';
                }
            });

            const content = element.querySelector('.element-content');
            element.classList.toggle('active');
            if (element.classList.contains('active')) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    });
}

export default accordeon;