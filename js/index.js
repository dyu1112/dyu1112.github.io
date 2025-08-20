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
        const placeholder = document.createElement("div");
        placeholder.className = "placeholder";
        placeholder.dataset.index = i; // keep track of item number

        document.getElementById("portfolio").appendChild(placeholder);
        observer.observe(placeholder);

        setTimeout(() => {
            createPortfolioItem(category, i+1);
        }, 200);
    }
}

function loadItem(page) {
    window.location.href = page;
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Create the real item
            const i = entry.target.dataset.index;
            const hoverbox = document.createElement("a");
            hoverbox.className = "hoverbox";
            hoverbox.href = data[i].page;

            temp = "<img loading=\"lazy\" class=\"portfolioImg\" src=\"" + data[i].img + "\" width=\"100%\">";
            temp += "<br /><div class=\"portfolioContent\"><h4>" + data[i].name + "</h4>";
            temp += "<p style=\"color: var(--blue)\">" + data[i].roles + "</p>";
            temp += "<p2>" + data[i].tech + "</p2><br/>";
            temp += "</div>";
            hoverbox.innerHTML = temp;

            // Replace placeholder with real item
            entry.target.replaceWith(hoverbox);

            observer.unobserve(entry.target); // stop watching this placeholder
        }
    });
}, {
    threshold: 1
});