class animal {
    constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
    }
}

let perro = new animal("perro", 5, "marron");

console.log(perro)

/**
 *   Imágenes
 *   Enlaces internos y externos
 *   formatos de textos
 *   estructuras comentadas (que hacen una buena práctica)
 *   uno o varios componentes de bootstrap
 *   animaciones que pueden ser con css o js
 *   incorporación de clases y id para darle formato
 */

 let pos = 0;

 //Funcion para el movimiento de punta a punta de un objeto
 function myMove() {
    let id = null;
    const elem = document.getElementById("animate");

    if (pos<=2){
        id = setInterval(frame, 4);
    }else if(pos>=348){
        id = setInterval(revFrame, 4);
    }
    
    function frame() {
        if (pos != 350) {
            pos++;          
            elem.style.left = pos + "px";
        }else{
            clearInterval(id);
        }
    }
    function revFrame() {
        if (pos != 0){
            pos--;
            elem.style.left = pos + "px";
        }else{
            clearInterval(id);
        }
    }

    console.log(pos + " ave");
    return pos;
}

//Funcionamiento para other.html

//Consigo los datos de botonTroll
const botonTroll = document.querySelector("#botonTroll");

//Escucho el evento click, borro la etiqueta y le agrego una nueva con la llamada al siguiente metodo
botonTroll.addEventListener("click", function swapTroll(){
    const parentTroll = botonTroll.parentElement;

    parentTroll.removeChild(botonTroll);

    parentTroll.innerHTML=parentTroll.innerHTML + '<h2 class="btn btn-primary" onclick="swap()" id="buttonTroll">Oleee, intenta de nuevo</a>';

});

function swap(){
    const buttonTroll = document.querySelector("#buttonTroll");
    const parentTroll = buttonTroll.parentElement;

    parentTroll.removeChild(buttonTroll);

    parentTroll.innerHTML=parentTroll.innerHTML + '<a href="index.html" class="btn btn-primary" id="buttonTroll">Ahora si, volvemos?</a>';

};