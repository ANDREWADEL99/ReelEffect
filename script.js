document.addEventListener("DOMContentLoaded", () => {
    const reel = document.querySelector(".reel");
    const videos = document.querySelectorAll(".reel video");
    let currentIndex = 0;

    // Add swipe gesture support for touch devices
    let startY = 0;
    let endY = 0;

    const updateReelPosition = () => {
        reel.style.transform = `translateY(-${currentIndex * 100}%)`;
    
        // Pause all videos except the current one
        videos.forEach((video, index) => {
            if (index === currentIndex) {
                video.play();
            } else {
                video.pause();
            }
        });
    };
    

    // Event Listener for Swipe Gestures
    document.addEventListener("touchstart", (e) => {
        startY = e.touches[0].clientY;
    });

    document.addEventListener("touchend", (e) => {
        endY = e.changedTouches[0].clientY;

        if (startY > endY + 50 && currentIndex < videos.length - 1) {
            // Swipe Up
            currentIndex++;
        } else if (startY < endY - 50 && currentIndex > 0) {
            // Swipe Down
            currentIndex--;
        }
        updateReelPosition();
    });

    // Keyboard navigation (optional)
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown" && currentIndex < videos.length - 1) {
            currentIndex++;
        } else if (e.key === "ArrowUp" && currentIndex > 0) {
            currentIndex--;
        }
        updateReelPosition();
    });
});
