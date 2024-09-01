function refreshTime() {
  var timeDisplay = document.getElementById("mel-local-time");
  var timeString = new Date().toLocaleTimeString("en-US", {timeZone: "Australia/Melbourne"});
  timeDisplay.innerHTML = timeString;
}

setInterval(refreshTime, 1000);

