window.onload = function(){
    var pokedexListEntryRequest = new XMLHttpRequest();
    pokedexListEntryRequest.open('GET', "https://pokeapi.co/api/v2/pokemon/", true);
    pokedexListEntryRequest.onload = function(){
        var data = JSON.parse(this.response);
        console.log(data);
        console.log(typeof data);
        console.log(data.results);

        let arrayOfPokemon = data.results;

        console.log(data.results.length);

        var ulList = document.getElementById("listOfPokemon");

        // for (let i = 0; i < data.results.length; i++){
        for (let i = 0; i < 802; i++){

            let pokemonli = document.createElement('ul');
            pokemonli.innerHTML = "#" + (i+1) + " " + data.results[i].name;
            pokemonli.classList.add("pokemonOnList");
             

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
            
            console.log(data.results[i].name);
        }

    }
    pokedexListEntryRequest.send()

    var pokedexListImageRequest = new XMLHttpRequest();
    

    
}