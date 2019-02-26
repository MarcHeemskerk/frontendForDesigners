var getLike = document.querySelectorAll(".like");
var getList = document.getElementById("list");


function LikeFunction0() {
    getLike[0].src = "../animation/interaction.gif";
    getList.innerHTML +="<li><p>Greta</p></li>";
}

function LikeFunction1() {
    getLike[1].src = "../animation/interaction1.gif";
    getList.innerHTML +="<li><p>Sonchiriya</p></li>";
}

function LikeFunction2() {
    getLike[2].src = "../animation/interaction2.gif";
    getList.innerHTML +="<li><p>a medea family funeral</p></li>";
}

function LikeFunction3() {
    getLike[3].src = "../animation/interaction.gif";
    getList.innerHTML +="<li><p>climax</p></li>";
}

function LikeFunction4() {
    getLike[4].src = "../animation/interaction1.gif";
    getList.innerHTML +="<li><p>styx</p></li>";
}

function LikeFunction5() {
    getLike[5].src = "../animation/interaction2.gif";
    getList.innerHTML +="<li><p>transit</p></li>";
}

function LikeFunction6() {
    getLike[6].src = "../animation/interaction.gif";
    getList.innerHTML +="<li><p>saint judy</p></li>";
}

function LikeFunction7() {
    getLike[7].src = "../animation/interaction1.gif";
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

