const formSend = () => {
    const form = document.forms["form-callback"];
    const responseMessage = document.querySelector("#responseMessage .modal-content");
    const loadText = 'Идет отправка...';
    const errorText = 'Ошибка...';
    const successText = 'Отправлено!';

    const isCyrillic = (text) => /^[\u0400-\u04FF\s]+$/.test(text);
    const isValidPhone = (phone) => /^[0-9+]+$/.test(phone);

    const sendData = (data) => {
        // Отправка данных через AJAX с использованием fetch
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json());
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const fio = form.fio.value.trim();
        const tel = form.tel.value.trim();

        // Валидация
        if (!isCyrillic(fio)) {
            alert("Имя должно содержать только кириллицу.");
            return;
        }

        if (!isValidPhone(tel)) {
            alert("Телефон должен содержать только цифры и '+'.");
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Показать сообщение о отправке
        responseMessage.textContent = loadText;
        //document.querySelector(".modal-content").style.display = "block";
        form.append(responseMessage);

        // Задержка перед отправкой данных
        setTimeout(() => {
            sendData(data)
            .then(data => {
                responseMessage.innerHTML = successText;
                responseMessage.classList.remove("error");
                responseMessage.classList.add("success");
                form.reset(); // Очистка формы после успешной отправки
            })
            .catch(error => {
                responseMessage.innerHTML = errorText;
                responseMessage.classList.remove("success");
                responseMessage.classList.add("error");
            })
            .finally(() => {
                // Скрыть сообщение после отправки
                setTimeout(() => {
                    document.querySelector(".modal-content").style.display = "none";
                }, 2000); // Скрыть сообщение через 2 секунды
            });
        }, 5); // Задержка 5 мс
    });
};

export default formSend;
