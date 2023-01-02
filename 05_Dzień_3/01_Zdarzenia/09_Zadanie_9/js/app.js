const windowWidth = document.getElementById("windowWidth");
const windowHeight = document.getElementById("windowHeight");

document.addEventListener("DOMContentLoaded", function () {
    windowWidth.innerText = window.innerHeight.toString();
    windowHeight.innerText = window.innerHeight.toString();
});


document.addEventListener("resize", function () {
    windowWidth.innerText = window.innerHeight.toString();
});

document.addEventListener("resize", function () {
    windowHeight.innerText = window.innerHeight.toString();
});

