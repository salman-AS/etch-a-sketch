const container = document.querySelector(".container");
let i = 0;
let numDivs = 10;
let divColor = "black";

//initial div creation
for (i = 0; i < numDivs * numDivs; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", `width:${(640 - 2 * numDivs) / numDivs}px; height:${(640 - 2 * numDivs) / numDivs}px; margin:0px; background-color: rgb(255,255,255)`)
    container.append(div);
}
mouseover();



const greyBTN = document.querySelector("#grey");
const blackBTN = document.querySelector("#black");
const rainbowBTN = document.querySelector("#rainbow");
const clearBTN = document.querySelector("#clear");


//add event listeners to button
greyBTN.addEventListener("click", () => {
    divColor = "grey";
});
blackBTN.addEventListener("click", () => {
    divColor = "black";
});
rainbowBTN.addEventListener("click", () => {
    divColor = "rainbow";
});
clearBTN.addEventListener("click", () => {
    const divs = document.querySelectorAll(".container > div");
    divs.forEach(div => {
        div.style.backgroundColor = "rgb(255,255,255)";
        div.style.border = "1px solid rgb(245, 245, 245)";
    })
});

//slider div creation
const slider = document.querySelector("input");
slider.addEventListener("input", () => {
    container.innerHTML = "";
    numDivs = slider.value;
    for (i = 0; i < numDivs * numDivs; i++) {
        const div = document.createElement("div");
        div.setAttribute("style", `width:${(640 - 2 * numDivs) / numDivs}px; height:${(640 - 2 * numDivs) / numDivs}px; margin:0px; background-color: rgb(255,255,255)`)
        container.append(div);
    }
    mouseover();
});


//etch-a-sketch
function mouseover() {
    const divs = document.querySelectorAll(".container > div");
    divs.forEach(div => {
        div.addEventListener("mouseover", () => {
            if (divColor == "black"){
                div.style.backgroundColor = "rgb(0,0,0)";
                div.style.border = "1px solid rgb(0, 0, 0)";
            }
            else if (divColor == "grey") {
                let rgbColor = div.style.backgroundColor;                                               //to extract rgb value from backgroundcolore
                let rgbArr = rgbColor.substring(4, rgbColor.length - 1).replace(/ /g, '').split(',');   //
                let x = parseInt(rgbArr[0]);
                div.style.backgroundColor = `rgb(${x-=20},${x},${x})`;
                div.style.border = `1px solid rgb(${x},${x},${x})`;
            }
            else if (divColor == "rainbow"){
                let r = randomIntFromInterval(0,255);
                let g = randomIntFromInterval(0,255);
                let b = randomIntFromInterval(0,255)
                div.style.backgroundColor = `rgb(${r},${g},${b})`;
                div.style.border = `1px solid rgb(${r},${g},${b})`;
            }
        });
    });
}


//random  number generator
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }