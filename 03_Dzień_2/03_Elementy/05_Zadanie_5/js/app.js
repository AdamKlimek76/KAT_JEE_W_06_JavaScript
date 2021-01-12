const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");

function getTags(elements) {
    let tagElements = [];
    elements.forEach(function (element) {
        tagElements.push(element.tagName);
    });

    return tagElements;
}

console.log(getTags(childElements));