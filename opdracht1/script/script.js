var getLike = document.querySelectorAll(".like");
var getList = document.getElementById("list");


function LikeFunction0() {
    getLike[0].src = "https://github.com/X-Track/frontendvoordesigners/blob/master/opdracht1/animation/interaction.gif";
    getList.innerHTML +="<li><p>Greta</p></li>";
}

function LikeFunction1() {
    getLike[1].src = "https://github.com/X-Track/frontendvoordesigners/blob/master/opdracht1/animation/interaction1.gif";
    getList.innerHTML +="<li><p>Sonchiriya</p></li>";
}

function LikeFunction2() {
    getLike[2].src = "https://github.com/X-Track/frontendvoordesigners/blob/master/opdracht1/animation/interaction2.gif";
    getList.innerHTML +="<li><p>a medea family funeral</p></li>";
}

function LikeFunction3() {
    getLike[3].src = "https://github.com/X-Track/frontendvoordesigners/blob/master/opdracht1/animation/interaction3.gif";
    getList.innerHTML +="<li><p>climax</p></li>";
}

function LikeFunction4() {
    getLike[4].src = "https://github.com/X-Track/frontendvoordesigners/blob/master/opdracht1/animation/interaction4.gif";
    getList.innerHTML +="<li><p>styx</p></li>";
}

function LikeFunction5() {
    getLike[5].src = "https://github.com/X-Track/frontendvoordesigners/blob/master/opdracht1/animation/interaction5.gif";
    getList.innerHTML +="<li><p>transit</p></li>";
}

function LikeFunction6() {
    getLike[6].src = "https://github.com/X-Track/frontendvoordesigners/blob/master/opdracht1/animation/interaction6.gif";
    getList.innerHTML +="<li><p>saint judy</p></li>";
}

function LikeFunction7() {
    getLike[7].src = "https://github.com/X-Track/frontendvoordesigners/blob/master/opdracht1/animation/interaction7.gif";
    getList.innerHTML +="<li><p>stray</p></li>";
}

getLike[0].addEventListener("click", LikeFunction0);
getLike[1].addEventListener("click", LikeFunction1);
getLike[2].addEventListener("click", LikeFunction2);
getLike[3].addEventListener("click", LikeFunction3);
getLike[4].addEventListener("click", LikeFunction4);
getLike[5].addEventListener("click", LikeFunction5);
getLike[6].addEventListener("click", LikeFunction6);
getLike[7].addEventListener("click", LikeFunction7);

