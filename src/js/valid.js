function creatError(error, element) {
  const input = document.querySelector(`#${element}`);
  const err = document.createElement('div');
  err.classList.add('modal__error');
  err.innerText = error;
  input.insertAdjacentElement('afterend', err);
  setTimeout(() => err.remove(), 1000);
}

export default function formValid(form) {
  const name = form.get('name');
  const tell = form.get('phone');
  const email = form.get('email');
  const validTell = /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g.test(tell);
  const validName = /^\S([А-Яа-яA-Za-z \s]{2,20})$/gm.test(name);
  const validMail = /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u.test(email);
  let indexValid = true;
  if (!validTell) {
    creatError('Не верно указан номер', 'phone');
    indexValid = false;
  }
  if (!validName) {
    creatError('Не верно указано имя', 'name');
    indexValid = false;
  }
  if (!validMail) {
    creatError('Не верно указано почта', 'email');
    indexValid = false;
  }
  return indexValid;
}
