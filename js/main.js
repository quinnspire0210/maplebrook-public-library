// <!-- ==================================================== -->
// <!-- * Original Content Notice:
// This website includes content, images and component code generated with ChatGPT-5.1 (OpenAI, 2025), including the book carousel functionality. -->
// <!-- ==================================================== -->
// The JavaScript code below is coded and troubleshooted with the assistance of ChatGPT-5.1 (OpenAI, 2025). 
// <!-- ==================================================== -->

// MOBILE MENU TOGGLE
const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
    menu.classList.toggle("open");
});

// HEADER AUTO HIDE ON SCROLL
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');
const actionBar = document.querySelector('.header-actions-bar');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY && currentScroll > 100) {
        // Scroll down - hide header
        header.classList.add('header-hidden');
        actionBar.classList.add('header-hidden');
    } else {
        // Scroll up - show header
        header.classList.remove('header-hidden');
        actionBar.classList.remove('header-hidden');
    }

    lastScrollY = currentScroll;
});


// HOME - NEW ITEMS - CAROUSEL FUNCTIONALITY
const track = document.querySelector('.carousel-track');
            const prevBtn = document.querySelector('.carousel-btn.prev');
            const nextBtn = document.querySelector('.carousel-btn.next');
            const cards = document.querySelectorAll('.book-card');

            let currentIndex = 0;
            const cardsToShow = 4;
            const totalCards = cards.length;
            const maxIndex = totalCards - cardsToShow;

            function updateCarousel() {
                const cardWidth = cards[0].offsetWidth;
                const gap = parseInt(getComputedStyle(track).gap || 24);
                const offset = currentIndex * (cardWidth + gap);
                track.style.transform = `translateX(-${offset}px)`;

                prevBtn.disabled = currentIndex === 0;
                nextBtn.disabled = currentIndex >= maxIndex;
            }

            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            });

            nextBtn.addEventListener('click', () => {
                if (currentIndex < maxIndex) {
                    currentIndex++;
                    updateCarousel();
                }
            });

            window.addEventListener('resize', updateCarousel);
            updateCarousel();

// FAQ ACCORDION
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    const header = acc.querySelector(".accordion-header");

    header.addEventListener("click", () => {
        acc.classList.toggle("open");
    });
});
