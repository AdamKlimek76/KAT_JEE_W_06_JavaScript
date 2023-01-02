/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */


//moja próba rozwiązania
const list = document.querySelectorAll(".gallery li");
const body = document.body;


console.log(list);
console.log(body);

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        //console.log("działa " + i);
        //console.log(this.querySelector("img").getAttribute("src"));
        const newDiv=document.createElement("div");
        newDiv.className="fullScreen";
        //console.log(newDiv);
        body.appendChild(newDiv);
        const fullImage=document.createElement("img");
        fullImage.setAttribute("src", this.firstElementChild.getAttribute("src"));
        newDiv.appendChild(fullImage);
        //console.log(fullImage);
        const closeButton=document.createElement("button");
        closeButton.className="close";
        closeButton.innerText="Close";
        newDiv.appendChild(closeButton);
        closeButton.addEventListener("click", function () {
            newDiv.remove();
        });
    });
}
 //uproszona konkatenacja na egzaminie
