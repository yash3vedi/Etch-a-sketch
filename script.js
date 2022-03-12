const grid = document.querySelector('.grid');

createGrid = () => {
    for (let i = 0; i < 400; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div);
    }
};

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const slider = document.querySelector('#slider');
const screenVal = document.querySelector('.value');

slider.addEventListener('input', (e) => {
    let val = document.getElementById('slider').value;
    screenVal.textContent = val;
    removeAllChildNodes(grid);
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    for (let i = 0; i < val*val; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        div.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
        grid.appendChild(div);
    }
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', (e) => {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});

const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', (e) => {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = getRandomColor();
        });
    }
});

const black = document.querySelector('#black');
black.addEventListener('click', (e) => {
    let val = document.getElementById('slider').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    }
});

const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    let newColor = document.getElementById('color').value;
    let cell = grid.children;
    for (let i = 0; i < val*val; i++) {
        cell[i].addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = newColor;
        })
    }
});

createGrid();