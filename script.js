let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, idx) => {
        slide.style.opacity = idx === currentSlide ? '1' : '0';
        slide.classList.toggle('active', idx === currentSlide);
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000);
e
showSlide(currentSlide);

const leftBox = document.querySelector('.left-box');
const rightBox = document.querySelector('.right-box');
const leftSweets = document.querySelector('.left-box-sweets');
const rightSweets = document.querySelector('.right-box-sweets');

leftBox.addEventListener('mouseenter', () => {
    leftSweets.classList.remove('hidden');
    leftSweets.style.opacity = '1';
});

leftBox.addEventListener('mouseleave', () => {
    leftSweets.style.opacity = '0';
    setTimeout(() => {
        leftSweets.classList.add('hidden');
    }, 500);
});

rightBox.addEventListener('mouseenter', () => {
    rightSweets.classList.remove('hidden');
    rightSweets.style.opacity = '1';
});

rightBox.addEventListener('mouseleave', () => {
    rightSweets.style.opacity = '0';
    setTimeout(() => {
        rightSweets.classList.add('hidden');
    }, 500);
});

