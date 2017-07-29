const loadTime = Date.now(),
  endTime = loadTime + 11200000;

  //set time in seconds
  //set time in minutes
  //serve remaining time in seconds
  //set time in hours
  //serve remaining time in minutes

  //create another instance of the same timer

var timerInterval = setInterval( function() {
  const currentTime = Date.now();
  
  var timeDiff = endTime - currentTime,
    seconds = ( timeDiff / 1000 ),
    minutes = ( seconds / 60 ),
    hours = ( minutes / 60 );
  console.log( minutesLeft );
  if ( endTime < currentTime ) {
    clearInterval( timerInterval ); 
  }
}, 1000);
