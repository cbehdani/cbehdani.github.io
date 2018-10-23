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

            let entryId = document.getElementById("entryId");
            entryId.innerHTML = data2.id;

            let entryName = document.getElementById("entryName");
            entryName.innerHTML = data2.name;

            let entryImage = document.getElementById("entryImage");
            entryImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + data2.id + ".png";

            // let pokemonNameDiv = document.createElement('div');
            // let pokemonNameP = document.createElement('p');
            // pokemonNameP.innerHTML = data2.name;

            // pokemonNameDiv.append(pokemonNameP);
            // indivPokeInfo.append(pokemonNameDiv);
            let entryHP = document.getElementById("entryHP");
            let entryAttack = document.getElementById("entryAttack");
            let entryDefense = document.getElementById("entryDefense");
            let entrySpAtt = document.getElementById("entrySpAtt");
            let entrySpDef = document.getElementById("entrySpDef");
            let entrySpeed = document.getElementById("entrySpeed");
            
            entryHP.innerHTML = data2.stats[5].base_stat;
            entryAttack.innerHTML = data2.stats[4].base_stat;
            entryDefense.innerHTML = data2.stats[3].base_stat;
            entrySpAtt.innerHTML = data2.stats[2].base_stat;
            entrySpDef.innerHTML = data2.stats[1].base_stat;
            entrySpeed.innerHTML = data2.stats[0].base_stat;

            let entryHeightVal = document.getElementById("entryHeightVal");
            let entryWeightVal = document.getElementById("entryWeightVal")
            entryHeightVal.innerHTML = data2.height / 10;
            entryWeightVal.innerHTML = data2.weight / 10;
            }
            pokedexListEntryRequest.send()
            };
        }

    }
    pokedexListEntryRequest.send()

        

    
}

