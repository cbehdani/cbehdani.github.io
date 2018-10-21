window.onload = function(){
    var pokedexListEntryRequest = new XMLHttpRequest();
    pokedexListEntryRequest.open('GET', "https://pokeapi.co/api/v2/pokemon/", true);

    pokedexListEntryRequest.onload = function(){
        let data1 = JSON.parse(this.response);
        console.log(data1);
        console.log(typeof data1);
        console.log(data1.results);

        let arrayOfPokemon = data1.results;

        // console.log(data.results.length);

        var ulList = document.getElementById("listOfPokemon");

        // for (let i = 0; i < data.results.length; i++){
        for (let i = 0; i < 802; i++){

            let pokemonli = document.createElement('ul');
            pokemonli.innerHTML = "#" + (i+1) + " " + data1.results[i].name;
            pokemonli.classList.add("pokemonOnList");
            pokemonli.setAttribute("pokeNum", i + 1);

            let pokemonImage = document.createElement("img");
            let pokemonImageSource = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (1+i) +".png";
            // pokemonImage.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
            pokemonImage.setAttribute("src", pokemonImageSource);
            pokemonImage.setAttribute("height", "30px");
            pokemonImage.setAttribute("width", "30px");
            // pokemonImage.style.paddingRight = "10px";
            pokemonImage.style.transform = "scale(1.8)";
            pokemonImage.style.cssFloat = "right";
            pokemonli.append(pokemonImage);

            ulList.append(pokemonli);
            
            // console.log(data.results[i].name);
            
        }

        //when clicking on an entry
        var pokemonEntries = document.getElementsByClassName('pokemonOnList');
        console.log(pokemonEntries.length + "outside");
        for (let i = 0; i<pokemonEntries.length; i++) {
            pokemonEntries[i].onclick = function () {

            let indivPokeInfo = document.getElementById("indivPokeEntry");
            console.log(this.getAttribute("pokeNum"));
            var pokedexListImageRequest = new XMLHttpRequest();

            // pokedexListEntryRequest.open('GET', "https://pokeapi.co/api/v2/pokemon/1/", true);
            pokedexListEntryRequest.open('GET', "https://pokeapi.co/api/v2/pokemon/" + this.getAttribute("pokeNum") + "/", true);

            pokedexListEntryRequest.onload = function(){
            let data2 = JSON.parse(this.response);
            console.log(data2.name + " is my response");

            let pokemonNameDiv = document.createElement('div');
            let pokemonNameP = document.createElement('p');
            pokemonNameP.innerHTML = data2.name;
            pokemonNameDiv.append(pokemonNameP);
            indivPokeInfo.append(pokemonNameDiv);



            }
            pokedexListEntryRequest.send()
            };
        }

    }
    pokedexListEntryRequest.send()

        

    
}

