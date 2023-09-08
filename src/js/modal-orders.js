import { postDataApi } from '../servises/productsApi';

export function fittingModal([ringCard]) {
  const fitting = document.querySelector('.rings-card-btn');
  const consultation = document.querySelector('.rings-card-consultation');
  fitting.addEventListener('click', renderFittingModal);
  consultation.addEventListener('click', renderFittingModal);

  function renderFittingModal(e) {
    const typeForm = e.target.classList.value;
    const modalContainer = document.querySelector('.modal-wrap');
    const oldContant = document.querySelector('.modal-wrap div');
    oldContant?.remove();
    if (typeForm === 'rings-card-btn') {
      const fitting = document.createElement('div');
      fitting.classList.add('modal-order');
      fitting.innerHTML = `
        <h2 class="modal-order-title">Запис на примірку</h2>
        <form method="post" class="modal-order-form">
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="name"
                type="text"
                placeholder="І’мя"
                minlength="2"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-person"></use>
              </svg>
            </span>
          </label>
          <div>
            <label class="modal-input-text">
              <input
                class="modal-input"
                id="width"
                name="width"
                placeholder="Розмір каблучки"
              ></input>
            </label>
            <div class="modal-field">
              <input
                class="modal-check visually-hidden"
                id="nowidth"
                name="nowidth"
                type="checkbox"
                value="не знаю"
              />
              <label class="modal-text" for="nowidth">
                <span>
                  <svg class="icon-check" width="10" height="8">
                    <use href="./images/icons.svg#icon-check"></use>
                  </svg>
                </span>
                не знаю розміра
              </label>
            </div>
          </div>
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="tel"
                type="tel"
                title="+380 (99) 111-22-33"
                placeholder="+380"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-phone"></use>
              </svg>
            </span>
          </label>
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-email"></use>
              </svg>
            </span>
          </label>
          <button class="modal-btn btn" type="submit">Записатись на примірку</button>
        </form>
      `;
      modalContainer.insertAdjacentElement('afterbegin', fitting);
    } else {
      const consultation = document.createElement('div');
      consultation.classList.add('modal-order');
      consultation.innerHTML = `
        <h2 class="modal-order-title">Зворотній дзвінок</h2>
        <form method="post" class="modal-order-form">
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="name"
                type="text"
                placeholder="І’мя"
                minlength="2"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-person"></use>
              </svg>
            </span>
          </label>
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="tel"
                type="tel"
                title="+380 (99) 111-22-33"
                placeholder="+380"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-phone"></use>
              </svg>
            </span>
          </label>
          <button class="modal-btn btn" type="submit">Передзвоніть мені</button>
        </form>
      `;
      modalContainer.insertAdjacentElement('afterbegin', consultation);
    }

    // находим форму в документе
    const form = document.querySelector('.modal-order-form');

    // вспомогательная функция проверки заполненности формы
    function isFilled(details) {
      const { name, tel } = details;
      if (!name) return false;
      if (!tel) return false;
      console.log('typeForm', typeForm);
      if (typeForm == 'rings-card-btn') {
        const { email, width, nowidth } = details;
        console.log(email, width, nowidth);
        if (!email) return false;
        // if (!nowidth || !width) return false;
      }
      return true;
    }

    // навешиваем обработчик на отправку формы
    form.addEventListener('submit', async e => {
      // отменяем действие по умолчанию
      e.preventDefault();

      // получаем ссылки на элементы формы
      const name = document.querySelector('[name=name]');
      const tel = document.querySelector('[name=tel]');
      // собираем данные из элементов формы
      let details = {
        name: name.value.trim(),
        tel: tel.value.trim(),
      };
      let email, width, nowidth;
      if (typeForm === 'rings-card-btn') {
        email = document.querySelector('[name=email]');
        width = document.querySelector('[name=width]');
        nowidth = document.querySelector('[name=nowidth]');
        details.email = email.value.trim();
        if (!width.value.trim()) {
          details.nowidth = nowidth.value;
        } else {
          details.width = width.value.trim();
        }
      }
      // console.log('details', details);

      // если поля не заполнены - прекращаем обработку
      if (!isFilled(details)) return;

      // подготавливаем данные для отправки
      let formBody = [];
      for (let property in details) {
        // кодируем названия и значения параметров
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + '=' + encodedValue);
      }

      // склеиваем параметры в одну строку
      formBody = formBody.join('&');

      // выполняем отправку данных в Google Apps
      try {
        const result = await postDataApi(formBody);
        //   .then(res =>
        //   console.log(res)
        // );
        console.log('result', result.type);
        //   .catch(err => alert('Ошибка!'));
        // .then((res) => console.log(res));

        if (result.type === 'success') {
          name.value = '';
          tel.value = '';
          email.value = '';
          width.value = '';
          nowidth.value = false;
          alert('Спасибо за заявку!');
        }
        if (result.type === 'error') {
          alert(`Сталась помилка. Спробуйте ще раз( ${result.errors}`);
        }
      } catch (error) {}
    });
  }
}
