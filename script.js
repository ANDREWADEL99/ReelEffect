document.addEventListener("DOMContentLoaded", () => {
    const reel = document.querySelector(".reel");
    let scrollPosition = 0;
    const videoWidth = reel.children[0].offsetWidth;

    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            if (scrollPosition < reel.scrollWidth - videoWidth) {
                scrollPosition += videoWidth;
            }
        } else if (e.key === "ArrowLeft") {
            if (scrollPosition > 0) {
                scrollPosition -= videoWidth;
            }
        }
        reel.style.transform = `translateX(-${scrollPosition}px)`;
    });
});