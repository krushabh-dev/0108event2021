var zf_DateRegex = new RegExp(
  "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$"
);
var zf_MandArray = [
  "Name_First",
  "Name_Last",
  "SingleLine",
  "Email",
  "PhoneNumber_countrycode",
  "PhoneNumber_countrycodeVal",
  "DecisionBox",
];
var zf_FieldArray = [
  "Name_First",
  "Name_Last",
  "SingleLine",
  "Email",
  "PhoneNumber_countrycode",
  "PhoneNumber_countrycodeVal",
  "DecisionBox",
];
var isSalesIQIntegrationEnabled = false;
var salesIQFieldsArray = [];

var countDownDate = new Date("Aug 1, 2021 11:00:00").getTime();

var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time-days").innerHTML = days;
  document.getElementById("time-hours").innerHTML = hours;
  document.getElementById("time-minutes").innerHTML = minutes;
  document.getElementById("time-seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
