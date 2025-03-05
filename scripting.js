// Optional: Add any interactivity, such as scroll animations or event listeners
document.addEventListener("DOMContentLoaded", () => {
    const scrollButtons = document.querySelectorAll(".cta-button");

    scrollButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const targetId = e.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });
        });
    });
});
