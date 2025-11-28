// Add your image links here:
let images = [
    "img/WhatsApp Image 2025-11-28 at 12.18.55 AM.jpeg",
    "img/WhatsApp Image 2025-11-28 at 12.18.56 AM (1).jpeg",
    "img/WhatsApp Image 2025-11-28 at 12.18.56 AM (2).jpeg",
    "img/WhatsApp Image 2025-11-28 at 12.18.56 AM.jpeg"
];

let index = 0;
let slide = document.getElementById("slideshow");

function changeImage() {
    index++;
    if (index >= images.length) index = 0;
    slide.src = images[index];
}

setInterval(changeImage, 3000); // change every 3 seconds

// Music autoplay fix for mobile
window.addEventListener('click', () => {
    document.getElementById("bgMusic").play();
}, { once: true });
