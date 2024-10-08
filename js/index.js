var currentCategory = "All";

function loadPortfolio(category) {
    var temp = "";
    for (var i = 0; i < data.length; i++) {
        categories = data[i].category;
        if (!categories.includes(category) && category != "All") {
            continue;
        }
        else {
            temp += "<a class=\"hoverbox\" href=\"" + data[i].page + "\">";
            temp += "<img class=\"portfolioImg\" src=\"" + data[i].img + "\" width=\"100%\">";
            temp += "<br /><div class=\"portfolioContent\"><h4>" + data[i].name + "</h4>";
            temp += "<p style=\"color: var(--blue)\">" + data[i].roles + "</p>";
            temp += "<p2>" + data[i].tech + "</p2><br/>";
            temp += "<p3>" + data[i].type + "</p3>";
            temp += "</div></a>";
        }
    }
    document.getElementById("portfolio").innerHTML = temp;
    document.getElementById(currentCategory).innerHTML = "<span class=\"categoryItem\" onclick=\"loadPortfolio('" + currentCategory + "')\">" + currentCategory + "</heading>";
    document.getElementById(category).innerHTML = "<span class=\"categoryItem\" style=\"background-color: var(--orange)\" onclick=\"loadPortfolio('" + category + "')\">" + category + "</heading>";
    document.getElementById(category).style
    currentCategory = category;
}

function loadItem(page) {
    window.location.href = page;
}