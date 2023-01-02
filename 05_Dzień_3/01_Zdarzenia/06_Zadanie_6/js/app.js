const myDivs = document.querySelectorAll("div");

for (let i = 0; i < myDivs.length; i++) {
    myDivs[i].addEventListener("click", function () {
        this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
}