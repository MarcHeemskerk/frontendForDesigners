 // Get right month

 var sky = document.querySelector('.playground_sunSetRise__sky');
 var backgroundImage = document.querySelector('.playground_sunSetRise__city-static');

 var hours = new Date().getHours();

 if (hours > 6 && hours < 18) {
     sky.style.backgroundColor = "#87ceeb";
 } else {
     sky.style.backgroundColor = "#010b13";
 }

 var startGIf = new Date().getTime() / 1000;
 var endGIf = startGIf + 8;

 var month = new Array();
 month[0] = "Jan";
 month[1] = "Feb";
 month[2] = "Mar";
 month[3] = "Apr";
 month[4] = "May";
 month[5] = "Jun";
 month[6] = "Jul";
 month[7] = "Aug";
 month[8] = "Sep";
 month[9] = "Oct";
 month[10] = "Nov";
 month[11] = "Dec";

 // Get html elements
 var number = document.querySelector('.playground_sunSetRise__days');
 var remaining = document.querySelector('.playground_sunSetRise__title');
 var subtitle = document.querySelector('.playground_sunSetRise__subtitle');
 var sunrise = document.querySelector('.playground_sunSetRise__sunrisevalue');
 var sunset = document.querySelector('.playground_sunSetRise__sunsetvalue');
 var sun = document.querySelector('.playground_sunSetRise__sun-container');
 var moon = document.querySelector('.playground_sunSetRise__moon-container');

 console.log(remaining);
 console.log(number);

 // Json requirements
 var lat;
 var lng;
 var requestURL;
 var night;
 var day;

 // current & Next day
 var currentDate;
 var nextDay;

 // User day
 var getDateYeet;
 var getMonthYeet;
 var getYearYeet;

 // Next day
 var getDateYeetTomorrow;
 var getMonthYeetTomorrow;
 var getYearYeetTomorrow;

 // Interval for countdown
 var intervalID;

 // Listen to enter key on entire document
 document.addEventListener("keydown", function (e) {
     if (e.keyCode === 13) { //checks whether the pressed key is "Enter"
         clearInterval(intervalID);
         console.log(number.value);
         if (number.value == '') {
             getDate(0);
         } else {
             getDate(parseFloat(number.value));
         }
         // Run de scripts once
         getSunsetSunrise(currentDate);
     }
     else if (e.keyCode === 38) { //checks whether the pressed key is "Enter"
         clearInterval(intervalID);
         console.log(number.value);
         yeet ++
         if (number.value == '') {
             getDate(0);
         } else {
             getDate(parseFloat(number.value));
         }
         // Run de scripts once
         getSunsetSunrise(currentDate);
     }
 });


 document.addEventListener("DOMContentLoaded", function (e) {
     clearInterval(intervalID);
     console.log(number.value);
     if (number.value == '') {
         getDate(0);
     } else {
         getDate(parseFloat(number.value));
     }
     // Run de scripts once
     getSunsetSunrise(currentDate);

 });

 // Get date with offset
 function getDate(yeet) {
     // Day of user
     currentDate = new Date();
     currentDate.setDate(currentDate.getDate() + yeet);

     // Day/Month/Year of user
     getMonthYeet = month[currentDate.getMonth()];

     getDateYeet = currentDate.getDate();
     getDateYeet = getDateYeet.toString();
     getYearYeet = currentDate.getFullYear();
     getYearYeet = getYearYeet.toString();

     // Next day
     nextDay = new Date();
     nextDay.setDate(nextDay.getDate() + yeet + 1);

     // Day/Month/Year of next day
     getMonthYeetTomorrow = month[nextDay.getMonth()];
     getDateYeetTomorrow = nextDay.getDate();
     getDateYeetTomorrow = getDateYeetTomorrow.toString();
     getYearYeetTomorrow = nextDay.getFullYear();
     getYearYeetTomorrow = getYearYeetTomorrow.toString();

     return currentDate;
 }

 function getSunsetSunrise(currentDate) {
     date = currentDate.getFullYear() + '/' + currentDate.getMonth() + '/' + currentDate.getDate();
     if (lat == undefined || lng == undefined) {
         // Get location user
         navigator.geolocation.getCurrentPosition(function (position) {
             lat = position.coords.latitude;
             lng = position.coords.longitude;
             requestURL = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`;

             secondPart(requestURL);
         });
     } else {
         requestURL = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`;
         secondPart(requestURL);
         subtitle.innerHTML = getDateYeet + " / " + getMonthYeet + " / " + getYearYeet;
     }
 }

 // Get sunset and sunrise
 function secondPart(value) {
     var request = new XMLHttpRequest();
     request.open('GET', value);
     request.responseType = 'json';
     request.send();
     request.onload = function () {
         controller(request.response);
     }
 }

 // Link everything together and set the countdown timer
 function controller(jsonObj) {
     var sunriseData = jsonObj.results.sunrise;
     var sunsetData = jsonObj.results.sunset;

     console.log(jsonObj.results);
     console.log('Sunrise' + sunriseData);
     console.log('Sunset' + sunsetData);

     clearInterval(intervalID);
     intervalID = setInterval(function () {
         remainingTime(sunsetData, sunriseData)
     }, 1000);
 }

 function remainingTime(valueSunset, valueSunrise) {

     // Sunrise date
     var countDownDateSunrise = new Date(getMonthYeet + " " + getDateYeet + ", " + getYearYeet + " " + valueSunrise).getTime();

     // Sunset date
     var countDownDateSunset = new Date(getMonthYeet + " " + getDateYeet + ", " + getYearYeet + " " + valueSunset).getTime();

     // Sunrise tomorrow
     var countDownDateSunsetTomorrow = new Date(getMonthYeetTomorrow + " " + getDateYeetTomorrow + ", " + getYearYeetTomorrow + " " + valueSunrise).getTime();

     var dezeManBlijftVeesteLangKijken = 0;

     var now = new Date().getTime();

     var distanceSunset = countDownDateSunset - now;
     var distanceSunrise = countDownDateSunrise - now;
     var distanceSunriseTomorrow = countDownDateSunsetTomorrow - now;

     //format ("Mar 29, 2019 6:08:21")
     //var countDownDate = new Date("Mar 29, 2019 6:08:21").getTime();
     if (distanceSunrise > 0) {
         // Show sunrise time
         night = "night";
         var days = Math.floor(distanceSunrise / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distanceSunrise % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distanceSunrise % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distanceSunrise % (1000 * 60)) / 1000);

         sunAndMoon(hours, minutes, seconds, night);

         remaining.innerHTML = 'Sunrise in: ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

         sunrise.innerHTML = "Sunrise Time:" + valueSunrise;
         sunset.innerHTML = "Sunset Time:" + valueSunset;

     } else if (distanceSunrise < 0 && distanceSunset > 0) {

         day = "day";
         var days = Math.floor(distanceSunset / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distanceSunset % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distanceSunset % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distanceSunset % (1000 * 60)) / 1000);

         sunAndMoon(hours, minutes, seconds, day);

         remaining.innerHTML = 'Sunset in: ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

         sunrise.innerHTML = "Sunset Time:" + valueSunset;
         sunset.innerHTML = "Sunrise Time:" + valueSunrise;
     }

     else {
         dezeManBlijftVeesteLangKijken++;
         clearInterval(intervalID);
         getDate(parseFloat(number.value + dezeManBlijftVeesteLangKijken));
         getSunsetSunrise(currentDate);
     }
 }

 function sunAndMoon(h, m, s, dorn) {
     if (dorn == "day") {
         console.log("day");
         sun.style.bottom = "60%";
         moon.style.bottom = "0%";
         sky.style.backgroundColor = "#87ceeb";

     } else if (dorn == "night") {
         console.log("night");
         sun.style.bottom = "0%";
         moon.style.bottom = "60%";
         sky.style.backgroundColor = "#010b13";
     }else{
         console.log('you have been yeeted');
     }
 }
