const home = document.getElementById("home");
console.log(home);

const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
for (let i = 0; i <children.length; i++) {
    console.log(children[i]);
}
const ban = document.querySelector(".ban");
console.log(ban);
const someBlocks = document.querySelectorAll(".block");
for (let i = 0; i <someBlocks.length; i++) {
    console.log(someBlocks[i]);
}
const listElements = document.querySelector(".links").querySelectorAll("li");
for (let i = 0; i <listElements.length; i++) {
    console.log(listElements[i]);
}
