const mainContainer = document.querySelector('.container');
const content = document.createElement('grid');
content.classList.add('grid');

for (let i = 0; i <= 255; i++) {
    let clone = content.cloneNode(true);
    mainContainer.appendChild(clone);
}

const allGrids = document.querySelectorAll('.grid');

allGrids.forEach((littleGrid) => { 
    littleGrid.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'blue';
    });
});