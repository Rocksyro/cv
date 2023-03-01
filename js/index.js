// Capturo el modal
let modal = document.getElementById("myModal");

// Capturo la imagen, y el texto, los inserto en el modal
let img = document.getElementById("ku");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Capturo la X
let span = document.getElementsByClassName("close")[0];

// Con click en x, cierro el modal
span.onclick = function() {
    modal.style.display = "none";
}