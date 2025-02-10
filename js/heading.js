function loadHome() {
    window.location.href = "index.html";
}

function loadCV() {
    window.location.href = "cv.html";
}

function loadAbout() {
    window.location.href = "about.html";
}

function createHeading() {
    var heading = '<div class="stylizedHeader">\
        <a class="invisibleLink" href = "index.html"> Daniel Yu</a>\
            <table style="float:right">\
                <tr>\
                    <td class="menuItem"><a class="heading" href="index.html">Projects</a></td>\
                    <td class="menuItem"><a class="heading" href="archive.html">Archive</a></td>\
                    <td class="menuItem"><a class="heading" href="cv.html">CV</a></td>\
                    <td class="menuItem"><a class="heading" href="about.html">About Me</a></td>\
                    <td class="icon">\
                        <a href="https://www.linkedin.com/in/daniel-yu-aa4b8420b/" target="_blank"><i class="fa-brands fa-linkedin fa-2xl"></i></a>\
                    </td>\
                    <td class="icon">\
                        <a href="https://github.com/dyu1112" target="_blank"><i class="fa-brands fa-github fa-2xl"></i></a>\
                    </td>\
                    <td class="icon">\
                        <a href="mailto:danielyu742@outlook.com" target="_blank"><i class="fa-solid fa-envelope fa-2xl"></i></a>\
                    </td>\
                </tr>\
            </table>\
        </div >';
    document.getElementsByClassName("headerBox")[0].innerHTML = heading;
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
        document.getElementsByClassName("headerBox")[0].style.top = "0";
    } else {
        document.getElementsByClassName("headerBox")[0].style.top = "-180px";
    }
    prevScrollpos = currentScrollPos;
}