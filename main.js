// ==================== Swiper JS ====================
// let swiper = new Swiper(".mySwiper", {
    
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesProgress: true,
// });
// let swiper2 = new Swiper(".mySwiper2", {
//     spaceBetween: 10,
//     thumbs: {
//       swiper: swiper,
//     },
// });

let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

// ==================== Swiper JS ====================
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
