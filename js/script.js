var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomcolor");
var slider = document.getElementById("slider");
console.log(slider.value);

function randomColor() {
    var randomNumber = '#'+Math.floor(100000 + Math.random() * 900000);
    var randomNumber2 = '#'+Math.floor(90000 + Math.random() * 900000);
    color1.value = randomNumber;
    color2.value = randomNumber2;

    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    setGradient()
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    css.textContent = body.style.background + ";";
}

window.addEventListener('load', setGradient)
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
button.addEventListener('click', randomColor);