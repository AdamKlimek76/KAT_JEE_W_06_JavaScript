const key = "key=e92601251-c0a2-4s63-v73f-54041195480f&country=";
const selectItem = document.getElementById("countries");

selectItem.addEventListener("change", function () {
    const ulElement = document.createElement("ul");
    document.body.appendChild(ulElement);
    const country = selectItem.value;
    fetch("https://fer-api.coderslab.pl/v1/holidays?" + key + country)
        .then(function (response) {
            return response.json();
        })
        .then(function (holidayDates) {
            console.log(holidayDates.holidays);
            //const newElement=document.createElement("h2");
            //z treści zadania
            //newElement.innerText=isbnInfo.items[0].volumeInfo.title;
            //bookInfoElement.appendChild(newElement);
            for (let i = 0; i < holidayDates.holidays.length; i++) {
                const liElement = document.createElement("li");
                liElement.innerText = holidayDates.holidays[i].date;
                const h3Element = document.createElement("h3");
                h3Element.innerText = holidayDates.holidays[i].name;
                liElement.appendChild(h3Element);
                ulElement.appendChild(liElement);
            }

        });

});

