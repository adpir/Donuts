'use script';

// const text = document.querySelector('.heading');
// const strText = text.textContent;
// console.log(strText);

// const splitText = strText.split('');
// console.log(splitText);

// text.textContent = '';
// for (let i = 0; i < splitText.length; i++) {
//   text.innerHTML += '<span>' + splitText[i] + '</span>';
// }

// let character = 0;
// let timer = setInterval(onTick, 50);

// function onTick() {
//   const span = text.querySelectorAll('span')[character];
//   span.classList.add('fade');
//   character++; //keep running we need to make sure to stop the timer

//   if (character === splitText.length) {
//     complete();
//     return;
//   }
// }
// function complete() {
//   clearInterval(timer);
//   timer = null;
// }
// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.nav-links');
//   // herer we are going to add the individual links to show in the toggle and have some animations
//   const navLinks = document.querySelectorAll('.navLinks, li');

//   //toggle Nav
//   burger.addEventListener('click', () => {
//     nav.classList.toggle('nav-active');

//     // Animated links
//     navLinks.forEach((link, index) => {
//       // using index we can animated and we can make sure we have a delay in the transitions in the letters
//       if (link.style.animation) {
//         link.style.animation = ' ';
//       } else {
//         link.style.animation = ` navLinkFade 0.5s ease forwards ${
//           index / 7 + 1.5
//         }s`;
//       }
//     });
//     //Burger Animation when we click on the burger
//     burger.classList.toggle('toggle');
//   });
// };
// navSlide();
