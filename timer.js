const loadTime = Date.now(),
  endTime = loadTime + 62000;


  //serve remaining time in minutes
  //serve remaining time in seconds
  //create another instance of the same timer

var timerInterval = setInterval( function() {
  const currentTime = Date.now();
  
  var timeDiff = endTime - currentTime,
    seconds = ( timeDiff / 1000 ),
    minutes = ( seconds / 60 ),
    hours = ( minutes / 60 ),
    minutesLeft = minutes % 60, //grab remainder of minutes left after hours
    secondsLeft = seconds % 60; //grab remainder of seconds left after minutes

    secondElement = document.getElementsByClassName( 'seconds' )[0],
    minuteElement = document.getElementsByClassName( 'minutes' )[0],
    hourElement = document.getElementsByClassName( 'hours' )[0];

    hourElement.innerHTML = Math.floor(hours);
    minuteElement.innerHTML = Math.floor(minutesLeft);
    secondElement.innerHTML = Math.ceil(secondsLeft);

  if ( endTime < currentTime ) {
    clearInterval( timerInterval ); 
  }
}, 1000);
