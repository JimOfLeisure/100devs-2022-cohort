for (let i = 1; i <= 100; i++) {
  console.log(
    ((i % 5 == 0 && 'Fizz') || '') + ((i % 3 == 0 && 'Buzz') || '') || i
  );
}
