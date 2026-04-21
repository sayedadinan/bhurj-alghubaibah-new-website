// Mobile navigation
const navIcon = document.querySelector("#nav-icon");
const navUl = document.querySelector("#navUl");

function nav() {
  if (!navIcon || !navUl) return;

  const isClosed =
    navIcon.className === "ri-menu-line" || !navUl.classList.contains("open");

  navIcon.className = isClosed ? "ri-close-line" : "ri-menu-line";
  if (isClosed) {
    navUl.classList.add("open");
    navUl.style.left = "0%";
  } else {
    navUl.classList.remove("open");
    navUl.style.left = "-100%";
  }
}

// Header scroll effect
const siteHeader = document.querySelector("#site-header");
function onScroll() {
  if (!siteHeader) return;
  if (window.scrollY > 60) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", onScroll);

// Testimonials slider
const testimonialSlider = document.querySelector(".testimonial-slider");

if (testimonialSlider) {
  new Swiper(".testimonial-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    pagination: {
      el: ".testimonial-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 3,
      },
    },
  });
}

// Work filter
const workGrid = document.querySelector(".all-car");

if (workGrid && typeof mixitup !== "undefined") {
  mixitup(".all-car", {
    selectors: {
      target: ".cars",
    },
    animation: {
      duration: 300,
    },
  });
}

// Active filter button state
const carLogo = document.querySelectorAll(".car-logo");

function activeLogo() {
  carLogo.forEach((logo) => logo.classList.remove("active-fc"));
  this.classList.add("active-fc");
}

carLogo.forEach((logo) => logo.addEventListener("click", activeLogo));

// Scroll up button visibility
function scrollUp() {
  const scrollButton = document.querySelector(".scroll-up");
  if (!scrollButton) return;

  if (window.scrollY >= 500) scrollButton.classList.add("show-scroll");
  else scrollButton.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

// Scroll reveal animations
const sr = ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 900,
  delay: 100,
  reset: false,
  easing: "cubic-bezier(0.16, 1, 0.3, 1)",
});

sr.reveal(".hero-label, .hero-title, .hero-desc, .hero-cta-row", {
  origin: "left",
  delay: 200,
  interval: 120,
});
sr.reveal(".hero-info-card", {
  origin: "right",
  delay: 400,
});
sr.reveal(".section-title, .section-text, .eyebrow", {
  delay: 100,
  interval: 80,
});
sr.reveal(".service-card", {
  origin: "bottom",
  delay: 100,
  interval: 100,
});
sr.reveal(".work-card", {
  origin: "bottom",
  delay: 80,
  interval: 80,
});
sr.reveal(".why-feature", {
  origin: "left",
  delay: 100,
  interval: 100,
});
sr.reveal(".about-visual, .why-visual", {
  origin: "right",
  delay: 200,
});
sr.reveal(".about-copy, .why-copy", {
  origin: "left",
  delay: 150,
});
sr.reveal(".testimonial-card", {
  origin: "bottom",
  delay: 100,
  interval: 100,
});
sr.reveal(".stat-item", {
  origin: "bottom",
  delay: 80,
  interval: 80,
});
sr.reveal(".contact-item", {
  origin: "left",
  delay: 80,
  interval: 80,
});
sr.reveal(".map-panel", {
  origin: "right",
  delay: 200,
});
sr.reveal(".footer-grid > div", {
  origin: "bottom",
  delay: 80,
  interval: 80,
});
