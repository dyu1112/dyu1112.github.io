var currentCategory = "All";

function loadPortfolio(category) {
    document.getElementById("portfolio").innerHTML = "";
    
    //document.getElementById("portfolio").innerHTML = temp;
    document.getElementById(currentCategory).innerHTML = "<span class=\"categoryItem\" onclick=\"loadPortfolio('" + currentCategory + "')\">" + currentCategory + "</heading>";
    document.getElementById(category).innerHTML = "<span class=\"categoryItem\" style=\"background-color: var(--orange)\" onclick=\"loadPortfolio('" + category + "')\">" + category + "</heading>";
    document.getElementById(category).style
    currentCategory = category;

    createPortfolioItem(category, 0);
}

function createPortfolioItem(category, i) {
    if (i >= data.length) {
        return;
    }

    var categories = data[i].category;
    if (!categories.includes(category) && category != "All") {
        createPortfolioItem(category, i + 1);
    }
    else {
        const hoverbox = document.createElement("a");
        hoverbox.className = "hoverbox";
        hoverbox.href = data[i].page;
        
        temp = "<img loading=\"lazy\" class=\"portfolioImg\" src=\"" + data[i].img + "\" width=\"100%\">";
        temp += "<br /><div class=\"portfolioContent\"><h4>" + data[i].name + "</h4>";
        temp += "<p style=\"color: var(--blue)\">" + data[i].roles + "</p>";
        temp += "<p2>" + data[i].tech + "</p2><br/>";
        temp += "</div>";
        hoverbox.innerHTML = temp;

        document.getElementById("portfolio").appendChild(hoverbox);

        setTimeout(() => {
            createPortfolioItem(category, i+1);
        }, 200);
    }
}

function loadItem(page) {
    window.location.href = page;
}