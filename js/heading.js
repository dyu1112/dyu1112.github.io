function loadHome() {
    window.location.href = "index.html";
}

function loadCV() {
    window.location.href = "cv.html";
}

function loadAbout() {
    window.location.href = "about.html";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("headerBox")[0].style.top = "0";
    } else {
        document.getElementsByClassName("headerBox")[0].style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}