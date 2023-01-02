const invoiceDiv = document.getElementById("invoiceData");
const checkBox = document.querySelector(".form-check-input");
console.log(checkBox);

checkBox.addEventListener("change", function () {
    if (checkBox.checked) {
        invoiceDiv.classList.remove("d-none");
        console.log(checkBox.checked);
    } else {
        invoiceDiv.classList.add("d-none");
    }
});
