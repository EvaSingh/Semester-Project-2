fetch("../JSON/characters.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        displayCharacters(json);
    });

function displayCharacters(characters) {
    
    let newHTML = "";
    
    characters.forEach(function(character) {
        
        newHTML += `<div class="col">
                        <div class="card">
                            <img class="card-img-top" src=" ${character.image} " alt="">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">${character.description}</p>
                                <button class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="false">Pick me!</button>
                            </div>
                         </div>
                    </div>`;   
    });
       
    const characterSection = document.getElementById('characterCards');
    characterSection.innerHTML = newHTML;
}