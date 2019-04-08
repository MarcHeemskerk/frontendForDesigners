//cd documents
//python -m SimpleHTTPServer 8090
//ctrl + ç voor uitschakelen
//var requestURL = 'https://api.sunrise-sunset.org/json?';

var header = document.querySelector('header');
var section = document.querySelector('section');

var lat;
var lng;
var requestURL;

var yeet = 4;

var today = new Date();
today.setDate(today.getDate() + yeet);
var tommorow = new Date();
tommorow.setDate(tommorow.getDate() + 1 + yeet);
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

var getMonth = today.getMonth();
if (getMonth === 0) {
    getMonth = "Jan";
} else if (getMonth === 1) {
    getMonth = "Feb";
} else if (getMonth === 2) {
    getMonth = "Mar";
} else if (getMonth === 3) {
    getMonth = "Apr";
} else if (getMonth === 4) {
    getMonth = "May";
} else if (getMonth === 5) {
    getMonth = "Jun";
} else if (getMonth === 6) {
    getMonth = "Jul";
} else if (getMonth === 7) {
    getMonth = "Aug";
} else if (getMonth === 8) {
    getMonth = "Sep";
} else if (getMonth === 9) {
    getMonth = "Oct";
} else if (getMonth === 10) {
    getMonth = "Nov";
} else if (getMonth === 11) {
    getMonth = "Dec";
}

//convert date and year to string (this is needed for the format.).
var dateOfTommorrow = tommorow.getDate();
var dateOfTommorrowString = dateOfTommorrow.toString();
var getFullYearTommorrow = tommorow.getFullYear();
var getFullYearTommorrowSting = getFullYearTommorrow.toString();

var dateOfToday = today.getDate();
var dateOfTodayString = dateOfToday.toString();
var getFullYearToday = tommorow.getFullYear();
var getFullYearTodayString = getFullYearToday.toString();

header.addEventListener("click", function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        requestURL = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`;

        requestHandler(requestURL);
    });
});



function requestHandler(value) {

    var request = new XMLHttpRequest();
    request.open('GET', value);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        showTime(request.response);

    };

    function showTime(jsonObj) {

        var data = jsonObj;

        var sunriseData = data.results.sunrise;
        var sunsetData = data.results.sunset;

        var inputsunriseData = sunriseData;
        var outputsunsriseData = inputsunriseData.replace(/ \D+/g, '');

        var inputsunsetData = sunsetData;
        var outputsunsetData = inputsunsetData.replace(/ \D+/g, '');

        var todayDate = document.createElement('h1');
        var remaining = document.createElement('h2');
        var sunrise = document.createElement('p');
        var sunset = document.createElement('p');
        var article = document.createElement('article');

        sunrise.textContent = 'Sunrise in: ' + outputsunsriseData + " AM";
        sunset.textContent = 'Sunset In ' + outputsunsetData + " PM";
        todayDate.textContent = date;

        article.appendChild(todayDate);
        article.appendChild(sunrise);
        article.appendChild(sunset);
        article.appendChild(remaining);
        section.appendChild(article);

        setInterval(function () {
            RemainingTime(sunsetData, sunriseData)
        }, 1000);
    }
    /*
                // : weg halen bij sunrise
                var inputsunriseData = sunriseData;
                var cleantxt = inputsunriseData.replace(/\:/g, "");
                var outputsunsriseData = cleantxt.replace(/ \D+/g, '');
                console.log(outputsunsriseData);

                // : weg halen bij sunset
                var inputsunsetData = sunsetData;
                var cleantxt = inputsunsetData.replace(/\:/g, "");
                var outputsunsetData = cleantxt.replace(/ \D+/g, '');
                console.log(outputsunsetData);

                // : weg halen bij huidige tijd
                var inputTime = time;
                var cleantxt = inputTime.replace(/\:/g, "");
                var outputTime = cleantxt.replace(/ \D+/g, '');
                console.log(outputTime);


                outputsunsriseData = parseInt(outputsunsriseData);
                outputsunsetData = parseInt(outputsunsetData);
                outputTime = parseInt(outputTime);


                var remainingTime = outputsunsetData - outputTime;

                if (remainingTime < 0) {
                    if (outputsunsriseData < outputTime) {
                        var int = 120000 - outputTime;
                        var int = int + outputsunsriseData;
                        remainingTime = int;

                    } else if (outputsunsriseData > outputTime) {
                        var int = outputsunsriseData - outputTime;
                        remainingTime = int;
                    }
                }


        console.log(outputsunsetData);
        console.log(outputTime);
*/
}

function RemainingTime(valueSunset, valueSunrise) {
    // Sunrise date
    var countDownDateSunrise = new Date(getMonth + " " + dateOfTommorrowString + ", " + getFullYearTommorrowSting + " " + valueSunrise).getTime();
    // Sunset date
    var countDownDateSunset = new Date(getMonth + " " + dateOfTodayString + ", " + getFullYearTodayString + " " + valueSunset).getTime();


    var now = new Date().getTime();
    var remaining = document.querySelector('h2');

    var distanceSunset = countDownDateSunset - now;
    var distanceSunrise = countDownDateSunrise - now;


    //format ("Mar 29, 2019 6:08:21")
    //var countDownDate = new Date("Mar 29, 2019 6:08:21").getTime();
    if (distanceSunset > distanceSunrise || distanceSunset < 0) {
        // Doe dit als
        var days = Math.floor(distanceSunrise / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distanceSunrise % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distanceSunrise % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distanceSunrise % (1000 * 60)) / 1000);

        remaining.innerHTML = 'Sunrise in: ' + days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

    }
    else {
        var days = Math.floor(distanceSunset / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distanceSunset % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distanceSunset % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distanceSunset % (1000 * 60)) / 1000);

        remaining.innerHTML = 'Sunrise in: ' + days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    }
}
