// Shared site header — to add a new section, just add one line here.
const SECTIONS = [
  { label: "Projects", href: "projects.html" },
  { label: "Book", href: "book.html" },
  { label: "Sessions", href: "sessions.html" },
  { label: "Research", href: "research.html" },
];

function buildNav() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const current = (window.location.pathname.split("/").pop() || "index.html");

  const nav = document.createElement("nav");
  nav.className = "site-nav";

  SECTIONS.forEach((section) => {
    const link = document.createElement("a");
    link.href = section.href;
    link.textContent = section.label;
    if (section.href === current) {
      link.setAttribute("aria-current", "page");
    }
    nav.appendChild(link);
  });

  header.appendChild(nav);
}

document.addEventListener("DOMContentLoaded", buildNav);
