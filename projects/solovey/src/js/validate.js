const delay = (fn, ms = 0) => {
	let timer = 0;
	return function(...args) {
		clearTimeout(timer);
		timer = setTimeout(fn.bind(this, ...args), ms);
	};
};

const setValidation = field => (isValid, message = '') => {
	if (isValid) {
		field.parentElement.classList.remove('invalid');
		field.parentElement.classList.add('valid');
		field.nextSibling.textContent = '';
		return true;
	} else {
		field.parentElement.classList.remove('valid');
		field.parentElement.classList.add('invalid');
		field.nextSibling.textContent = message;
		return false;
	}
};

const isEmpty = field => field.value.trim() === '';

const isValidName = field => {
	const v = setValidation(field);
	if (isEmpty(field))
		return v(false);

	return v(true);
};

const isValidPhone = field => {
	const v = setValidation(field);
	if (isEmpty(field))
		return v(false);
	const valid = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(field.value);
	if (!valid)
		return v(false);
	return v(true);
};

const isValidEmail = field => {
	const v = setValidation(field);
	if (isEmpty(field))
		return v(false);
	const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(field.value);
	if (!valid)
		return v(false);
	return v(true);
};

const isValidInput = {
	'name': isValidName,
	'phone': isValidPhone,
	'email': isValidEmail
};

const inputsEvent = inputs =>
	inputs.forEach(input => input.addEventListener('keyup',
		delay(() => isValidInput[input.name](input), 1250))
	);

const isValidForm = form => {
	const inputs = form.querySelectorAll('input');
	return [...inputs].reduce((acc, curr) => isValidInput[curr.name](curr) && acc, true);
};

export { isValidForm, inputsEvent };