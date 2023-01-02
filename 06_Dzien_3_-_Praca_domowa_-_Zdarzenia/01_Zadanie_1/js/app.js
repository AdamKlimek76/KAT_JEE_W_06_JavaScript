const contents = document.querySelectorAll(".content");
const button1 = document.querySelector(".btn-primary");
const button2 = document.querySelector(".btn-success");

button1.addEventListener("click", function () {
    contents[0].classList.remove("d-none");
});

button2.addEventListener("click", function () {
    contents[1].classList.remove("d-none");
});

