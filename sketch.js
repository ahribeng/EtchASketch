
// Main Containerr Div
const mainContainer = document.createElement("div");

// Define Grid Dimensions
const width = 700;
const height = 700;
// Define border size
const squareborder = 1;
const gridborder = 40;
// Define starting color and Transition Table for shading
const rgbstart = "rgb(234,234,234)";
const rgbtransition = {
    "rgb(234,234,234)" : "rgb(206,206,206)", 
    "rgb(206,206,206)" : "rgb(178,178,178)", 
    "rgb(178,178,178)" : "rgb(152,152,152)", 
    "rgb(152,152,152)" : "rgb(126,126,126)",
    "rgb(126,126,126)" : "rgb(101,101,101)",
    "rgb(101,101,101)" : "rgb(77,77,77)", 
    "rgb(77,77,77)" : "rgb(54,54,54)",
    "rgb(54,54,54)" : "rgb(33,33,33)",
    "rgb(33,33,33)" : "rgb(10,10,10)",
    "rgb(10,10,10)" : "rgb(10,10,10)"
};

// Add Header to main div
mainContainer.appendChild(createHeader())
// Add main div to body
document.body.appendChild(mainContainer)

// Create Grid and add to body on load
document.body.onload = createGrid(16);

function createHeader(){
    const clear = document.createElement("button");
    const textContainer = document.createElement("div");
    const header = document.createElement("h1");

    textContainer.classList.add("container");
    textContainer.classList.add("center");
    textContainer.style.width = width + "px";
    textContainer.style.height = "100px";

    header.textContent = "Etch a Sketch"
    clear.textContent = "Clear Grid";
    clear.classList.add("center");
    clear.style.width = "100px";
    clear.style.height = "50px";
    clear.addEventListener("click", function(){
        clearGrid();
        let gridsize = prompt("Please enter size of the grid");
        createGrid(gridsize);
    });

    textContainer.appendChild(header)
    textContainer.appendChild(clear)

    return textContainer
}

function createGrid (gridsize) {
    // Creates Grid of Grid Size

    const gridContainer = document.createElement("div");
    styleGrid(gridContainer);
    for (let i = 0; i < gridsize; i++){
        for (let j = 0 ; j < gridsize; j++){
            gridContainer.appendChild(createSquare(width / gridsize, height/ gridsize));
        }
    }  
    mainContainer.appendChild(gridContainer)
 }

function styleGrid(grid){
    grid.classList.add("container");
    grid.classList.add("center");
    grid.style.width = width + "px";
    grid.style.height = height + "px";
    grid.style.border = gridborder + "px solid rgb(197, 0, 0)";
}

function createSquare (width, height) {
    // creates Square of width and height
    // Adds event listener on mouse over that shades darker

    let gridSquare = document.createElement("div");
    styleSquare(gridSquare, width, height);

    gridSquare.addEventListener("mouseover", function(){
        let prevcolor = gridSquare.style.backgroundColor.replaceAll(' ','');
        gridSquare.style.backgroundColor = rgbtransition[prevcolor];
    });
    return gridSquare
}

function styleSquare(square, width, height){
    square.style.flex = "0 0 " + (width - squareborder*2) + "px";
    square.style.height = (height - squareborder*2) + "px";
    square.style.border = squareborder + "px solid rgb(0, 0, 0)";
    square.style.backgroundColor = rgbstart;
}

function clearGrid(){
    // Remove grid so that is can be recreated with new size
    let container = document.querySelectorAll('.container')[1];
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.remove()
}