//*==================== Nav Bar Change color on Scrolling Down ====================*/
const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero__section");

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



// ==================== Contact JS ====================
const contact__toggle = document.querySelector('.contact__toggle');
const contact__sidebar = document.querySelector('.contact__sidebar');

contact__toggle.onclick = function() {
    contact__sidebar.classList.toggle('contact__active')
}

// ==================== Swiper JS ====================
let swiper = new Swiper(".studio__imgs-container", {
    slidesPerView: 4,
    spaceBetween: 40,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// ==================== Circular Text ====================
// const text = document.querySelector(".circle__text p");
// text.innerHTML = text.innerText.split("").map(
//     (char, i) => 
//     `<span style="transform:rotate(${i*7.2}deg)">${char}</span>`
// ).join("");
