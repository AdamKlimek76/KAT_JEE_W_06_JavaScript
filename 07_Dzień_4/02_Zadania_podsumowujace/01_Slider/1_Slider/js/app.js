const next = document.getElementById("nextPicture");
const prev = document.getElementById("prevPicture");
const pictures = document.querySelectorAll("li.slider");
const visiblePicture = document.querySelector(".visible");
let index = 0;

console.log(next);
console.log(prev);
console.log(pictures);
console.log(index);

pictures[0].classList.add("visible");

prev.addEventListener("click", function () {
    //console.log("prev");
    if (index > 0) {

        document.querySelector(".visible").classList.remove("visible");
        index--;
        pictures[index].classList.add("visible");
    }
});

next.addEventListener("click", function () {
    //console.log("next");
    if (index < pictures.length - 1) {
        document.querySelector(".visible").classList.remove("visible");
        index++;
        pictures[index].classList.add("visible");
    }
});
