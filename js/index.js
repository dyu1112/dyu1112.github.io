var data = '[{"name": "test game", "roles": "designer", "page": "test.html"},{"name": "test game2", "roles": "designer2", "page": "test2.html"}]';


function loadPortfolio() {
    var json = JSON.parse(data);
    var temp = "";
    for (var i in json) {
        temp += "<div class=\"hoverbox\" onclick=\"loadItem('" + json[i].page + "')\">"
        temp += json[i].name + " ";
        temp += json[i].roles + " ";
        temp += "</div>";
        temp += "<br/>";
    }
    document.getElementById("portfolio").innerHTML = temp;
}

function loadItem(page) {
    window.location.href = page;
}