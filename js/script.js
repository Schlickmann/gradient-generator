let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body');
let select = document.getElementById('color-selector');
let h3 = document.getElementById('current-gradient');

const setGradient = () => {
    body.style.background = `linear-gradient(to ${select.value}, ${color1.value}, ${color2.value})`;
    css.textContent = `${body.style.background};`
}

select.addEventListener("input", setGradient)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();