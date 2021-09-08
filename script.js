'use strict';

const text = document.querySelector('.heading');
const strText = text.textContent;
console.log(strText);

const splitText = strText.split('');
console.log(splitText);

text.textContent = '';
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += '<span>' + splitText[i] + '</span>';
}

let character = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll('span')[character];
  span.classList.add('fade');
  character++; //keep running we need to make sure to stop the timer

  if (character === splitText.length) {
    complete();
    return;
  }
}
function complete() {
  clearInterval(timer);
  timer = null;
}
