const pi = 3.141;

let input;

let total;

function pixRadPow(pi, rad) {
    return (pi) * (rad**2);
}

function pixRadWithMathPow(pi, rad) {
    return (pi) * (Math.pow(rad,2));
}

function validator(input){
    return input > 0 && input < 100 ? true : false;
}

function inputAgain(){
    input = parseInt(prompt("Ingrese el numero que quiere evaluar (entre 1 y 99):",0));

    console.log(input, validator(input));
    if(validator(input) == true){
        return input;
    }else{
        alert("Error, ingrese nuevamente un numero entre 1 y 99");
        return inputAgain(input);
    }
}

function start(useMathPow){

    input = parseInt(prompt("Ingrese el numero que quiere evaluar (entre 1 y 99):",0));

    if (validator(input) == false){
        alert("Error, ingrese nuevamente un numero entre 1 y 99");
        input = inputAgain();
    }

    if(useMathPow == false){
        total = pixRadPow(pi,input);
    }else{
        total = pixRadWithMathPow(pi,input);
    }

    const swapper = document.querySelector("#swapper");
    const parentSwapper = swapper.parentElement;

    parentSwapper.removeChild(swapper);

    parentSwapper.innerHTML = parentSwapper.innerHTML + '<h1 id="swapper">'+total+'</h1>';

    alert(total);
}