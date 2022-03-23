//Create a stopwatch object that has four properties and three methods

const stopWatch = {};
stopWatch.color = 'black';
stopWatch.splitTime = 1.25;
stopWatch.brand = 'Timex';
stopWatch.currentTime = 3.0;
stopWatch.start = function (sw) {
  sw.currentTime = 0;
  console.log('Starting');
};
stopWatch.split = function (sw) {
  sw.splitTime = sw.currentTime;
};
stopWatch.stop = function (sw) {
  console.log('Stopping');
};

console.log(stopWatch);
