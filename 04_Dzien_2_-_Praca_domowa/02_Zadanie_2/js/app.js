//pkt.1-------------------------------
const element1 = document.getElementById("menu");

function getDataInfo(element) {
    const liElements = element.children;
    //pierwszy sposób
    const dataInfoArray1 = [];
    for (let i = 0; i < liElements.length; i++) {
        dataInfoArray1.push(liElements[i].dataset.info);
    }
    //drugi sposób
    const dataInfoArray2 = [];
    for (let i = 0; i < liElements.length; i++) {
        dataInfoArray2.push(liElements[i].getAttribute("data-info"));
    }
    //sprawdzenie pierwszego sposobu
    console.log(dataInfoArray1);
    //sprawdzenie drugiego sposobu
    console.log(dataInfoArray2);

    return dataInfoArray1;
}

console.log(getDataInfo(element1));

//pkt.2----------------------------------
const element2 = document.getElementById("main-container");

//console.log(element2);

function getElementClass(element) {
    return element.classList;
}

console.log(getElementClass(element2));


//pkt.3----------------------------------
const element3 = document.querySelector(".pink-color");

function getElementText(element) {
    return element.innerText;
}

console.log(getElementText(element3));

//pkt.4----------------------------------
const elements4 = document.querySelectorAll(".images");

function getElementAlt(elements) {
    const attributesArray = [];
    for (let i = 0; i < elements.length; i++) {
        attributesArray.push(elements[i].getAttribute("alt"));
    }
    return attributesArray;
}

console.log(getElementAlt(elements4));

//pkt.5---------------------------------
const elements5 = document.querySelectorAll(".my-link");

function getElementHref(elements) {
    const attributesArray = [];
    for (let i = 0; i < elements.length; i++) {
        attributesArray.push(elements[i].getAttribute("href"));
    }
    return attributesArray;
}

console.log(getElementHref(elements5));






















