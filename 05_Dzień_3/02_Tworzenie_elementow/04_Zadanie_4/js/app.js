const button = document.getElementById("add");
const inputOrderId = document.getElementById("orderId");
const inputItem = document.getElementById("item");
const inputQuantity = document.getElementById("quantity;");
const tableBody = document.querySelector("tbody");

button.addEventListener("click", function () {
    const newTableRow = document.createElement("tr");
    const tdOrderId = document.createElement("td");
    tdOrderId.innerText = inputOrderId.value;
    newTableRow.appendChild(tdOrderId);
    const tdOrderItem = document.createElement("td");
    tdOrderItem.innerText = inputItem.value;
    newTableRow.appendChild(tdOrderItem);
    const tdOrderQuantity = document.createElement("td");
    tdOrderQuantity.innerText = inputQuantity.value;
    newTableRow.appendChild(tdOrderQuantity);
    tableBody.appendChild(newTableRow);

});
//zastąpienie konkatenacji baktikami
const tableRow=document.createElement("tr");
tableRow.innerHTML='<td>${inputOrderId.value}</td>';