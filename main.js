//*==================== Accordion Experience ====================*/
const accordion = document.getElementsByClassName('accordion__item');

for (let i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// ==================== Contact JS ====================
const contact__toggle = document.querySelector('.contact__toggle');
const contact__sidebar = document.querySelector('.contact__sidebar');

contact__toggle.onclick = function() {
    contact__sidebar.classList.toggle('contact__active')
}

// ==================== Circular Text ====================
const text = document.querySelector(".circle__text p");
text.innerHTML = text.innerText.split("").map(
    (char, i) => 
    `<span style="transform:rotate(${i*7.2}deg)">${char}</span>`
).join("");
