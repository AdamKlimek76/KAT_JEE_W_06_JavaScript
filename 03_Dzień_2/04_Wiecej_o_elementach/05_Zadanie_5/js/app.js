/*
  Poniżej napisz kod rozwiązujący zadania
 */
const liElements = document.querySelectorAll(".exercise li");

for (let i = 0; i < liElements.length; i++) {

    liElements[i].setAttribute("data-id", (i + 1).toString());
    //liElements[i].dataset.id = i + 1;
}

for (let i = 0; i < liElements.length; i++) {
    console.log(liElements[i].getAttribute("data-id"));
}