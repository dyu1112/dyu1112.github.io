function loadHome() {
    window.location.href = "index.html";
}

function loadResume() {
    window.location.href = "resume.html";
}

function loadAbout() {
    window.location.href = "about.html";
}

function loadMode() {
    var body = document.body;
    if (sessionStorage.getItem("lightmode") == null) {
        sessionStorage.setItem("lightmode", "false");
    }

    if (sessionStorage.getItem("lightmode") == "true") {
        body.classList.toggle("light-mode", "true");
    }
    else {
        body.classList.toggle("light-mode", "false");
    }
}

function darkMode() {
    var body = document.body;
    body.classList.toggle("light-mode");

    var head = document.getElementById("darkMode");
    if (head.innerHTML == "Dark Mode") {
        head.innerHTML = "Light Mode"
        sessionStorage.setItem("lightmode", "false");
    }
    else {
        head.innerHTML = "Dark Mode"
        sessionStorage.setItem("lightmode", "true");
    }
}