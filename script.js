let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= 3) slideIndex = 0;
    if (index < 0) slideIndex = 2;
    
    slides.style.transform = `translateX(-${slideIndex * 33.33}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

// Initialize the carousel
showSlide(slideIndex);