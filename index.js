"use strict";

const btn = document.querySelector("button");
const grid = document.querySelector("#grid");
let squaresList = document.querySelectorAll(".square");

let size = 16;
let squareSide = 480/size;

function colorBlack (e) {
    e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
}


function createPixels() {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.style.width = `${squareSide}px`;
        square.style.height = `${squareSide}px`;

        square.classList.add("square");

        grid.appendChild(square);
    }

    squaresList = document.querySelectorAll(".square");
    squaresList.forEach((e) => e.addEventListener("mouseenter", colorBlack));
}


btn.addEventListener("click", () => {

    size = Number(prompt("Custom pixel side length:"));
    squareSide = 480/size;

    squaresList = document.querySelectorAll(".square");

    squaresList.forEach((e) => {
        e.remove();
    })

    createPixels();
})

createPixels();
