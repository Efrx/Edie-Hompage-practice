// const a = document.querySelector('a');

// a.innerHTML = 'Efrain'; existe tambien innerText;

// a.getAttribute('class') -> obtiene atributos de etiquetas, como src.
// a.setAttribute('class', 'rojo') -> cambia atributos de etiquetas, como clases.

//a.classList.add('class--name').
//a.classList.remove('class--name').

//a.classList.toggel.
//a.classList.contain.

//input.value = '458'...  Y asi modificamos los atrubutos de HTML.

// DOCUMEN.CREATEELEMENT...
//
//
//document.createElement('img');

// contact__input, contact__button.
const heroInput = document.querySelector('#join--hero');
const heroBtn = document.querySelector('#btn--hero');

const footerInput = document.querySelector('#join--footer');
const footerBtn = document.querySelector('#btn--footer');


footerBtn.addEventListener('click', clickOnFooter); // event, function.
heroBtn.addEventListener('click', clickOnHero); // event, function.

function clickOnFooter() {
    //console.log('Al parecer Funciona');
}
function clickOnHero() {
    //console.log('Al parecer Funciona');
}
