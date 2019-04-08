

var btn = document.querySelectorAll("button");
var images = document.querySelectorAll(".photos");
var dots = document.querySelectorAll(".fa-circle");
var PlayAndPause = document.querySelector("header i");
var allDots = document.querySelector(".circle");
console.log("alldots",allDots);
var ShowSlide = 1;
var interval;
var intervalTime = 2000;


function dotRefresh() {
    var j;
    for (j = 0; j < dots.length; j++) {
        dots[j].classList.remove("fas");
        dots[j].classList.add("far");
    }

    if (ShowSlide === 10) {
        dots[9].classList.remove("far");
        dots[9].classList.add("fas");
    } else if (ShowSlide === 9) {
        dots[8].classList.remove("far");
        dots[8].classList.add("fas");
    } else if (ShowSlide === 8) {
        dots[7].classList.remove("far");
        dots[7].classList.add("fas");
    } else if (ShowSlide === 7) {
        dots[6].classList.remove("far");
        dots[6].classList.add("fas");
    } else if (ShowSlide === 6) {
        dots[5].classList.remove("far");
        dots[5].classList.add("fas");
    } else if (ShowSlide === 5) {
        dots[4].classList.remove("far");
        dots[4].classList.add("fas");
    } else if (ShowSlide === 4) {
        dots[3].classList.remove("far");
        dots[3].classList.add("fas");
    } else if (ShowSlide === 3) {
        dots[2].classList.remove("far");
        dots[2].classList.add("fas");
    } else if (ShowSlide === 2) {
        dots[1].classList.remove("far");
        dots[1].classList.add("fas");
    } else if (ShowSlide === 1) {
        dots[0].classList.remove("far");
        dots[0].classList.add("fas");
    }
}


function showImages(nummer) {

    /* ____ Change Value of ShowSlide ____ */
    if (nummer > images.length) {
        ShowSlide = 1;
    } else if (nummer < 1) {
        ShowSlide = images.length;
    }



    /* ____ Set all images Display None ____ */
    var i;
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    /* ____ Set 1 image on display Block ____ */
    images[ShowSlide - 1].style.display = "block";



    /*------ CONSOLE.LOG ------*/
    console.log(images[ShowSlide - 1].alt);

    dotRefresh();
}


function buttonPress(nummer) {
    /***** ACTION *****/
    showImages(ShowSlide += nummer);
}






//https://stackoverflow.com/questions/2373995/javascript-addeventlistener-event-fires-on-page-load

/*
el.addEventListener("click", alert("clicktrack"), false);
When this line is executed, the alert will be called and return undefined. To pass the alert code you need to wrap it in a function.
*/

function min1() {

    /***** ACTION *****/
    buttonPress(-1);
}

function plus1() {

    /***** ACTION *****/
    buttonPress(+1);
}

function autoPlay() {

    if (PlayAndPause.classList.contains("fa-play")) {
        PlayAndPause.classList.remove("fa-play");
        PlayAndPause.classList.add("fa-pause");
        interval = setInterval(plus1, intervalTime);
    } else {
        PlayAndPause.classList.remove("fa-pause");
        PlayAndPause.classList.add("fa-play");
        clearInterval(interval);
    }
}



btn[0].addEventListener("click", min1);
btn[1].addEventListener("click", plus1);
PlayAndPause.addEventListener("click", autoPlay);




var dotPress;
allDots.addEventListener('click', (dotPress) => {
    console.log("joe",allDots)

    var i;
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    console.log("dotPress.target",dotPress.target);
    if (dotPress.target.classList.contains("0")) {
        images[0].style.display = "block";
        ShowSlide =1;
    } else if (dotPress.target.classList.contains("1")) {
        images[1].style.display = "block";
        ShowSlide =2;
    } else if (dotPress.target.classList.contains("2")) {
        images[2].style.display = "block";
       ShowSlide =3;
    } else if (dotPress.target.classList.contains("3")) {
        images[3].style.display = "block";
       ShowSlide =4;
    } else if (dotPress.target.classList.contains("4")) {
        images[4].style.display = "block";
        ShowSlide =5;
    } else if (dotPress.target.classList.contains("5")) {
        images[5].style.display = "block";
        ShowSlide =6;
    } else if (dotPress.target.classList.contains("6")) {
        images[6].style.display = "block";
        ShowSlide =7;
    } else if (dotPress.target.classList.contains("7")) {
        images[7].style.display = "block";
        ShowSlide =8;
    } else if (dotPress.target.classList.contains("8")) {
        images[8].style.display = "block";
        ShowSlide =9;
    } else if (dotPress.target.classList.contains("9")) {
        images[9].style.display = "block";
        ShowSlide =10;
    }

    dotRefresh();
});


/*
var cbox = document.querySelectorAll(".q");
var i;

 for (i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("click", function() {
       console.log("yeet");
     });
 }

console.log(cbox);

*/

//https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
//var value = 0;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        min1();
    } else if (e.keyCode == '39') {
        plus1();
    } else if (e.keyCode == '32') {

        checkIfTheCheckboxIsChecked();

    }

}


document.onkeydown = checkKey;









/*
document.addEventListener("keydown", function(event) {

  if (event == "37") {
        min1();
    } else if (event == "39") {
        plus1();
    }
    console.log(event.which);
});

*/


/*

var currentImg = 1;
var allImgs = document.querySelectorAll(".mySlides");
var btnLeft = document.getElementById("buttonLeft");
var btnRight = document.getElementById("buttonRight");

function showImg(nummer) {

console.log(nummer);
    if (nummer > allImgs.length) {
        currentImg = 1;
    }

    else if (nummer < 1) {
        currentImg = allImgs.length;
    }

    var i;
    for (i = 0; i < allImgs.length; i++) {
        allImgs[i].style.display = "none";
    }

    allImgs[currentImg -1].style.display = "block";
}

function plusOfMin(nummer) {
    console.log(nummer);
    showImg(currentImg += nummer);
}

showImg(currentImg);

btnLeft.addEventListener("click", plusOfMin,(-1));
btnRight.addEventListener("click", plusOfMin,(1));

console.log(allImgs);

*/
