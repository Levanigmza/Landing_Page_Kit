let sliderIndex = 0;
let slides = document.querySelectorAll('.slider img');
let totalSlides = slides.length;

function showSlide(index) {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }

  slides[index].style.display = 'block';
}

function nextSlide() {
  sliderIndex++;
  if (sliderIndex >= totalSlides) {
    sliderIndex = 0; 
  }
  showSlide(sliderIndex);
}

setInterval(nextSlide, 3000);