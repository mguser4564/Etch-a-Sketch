const gridContainer = document.getElementById('gridContainer');
const slider = document.getElementById('mySlider');
const clear = document.getElementById('clearGrid')
const output = document.getElementById("sliderValue");
const random = document.getElementById('randomColor');
const eraser = document.getElementById('eraseGrid');
const classic = document.getElementById('classicColor');
const choosecolor = document.getElementById('choosecolor')

let gridSize = slider.value;
let gridItems = [];

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
    changeColor();
  });
};

function sliderValueDisplay() {
  output.innerHTML = `${slider.value} x ${slider.value}`;
  slider.oninput = function () {
    output.innerHTML = `${this.value} x ${this.value}`
  }
};

function chooseColor(){
  choosecolor.addEventListener('click', () => {
    const selectedColor = choosecolor.value;
    gridItems.forEach(element => {
      element.addEventListener('mousemove', () => {
        element.style.backgroundColor = selectedColor;
      });
    });
  });
}

function changeColor() {
  gridItems.forEach(element => {
    element.addEventListener('mousemove', () => {
      element.style.backgroundColor = 'black';
    });
  });
};

function classicColor() {
  classic.addEventListener('click', () => {
    gridItems.forEach(element => {
      element.addEventListener('mousemove', () => {
        element.style.backgroundColor = 'black';
      });
    });
  })
};

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeRandomColor() {
  random.addEventListener('click', () => {
    gridItems.forEach(element => {
      element.addEventListener('mousemove', () => {
        element.style.backgroundColor = getRandomColor();
      });
    });
  })
};


function eraseColor() {
  eraser.addEventListener('click', () => {
    gridItems.forEach(element => {
      element.addEventListener('mousemove', () => {
        element.style.backgroundColor = 'white';
      });
    });
  })
};

function clearGrid() {
  clear.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    gridSize = slider.value;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    createGrid();
    changeColor();
  })
};

createGrid();
slideGrid();
sliderValueDisplay();
changeColor();
changeRandomColor();
eraseColor();
classicColor();
clearGrid();
chooseColor();
