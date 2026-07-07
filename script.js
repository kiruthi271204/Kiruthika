// Welcome Message
window.onload = function () {
    alert("Welcome to Kiruthika's Portfolio Website!");
};

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
