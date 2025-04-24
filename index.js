"use strict";

function colorBlack (e) {
    e.target.style.backgroundColor = "black";
}

const grid = document.querySelector("#grid");

let size = 16;
let squareSide = 960/16;

for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.style.width = `${squareSide}px`;
    square.style.height = `${squareSide}px`;

    square.classList.add("square");

    grid.appendChild(square);
}

const squaresList = document.querySelectorAll(".square");

console.log(squaresList);

squaresList.forEach((e) => e.addEventListener("mouseenter", colorBlack));

