window.onload = function(){
    var pokedexListEntryRequest = new XMLHttpRequest();
    pokedexListEntryRequest.open('GET', "https://pokeapi.co/api/v2/pokemon/", true);

    pokedexListEntryRequest.onload = function(){
        let data1 = JSON.parse(this.response);
        // console.log(data1);
        // console.log(typeof data1);
        // console.log(data1.results);

        let arrayOfPokemon = data1.results;

        // console.log(data.results.length);

        var listOfPokemon = document.getElementById("listOfPokemon");

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

            listOfPokemon.append(pokemonli);
            
            // console.log(data.results[i].name);
            
        }

        //when clicking on an entry
        var pokemonEntries = document.getElementsByClassName('pokemonOnList');
        // console.log(pokemonEntries.length + "outside");
        for (let i = 0; i<pokemonEntries.length; i++) {
            pokemonEntries[i].onclick = function () {


            // console.log(this.getAttribute("pokeNum"));
            var pokedexListImageRequest = new XMLHttpRequest();

            // pokedexListEntryRequest.open('GET', "https://pokeapi.co/api/v2/pokemon/1/", true);
            pokedexListEntryRequest.open('GET', "https://pokeapi.co/api/v2/pokemon/" + this.getAttribute("pokeNum") + "/", true);

            pokedexListEntryRequest.onload = function(){
            var data2 = JSON.parse(this.response);

            let entryId = document.getElementById("entryId");
            entryId.innerHTML = data2.id;

            let entryName = document.getElementById("entryName");
            entryName.innerHTML = data2.name;

            let entryImage = document.getElementById("entryImage");
            //regular images
            // entryImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + data2.id + ".png";
            
            //3d images - all dont exist
            entryImage.src = "http://play.pokemonshowdown.com/sprites/xyani/" + data2.name +  ".gif";

            //3d, if not then regular
            let tempString = "http://play.pokemonshowdown.com/sprites/xyani/" + data2.name +  ".gif";
            entryImage.onerror = function(){
                console.log("Couldn't find 3d image");
                entryImage.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + data2.id + ".png";
            }
            
            

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

            let abilityList = document.getElementById("abilityList");
            let abilityItem = document.getElementsByClassName("abilityItem");
            while (abilityItem[0]) {
                abilityItem[0].parentNode.removeChild(abilityItem[0]);
            }

            for (let i = 0; i < data2.abilities.length; i++){
                let abilityToBeAdded = document.createElement("li");
                abilityToBeAdded.innerHTML = data2.abilities[i].ability.name;
                abilityToBeAdded.classList.add("abilityItem"); 
                abilityList.appendChild(abilityToBeAdded);
            }

            //deleting and determining new entry type
            let entryType = document.getElementById("entryType");
            let type = document.getElementsByClassName("type");
            while (type[0]) {
                entryType.removeChild(type[0]);
            }

            //1 vs 2 types
            if (data2.types.length == 1){
                let type1 = document.createElement("div");
                type1.id = "type1";
                type1.classList.add("type");
                type1.innerHTML = data2.types[0].type.name;
                type1.style.backgroundColor = (String) (typeColor(type1.innerHTML));
                entryType.appendChild(type1);
            }
            else{ //2 types
                let type1 = document.createElement("div");
                type1.id = "type1";
                type1.classList.add("type");
                type1.innerHTML = data2.types[0].type.name;
                type1.style.backgroundColor = (String) (typeColor(type1.innerHTML));
                entryType.appendChild(type1);
                let type2 = document.createElement("div");
                type2.id = "type2";
                type2.classList.add("type");
                type2.innerHTML = data2.types[1].type.name;
                type2.style.backgroundColor = (String) (typeColor(type2.innerHTML));
                entryType.appendChild(type2);
            }

            let indivPokeEntry = document.getElementById("indivPokeEntry");
            indivPokeEntry.style.display = "block";
            listOfPokemon.style.pointerEvents = "none";

            //play pokemon sound, only goes to 721/Volcanion currently
            var pokeSound = new Audio();
            pokeSound.src = "https://veekun.com/dex/media/pokemon/cries/" + data2.id +".ogg";
            pokeSound.volume = .2;
            pokeSound.play();

            }
            pokedexListEntryRequest.send()

            
            };
        }

        var backButton= document.getElementById("backButton");
        backButton.onclick = function(){
            indivPokeEntry.style.display = "none";
            listOfPokemon.style.pointerEvents = "auto";
        }
    }
    pokedexListEntryRequest.send()

    function typeColor(type){
        switch(type){
            case "normal":
                return "#A8A878";
            case "fighting":
                return "#C03028";
            case "flying":
                return "#A890F0";
            case "poison":
                return "#A040A0";
            case "ground":
                return "#E0C068";
            case "rock":
                return "#B8A038";
            case "bug":
                return "#A8B820";
            case "ghost":
                return "#705898";
            case "steel":
                return "#B8B8D0";
            case "fire":
                return "#F08030";
            case "water":
                return "#6890F0";
            case "grass":
                return "#78C850";
            case "electric":
                return "#F8D030";
            case "psychic":
                return "#F85888";
            case "ice":
                return "#98D8D8";
            case "dragon":
                return "#7038F8";
            case "dark":
                return "#705848";
            case "fairy":
                return "#EE99AC";
            default:
                console.log("type not found");
                break;

        } 
    }   


    
}

