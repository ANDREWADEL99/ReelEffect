document.addEventListener("DOMContentLoaded", () => {
    const reel = document.querySelector(".reel");
    let scrollPosition = 0;
    const videoWidth = 600; // Width of a single video (600px)

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            scrollPosition += videoWidth;
            if (scrollPosition >= reel.scrollWidth) {
                scrollPosition = reel.scrollWidth - videoWidth; // Prevent overscrolling
            }
        } else if (e.key === "ArrowLeft") {
            scrollPosition -= videoWidth;
            if (scrollPosition < 0) {
                scrollPosition = 0; // Prevent negative scrolling
            }
        }
        reel.style.transform = `translateX(-${scrollPosition}px)`;
    });

    // Touch swipe support
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
            scrollPosition += videoWidth;
            if (scrollPosition >= reel.scrollWidth) {
                scrollPosition = reel.scrollWidth - videoWidth;
            }
            startX = touchX;
        } else if (deltaX < -50) {
            // Swipe right
            scrollPosition -= videoWidth;
            if (scrollPosition < 0) {
                scrollPosition = 0;
            }
            startX = touchX;
        }

        reel.style.transform = `translateX(-${scrollPosition}px)`;
    });

    reel.addEventListener("touchend", () => {
        isDragging = false;
    });
});
