// ===================================
// Banner Carousel - Rotación automática
// ===================================

function initializeBannerCarousel() {
    const images = document.querySelectorAll('.banner-image');
    if (images.length <= 1) return;

    let currentIndex = 0;
    const intervalMs = 4500; // Cambia cada 4.5 segundos

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, intervalMs);
}

document.addEventListener('DOMContentLoaded', initializeBannerCarousel);