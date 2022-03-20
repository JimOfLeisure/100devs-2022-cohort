const size = 8;
const tiles = ' #';
let outString = '';
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    outString += tiles[(i + j) % 2];
  }
  outString += '\n';
}
console.log(outString);
