const accordeon = () => {
	document.querySelectorAll('.accordeon .element .title').forEach((title) => {
		title.addEventListener('click', (e) => {
			const parentElement = e.target.parentElement;;
			const isActive = parentElement.classList.contains('active');

			document.querySelectorAll('.accordeon .element').forEach((element) => {
				element.classList.remove('active');
				element.querySelector('.element-content').style.display = 'none';
			});

			if (!isActive) {
				parentElement.classList.add('active');
				parentElement.querySelector('.element-content').style.display = 'block';
			}
		});
	});
};

export default accordeon;
