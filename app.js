const DOMStrings = {
  input: document.getElementById(`pkm-form`),
  name: document.getElementById("pokemon-name"),
  displayName: document.querySelector('.pkmon-name-size'),
  displayNumber: document.querySelector('.pkmn-num'),
  displayImageFront: document.querySelector('.display-image-front-def'),
  displayImageBack: document.querySelector('.display-image-back-def'),
  displayShinyImageFront: document.querySelector('.display-image-shiny-front'),
  displayShinyImageBack: document.querySelector('.display-image-shiny-back'),
  
}

function getPkmn() {
  DOMStrings.input.addEventListener("submit", async function(e) {
    e.preventDefault();
    console.log('something happens');
   try {
      const result = await fetch(
        `https://pokeapi/api/v2/pokemon/${DOMStrings.name.value}`
      );
      //await will return if in async
      const data = await result.json();
      console.log(data);
      //const displayPkmn = function(data) {};
    } catch (err) {
      console.log(err);
    }
  });
}


getPkmn();
