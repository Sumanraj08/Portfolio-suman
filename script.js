// Suman Raj Portfolio - JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // 1. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // 2. Display the current year in the footer
    const footer = document.querySelector("footer");

    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML += ` | ${currentYear}`;
    }

    // 3. Animate skill cards when they appear
    const skillCards = document.querySelectorAll(".skill-card");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        skillCards.forEach(function (card) {
            observer.observe(card);
        });
    } else {
        skillCards.forEach(function (card) {
            card.classList.add("show");
        });
    }

});