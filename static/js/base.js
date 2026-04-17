
// nav-catagories-list toggle logic 
let nav_btn_arrow = document.querySelector('#nav-btn-arrow');
let nav_btn = document.querySelector('#nav-btn');
let head_catagories_list = document.querySelector('.head-catagories-list');
let slider_container = document.getElementById('slider-container');

let nav_btn_now = false;
nav_btn.addEventListener('click', () => {
    if (!nav_btn_now) {
        nav_btn_arrow.classList.add('nav-btn-arrow-active');
        head_catagories_list.classList.remove('head-catagories-list-active');
        slider_container.classList.add('slider-container-active');
        nav_btn_now = true;
    } else {
        nav_btn_arrow.classList.remove('nav-btn-arrow-active');
        head_catagories_list.classList.add('head-catagories-list-active');
        slider_container.classList.remove('slider-container-active');
        nav_btn_now = false;
    }
});

// Login - Signup list showing logic 
// let nav_account_arrow = document.querySelector('#nav-account-arrow');
// let nav_account_list = document.querySelector('.nav-account-list');

// let nav_list = false;
// nav_account_arrow.addEventListener('click', () => {
//     if (!nav_list) {
//         nav_account_list.classList.add('active');
//         nav_list = true;
//     } else {
//         nav_account_list.classList.remove('active');
//         nav_list = false;
//     }
// });


// Scroll back to top button logic 
const backToTopBtn = document.getElementById("backToTop");
let isScrolling;

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function () {
        if (document.documentElement.scrollTop > 300) {
            backToTopBtn.classList.remove("show");
        }
    }, 2000);
};

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});



// Footer NewsLetter Email Validation Logic

// document.addEventListener('DOMContentLoaded', () => {
//     const emailInput = document.getElementById('emailInput');

//     newsletterForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const userEmail = emailInput.value;
//         console.log(`Newsletter subscription request for: ${userEmail}`);

//         emailInput.value = '';
//     });
// });
















// home.js 

const track = document.getElementById('slider-track');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots-container');
const container = document.getElementById('slider-container');

let currentIndex = 0;
let slideInterval;

// 1. Initialize Dots
slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// 2. Core Navigation Logic
function updateSlider() {
    // Move the track by -100% * index
    track.style.transform = `translateX(-${currentIndex * (100 / slides.length)}%)`;

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider();
    resetTimer(); // Reset auto-play on manual click
}

// 3. Auto-play Logic
function startTimer() {
    slideInterval = setInterval(nextSlide, 5000); // 5 seconds
}

function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
}

// 4. UX Logic: Pause on Hover
container.addEventListener('mouseenter', () => clearInterval(slideInterval));
container.addEventListener('mouseleave', startTimer);

// Event Listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
});

// Boot up
startTimer();