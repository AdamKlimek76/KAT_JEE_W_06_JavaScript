/*
  Poniżej napisz kod rozwiązujący zadania
 */
const exerciseElement = document.querySelector(".exercise ul").classList.add("menu");
console.log(exerciseElement);
const liElements = document.querySelectorAll(".exercise li");
console.log(liElements);

for (let i = 0; i < liElements.length; i++) {
    liElements[i].classList.add("menuElement");
}

const errorClasses = document.querySelectorAll(".error");
console.log(errorClasses);

for (let i = 0; i <errorClasses.length; i++) {
    errorClasses[i].classList.remove("error");
}

console.log(errorClasses);