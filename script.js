
const gridContainer = document.getElementById('gridContainer');
const toggleButton = document.getElementById('toggle-size');

let gridSize = 16;

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
        const div = document.createElement('div');
        div.classList.add('gridItem');
        gridContainer.appendChild(div);
        }
    }
  }

  createGrid();

  toggleButton.addEventListener('click', () => {
    gridContainer.innerHTML = '';
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
  });