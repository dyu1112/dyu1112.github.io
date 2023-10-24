var data = '['
    + '{"name": "Free Will", "roles": "Programmer, Designer", "page": "freewill.html", "img": "assets/freewill_preview.png", "category": ["Game Programming"]}'
    + ',{"name": "Sorelle", "roles": "Sound Designer", "page": "sorelle.html", "img": "assets/sorelle_preview.png", "category": ["Sound"]}'
    + ',{"name": "USCheduler", "roles": "Backend Developer", "page": "uscheduler.html", "img": "assets/uscheduler_preview.png", "category": ["Software"]}'
    + ',{"name": "Hear Your Fear", "roles": "Lead Programmer, Designer, 3D Artist", "page": "hearyourfear.html", "img": "assets/hearyourfear_preview.png", "category": ["Game Programming", "Sound"]}'
    + ',{"name": "Bone Boy", "roles": "Composer, Sound Designer, Audio Programmer", "page": "boneboy.html", "img": "assets/boneboy_preview.png", "category": ["Game Programming", "Sound"]}'
    + ',{"name": "Cellulose", "roles": "Composer, Programmer, UI", "page": "cellulose.html", "img": "assets/cellulose_preview.jpg", "category": ["Game Programming", "Sound"]}'
    + ',{"name": "Mom, Please Respect My Privacy", "roles": "Sound Designer, Audio Programmer", "page": "mprmp.html", "img": "assets/mprmp_preview.png", "category": ["Game Programming", "Sound"]}'
    + ',{"name": "Ho Ho Who Did It?", "roles": "Audio Designer", "page": "hhwdi.html", "img": "assets/hhwdi_preview.jpg", "category": ["Sound"]}'
    + ']';

var currentCategory = "All";

function loadPortfolio(category) {
    var json = JSON.parse(data);
    var temp = "<table style=\"width: 100%\">";
    for (var i = 0; i < json.length; i += 3) {
        temp += "<tr>";
        for (var j = i; j < i + 3; j++) {
            if (j < json.length) {
                categories = json[j].category;
                if (!categories.includes(category) && category != "All") {
                    i++;
                    continue;
                }

            }

            temp += "<td width=\"33%\" class=\"portfolioItem\">";
            if (j < json.length && (categories.includes(category) || category == "All")) {
                temp += "<div class=\"hoverbox\" onclick=\"loadItem('" + json[j].page + "')\">";
                temp += "<img src=\"" + json[j].img + "\" width=\"100%\">";
                temp += "<br /><br /><h3>" + json[j].name + "</h3>";
                temp += "<p>" + json[j].roles + "</p>";
                temp += "</div>";
            }
            temp += "</td>"
        }
        temp += "</tr>";
    }
    temp += "</table>";
    document.getElementById("portfolio").innerHTML = temp;
    document.getElementById(currentCategory).innerHTML = "<heading onclick=\"loadPortfolio('" + currentCategory + "')\">" + currentCategory + "</heading>";
    document.getElementById(category).innerHTML = "<heading style=\"font-family: AdirBold, arial, sans-serif; color: var(--emerald)\" onclick=\"loadPortfolio('" + category + "')\">" + category + "</heading>";
    currentCategory = category;
}

function loadItem(page) {
    window.location.href = page;
}