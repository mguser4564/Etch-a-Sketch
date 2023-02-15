
const gridContainer = document.getElementById('gridContainer');
const toggleButton = document.getElementById('toggle-size');

let gridSize = 16;
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

  createGrid();

  function toggleGrid(){
  toggleButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    gridItems = [];
    if (gridSize === 16) {
        gridContainer.style.gridTemplateRows = 'repeat(32, 1fr)'
        gridContainer.style.gridTemplateColumns = 'repeat(32, 1fr)'
      gridSize = 32;
    } else if (gridSize === 32) {
        gridContainer.style.gridTemplateRows = 'repeat(64, 1fr)'
        gridContainer.style.gridTemplateColumns = 'repeat(64, 1fr)'
      gridSize = 64;
    } else {
        gridContainer.style.gridTemplateRows = 'repeat(16, 1fr)'
        gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)'
      gridSize = 16;
    }
    createGrid();
  });};
  
  toggleGrid()
 
    gridItems.forEach(element => {
        element.addEventListener('click', () => {
            element.style.backgroundColor = 'red';  
        });
    });
