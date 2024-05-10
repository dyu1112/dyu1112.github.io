var data = '['
    + '{"name": "Free Will", "roles": "Programmer, Designer", "page": "freewill.html", "img": "assets/freewill_preview.png", "category": ["Game Programming"]}'
    + ',{"name": "Sorelle", "roles": "Sound Designer", "page": "sorelle.html", "img": "assets/sorelle_preview.png", "category": ["Sound"]}'
    + ',{"name": "Sorcerer Smackdown", "roles": "Producer, Programmer", "page": "sorcerersmackdown.html", "img": "assets/sorcerersmackdown_preview.png", "category": ["Game Programming"]}'
    + ',{"name": "Syncon", "roles": "Programmer", "page": "syncon.html", "img": "assets/syncon_preview.png", "category": ["Game Programming"]}'
    + ',{"name": "Try Not To Hit [An Unspecified] Bridge", "roles": "Programmer, Artist", "page": "unspecifiedbridge.html", "img": "assets/unspecifiedbridge_preview.png", "category": ["Game Programming"]}'
    + ',{"name": "Unnamed Surgeon Game", "roles": "Programmer, Sound Designer", "page": "unnamedsurgeon.html", "img": "assets/unnamedsurgeon_preview.png", "category": ["Game Programming", "Sound"]}'
    + ',{"name": "ITP 438 - Advanced Gameplay Programming", "roles": "Programmer", "page": "itp438.html", "img": "assets/itp438_preview.jpg", "category": ["Game Programming"]}'
    + ',{"name": "Boo\'s There?", "roles": "Sound Lead", "page": "trickortreat.html", "img": "assets/boosthere_preview.png", "category": ["Sound"]}'
    + ',{"name": "Portal Recreation", "roles": "Programmer", "page": "portalrecreation.html", "img": "assets/portal_preview.png", "category": ["Game Programming"]}'
    + ',{"name": "USCheduler", "roles": "Backend Developer", "page": "uscheduler.html", "img": "assets/uscheduler_preview.png", "category": ["SWE"]}'
    + ',{"name": "Hear Your Fear", "roles": "Lead Programmer, Designer, 3D Artist", "page": "hearyourfear.html", "img": "assets/hearyourfear_preview.png", "category": ["Game Programming", "Sound"]}'
    + ',{"name": "Bone Boy", "roles": "Composer, Sound Designer, Audio Programmer", "page": "boneboy.html", "img": "assets/boneboy_preview.png", "category": ["Game Programming", "Sound"]}'
    + ',{"name": "Cellulose", "roles": "Composer, Programmer, UI", "page": "cellulose.html", "img": "assets/cellulose_preview.jpg", "category": ["Game Programming", "Sound"]}'
    + ',{"name": "Mom, Please Respect My Privacy", "roles": "Sound Designer, Audio Programmer", "page": "mprmp.html", "img": "assets/mprmp_preview.png", "category": ["Game Programming", "Sound"]}'
    + ',{"name": "Ho Ho Who Did It?", "roles": "Audio Designer", "page": "hhwdi.html", "img": "assets/hhwdi_preview.jpg", "category": ["Sound"]}'
    + ']';

var currentCategory = "All";

function loadPortfolio(category) {
    var json = JSON.parse(data);
    var temp = "";
    for (var i = 0; i < json.length; i++) {
        categories = json[i].category;
        if (!categories.includes(category) && category != "All") {
            continue;
        }
        else {
            temp += "<div class=\"hoverbox\" onclick=\"loadItem('" + json[i].page + "')\">";
            temp += "<img src=\"" + json[i].img + "\" width=\"100%\">";
            temp += "<br /><br /><h3>" + json[i].name + "</h3>";
            temp += "<p>" + json[i].roles + "</p>";
            temp += "</div>";
        }
    }
    document.getElementById("portfolio").innerHTML = temp;
    document.getElementById(currentCategory).innerHTML = "<heading onclick=\"loadPortfolio('" + currentCategory + "')\">" + currentCategory + "</heading>";
    document.getElementById(category).innerHTML = "<heading style=\"font-family: RobotoBold, arial, sans-serif; color: var(--emerald)\" onclick=\"loadPortfolio('" + category + "')\">" + category + "</heading>";
    currentCategory = category;
}

function loadItem(page) {
    window.location.href = page;
}