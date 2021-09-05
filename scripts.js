// creating grid
const htmlStyles = window.getComputedStyle(document.querySelector("html"));
let dim = parseInt(htmlStyles.getPropertyValue("--rowNum"));
const container = document.querySelector("div");
createGrid(dim);

// adding event listener to change colour when mouse is over the box
addListeners();

// clearing the grid once button clicked
const button = document.querySelector("button");
button.addEventListener('click', () => {
    clearGridColor();
    
    // ensuring the dimensions are at most, 100 x 100
    let legal = false;
    while(legal == false){
        
        dim = prompt("How many squares per side?");
        if(dim<=100){
            legal = true;
        }
    }

    document.documentElement.style.setProperty("--rowNum", dim);
    createGrid(dim);
})


//functions
function addListeners() {
    const gridBoxList = document.querySelectorAll("div.grid-box")
    gridBoxList.forEach(element => {
        element.addEventListener('mouseover', e => {
            e.target.style.background = "cyan"
        })
    });
}

function removeGrid(){
    const gridBoxList = document.querySelectorAll("div.grid-box");
    const container = document.querySelector("div.container");

    gridBoxList.forEach(element => {
        container.removeChild(element);
    });
}

function createGrid(dim) {
    removeGrid();
    for (let i = 0; i < dim; i++) {
        for (let i = 0; i < dim; i++) {
            const innerDiv = document.createElement('div');
            innerDiv.classList.add('grid-box');
            container.appendChild(innerDiv);
        }
    }
    addListeners();
}

function clearGridColor() {
    const gridBoxList = document.querySelectorAll("div.grid-box")
    gridBoxList.forEach(element => {
        element.style.background = "grey";
    });
}



