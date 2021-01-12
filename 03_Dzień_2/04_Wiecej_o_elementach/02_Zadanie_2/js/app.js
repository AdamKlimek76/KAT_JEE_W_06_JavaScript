/*
  Poniżej napisz kod rozwiązujący zadania
 */
document.querySelector(".firefox").style.backgroundImage="url('./img/firefox.jpg')";
document.querySelector(".edge").style.backgroundImage="url('./img/edge.jpg')";

document.querySelector("[href='https://www.google.pl/chrome/browser/desktop/index.html']")
    .innerText = "Chrome";


document.querySelector("[href='www.github.pl']").setAttribute("href", "https://www.microsoft.com/pl-pl/edge");
const edgeElement = document.querySelector("[href='www.coderslab.pl']");
edgeElement.setAttribute("href", "https://www.mozilla.org/pl/firefox/new/");
edgeElement.innerText="Mozilla Firefox";

document.querySelector(".chrome").style.width="100px";

