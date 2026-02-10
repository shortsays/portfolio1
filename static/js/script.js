// =====================
// Modern Portfolio JS (No libraries)
// - Smooth scroll for "Contact Me"
// - Active section highlight
// - Mobile nav toggle
// - Back-to-top button
// - Fake form submit success message
// =====================

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll (works even without CSS scroll-behavior)
  const smoothScrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Contact button
  const contactBtn = document.getElementById("contactBtn");
  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      smoothScrollTo("#contact");
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when clicking a link (mobile)
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active section highlight
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const setActiveLink = () => {
    let currentId = "";
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const top = section.offsetTop - 140;
      const bottom = top + section.offsetHeight;
      if (scrollY >= top && scrollY < bottom) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${currentId}`);
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  // Back to top button
  const toTopBtn = document.getElementById("toTopBtn");
  if (toTopBtn) {
    const toggleToTop = () => {
      toTopBtn.style.display = window.scrollY > 500 ? "inline-flex" : "none";
    };

    window.addEventListener("scroll", toggleToTop);
    toggleToTop();

    toTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Fake form submit message
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simple validation
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        status.textContent = "Please fill in all fields before sending.";
        status.style.color = "rgba(255, 180, 180, 0.95)";
        return;
      }

      status.textContent = "✅ Message sent! (Demo only — no backend connected.)";
      status.style.color = "rgba(34,197,94,0.95)";
      form.reset();
    });
  }

  // Footer year (optional)
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});
