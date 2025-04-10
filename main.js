var typed = new Typed(".text", {
    strings: ["Student", "Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.progress-line span').forEach(el => {
        setTimeout(() => {
            el.style.transform = "scaleX(1)"; // Animate the progress bar
        }, 500); // Delay for smooth effect
    });
});


