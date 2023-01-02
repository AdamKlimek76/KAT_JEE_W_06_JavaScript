/*
 <span class="tooltipText">Text tooltipa</span>
 */


const tooltips = document.querySelectorAll(".tooltip");

//console.log(tooltips);

for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener("mouseover", function () {
        const tooltipText = this.dataset.text;
        const newSpan = document.createElement("span");
        newSpan.className = "tooltipText";
        newSpan.innerText = tooltipText;
        this.appendChild(newSpan)
    });
}

for (let i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener("mouseout", function () {
        const tooltip = this.querySelector(".tooltipText");
        tooltip.remove();
    });

}

