const loadTime = Date.now(),
  endTime = loadTime + 10000;

var timerInterval = setInterval( function() {
  var currentTime = Date.now(),
    timeDiff = endTime - currentTime;

  console.log( timeDiff );
  if ( endTime < currentTime ) {
    clearInterval( timerInterval ); 
  }
}, 1000);
