// 1. Mobile menu toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// 2. Nav scroll effect (transparent → solid on scroll)
const nav = document.querySelector(".nav");
if (nav) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

// 3. Active page highlighting
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage || (currentPage === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

// 4. Scroll reveal with IntersectionObserver
const revealElements = document.querySelectorAll(".reveal");
if (revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const siblings = el.parentElement.querySelectorAll(".reveal");
          const index = Array.from(siblings).indexOf(el);
          setTimeout(() => {
            el.classList.add("visible");
          }, index * 90);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 },
  );

  revealElements.forEach((el) => observer.observe(el));
}

// 5. Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
