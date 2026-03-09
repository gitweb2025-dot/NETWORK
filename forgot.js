gsap.registerPlugin(ScrollTrigger);

// CURSOR JS FOR HOVER
jQuery(document).ready(function ($) {
  const cursor = $(".cursor");

  $(document).on("mousemove", function (e) {
    cursor.css({
      top: e.clientY,
      left: e.clientX,
    });
  });

  $("a").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("a").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
  $("i").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("i").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
  $("button").on("mouseenter", function () {
    cursor.addClass("hovered");
  });

  $("button").on("mouseleave", function () {
    cursor.removeClass("hovered");
  });
});

// NAVBAR
const toggle = document.getElementById("homeToggle");
const menu = document.getElementById("homeMenu");
const items = menu.querySelectorAll(".home-item");
const caret = document.getElementById("homeCaret");

let isOpen = false;

gsap.set(menu, { autoAlpha: 0, y: -10, display: "none" });
gsap.set(items, { opacity: 0, y: -8 });

toggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isOpen) {
    menu.classList.remove("hidden");

    gsap.to(menu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.05,
    });

    gsap.to(caret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isOpen = true;
  } else {
    closeMenu();
  }
});

function closeMenu() {
  gsap.to(items, {
    opacity: 0,
    y: -8,
    duration: 0.2,
    stagger: 0.05,
    ease: "power2.in",
  });

  gsap.to(menu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => menu.classList.add("hidden"),
  });

  gsap.to(caret, {
    rotate: 0,
    duration: 0.25,
  });

  isOpen = false;
}

document.addEventListener("click", () => {
  if (isOpen) closeMenu();
});

const mobileToggle = document.getElementById("mobileHomeToggle");
const mobileMenu = document.getElementById("mobileHomeMenu");
const mobileItems = mobileMenu.querySelectorAll(".mobile-home-item");
const mobileCaret = document.getElementById("mobileCaret");

let isMobileOpen = false;

gsap.set(mobileMenu, {
  autoAlpha: 0,
  y: -10,
  display: "none",
});

gsap.set(mobileItems, {
  opacity: 0,
  y: -12,
});

mobileToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isMobileOpen) {
    mobileMenu.classList.remove("hidden");

    gsap.to(mobileMenu, {
      autoAlpha: 1,
      y: 0,
      display: "block",
      duration: 0.35,
      ease: "power3.out",
    });

    gsap.to(mobileItems, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.05,
    });

    gsap.to(mobileCaret, {
      rotate: 180,
      duration: 0.3,
      ease: "power2.out",
    });

    isMobileOpen = true;
  } else {
    closeMobileMenu();
  }
});

function closeMobileMenu() {
  gsap.to(mobileItems, {
    opacity: 0,
    y: -12,
    duration: 0.25,
    stagger: 0.06,
    ease: "power2.in",
  });

  gsap.to(mobileMenu, {
    autoAlpha: 0,
    y: -10,
    duration: 0.25,
    ease: "power2.in",
    onComplete: () => mobileMenu.classList.add("hidden"),
  });

  gsap.to(mobileCaret, {
    rotate: 0,
    duration: 0.25,
    ease: "power2.in",
  });

  isMobileOpen = false;
}

document.addEventListener("click", () => {
  if (isMobileOpen) closeMobileMenu();
});

// ROUNDED NAVBAR ANIMATION JS
const navbar = document.getElementById("navbar");

let lastScroll = 0;
let isHidden = false;

// INITIAL STYLE
gsap.set(navbar, {
  color: "black",
});

// SCROLL DIRECTION
window.addEventListener("scroll", () => {
  let current = window.scrollY;

  const mainNav = document.getElementById("navbar");

  if (current > lastScroll && current > 120 && !isHidden) {
    gsap.to(mainNav, { y: -220, duration: 1.3, ease: "power2.out" });
    isHidden = true;
  }

  if (current < lastScroll && isHidden) {
    gsap.to(mainNav, { y: 0, duration: 1.3, ease: "power2.out" });
    isHidden = false;
  }

  lastScroll = current;
});

// HOME SECTION STYLE CHANGE

ScrollTrigger.create({
  trigger: "#home", // TRIGGER
  start: "top top",

  onEnter: () => {
    gsap.to(navbar, {
      duration: 0.5,
    });
  },

  onLeaveBack: () => {
    gsap.to(navbar, {
      duration: 0.5,
    });
  },
});

// MOBILE MENU JS WITH JQUERY
gsap.set(".menu-link", {
  opacity: 0,
  y: 30,
});

$(".ham-icon").click(function () {
  $(".mobile-menu").removeClass("translate-x-full").addClass("translate-x-0");

  gsap.to(".menu-link", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.15,
    delay: 0.3,
  });
});

$(".close-menu").click(function () {
  gsap.to(".menu-link", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    ease: "power3.in",
    stagger: 0.1,
  });

  setTimeout(() => {
    $(".mobile-menu").removeClass("translate-x-0").addClass("translate-x-full");
  }, 400);
});

// HOME GSAP

// LOADER WITH HOME
window.addEventListener("load", () => {
  const loader = document.getElementById("re-loader");

  gsap
    .timeline({
      delay: 3.1,
      onComplete: startHeroAnim,
    })
    .to(loader, {
      opacity: 0,
      duration: 1.8,
      ease: "power2.out",
    })
    .set(loader, { display: "none" });
});

gsap.set(navbar, {
  yPercent: -100,
});

gsap.set(".forgot", {
  opacity: 0,
  x: 80,
});

// HERO ANIMATION AFTER LOADER
function startHeroAnim() {
  // NAVBAR ENTRY
  gsap.to(navbar, {
    yPercent: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  });

  gsap.to(".forgot", {
    x: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".forgot-card",
      start: "top 95%",
    },
    duration: 1,
    ease: "power2.out",
  });
}

// FORGOT JS
const forgotForm = document.getElementById("reForgotForm");
const emailInput = document.getElementById("reForgotEmail");
const emailError = document.getElementById("forgotEmailError");
const successMsg = document.getElementById("forgotSuccess");

forgotForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  let isValid = true;

  if (!emailValue.endsWith("@gmail.com")) {
    emailError.classList.remove("hidden");
    successMsg.classList.add("hidden");
    isValid = false;
  } else {
    emailError.classList.add("hidden");
  }

  if (isValid) {
    successMsg.classList.remove("hidden");

    setTimeout(() => {
      forgotForm.reset();
      successMsg.classList.add("hidden");
      window.location.href = "./404.html";
    }, 2000);
  }
});

// REQUEST
gsap.from(".stacklyInfoTitle", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".stacklyInfoSection",
    start: "top 80%",
  },
});

gsap.from(".stacklyPrimaryBtn", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.3,

  scrollTrigger: {
    trigger: ".stacklyInfoSection",
    start: "top 80%",
  },
});

gsap.from(".stacklySecondaryBtn", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,

  scrollTrigger: {
    trigger: ".stacklyInfoSection",
    start: "top 80%",
  },
});

gsap.from(".stacklyInfoImage", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".stacklyInfoSection",
    start: "top 80%",
  },
});

// FOOTER MAIN

gsap.from(".stack-access-col", {
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power3.out",
  stagger: 0.25,

  scrollTrigger: {
    trigger: ".stack-access-wrapper",
    start: "top 80%",
  },
});

// COPYRIGHT
document.getElementById("copyright").textContent =
  "copyrights © " + new Date().getFullYear() + " Stackly. All rights reserved.";

// SMOOTH SCROLL

const lenis = new Lenis({
  duration: 1,
  easing: (t) => 1 - Math.pow(1 - t, 4),
  smoothWheel: true,
  smoothTouch: false,
});

lenis.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length
      ? lenis.scrollTo(value, { immediate: true })
      : lenis.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ScrollTrigger.addEventListener("refresh", () => lenis.resize());
ScrollTrigger.refresh();

// SCROLL TOP
const btn = document.querySelector(".scrollTopBtn");
const progress = document.querySelector(".progress-bar");

const radius = 24;
const circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = circumference;
progress.style.strokeDashoffset = circumference;

function updateProgress() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progressValue = scrollTop / height;
  const offset = circumference - progressValue * circumference;
  progress.style.strokeDashoffset = offset;

  if (scrollTop > 200) {
    gsap.to(btn, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
  } else {
    gsap.to(btn, { opacity: 0, scale: 0.7, duration: 0.3, ease: "power2.out" });
  }

  requestAnimationFrame(updateProgress);
}
updateProgress();

btn.onclick = () => {
  gsap.to(window, {
    scrollTo: 0,
    duration: 1.1,
    ease: "power3.inOut",
  });
};
