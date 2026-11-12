
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Mobile navigation
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    hamburger.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.textContent = "☰";
    });
});

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".section-tag, .about-grid, .skill-item, .project-card, .org-card, .contact-content"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});

// Active navigation
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.classList.toggle(
            "active-link",
            link.getAttribute("href") === "#" + current
        );
    });
});
