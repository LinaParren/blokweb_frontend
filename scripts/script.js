var deButton = document.querySelector("button");

function doeCategorieNeer(){
	let deRijen = document.querySelector(".pagina1 section:nth-of-type(3) ul li:nth-of-type(n+11)");
	deRijen.classList.toggle("toonRijen");
}


deButton.addEventListener("click", doeCategorieNeer);


deButton.addEventListener("click", ()=>{
    if(deButton.innerText === "Toon alle categorieen"){
        deButton.innerText = "Minder categorieen";
    }else{
        deButton.innerText= "Toon alle categorieen";
    }
})