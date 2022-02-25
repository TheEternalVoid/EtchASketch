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
makeRows(10, 10);

//Turn boxes black on hover
const boxes = document.querySelectorAll("#container div");

boxes.forEach((box) => {

    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = "black";
    });
  });


//Create Clear button
const clearButton = document.querySelector(".clearButton");

clearButton.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.style.backgroundColor = "white";
    });
});