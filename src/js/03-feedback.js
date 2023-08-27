import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);

const eventItmes = {
  form: form,
  emailInput: form.elements[`email`],
  messageInput: form.elements[`message`],
};

console.log(eventItmes);

const LOCAL_KEY = 'feedback-form-state';
const getDataStorage = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
console.log(getDataStorage);

eventItmes.emailInput.value = getDataStorage.email || ``;
eventItmes.messageInput.value = getDataStorage.message || ``;

function saveData() {
  const data = {
    email: eventItmes.emailInput.value,
    message: eventItmes.messageInput.value,
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

form.addEventListener(`input`, throttle(saveData, 500));

form.addEventListener(`submit`, resFoo);

function resFoo(event) {
  event.preventDefault();
  form.reset();
  localStorage.clear();
}
