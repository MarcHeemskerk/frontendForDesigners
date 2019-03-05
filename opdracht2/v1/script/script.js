// triangulation using https://github.com/ironwallaby/delaunay
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


var btn = document.querySelectorAll("button");
var images = document.querySelectorAll(".photos");
var ShowSlide = 1;


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
    /*------ CONSOLE.LOG ------*/
    console.log("-1");

    /***** ACTION *****/
    buttonPress(-1);
}

function plus1() {
    /*------ CONSOLE.LOG ------*/
    console.log("+1");

    /***** ACTION *****/
    buttonPress(+1);
}

btn[0].addEventListener("click", min1);
btn[1].addEventListener("click", plus1);



//https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
      min1();
    }
    else if (e.keyCode == '39') {
       plus1();
    }
}















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
