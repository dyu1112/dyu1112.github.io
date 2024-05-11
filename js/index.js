var currentCategory = "All";

function loadPortfolio(category) {
    var temp = "";
    for (var i = 0; i < data.length; i++) {
        categories = data[i].category;
        if (!categories.includes(category) && category != "All") {
            continue;
        }
        else {
            temp += "<div class=\"hoverbox\" onclick=\"loadItem('" + data[i].page + "')\">";
            temp += "<img src=\"" + data[i].img + "\" width=\"100%\">";
            temp += "<br /><br /><h3>" + data[i].name + "</h3>";
            temp += "<p>" + data[i].roles + "</p>";
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