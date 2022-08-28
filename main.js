//*==================== Nav Bar Hide on Scrolling Down ====================*/
// let prevScrollpos = window.pageYOffset;
// window.onscroll = () => {
//     let currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) 
//     {
//         document.getElementById("navbar").style.top = "0";
//     } 
//     else 
//     {
//         document.getElementById("navbar").style.top = "-124px";
//     }
//     prevScrollpos = currentScrollPos;
// }

// const navBar = document.querySelectorAll('navbar');


const header = document.querySelector("header");
const sectionOne = document.querySelector(".front__cover");

const sectionOneOptions = {
  rootMargin: "-300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("navbar__scrolled");
    } else {
      header.classList.remove("navbar__scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


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
// const text = document.querySelector(".circle__text p");
// text.innerHTML = text.innerText.split("").map(
//     (char, i) => 
//     `<span style="transform:rotate(${i*7.2}deg)">${char}</span>`
// ).join("");
