const loadTime = Date.now();

var timerInterval = setInterval( function() {
  console.log("I will happen once");
  clearInterval(timerInterval);
}, 1000);

console.log( loadTime );

