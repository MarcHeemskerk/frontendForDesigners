var startGIf = new Date().getTime() / 1000;
var endGIf = startGIf + 8.5;
var rotate = 0;

var sky = document.querySelector('.playground_sunSetRise__sky');

var hours = new Date().getHours();
if (hours > 6 && hours < 18) {
    sky.style.backgroundColor = "#6daceb";
} else {
    sky.style.backgroundColor = "#010b13";
}

// make Array to covert number to string.
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

// changes
// make an Array for getting images url
var background_images = new Array();
background_images[0] = "images/img_0.png";
background_images[1] = "images/img_1.png";
background_images[2] = "images/img_2.png";
background_images[3] = "images/img_3.png";
background_images[4] = "images/img_4.png";
background_images[5] = "images/img_5.png";
background_images[6] = "images/img_6.png";
background_images[7] = "images/img_7.png";
background_images[8] = "images/img_8.png";
background_images[9] = "images/img_9.png";
background_images[10] = "images/img_10.png";
background_images[11] = "images/img_10.png";
background_images[12] = "images/img_10.png";
background_images[13] = "images/img_10.png";
background_images[14] = "images/img_10.png";
background_images[15] = "images/img_10.png";
background_images[16] = "images/img_10.png";
background_images[17] = "images/img_10.png";
background_images[18] = "images/img_10.png";
background_images[19] = "images/img_10.png";
background_images[20] = "images/night.png";

// Get html elements
var remaining = document.querySelector('.playground_sunSetRise__title');
var subtitle = document.querySelector('.playground_sunSetRise__subtitle');
var resetdate = document.querySelector('.playground_sunSetRise__resettitle');
var sunrise = document.querySelector('.playground_sunSetRise__sunrisevalue');
var sunset = document.querySelector('.playground_sunSetRise__sunsetvalue');
var backgroundImage = document.querySelector('.playground_sunSetRise__city-static');
var backgroundImageGif = document.querySelector('.playground_sunSetRise__city-gif');
var buttonLeft = document.querySelector('.playground_sunSetRise__buttonLeft');
var buttonRight = document.querySelector('.playground_sunSetRise__buttonRight');

//OLD HRLM ELEMENTS!
/*
var sun = document.querySelector('.playground_sunSetRise__sun-container');
var moon = document.querySelector('.playground_sunSetRise__moon-container');
var sky = document.querySelector('.playground_sunSetRise__sky');
var number = document.querySelector('.playground_sunSetRise__days');
*/

// Json requirements
var lat;
var lng;
var requestURL;
var night;
var day;
var plusdays;
var parts;

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

document.addEventListener("DOMContentLoaded", function (e) {
    clearInterval(intervalID);

    //Set to invisable.
    buttonLeft.style.opacity = "0";
    resetdate.style.opacity = "0";
    remaining.style.opacity = "0";
    subtitle.style.opacity = "0";
    sunrise.style.opacity = "0";
    sunset.style.opacity = "0";

    //devine plusdays;
    plusdays = 0;
    getDate(0);

    // Run de scripts once
    getSunsetSunrise(currentDate);
});

// Listen to enter key on entire document
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 39) { //checks whether the pressed key is "up"
        plusdate();
    } else if (e.keyCode === 37) { //checks whether the pressed key is "down"
        mindate();
    } else if (e.keyCode === 82) { //checks whether the pressed key is "r"
        resetdate();
    }
});

function plusdate() {
    plusdays++;
    console.log(plusdays);

    // Solving the --days errors
    if (plusdays <= 0) {
        plusdays = 0;
        buttonLeft.style.opacity = "0";
        resetdate.style.opacity = "0";
    } else {
        buttonLeft.style.opacity = "1";
        resetdate.style.opacity = "1";
    }
    //A floating point number parsed from the given value. If the value cannot be converted to a number, NaN is returned.
    getDate(parseFloat(plusdays));

    // Run de scripts once
    getSunsetSunrise(currentDate);
};

function mindate() {
    plusdays--;
    console.log(plusdays);

    // Solving the --days errors
    if (plusdays <= 0) {
        plusdays = 0;
        buttonLeft.style.opacity = "0";
        resetdate.style.opacity = "0";
    } else {
        buttonLeft.style.opacity = "1";
        resetdate.style.opacity = "1";
    }
    //A floating point number parsed from the given value. If the value cannot be converted to a number, NaN is returned.
    getDate(parseFloat(plusdays));

    // Run de scripts once
    getSunsetSunrise(currentDate);
};

function dateresetter() {
    plusdays = 0;
    console.log(plusdays);

    // Solving the --days errors
    if (plusdays <= 0) {
        plusdays = 0;
        buttonLeft.style.opacity = "0";
        resetdate.style.opacity = "0";
    } else {
        buttonLeft.style.opacity = "1";
        resetdate.style.opacity = "1";
    }
    //A floating point number parsed from the given value. If the value cannot be converted to a number, NaN is returned.
    getDate(parseFloat(plusdays));

    // Run de scripts once
    getSunsetSunrise(currentDate);
};

buttonRight.addEventListener("click", plusdate);
buttonLeft.addEventListener("click", mindate);
resetdate.addEventListener("click", dateresetter);

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
    console.log("JSON Sunrise: " + sunriseData);
    console.log("JSON Sunset: " + sunsetData);



    clearInterval(intervalID);
    intervalID = setInterval(function () {
        remainingTime(sunsetData, sunriseData)
    }, 1000);
}

function changeOpacity() {
    backgroundImage.style.opacity = "1";
    remaining.style.opacity = "1";
    subtitle.style.opacity = "1";
    sunrise.style.opacity = "1";
    sunset.style.opacity = "1";
}

function remainingTime(valueSunset, valueSunrise) {

    if (new Date().getTime() / 1000 < endGIf) {
        return;
    }

    changeOpacity();

    // https://www.w3schools.com/jsref/jsref_split.asp
    // Sunrise date
    var countDownDateSunrise = new Date(getMonthYeet + " " + getDateYeet + ", " + getYearYeet + " " + valueSunrise).getTime() + (2 * 60 * 60 * 1000);
    // Split the string for adding of summertime

    parts = valueSunrise.split(":");
    // make number of string to add 2 hours
    parts[0] = parseInt(parts[0]) + 2;
    valueSunrise = parts[0] + ":" + parts[1] + ":" + parts[2];

    // Sunset date
    var countDownDateSunset = new Date(getMonthYeet + " " + getDateYeet + ", " + getYearYeet + " " + valueSunset).getTime() + (2 * 60 * 60 * 1000);
    // Split the string for adding of summertime
    parts = valueSunset.split(":");
    // make number of string to add 2 hours
    parts[0] = parseInt(parts[0]) + 2;
    valueSunset = parts[0] + ":" + parts[1] + ":" + parts[2];

    // Sunrise tomorrow
    var countDownDateSunsetTomorrow = new Date(getMonthYeetTomorrow + " " + getDateYeetTomorrow + ", " + getYearYeetTomorrow + " " + valueSunrise).getTime();
    var dezeManBlijftVeesteLangKijken = 0;
    var now = new Date().getTime();
    var distanceSunset = countDownDateSunset - now;
    var distanceSunrise = countDownDateSunrise - now;
    var distanceSunriseTomorrow = countDownDateSunsetTomorrow - now;

    // format ("Mar 29, 2019 6:08:21")
    // var countDownDate = new Date("Mar 29, 2019 6:08:21").getTime();
    // https://www.w3schools.com/howto/howto_js_countdown.asp
    if (distanceSunrise > 0) {
        // Show sunrise time
        night = "night";
        var days = Math.floor(distanceSunrise / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distanceSunrise % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distanceSunrise % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distanceSunrise % (1000 * 60)) / 1000);
        sunAndMoon(hours, minutes, seconds, night);
        remaining.innerHTML = 'Sunrise in: ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        subtitle.innerHTML = getDateYeet + " / " + getMonthYeet + " / " + getYearYeet;
        sunrise.innerHTML = "Sunrise Time: " + valueSunrise;
        sunset.innerHTML = "Sunset Time: " + valueSunset;
    } else if (distanceSunrise < 0 && distanceSunset > 0) {
        day = "day";
        var days = Math.floor(distanceSunset / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distanceSunset % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distanceSunset % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distanceSunset % (1000 * 60)) / 1000);
        sunAndMoon(hours, minutes, seconds, day);
        remaining.innerHTML = 'Sunset in: ' + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        subtitle.innerHTML = getDateYeet + " / " + getMonthYeet + " / " + getYearYeet;
        sunrise.innerHTML = "Sunset Time: " + valueSunset;
        sunset.innerHTML = "Sunrise Time: " + valueSunrise;
    } else {
        dezeManBlijftVeesteLangKijken++;
        clearInterval(intervalID);
        getDate(parseFloat(plusdays + dezeManBlijftVeesteLangKijken));
        getSunsetSunrise(currentDate);
    }
}

function sunAndMoon(h, m, s, dorn) {
    if (dorn == "day") {
        backgroundImage.style.backgroundImage = "url('" + background_images[h] + "')";
        backgroundImage.style.opacity = '1';
        backgroundImageGif.style.opacity = '0';
    } else if (dorn == "night") {
        backgroundImage.style.backgroundImage = "url('" + background_images[20] + "')";
        backgroundImage.style.opacity = '1';
        backgroundImageGif.style.opacity = '0';
    } else {
        console.log('you have been yeeted');
    }
}

// THE KONAMI CODE
// a key map of allowed keys (same as array but with specific locations)
// https://stackoverflow.com/questions/31626852/how-to-add-konami-code-in-a-website-based-on-html/31627191
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};

// the official Konami Code sequence
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;
document.addEventListener('keydown', function (e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];
    // compare the key with the required key
    if (key == requiredKey) {
        // move to the next key in the konami code sequence
        konamiCodePosition++;
        // if the last key is reached, activate YEETMODE
        if (konamiCodePosition == konamiCode.length) {
            yeetMode();
            konamiCodePosition = 0;
        }
    } else {
        konamiCodePosition = 0;
    }
});

function yeetMode() {
    console.log('yeetMode activated');
    rotate = rotate + 360;
    backgroundImage.style.transform = 'rotate(' + rotate + 'deg)';
    backgroundImageGif.style.transform = 'rotate(' + rotate + 'deg)';
}
