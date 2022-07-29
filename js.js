const h1 = document.querySelector('h1');
const input1 = document.querySelector('#inp1');
const input2 = document.querySelector('#inp2');
const boton = document.querySelector('#btn');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#form');

form.addEventListener('submit', sumarInputs)

function sumarInputs(event) {
    event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    resultado.innerText = 'El resultado de la suma es ' + suma;
}