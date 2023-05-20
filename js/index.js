var data = '['
    + '{"name": "test game", "roles": "designer", "page": "test.html"}'
    + ',{"name": "test game2", "roles": "designer2", "page": "test2.html"}'
    + ',{"name": "test game3", "roles": "designer2", "page": "test2.html"}'
    + ',{"name": "test game4", "roles": "designer2", "page": "test2.html"}'
    + ']';


function loadPortfolio() {
    var json = JSON.parse(data);
    var temp = "<table style=\"width: 100%\">";
    for (var i = 0; i < json.length; i += 3) {
        temp += "<tr>";
        for (var j = i; j < i + 3; j++) {
            temp += "<td width=\"33%\">";
            if (j < json.length) {
                temp += "<div class=\"hoverbox\" onclick=\"loadItem('" + json[j].page + "')\">"
                temp += json[j].name + " ";
                temp += json[j].roles + " ";
                temp += "</div>";
                temp += "<br/>";
            }
            temp += "</td>"
        }
        temp += "</tr>";
    }
    temp += "</table>";
    document.getElementById("portfolio").innerHTML = temp;
}

function loadItem(page) {
    window.location.href = page;
}