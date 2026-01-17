const container = document.querySelector("div.grid-container");

createGrid(16);

function createGrid(size) {

    container.innerHTML = '';
    const squareSize = 100 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'grid-item');

        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = "blue";
        });

        container.appendChild(square);       
    }    

}

const squareButton = document.getElementById('squareButton');
squareButton.addEventListener('click', () => {

    let input = prompt('What is your preferred number of squares per side?');
    let number = parseInt(input);

    if (number === "") {
        alert("Please choose a number!");
    } else if (number > 100) {
        alert("Please choose a number less than 100");
    } else {
        createGrid(number);
    }

});
