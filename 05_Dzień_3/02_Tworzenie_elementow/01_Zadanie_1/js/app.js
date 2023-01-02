let buttons = document.querySelectorAll(".deleteBtn");

function onButtonClick() {
    const tableRow = this.parentElement.parentElement;
    tableRow.remove();
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onButtonClick);
}