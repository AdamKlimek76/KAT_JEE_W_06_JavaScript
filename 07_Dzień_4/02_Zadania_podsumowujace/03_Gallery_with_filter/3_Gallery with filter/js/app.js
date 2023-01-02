document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img");
    const showButton = document.getElementById("showButton");
    const hideButton = document.getElementById("hideButton");
    const tagInput = document.getElementById("tagInput");

    function removeInvisible() {
        for (let i = 0; i <images.length ; i++) {
            images[i].classList.remove("invisible");
        }
    }


    function showSearchingTags(inputText) {
        removeInvisible();
        for (let i = 0; i <images.length ; i++) {
            let index = images[i].dataset.tag.indexOf(inputText);
            if (index<0){
                images[i].className="invisible";
            }
        }
    }

    function hideSearchingTags(inputText) {
        removeInvisible();
        for (let i = 0; i <images.length ; i++) {
            let index = images[i].dataset.tag.indexOf(inputText);
            if (index>-1){
                images[i].className="invisible";
            }
        }
    }

    showButton.addEventListener("click", function () {
        const showText=tagInput.value;
        tagInput.value="";
        const index = showSearchingTags(showText);
        console.log(index);
    });

    hideButton.addEventListener("click", function () {
        const hideText=tagInput.value;
        tagInput.value="";
        const index = hideSearchingTags(hideText);
        console.log(index);
    });

});

