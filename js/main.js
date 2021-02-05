'use strict';
//Elementos que declaro desde HTML
const numberElement = document.querySelector('.js-number');
const updateElement = document.querySelector('.js-btn');
const trackElement = document.querySelector('.js-track');
const attempsElement = document.querySelector('.js-attemps');
const spanElement = document.querySelector('.js-span');

//1-Crear funcion para número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

const random = getRandomNumber(100);

//3. El contador = 0 fuera del evento
let counterNumber = 0;

//2-Evento al introducir número y pulsar botón
//Condicionales

function handleLuck(){
    handleNumber();
    handleCounter ();
}

function showClues(message) {
    trackElement.innerHTML = "Pista:" + message;
  }

function handleNumber(){
    //obtengo el valor numçérico del input donde se introduce el número
    const numberValue = parseInt(numberElement.value);

    if (numberValue === random){
        showClues("Has ganado campeona!!!");
    }
    else if (numberValue > 100 || numberValue < 1){
        showClues("Tienes que introducir un número entre 1 y 100.");
    }
    else if (numberValue < random){
        showClues("Demasiado bajo.");
    }
    else if (numberValue > random){
        showClues("Demasiado alto.");
    }
    else{
        showClues("Funciona solo con números");
    }

}
function handleCounter (){
    counterNumber = counterNumber + 1;
    spanElement.innerHTML = counterNumber;
}

updateElement.addEventListener('click', handleLuck);