const myDiv=document.querySelector("div");
const globalX=document.getElementById("globalX");
const globalY=document.getElementById("globalY");
const localX=document.getElementById("localX");
const localY=document.getElementById("localY");

myDiv.addEventListener("mousemove", function (event) {
    globalX.innerText=event.x.toString();
    globalY.innerText=event.y.toString();
    localX.innerText=event.layerX.toString();
    localY.innerText=event.layerY.toString();
    console.log(event.layerX);
    console.log(event.layerY);
    console.log(event.offsetX);
    console.log(event.offsetY);
})