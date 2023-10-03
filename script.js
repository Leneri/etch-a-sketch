function removeOldTiles() {
    let oldGrid = document.querySelectorAll('.grid');
    for (let i = 0; i < oldGrid.length; i++)
        oldGrid[i].remove();
};

function addNewTiles(number) {
    //calculate tile size based on user input
    content.style.width = (800/number) + "px";
    content.style.height = (800/number) + "px";

    //clone tile
    for (let i = 0; i <= (number**2-1); i++) {
        let clone = content.cloneNode(true);
        mainContainer.appendChild(clone);
    }

    //add hover effects
    const allGrids = document.querySelectorAll('.grid');
    allGrids.forEach((littleGrid) => { 
        littleGrid.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'blue';
        });
    });
};


const mainContainer = document.querySelector('.container');
const content = document.createElement('grid');
content.classList.add('grid');

//create starting 16x16 field
addNewTiles(16);

const btn = document.querySelector('button');
btn.addEventListener("click", () => {
    let choice = prompt("Enter the number of squares (no more than 100):");
    if (choice > 100) {
        alert("Too many squares!");
    } else if (choice <= 1)  {
        alert("The number cannot be equal or less than 1!");
    } else {
        removeOldTiles();
        addNewTiles(choice);
    }
});