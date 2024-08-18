import Iodine from '@kingshott/iodine';

/** @param {import('alpinejs').Alpine} Alpine */
export default function (Alpine) {
  const setDirty = (prop, state, data) => {
    if (prop) return (data.$v[prop].dirty = state);
    for (const key in data.validations) {
      Object.assign(data.$v[key], { dirty: state });
    }
  };

  const assert = (props, iodine, data) => {
    const { fields, valid } = iodine.assert(props, data.validations);

    const b = { valid };
    for (const [key, { valid, rule }] of Object.entries(fields)) {
      const dirty = data.$v[key].dirty;
      const r = rule || 'valid';
      Object.assign(b, {
        [key]: { [r]: dirty && !valid, dirty: dirty, valid, error: dirty && !valid }
      });
    }
    Object.assign(data.$v, b);
  };

  const pickProps = (rules, data) => {
    const fields = {};
    for (const key in rules) {
      Object.assign(fields, { [key]: data[key] });
    }
    return fields;
  };

  const updateRules = (customRules = {}, iodine) => {
    for (const [rule, fn] of Object.entries(customRules)) {
      if (iodine.messages[rule]) break;
      iodine.rule(rule, fn);
      iodine.setErrorMessage(rule, rule);
    }
  };

  const validate = (rules, iodine, data) => {
    const fields = pickProps(rules, data);
    return assert(fields, iodine, data);
  };

  const touch = (iodine, data, prop) => {
    updateRules(data.$customRules, iodine);
    setDirty(prop, true, data);
    validate(data.validations, iodine, data);
  };

  const reset = (iodine, data, prop) => {
    updateRules(data.$customRules, iodine);
    setDirty(prop, false, data);
    validate(data.validations, iodine, data);
  };

  Alpine.directive(
    'validate',
    (
      el,
      { value, modifiers, expression },
      { Alpine, effect, cleanup, evaluate, evaluateLater }
    ) => {
      const iodine = new Iodine();
      const data = Alpine.$data(el);

      const addRules = customRules => {
        data.$customRules = customRules;
      };

      data.$v = { valid: false };
      for (const key of Object.keys(data.validations)) {
        data.$v[key] = { dirty: false, valid: false, error: false };
      }
      data.$v.$touch = touch.bind(null, iodine, data);
      data.$v.$reset = reset.bind(null, iodine, data);
      data.$v.$addRules = addRules;

      validate(data.validations, iodine, data);

      for (const key in data.validations) {
        data.$watch(key, () => {
          validate(data.validations, iodine, data);
        });
      }
    }
  );
}
