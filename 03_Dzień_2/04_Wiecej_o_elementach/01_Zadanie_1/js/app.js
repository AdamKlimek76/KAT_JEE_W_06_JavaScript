const exercisesList = document.querySelector(".exercise").querySelectorAll("li");

for (let i = 0; i < exercisesList.length; i++) {
    if (i % 2 === 0) {
        exercisesList[i].style.backgroundColor = "#9e9e9e";

    }
   
    if (i % 3 === 0) {
        exercisesList[i].style.textDecoration = "underline";
    }

}

exercisesList[4].className = "big";