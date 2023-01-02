const form = document.querySelector("form");
const successMessageElement = document.getElementById("success-message");
const errorMessageElement = document.getElementById("error-message");
const inputEmail = document.getElementById("email");
const inputName = document.getElementById("name");
const inputSurname = document.getElementById("surname");
const inputPass1 = document.getElementById("pass1");
const inputPass2 = document.getElementById("pass2");
const checkBoxAgree = document.getElementById("agree");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    let errorMassage = "";
    if (!inputEmail.value.includes("@")) {
        errorMassage += "Email musi posiadać @ ";
    }
    if (inputName.value.length < 3) {
        errorMassage += "Twoje imię jest za krótkie "
    }
    if (inputSurname.value.length < 3) {
        errorMassage += "Twoje nazwisko jest za krótkie "
    }
    if (inputPass1.value !== inputPass2.value || inputPass1.value === "") {
        errorMassage += "Hasła nie są takie same lub są puste "
    }
    if (!checkBoxAgree.checked) {
        errorMassage += "Musisz zaakceptować warunki."
    }

    if (errorMassage === "") {
        successMessageElement.classList.remove("d-none");
        successMessageElement.innerText = "Formularz wysłany!";
        errorMessageElement.classList.add("d-none");
    } else {
        console.log("form zadziałał");
        errorMessageElement.classList.remove("d-none");
        errorMessageElement.innerText = errorMassage;
        successMessageElement.classList.add("d-none");
    }
    
});