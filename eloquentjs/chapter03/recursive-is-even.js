function isEven(n) {
  if (n < 2) {
    return !n;
  }
  return isEven(n - 2);
}
