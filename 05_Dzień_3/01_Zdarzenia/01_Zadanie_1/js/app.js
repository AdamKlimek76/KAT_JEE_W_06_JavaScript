const parents = document.querySelectorAll(".parent");
for (let i = 0; i < parents.length; i++) {
    const parent = parents[i];
    parent.addEventListener("mouseover", function () {
        this.firstElementChild.style.display = "block";
    });

    parent.addEventListener("mouseout", function () {
        this.firstElementChild.style.display = "none";
    });


}