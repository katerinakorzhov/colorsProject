class Color {
    constructor(colorName, category, red, green, blue) {
        this.colorName = colorName;
        this.category = category;
        this.red = red;
        this.green = green;
        this.blue = blue;

    }

    createColor() {
        let colorEl = document.createElement("div");
        colorEl.classList.add("aColor");
        colorEl.style.backgroundColor = `rgba(${this.red},${this.green},${this.blue}, 0.3)`;

        //CLIP PATH BORDERS
        //random numbers for clip path boundaries
        let topLeft1 = Math.floor(Math.random() * 5);
        let topLeft2 = Math.floor(Math.random() * 5);
        let topRight1 = Math.floor(Math.random() * 5) + 95;
        let topRight2 = Math.floor(Math.random() * 5);
        let botRight1 = Math.floor(Math.random() * 5) + 95;
        let botRight2 = Math.floor(Math.random() * 5) + 95;
        let botLeft1 = Math.floor(Math.random() * 5);
        let botLeft2 = Math.floor(Math.random() * 5) + 95;

        colorEl.style.clipPath = `polygon(
            ${topLeft1}% ${topLeft2}%, 
            ${topRight1}% ${topRight2}%, 
            ${botRight1}% ${botRight2}%, 
            ${botLeft1}% ${botLeft2}%)`;

        let colorSquare = document.createElement("div");
        colorSquare.classList.add("square");
        colorSquare.style.backgroundColor = `rgb(${this.red},${this.green},${this.blue})`;

        let colorNameEl = document.createElement("p");
        colorNameEl.innerHTML = this.colorName;

        colorEl.appendChild(colorNameEl);
        colorEl.appendChild(colorSquare);

        document.getElementById("colors").append(colorEl);
    }


}

export { Color }
