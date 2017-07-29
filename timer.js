const loadTime = Date.now(),
  endTime = loadTime + 11200000;

var timerInterval = setInterval( function() {
  const currentTime = Date.now();
  
  var timeDiff = endTime - currentTime,
    seconds = ( timeDiff / 1000 ),
    minutes = ( seconds / 60 ),
    hours = ( minutes / 60 );
    console.log(minutes)
  console.log( minutesLeft );
  if ( endTime < currentTime ) {
    clearInterval( timerInterval ); 
  }
}, 1000);
