let startX = 0;
let isDragging = false;

reel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

reel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touchX = e.touches[0].clientX;
    const deltaX = startX - touchX;

    if (deltaX > 50) {
        // Swipe left
        if (scrollPosition < reel.scrollWidth - reel.offsetWidth) {
            scrollPosition += videoWidth;
        }
        startX = touchX; // Reset startX for smooth swiping
    } else if (deltaX < -50) {
        // Swipe right
        if (scrollPosition > 0) {
            scrollPosition -= videoWidth;
        }
        startX = touchX; // Reset startX for smooth swiping
    }
    reel.style.transform = `translateX(-${scrollPosition}px)`;
});

reel.addEventListener("touchend", () => {
    isDragging = false;
});
