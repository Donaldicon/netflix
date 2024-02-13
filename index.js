const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelector('.the-hot-movies');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.children.length;
  updateSlider();
});

function updateSlider() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
