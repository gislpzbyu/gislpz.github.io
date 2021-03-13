function windChill() {
  var tempF = 80;
  var speed = 20;
  var chill =
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * tempF * Math.pow(speed, 0.16);
  chill = Math.round(chill * 1) / 1;
  document.getElementById("windChill").innerHTML = chill;
  document.getElementById("temp").innerHTML = tempF;
  document.getElementById("windSpeed").innerHTML = speed;
}
