import { isValidForm } from './validate';

const formInit = (form, url, success, error, data) => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!isValidForm(form)) return;

    const body = new FormData(this);

    if (data) Object.entries(data).forEach(arr => body.append(arr[0], arr[1]));

    const settingsFormData = JSON.parse(
      localStorage.getItem('settingsFormData')
    );
    if (settingsFormData)
      Object.entries(settingsFormData).forEach(arr =>
        body.append(arr[0], arr[1])
      );

    const houseItem = JSON.parse(localStorage.getItem('houseItem'));

    if (houseItem)
      Object.entries(houseItem).forEach(arr => body.append(arr[0], arr[1]));

    // console.log(...body);

    fetch(url, {
      method: 'POST',
      body
    })
      .then(() => success())
      .catch(() => error());
  });
};

export default formInit;
