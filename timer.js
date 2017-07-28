const loadTime = Date.now(),
  endTime = loadTime + 10000;

var timerInterval = setInterval( function() {
  var currentTime = Date.now();

  console.log("I print out ten times");
  if ( endTime < currentTime ) {
    clearInterval( timerInterval ); 
  }
}, 1000);
