const ulElement = document.querySelector("ul");

fetch("https://pokeapi.co/api/v2/pokemon")
    .then(function (response) {
        return response.json();
    })
    .then(function (pokemonNames) {
        //console.log(pokemonNames.results);
        for (let i = 0; i < pokemonNames.results.length; i++) {
            //console.log(pokemonNames.results[i].name);
            const liElement = document.createElement("li");
            liElement.innerText = pokemonNames.results[i].name;
            ulElement.appendChild(liElement);
        }

        //pętla forEach
       // for(const pokemon of pokemonNames){
     //       console.log(pokemon);
    //}
    })
    .catch(function () {
        console.log("Błąd");
        alert("Błąd");
    });