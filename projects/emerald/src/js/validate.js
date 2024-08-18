import delay from './delay';

const validate = {
  inputTypes() {
    return {
      name: { eventType: 'input', handler: input => this.isValidName(input) },
      phone: { eventType: 'input', handler: input => this.isValidPhone(input) },
      check: {
        eventType: 'click',
        handler: input => this.isValidCheckbox(input)
      }
      // rooms: { handler: input => this.isValidRadio(input) },
      // floors: { handler: input => this.isValidRadio(input) }
    };
  },

  setValidation:
    field =>
    (isValid, message = '') => {
      const parent = field.parentElement;
      const tooltip = parent.querySelector('.input-tooltip');
      if (isValid) {
        parent.classList.remove('invalid');
        parent.classList.add('valid');
        tooltip?.classList.remove('active');
        if (tooltip) tooltip.textContent = '';
        return true;
      } else {
        parent.classList.remove('valid');
        parent.classList.add('invalid');
        tooltip?.classList.add('active');
        if (tooltip) tooltip.textContent = message;
        return false;
      }
    },

  isEmpty: field => field.value.trim() === '',

  isValidName(field) {
    const v = this.setValidation(field);
    if (this.isEmpty(field)) return v(false);

    return v(true);
  },

  isValidPhone(field) {
    const v = this.setValidation(field);
    if (this.isEmpty(field)) return v(false);
    const valid =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
        field.value
      );
    if (!valid) return v(false);
    return v(true);
  },

  isValidEmail(field) {
    const v = this.setValidation(field);
    if (this.isEmpty(field)) return v(false);
    const valid =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        field.value
      );
    if (!valid) return v(false);
    return v(true);
  },

  isValidCheckbox(field) {
    const f = field.parentNode;
    const v = this.setValidation(f);
    if (!field.checked) return v(false);

    return v(true);
  },

  isValidRadio(field) {
    const v = this.setValidation(field);
    if (this.isEmpty(field)) return v(false);
    return v(true);
  },

  isValidInput(input) {
    return this.inputTypes()[input.name];
  }
};

const validateInput = input => {
  let target = input;

  if (input.name === 'check') target = input.parentNode;

  if (!validate.inputTypes()[input.name]) return false;
  const event = validate.inputTypes()[input.name].eventType;

  if (!event) return;

  target.addEventListener(
    event,
    delay(() => validate.inputTypes()[input.name].handler(input), 1000)
  );
  return true;
};

const isValidInput = input => {
  if (validate.inputTypes()[input.name] === undefined) return true;
  return validate.inputTypes()[input.name].handler(input);
};

const isValidForm = form => {
  const inputs = form.querySelectorAll('input');
  return [...inputs].reduce((acc, curr) => isValidInput(curr) && acc, true);
};

export { isValidForm, validateInput, isValidInput };
