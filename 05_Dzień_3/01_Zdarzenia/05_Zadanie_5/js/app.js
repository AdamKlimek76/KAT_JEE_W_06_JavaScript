const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    let counts = [];
    for (let j = 0; j <buttons.length ; j++) {
        counts.push(0);
    }
    buttons[i].addEventListener("click", function () {
        counts[i]++;
        this.previousElementSibling.firstElementChild.innerText = counts[i].toString();
    })
}