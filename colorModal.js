let colorBox = document.getElementById('color');

let hue = 0;
let saturation = 100;
let lightness = 50;

let huePicker = document.getElementById('huePicker'); //---------------Hue picker
let saturationPicker = document.getElementById('saturationPicker'); //-Saturation Picker
let valuePicker = document.getElementById('valuePicker'); //-----------Lightness Picker

let saturationBackground = document.getElementById('saturation');
let valueBackground = document.getElementById('value');

let nameBox = document.getElementById('name');

window.onload = function(){
    nameTheColor();
    };


huePicker.oninput = function () {
    hue = this.value;
    valueBackground.style.backgroundImage = `linear-gradient(to right, black, hsl(${hue}, 100%, 50%), white)`;
    saturationBackground.style.backgroundImage = `linear-gradient(to right, hsl(0,0%,50%), hsl(${hue}, 100%, 50%))`;
    updateBoxColor();
};

saturationPicker.oninput = function () {
    saturation = this.value;
    updateBoxColor();
};

valuePicker.oninput = function () {
    lightness = this.value;
    updateBoxColor();
};

function updateBoxColor() {
    colorBox.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function nameTheColor() {
    fetch(
        `https://www.thecolorapi.com/id?hsl=${hue},${saturation}%,${lightness}%`
    )
        .then(function (response) {
            return response.json();
            console.log("did it")
        })
        .then(function (data) {
            nameBox.innerHTML = data.name.value;
            console.log(data.name.value)
        });
}

export {nameTheColor}
