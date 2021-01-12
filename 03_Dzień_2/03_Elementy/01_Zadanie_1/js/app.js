const links = document.querySelector(".links").querySelectorAll("li");
//console.log(links);

function getDataInfo(elements) {

    let dataAttributes = [];
    elements.forEach(function (element) {
        dataAttributes.push(element.dataset);

    });

    return dataAttributes;
}


console.log(getDataInfo(links));

