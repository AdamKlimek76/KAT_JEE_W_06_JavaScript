const elements1 = document.querySelector(".first").firstElementChild.children;
console.log(elements1[2]);

console.log(document.querySelector("[data-answer='1']"));
const elements2=document.getElementById("second").parentElement.children;
console.log(elements2[3]);

const elements3=document.querySelector("[data-ex='third']").parentElement.parentElement
.lastElementChild
.firstElementChild.children;

console.log(elements3[Math.floor(elements3.length / 2)]);

const elements4=document.querySelector("div.forth ").parentElement.children;

let article;
for (let i = 0; i <elements4.length; i++) {
    if(elements4[i].tagName==="ARTICLE"){
        article=elements4[i];
        break;
    }
}

const elements5=article.children;
let paragraphs=[];
for (let i = 0; i <elements5.length; i++) {
    if(elements5[i].tagName==="P"){
        paragraphs.push(elements5[i]);
    }
}

console.log(paragraphs[1]);