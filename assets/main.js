/*
  SITE CONFIGURATION
  Before publishing, replace the sample values below.
  You can rename the agency without editing every page.
*/
const SITE_CONFIG = {
  brandName: "NOVA RIVEN DIGITAL MARKETING",
  email: "ravula.saloni@gmail.com",
  whatsappNumber: "", // Optional: country code + number, digits only, e.g. 919876543210
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-brand]").forEach((el) => {
    el.textContent = SITE_CONFIG.brandName;
  });
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
  document.querySelectorAll("[data-email-link]").forEach((el) => {
    el.href = `mailto:${SITE_CONFIG.email}`;
    el.textContent = SITE_CONFIG.email;
  });
  document.querySelectorAll(".brand-mark").forEach((el) => {
    el.textContent = (SITE_CONFIG.brandName.trim()[0] || "Y").toUpperCase();
  });

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
      navToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    }));
  }

  const searchInput = document.querySelector("#blog-search");
  const blogList = document.querySelector("#blog-list");
  const noResults = document.querySelector("#no-results");
  if (searchInput && blogList) {
    const cards = Array.from(blogList.querySelectorAll("[data-searchable]"));
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      let shown = 0;
      cards.forEach((card) => {
        const text = `${card.dataset.searchable} ${card.textContent}`.toLowerCase();
        const match = text.includes(query);
        card.hidden = !match;
        if (match) shown += 1;
      });
      if (noResults) noResults.hidden = shown > 0;
    });
  }

  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const service = String(data.get("service") || "").trim();
      const budget = String(data.get("budget") || "").trim();
      const message = String(data.get("message") || "").trim();
      const subject = encodeURIComponent(`Website enquiry: ${service}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget || "Not specified"}\n\nGoals and message:\n${message}`
      );
      const status = document.querySelector("#form-status");
      if (!SITE_CONFIG.email || SITE_CONFIG.email === "hello@example.com") {
        if (status) status.textContent = "Before using this form, update the sample email in assets/js/main.js to your real contact email.";
        return;
      }
      if (status) status.textContent = "Opening your email application. Please review the message and press Send.";
      window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
    });
  }
});
