fetch("../JSON/characters.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        displayCharacters(json);
        checkBoxLimit();
    });

function displayCharacters(characters) {
    
    let newHTML = "";
    
    characters.forEach(function(character) {
        
        newHTML += `<div class="col">
                        <div class="card border-0 shadow-sm" >
                            <img class="card-img-top" src=" ${character.image} " alt="">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">${character.description}</p>
                                <label class="btn btn-primary btn-block ">
                                <input type="checkbox" id=" ${character.id} " autocomplete="off"> Pick me!
                                </label>
                            </div>
                         </div>
                    </div>`;  
        
        
    });
       
    const characterSection = document.querySelector('.characterCards');
    characterSection.innerHTML = newHTML;
}

function checkBoxLimit() {
    
	const checkBoxButtons = document.getElementById('checkboxbuttons').getElementsByTagName("input");
	const limit = 2;
    let playerIds = [];
	
	for (let i = 0; i < checkBoxButtons.length; i++) {
		checkBoxButtons[i].onclick = function() {
            const id = this.id;
            
            if (this.checked) {
                if (playerIds.length === limit) {
                    alert("Eppeppepp! Only " + limit + "!");
				    this.checked = false;
                } else {
                    playerIds.push(id);
                }
            } else {
                playerIds = playerIds.filter(function(pid) { return pid !== id;});
            }
            
            const startGameButton = document.querySelector(".submit");
           
			if (playerIds.length === limit) {
                startGameButton.classList.remove("disabled");
                startGameButton.onclick = function() {
                    const ids = playerIds.join(',');
                    playerIds =[];
                    document.location.href = `board.html?${ids}`;
                };
			}else {
                 startGameButton.classList.add("disabled"); 
                 startGameButton.onclick = null;
            }
		}
	}
}

