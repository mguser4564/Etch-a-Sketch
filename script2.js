const gridContainer = document.getElementById('gridContainer');
const gridSize = document.getElementById('mySlider');
const newGrid = document.getElementById('clearGrid');
const classicBlack = document.getElementById('classicColor');
const eraser = document.getElementById('eraseGrid');
const randomColor = document.getElementById('randomColor');

let gridValue = gridSize.value;
let gridItems = [];

function makeGrid() {
  for (i = 0; i < gridValue; i++) {
    for (j = 0; j < gridValue; j++) {
      const div = document.createElement('div');
      div.classList.add('gridItems')
      gridContainer.appendChild(div);
      gridItems.push(div);
    }
  }
};

function changeGridSize(){
  gridSize.addEventListener('input', () => {
    gridContainer.innerHTML = "";
    gridValue = gridSize.value;
    gridContainer.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`
    makeGrid();
    makeBlack();
    eraseGrid();
    makeRandomColor();
  });
};

function makeBlack(){
  classicBlack.addEventListener('click', () =>{
    gridItems.forEach((Element) => {
      Element.addEventListener('mousemove', () => {
      Element.style.backgroundColor = 'black';;
      });
    });
  })
};

function clearGrid(){
  newGrid.addEventListener('click', () => {
    gridContainer.innerHTML = "";
    gridValue = gridSize.value;
    gridContainer.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`
    makeGrid();
    makeBlack();
    eraseGrid();
    makeRandomColor();
  })
};

function eraseGrid(){
  eraser.addEventListener('click', () => {
    gridItems.forEach((Element) => {
      Element.addEventListener('mousemove', () => {
      Element.style.backgroundColor = 'white';
      });
    });
  })
};

function getRandomColor() {
  const chars = '123456ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * chars.length);
    color += chars[index];
  }
  return color;
};

function makeRandomColor(){
randomColor.addEventListener('click', () => {
  gridItems.forEach((Element) => {
    Element.addEventListener('mousemove', () => {
    Element.style.backgroundColor = getRandomColor();
    });
  });
})
};

makeGrid();
changeGridSize();
makeBlack();
clearGrid();
eraseGrid();
makeRandomColor();