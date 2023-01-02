const button = document.getElementById("add");
const liElements = document.querySelectorAll("li");

const ulParentElement = document.getElementById("menu");
let count = liElements.length;

button.addEventListener("click", function () {
    const cloneElement = liElements[0].cloneNode(true);
    count++;
    cloneElement.innerText = "Element " + count.toString() + " - w chwili dodania było 0 elementów"
    ulParentElement.appendChild(cloneElement);

});


const newListElement=document.createElement("li");
newListElement.className="list-group-id";
newListElement.innerText="tekst";