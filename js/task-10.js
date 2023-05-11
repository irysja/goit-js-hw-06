
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
createButton.addEventListener('click', () => createBoxes(input.value));
destroyButton.addEventListener('click', destroyBoxes);
function createBoxes(amount) { const array = [...new Array(Number(amount)).keys()];
  const childBoxes = array.map(number => {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + number * 10}px`;
    box.style.height = `${30 + number * 10}px`;
    return box;
  });
  boxes.append(...childBoxes);
}
function destroyBoxes() { boxes.innerHTML = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215) 
      .toString(16) 
      .padStart(6, 0)}`;
}