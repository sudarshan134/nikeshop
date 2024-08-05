const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slides img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

slides[currentSlide].classList.add('active');

prevButton.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
});

nextButton.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
});



const productButton = document.querySelector(".productButton");

const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

 
productButton.addEventListener("click",() =>{
  payment.style.display="flex"
})

close.addEventListener("click",() =>{
  payment.style.display="none"
})






