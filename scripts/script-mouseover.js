var elemento = document.getElementById("testeMouseOver");


elemento.addEventListener("mouseover", function(event) {

    event.target.style.color = "red";

    setTimeout(function() {
        event.target.style.color = "";
    }, 800);
}, false);