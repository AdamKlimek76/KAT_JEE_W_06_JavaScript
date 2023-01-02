const checkList=document.querySelectorAll(".form-check-input");
const checkListLabel=document.querySelectorAll(".form-check-label");
let quota=0.00;
const displayQuota=document.querySelector(".badge-primary");
const buttonsSecondary=document.querySelectorAll("button.btn-secondary");
const buttonOrder=document.querySelector("button.btn-primary");
const buttonAll=buttonsSecondary[0];
const buttonClear=buttonsSecondary[1];
const pOrder=document.querySelector("p.order-info");


for (let i = 0; i < checkList.length; i++) {
    checkList[i].checked=false;
}

document.addEventListener("DOMContentLoaded", function () {
    const ulElement=document.createElement("ul");
    pOrder.appendChild(ulElement);
    for (let i = 0; i <checkList.length ; i++) {
        const liElement=document.createElement("li");
        liElement.innerText= checkListLabel[i].innerText;
        liElement.className="d-none";
        ulElement.appendChild(liElement);
    }

    const liList=pOrder.querySelectorAll("li");
    for (let i = 0; i <checkList.length ; i++) {
        checkList[i].addEventListener("change", function () {
            if(this.checked){
                liList[i].classList.remove("d-none");
                console.log(this.id);
                quota+=Number(this.dataset.price);
                quota.toPrecision(2);
                displayQuota.innerText=quota + "zł";

            }else{
                liList[i].classList.add("d-none");
                console.log(this.id);
                quota-=Number(this.dataset.price);
                quota.toPrecision(2);
                displayQuota.innerText=quota + "zł";
            }
        });
    }

    buttonOrder.addEventListener("click", function (event) {
        const liResume=document.createElement("li");
        quota+=35.00;
        liResume.innerText="Razem do zapłaty: " + quota.toString() + " zł";
        ulElement.appendChild(liResume);
        event.preventDefault();
    });


});




