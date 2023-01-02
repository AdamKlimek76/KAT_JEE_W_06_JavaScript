const list =document.getElementById("list");

document.getElementById("remove")
.addEventListener("click", function () {
    //list.innerHTML="";
    while(list.hasChildNodes()){
        //list.removeChild(list.firstElementChild);
        list.firstElementChild.remove();
    }
})