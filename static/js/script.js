
// Ad Grid hover effect logic
document.addEventListener('DOMContentLoaded', () => {
    const gridCards = document.querySelectorAll('.grid-card');
    const container = document.querySelector('.grid-container');

    gridCards[0].classList.add('active');
    gridCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            gridCards.forEach(c => c.classList.remove('active'));
        });
    });

    container.addEventListener('mouseleave', () => {
        gridCards[0].classList.add('active');
    });

});

document.querySelectorAll('.shop-now').forEach(button => {
    button.addEventListener('click', (e) => {
        console.log('Navigating to product page...');
    });
});

// Reviews Paginator Logic
const tracking = document.getElementById('tracking');
let index = 0;

function moveSlide(direction) {
    const cards = document.querySelectorAll('.review-card');
    const cardWidth = cards[0].offsetWidth + 20; // width + gap
    const maxIndex = cards.length - (window.innerWidth > 768 ? 2 : 1);

    index += direction;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;

    tracking.style.transform = `translateX(-${index * cardWidth}px)`;
}

window.addEventListener('resize', () => {
    index = 0;
    tracking.style.transform = `translateX(0)`;
});



// Special Products Slider Logic
const track = document.getElementById('track');
const pagination = document.getElementById('pagination');
const totalProducts = 6;
let currentIndex = 0;

const firstCard = document.querySelector('.product-card');
for (let i = 1; i < totalProducts; i++) {
    const clone = firstCard.cloneNode(true);
    const name = clone.querySelector('.product-name');
    name.innerText = `Product Item ${i + 1}`;
    track.appendChild(clone);
}

for (let i = 0; i < totalProducts; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    pagination.appendChild(dot);
}

function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalProducts;
    goToSlide(currentIndex);
}, 5000);

