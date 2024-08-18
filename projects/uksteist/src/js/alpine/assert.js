export default class Iodine {
  validators = {
    after: (value, after) => this.#compare(value, after, 'more', false),
    afterOrEqual: (value, after) => this.#compare(value, after, 'more', true),
    array: value => Array.isArray(value),
    before: (value, before) => this._compare(value, before, 'less', false),
    beforeOrEqual: (value, before) => this._compare(value, before, 'less', true),
    boolean: value => [true, false].includes(value),
    date: value =>
      value && Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value),
    different: (value, different) => value != different,
    endsWith: (value, sub) => this.String(value) && value.endsWith(sub),
    email: value => {
      let regex =
        "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";
      return new RegExp(regex).test(String(value).toLowerCase());
    },
    falsy: value => [0, '0', false, 'false'].includes(value),
    in: (value, options) =>
      (typeof options === 'string' ? options.split(',') : options).includes(value),
    integer: value => Number.isInteger(value) && parseInt(value).toString() === value.toString(),
    json: value => {
      try {
        return typeof JSON.parse(value) === 'object';
      } catch (e) {
        return false;
      }
    },
    max: (value, limit) => parseFloat(value) <= limit,
    min: (value, limit) => parseFloat(value) >= limit,
    maxLength: (value, limit) => (typeof value === 'string' ? value.length <= limit : false),
    minLength: (value, limit) => (typeof value === 'string' ? value.length >= limit : false),
    notIn: (value, options) => !this.validators.in(value, options),
    numeric: value => !isNaN(parseFloat(value)) && isFinite(value),
    optional: value => [null, undefined, ''].includes(value),
    regexMatch: (value, expression) => new RegExp(expression).test(String(value)),
    required: value => !this.validators.optional(value),
    same: (value, same) => value == same,
    startsWith: (value, sub) => this.validators.string(value) && value.startsWith(sub),
    string: value => typeof value === 'string',
    truthy: value => [1, '1', true, 'true'].includes(value),
    url: value => {
      let regex =
        '^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$';
      return new RegExp(regex).test(String(value).toLowerCase());
    },
    uuid: value => {
      let regex = '^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$';
      return new RegExp(regex).test(String(value).toLowerCase());
    }
  };

  rule(name, closure) {
    Iodine.prototype[`assert${this._title(name)}`] = closure;
  }
  #compare(first, second, type, equals = false) {
    if (!this.validators.date(first)) return false;

    if (!this.validators.date(second) && !this.validators.integer(second)) return false;

    second = typeof second === 'number' ? second : second.getTime();

    if (type === 'less' && equals) return first.getTime() <= second;
    if (type === 'less' && !equals) return first.getTime() < second;
    if (type === 'more' && equals) return first.getTime() >= second;
    if (type === 'more' && !equals) return first.getTime() > second;
  }
  #missing() {
    return {
      valid: false,
      rule: 'None',
      error: 'Rules exist, but no value was provided to check'
    };
  }
  #title(value) {
    return `${value[0].toUpperCase()}${value.slice(1)}`;
  }
  #prepare(value, rules = []) {
    if (!rules.length) return [];

    if (rules[0] === 'optional' && this.validators.optional(value)) return [];

    return rules
      .filter(rule => rule !== 'optional')
      .map(rule =>
        typeof rule === 'string'
          ? [rule, this.#title(rule.split(':').shift()), rule.split(':').slice(1).join(':')]
          : [`${rule.rule}:${rule.param}`, this.#title(rule.rule), rule.param]
      );
  }
  #validate(value, rules) {
    for (let index in (rules = this.#prepare(value, rules))) {
      if (!this[`assert${rules[index][1]}`].apply(this, [value, rules[index][2]])) {
        return {
          valid: false,
          rule: rules[index][0],
          error: this._error(rules[index][0])
        };
      }
    }

    return {
      valid: true,
      rule: '',
      error: ''
    };
  }
  assert(values, schema) {
    if (Array.isArray(schema)) {
      return this.#validate(values, schema);
    }

    let keys = Object.keys(schema);

    let result = { valid: true, fields: {} };

    for (let i = 0; i < keys.length; i++) {
      result.fields[keys[i]] = values.hasOwnProperty(keys[i])
        ? this._validate(values[keys[i]], schema[keys[i]])
        : this.#missing();

      if (!result.fields[keys[i]].valid) {
        result.valid = false;
      }
    }

    return result;
  }
}
