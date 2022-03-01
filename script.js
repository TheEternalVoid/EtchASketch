// Create Grid
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

function clearGrid() {
  //Create Clear button
  let clearedBoxes = document.querySelectorAll("#container div");
  clearedBoxes.forEach((clearedBox) => {
      clearedBox.remove();
    });
  let newGrid = prompt("Enter a single integer to create a new grid with x by x rows and columns")
  makeRows(newGrid, newGrid);
  
  const boxes = document.querySelectorAll("#container div");

  boxes.forEach((box) => {
  
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = "black";
      });
    });
}


makeRows(50, 50);
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener('click', clearGrid);

//Turn boxes black on hover
const boxes = document.querySelectorAll("#container div");

boxes.forEach((box) => {

    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = "black";
    });
  });

