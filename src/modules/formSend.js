const formSend = () => {
	const form = document.forms['form-callback'];
	const responseMessage = document.querySelector(
		'#responseMessage .modal-content'
	);
	const closeResponseMessage = document.querySelector(
		'#responseMessage .fancyClose'
	);
	const loadText = 'Идет отправка...';
	const errorText = 'Ошибка отправки...';
	const successText = 'Отправлено!';

	const isCyrillic = (text) => /^[\u0400-\u04FF\s]+$/.test(text);
	const isValidPhone = (phone) => /^[0-9+]+$/.test(phone);

	const sendData = async (data) => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		return response.json();
	};

	const resetResponseMessage = () => {
		responseMessage.textContent = '';
		responseMessage.classList.remove('error', 'success');
	};

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		const fio = form.fio.value.trim();
		const tel = form.tel.value.trim();

		if (!isCyrillic(fio)) {
			alert('Имя должно содержать только кириллицу.');
			return;
		}

		if (!isValidPhone(tel)) {
			alert("Телефон должен содержать только цифры и '+'");
			return;
		}

		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		resetResponseMessage();
		responseMessage.textContent = loadText;
		document.querySelector('.modal-overlay').style.display = 'block';
		document.querySelector('.modal-callback').style.display = 'none';
		document.querySelector('#responseMessage').style.display = 'block';

		try {
			const result = await sendData(data);

			responseMessage.innerHTML = successText;
			responseMessage.classList.add('success');
			form.reset();
		} catch (error) {
			responseMessage.innerHTML = errorText;
			responseMessage.classList.add('error');
		}
	});

	closeResponseMessage.addEventListener('click', (e) => {
		e.preventDefault(); 
		document.querySelector('#responseMessage').style.display = 'none'; 
		document.querySelector('.modal-overlay').style.display = 'none'; 
	});
};

export default formSend;
