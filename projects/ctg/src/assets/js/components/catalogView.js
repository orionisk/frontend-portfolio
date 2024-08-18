export const catalogView = (cols, colsView = 2) => ({
  colsCn(col) {
    return cols[col];
  },
  colsView
});
