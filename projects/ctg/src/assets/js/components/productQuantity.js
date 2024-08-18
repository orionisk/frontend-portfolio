export const productQuantity = (start = 1, min = 1, max = 100) => ({
  quantity: start,
  min,
  max,
  changeQ(s) {
    const tmp = this.quantity + s;
    if (tmp < this.min || tmp > this.max) return;
    this.quantity += s;
  }
});
