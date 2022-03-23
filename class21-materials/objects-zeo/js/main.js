//Create a stopwatch object that has four properties and three methods

const stopWatch = {};
stopWatch.color = 'black';
stopWatch.splitTime = 1.25;
stopWatch.split2 = 2.5;
stopWatch.currentTime = 3.0;
stopWatch.start = function () {};
stopWatch.split = function (stopwatch) {
  stopwatch.splitTime = stopwatch.currentTime;
};
stopWatch.stop = function () {};
