var deButton = document.querySelector("button");

function doeCategorieNeer(){
	let deRijen = document.querySelector("article");
    deRijen.style.display = "block";
	deRijen.classList.toggle("toonRijen");
    
}

deButton.addEventListener("click", doeCategorieNeer);
