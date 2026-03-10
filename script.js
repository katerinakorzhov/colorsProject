import { Color } from './color.js'
import { nameTheColor } from './colorModal.js';

let nameAColorButton = document.getElementById("nameColor");
let colorModal = document.getElementById("colorModal");
let closeModalButton = document.getElementById("xButton");

const colorPickers = document.getElementsByClassName("picker");
for (const picker of colorPickers){
    picker.addEventListener("mouseup", nameTheColor);
}

nameAColorButton.onclick = function(){
    colorModal.style.display = "block";
}

closeModalButton.onclick = function(){
    colorModal.style.display = "none";
}


function appendCategories(category) {
    let colorsDiv = document.getElementById("colors")
    while (colorsDiv.firstChild) {
        colorsDiv.removeChild(colorsDiv.lastChild);
    }

    colors.forEach(function (tempColor) {
        if (tempColor.category == category) {
            tempColor.createColor();
        }
    })

}

document.getElementById("red").onclick = function () { appendCategories("red") };
document.getElementById("orange").onclick = function () { appendCategories("orange") };
document.getElementById("yellow").onclick = function () { appendCategories("yellow") };
document.getElementById("green").onclick = function () { appendCategories("green") };
document.getElementById("blue").onclick = function () { appendCategories("blue") };
document.getElementById("purple").onclick = function () { appendCategories("purple") };
document.getElementById("neutral").onclick = function () { appendCategories("neutral") };

onmousemove = updateBoxShadow

function updateBoxShadow(e) {

    let colorsList = document.getElementsByClassName("aColor");

    for (let tempColor of colorsList) {
        let rect = tempColor.getBoundingClientRect()

        //calculate the x and y differences between mouse and rect
        let xDiff = e.clientX - (rect.x + 75)
        let yDiff = e.clientY - (rect.y + 100)

        //plug differences into a math function and calculate the x and y offset for box shadow

        let xOffset = 25 * (xDiff / (Math.abs(xDiff) + 20))
        let yOffset = 25 * (yDiff / (Math.abs(yDiff) + 20))

        tempColor.style.boxShadow = `inset ${-xOffset}px ${-yOffset}px 20px -26px`;

    }
}


let colors = [
    new Color("Pumpkin", "orange", 255, 117, 24),
    new Color("Terracotta", "orange", 227, 83, 54),
    new Color("Lemon", "yellow", 255, 247, 0),
    new Color("Honeysuckle", "yellow", 234, 232, 111),
    new Color("Mustard", "yellow", 255, 206, 27),
    new Color("Butter Yellow", "yellow", 245, 232, 170),
    new Color("Marigold", "yellow", 234, 162, 33),
    new Color("Citrine", "yellow", 228, 208, 10),
    new Color("Saffron", "yellow", 241, 195, 56),
    new Color("Serenity", "blue", 179, 206, 229),
    new Color("Neon Blue", "blue", 31, 81, 255),
    new Color("Glaucous", "blue", 96, 130, 182),
    new Color("Cerulean", "blue", 0, 123, 167),
    new Color("Prussian Blue", "blue", 0, 49, 83),
    new Color("Pthalo Blue", "blue", 0, 15, 137),
    new Color("Navy Blue", "blue", 0, 0, 128),
    new Color("Celadon", "green", 168, 220, 171),
    new Color("Sage", "green", 156, 175, 136),
    new Color("Viridian", "green", 64, 130, 109),
    new Color("Evergreen", "green", 5, 71, 42),
    new Color("Pistachio", "green", 146, 179, 92),
    new Color("Honeydew", "green", 217, 255, 163),
    new Color("Jade", "green", 0, 168, 107),
    new Color("Mint", "green", 173, 235, 179),
    new Color("Moss", "green", 126, 140, 84),
    new Color("Pear", "green", 209, 226, 49),
    new Color("Chartreuse", "green", 204, 255, 0),
    new Color("Cornflower Blue", "blue", 99, 149, 238),
    new Color("Lilac", "purple", 164, 125, 171),
    new Color("Periwinkle", "purple", 204, 204, 255),
    new Color("Lavender", "purple", 211, 211, 255),
    new Color("Slate Gray", "neutral", 109, 129, 150),
    new Color("Seafoam", "green", 141, 220, 220),
    new Color("Salmon", "orange", 255, 126, 112),
    new Color("Mango", "orange", 253, 190, 2),
    new Color("Apricot", "orange", 255, 178, 127),
    new Color("Sunset Orange", "orange", 253, 94, 83),
    new Color("Chili Red", "red", 205, 28, 24),
    new Color("Ruby", "red", 224, 17, 95),
    new Color("Vermilion", "red", 231, 49, 33),
    new Color("Amaranth", "red", 232, 50, 86),
    new Color("Plum", "purple", 142, 69, 133),
    new Color("Wisteria", "purple", 189, 181, 213),
    new Color("Wine", "red", 114, 47, 55),
    new Color("Cherry", "red", 210, 4, 45),
    new Color("Crimson", "red", 220, 20, 60),
    new Color("Burgundy", "red", 128, 0, 32),
    new Color("Violet", "purple", 127, 0, 255),
    new Color("Mauve", "purple", 224, 175, 255)
]

