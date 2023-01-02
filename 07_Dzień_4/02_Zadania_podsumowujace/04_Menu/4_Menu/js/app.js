const ulMain = document.querySelectorAll("div>ul>li");
console.log(ulMain);

for (let i = 0; i < ulMain.length; i++) {
    ulMain[i].addEventListener("mouseover", function () {
        let ulMenu = this.querySelector("ul");
        if (ulMenu != null) {
            ulMenu.style.display="block";
        }
    });

}

for (let i = 0; i < ulMain.length; i++) {
    ulMain[i].addEventListener("mouseout", function () {
        let ulMenu = this.querySelector("ul");
        if (ulMenu != null) {
            ulMenu.style.display="none";
        }

    });
}

