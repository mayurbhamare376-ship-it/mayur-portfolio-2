const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");
const contactForm = document.querySelector(".contact-form");

// Mobile menu open and close
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Link click karne ke baad mobile menu close
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

// Current year footer me show karna
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Contact form demo
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    alert(
        "Thank you! Contact form ko baad me EmailJS se connect karenge."
    );

    contactForm.reset();
});