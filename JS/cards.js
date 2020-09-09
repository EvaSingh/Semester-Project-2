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
                        <div class="card border-0 shadow-sm" >
                            <img class="card-img-top" src=" ${character.image} " alt="">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">${character.description}</p>
                                <label class="btn btn-primary btn-block ">
                                <input type="checkbox" autocomplete="off"> Pick me!
                                </label>
                            </div>
                         </div>
                    </div>`;  
        
        
    });
       
    const characterSection = document.querySelector('.characterCards');
    characterSection.innerHTML = newHTML;
    
    checkBoxLimit();
}

function checkBoxLimit() {
    
	const checkBoxButtons = document.getElementById('checkboxbuttons').getElementsByTagName("input");
	let limit = 2;
	
	for (let i = 0; i < checkBoxButtons.length; i++) {
		checkBoxButtons[i].onclick = function() {
        var checkedCount = 0;
            
			for (let i = 0; i < checkBoxButtons.length; i++) {
				checkedCount += (checkBoxButtons[i].checked) ? 1 : 0;
			}
			
			if (checkedCount > limit) {
				alert("Eppeppepp! Only " + limit + "!");
				this.checked = false;
			}
			
			if (checkedCount >= limit) {
                document.querySelector(".submit").classList.remove("disabled");
			}
            
            else {
                 document.querySelector(".submit").classList.add("disabled"); 
            }
		}
	}
}

checkBoxLimit()