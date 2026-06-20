const text = "Welcome to the Aperture Online Store.";
const subtext = "Consumer-grade experimental technology at your fingertips.";
let index = 0;
let sub_index = 0;
const speed = 60;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
    if (document.getElementById("typewriter").textContent == text) {
        if (sub_index < subtext.length) {
            document.getElementById("subtext").textContent += subtext.charAt(sub_index);
            sub_index++;
            setTimeout(typeWriter, speed);
        }
    } 
    if (document.getElementById("subtext").textContent == subtext) {
        document.getElementById("shop-btn").style.transition = "opacity 3s ease";
        document.getElementById("shop-btn").style.opacity = 1;
    }
}
typeWriter();  