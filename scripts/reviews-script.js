const carousel = document.querySelector(".carousel");

carousel.innerHTML += carousel.innerHTML;

let x = 0;
let speed = 1;
let paused = false;

carousel.addEventListener("mouseenter", () => paused = true);
carousel.addEventListener("mouseleave", () => paused = false);

function scroll() {
    if (!paused) {
        x -= speed;

        if (Math.abs(x) >= carousel.scrollWidth / 2) {
            x = 0;
        }

        carousel.style.transform = `translateX(${x}px)`;
    }

    requestAnimationFrame(scroll);
}

scroll();