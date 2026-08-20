const product_display = document.querySelector(".product-display");
const image = product_display.querySelector("img");

const rect = image.getBoundingClientRect();


image.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const x = (mouseX / rect.width) * 2 - 1;
    const y = (mouseY / rect.height) * 2 - 1;

    image.style.transform = `
        translate(${-x * 10}px, ${-y * 10}px)
    `;
})

function popup() {
    const popupContainer = document.querySelector(".popup-container");
    const productContainer = document.querySelector(".product-container");
    const text = document.querySelector(".popup-text")
    productContainer.style.filter = "blur(8px)";
    popupContainer.style.zIndex = 1;
    popupContainer.style.opacity = "100%";
    text.innerHTML = "Sorry this product is not available.";
}

function popupClose() {
    const popupContainer = document.querySelector(".popup-container");
    const productContainer = document.querySelector(".product-container");
    productContainer.style.filter = "";
    popupContainer.style.opacity = "0";
    popupContainer.style.zIndex = -2;
}

function toggleSign() {
    document.querySelector(".product-sign").classList.toggle("hidden");
}

function sizeProductContainer() {
    const container = document.querySelector(".product-container");
    const sign = document.querySelector(".product-sign");

    if (window.innerWidth <= 1000) {
        container.style.minHeight = sign.offsetHeight + "px";
    } else {
        container.style.minHeight = "";
    }
}

window.addEventListener("load", sizeProductContainer);
window.addEventListener("resize", sizeProductContainer);