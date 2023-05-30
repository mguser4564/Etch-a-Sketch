const gridContainer = document.getElementById('gridContainer');
const slider = document.getElementById('mySlider');
const output = document.getElementById("sliderValue");
const colorPicker = document.getElementById('colorPicker')
const clear = document.getElementById('clearGrid')
const random = document.getElementById('randomColor');
const eraser = document.getElementById('eraseGrid');

let gridSize = slider.value;
let gridItems = [];
let selectedColor = '#000000';
let isMouseDown = false;
let isRandomColorSelected = false;
let isEraserSelected = false;

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement('div');
      div.classList.add('gridItems');
      gridContainer.appendChild(div);
      gridItems.push(div);
    }
  }
}

function slideGrid() {
  slider.addEventListener('input', () => {
    gridContainer.innerHTML = '';
    gridSize = slider.value;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    createGrid();
    drawOnGrid();
  });
};

function sliderValueDisplay() {
  output.innerHTML = `${slider.value} x ${slider.value}`;
  slider.oninput = function () {
    output.innerHTML = `${this.value} x ${this.value}`
  }
};

function chooseColor() {
  colorPicker.addEventListener('input', () => {
    selectedColor = colorPicker.value;
    isRandomColorSelected = false;
    isEraserSelected = false;
  });
}

function handleMouseDown(event) {
  isMouseDown = true;
  changeCellColor(event.target);
}

function handleMouseOver(event) {
  if (isMouseDown) {
    changeCellColor(event.target);
  }
}

function changeCellColor(cell) {
  if (isRandomColorSelected == false && isEraserSelected == false){
  cell.style.backgroundColor = selectedColor;}
  else if (isRandomColorSelected == true) {
  cell.style.backgroundColor = getRandomColor();
  } else if (isEraserSelected == true) {
    cell.style.backgroundColor = '#ffffff';
  }
}

function drawOnGrid() {
  gridItems.forEach(cell => {
    cell.addEventListener('mousedown', handleMouseDown);
    cell.addEventListener('mouseover', handleMouseOver);
  });
  document.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
};

function clearGrid() {
  clear.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    gridSize = slider.value;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    createGrid();
    drawOnGrid();
  })
};

function getRandomColor() {
 let letters = '0123456789ABCDEF';
 let color = '#';
 for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function changeRandomColor() {
  random.addEventListener('click', () => {
    isRandomColorSelected = true;
    isEraserSelected = false;
  })
};

function changeEraser() {
  eraser.addEventListener('click', () => {
    isEraserSelected = true;
    isRandomColorSelected = false;
  })
};


createGrid();
slideGrid();
sliderValueDisplay();
chooseColor();
drawOnGrid();
clearGrid();
changeRandomColor();
changeEraser();
