


function fetchPockemon () {
    const errormessage = document.getElementById("error-text")
const pockemonName = document.getElementById("pockemonName").value    
const pockemonImgHTML = document.getElementById("pockemonSprite");
const pockemonWeightHTML = document.querySelector(".pockemon__wieght");
const pockemonTypeHTML = document.querySelector(".pockemon__type");


errormessage.style.display = "none"
  pockemonImgHTML.style.display = "none"
pockemonWeightHTML.textContent = ""
pockemonTypeHTML.textContent = ""
fetch(`https://pokeapi.co/api/v2/pokemon/${pockemonName}`)
.then( response => {
        if(!response.ok){
            throw new Error("server error");    
        }
        return response.json()
    })
    .then( data => {
        const pockemonImg = data.sprites.front_default;
        
        pockemonImgHTML.src = pockemonImg;
        pockemonImgHTML.style.display = "block";
        const pockemonWeight = data.weight;
        
        pockemonWeightHTML.textContent = `Pockemon weight: ${pockemonWeight}`;
        const pockemonType = data.types[0].type.name;
        
        pockemonTypeHTML.textContent = `Pockemon type: ${pockemonType}`
    })
    .catch( error => {
        console.error(error)
        
         pockemonImgHTML.style.display = "none";
        errormessage.style.display = "block"
        errormessage.textContent = "The error has occured"
    })}
