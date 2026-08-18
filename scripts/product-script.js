const product_display = document.querySelector(".product-display");
const image = product_display.querySelector("img");

const rect = image.getBoundingClientRect();


image.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const x = (mouseX / rect.width) * 2 -1;
    const y = (mouseY / rect.height) * 2 -1;

    image.style.transform = `
        translate(${-x * 10}px, ${-y * 10}px)
    `;
})