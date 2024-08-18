export const docForm = {
  email: '',
  formName: '',

  setFormName(e) {
    this.formName = e.detail;
  },

  submit() {
    this.$v.$touch();
    if (!this.$v.valid) return;
    this.$dispatch('docmodal-second');
  },
  close() {
    this.$dispatch('docmodal-close');
  },
  get validations() {
    return {
      email: ['email']
    };
  }
};
