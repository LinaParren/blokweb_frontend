// Menu
var menu = document.querySelector("nav ul li button");

// Categorieen
var deButton = document.querySelector("section button");


// Functie voor uitklappen menu
function laatMenuzien(){
	let hetMenu = document.querySelector("nav ul li form");
	hetMenu.classList.toggle("toonMenu");
}

// Functie voor uitklappen categorieen
function doeCategorieNeer(){
	let deRijen = document.querySelector(".pagina1 section:nth-of-type(3) ul li:nth-of-type(n+11)");
	deRijen.classList.toggle("toonRijen");
}


// Voer functie uit
menu.addEventListener("click", laatMenuzien);


deButton.addEventListener("click", doeCategorieNeer);

deButton.addEventListener("click", ()=>{
    if(deButton.innerText === "Toon alle categorieen"){
        deButton.innerText = "Minder categorieen";
    }else{
        deButton.innerText= "Toon alle categorieen";
    }
})