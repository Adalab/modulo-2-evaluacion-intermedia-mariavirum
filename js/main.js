'use strict';
//Elementos que declaro desde HTML
const numberElement = document.querySelector('.js-number');
const updateElement = document.querySelector('.js-btn');
const trackElement = document.querySelector('.js-track');
const attempsElement = document.querySelector('.js-attemps');

//1-Crear funcion para número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

const random = getRandomNumber(100);
//comprobar en console que funciona el número aleatorio 
console.log (random);

//3. El contador = 0 fuera del evento
let counterNumber = 0;

//2-Evento al introducir número y pulsar botón
//Condicionales

function handleLuck(){
    //obtengo el valor numçérico del input donde se introduce el número
    const numberValue = parseInt(numberElement.value);
    console.log (numberValue);

    if (numberValue === random){
        trackElement.innerHTML = 'Has ganado campeona!!!';
    }
    else if (numberValue > 100){
        trackElement.innerHTML = 'Número demasiado alto';
    }
    else if (numberValue < 1){
        trackElement.innerHTML = 'Número demasiado bajo';
    
    }
    else {
        trackElement.innerHTML = 'El número debe estar entre 1 y 100';
    }
    

}
function counter (){
    let counterNumberTotal = counterNumber + 1;
    attempsElement.innherHTML = 'Número de intentos:' + counterNumberTotal;
    
    console.log (counter);
}





updateElement.addEventListener('click', handleLuck);