// ===== Cursor spotlight =====
// Feeds the pointer position to the radial gradient in body::before.
// Skipped on touch devices and when the visitor prefers reduced motion.
const wantsSpotlight =
  window.matchMedia("(hover: hover)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (wantsSpotlight) {
  let pending = false;
  let x = 0;
  let y = 0;

  window.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => {
      document.body.style.setProperty("--cursor-x", `${x}px`);
      document.body.style.setProperty("--cursor-y", `${y}px`);
      pending = false;
    });
  });
}

// ===== Highlight the sidebar nav link for the section in view =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-30% 0px -60% 0px" }
);

sections.forEach((section) => observer.observe(section));
