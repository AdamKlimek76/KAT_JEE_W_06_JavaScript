const form = document.querySelector("form");
const bookInfoElement=document.querySelector(".book-info");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //jeśli formularz posiada pole z atrybutem name lub id to oiekty
    //reprezentuający ten formularz posiada właściwość o takiej nazwie
    const inputIsbn = form.isbn;
    //const inputIsbn=document.querySelector("input");
    const isbn = inputIsbn.value;

    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn)
        .then(function (response) {
            return  response.json();
        })
        .then(function (isbnInfo) {
            console.log(isbnInfo);
            const newElement=document.createElement("h2");
            //z treści zadania
            newElement.innerText=isbnInfo.items[0].volumeInfo.title;
            bookInfoElement.appendChild(newElement);

        })
});