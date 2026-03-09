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

// HERO ANIMATION AFTER LOADER
function startHeroAnim() {}

// HERO SECTION

gsap.defaults({ ease: "power3.out" });

const wifiHeroMainSwiper = new Swiper(".wifiHeroMainSwiper", {
  loop: true,
  speed: 1200,
  effect: "fade",
  fadeEffect: { crossFade: true },

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".wifiHeroPagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".wifiHeroNext",
    prevEl: ".wifiHeroPrev",
  },

  on: {
    init: function () {
      animateHero(this.slides[this.activeIndex]);
    },

    slideChangeTransitionStart: function () {
      animateHero(this.slides[this.activeIndex]);
    },
  },
});

function animateHero(slide) {
  const bg = slide.querySelector(".wifiHeroBg");
  const title = slide.querySelector(".wifiHeroTitle");
  const subTitle = slide.querySelector(".wifiHeroSub");
  const overlay = slide.querySelector(".wifiHeroOverlay");
  const meta = slide.querySelector(".wifiHeroMeta");

  gsap.killTweensOf([bg, title, subTitle, overlay, meta]);

  const tl = gsap.timeline();

  tl.fromTo(bg, { scale: 1.2 }, { scale: 1, duration: 1.6 })

    .from(
      overlay,
      {
        y: 80,
        opacity: 0,
        duration: 0.9,
      },
      "-=.9",
    )

    .from(
      title,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
      },
      "-=.6",
    )

    .from(
      subTitle,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
      },
      "-=.6",
    )

    .from(
      meta,
      {
        y: 30,
        opacity: 0,
        duration: 0.6,
      },
      "-=.6",
    );
}

// WHY
gsap.from(".stacklyWhyHeader", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".stacklyWhySection",
    start: "top 80%",
  },
});

gsap.from(".stacklyWhyItem", {
  y: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".stacklyWhyGrid",
    start: "top 85%",
  },
});

// NEW CONNECTIONS
gsap.from(".stacklyConnectionTitle", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".stacklyConnectionSection",
    start: "top 80%",
  },
});

gsap.from(".stacklyServiceItem", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.08,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".stacklyServiceWrapper",
    start: "top 85%",
  },
});

gsap.from(".stacklyActionBox", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".stacklyActionBox",
    start: "top 85%",
  },
});

// RECHARGE

gsap.from(".stacklyRechargeTitle", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".stacklyRechargeSection",
    start: "top 80%",
  },
});

gsap.from(".stacklyTab", {
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,

  scrollTrigger: {
    trigger: ".stacklyTabsWrapper",
    start: "top 85%",
  },
});

/* tab logic */

const tabs = document.querySelectorAll(".stacklyTab");
const input = document.getElementById("stacklyInputField");
const btnSubmit = document.getElementById("stacklySubmitBtn");

let activeType = "prepaid";

const config = {
  prepaid: {
    placeholder: "Enter mobile number",
    button: "RECHARGE",
    numbers: true,
  },

  postpaid: {
    placeholder: "Enter mobile number",
    button: "PAY BILL",
    numbers: true,
  },

  dth: {
    placeholder: "Enter mobile number / DTH ID",
    button: "RECHARGE",
    numbers: false,
  },

  wifi: {
    placeholder: "Enter mobile number / DSL ID",
    button: "PAY BILL",
    numbers: false,
  },

  black: {
    placeholder: "Enter mobile number",
    button: "PAY BILL",
    numbers: true,
  },
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("bg-black", "text-white");
      t.classList.add("bg-indigo-100");
    });

    tab.classList.add("bg-black", "text-white");
    tab.classList.remove("bg-indigo-100");

    activeType = tab.dataset.type;

    const data = config[activeType];

    input.placeholder = data.placeholder;
    btnSubmit.textContent = data.button;

    gsap.fromTo(
      ".stacklyInputWrapper",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4 },
    );
  });
});

/* validation */

input.addEventListener("input", () => {
  errorMsg.textContent = "";

  if (config[activeType].numbers) {
    input.value = input.value.replace(/[^0-9]/g, "");
  }
});

const errorMsg = document.getElementById("stacklyErrorMsg");

btnSubmit.addEventListener("click", () => {
  const value = input.value.trim();

  errorMsg.textContent = "";

  if (value === "") {
    errorMsg.textContent = "Please enter details";
    return;
  }

  if (config[activeType].numbers) {
    if (!/^[0-9]{10}$/.test(value)) {
      errorMsg.textContent = "Enter valid 10 digit valid number";
      return;
    }
  } else {
    if (value.length < 6) {
      errorMsg.textContent = "Enter valid ID or valid number";
      return;
    }
  }

  window.location.href = "./404.html";

  input.value = "";
});

//STEPS

gsap.from(".stacklyStepsTitle", {
  y: 40,
  opacity: 0,
  duration: 1,

  scrollTrigger: {
    trigger: ".stacklyStepsSection",
    start: "top 85%",
  },
});

gsap.from(".stacklyStepCard", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".stacklyStepsWrapper",
    start: "top 85%",
  },
});

// RECOMMENDATION

const stacklyRecommendedSwiper = new Swiper(".stacklyRecommendedSwiper", {
  loop: true,
  speed: 1200,
  slidesPerView: 1,
  spaceBetween: 20,

  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },

  navigation: {
    nextEl: ".stacklyNext",
    prevEl: ".stacklyPrev",
  },

  pagination: {
    el: ".stacklyPagination",
    type: "fraction",
  },

  on: {
    slideChangeTransitionStart: function () {
      gsap.from(".stacklyRecommendedSwiper .swiper-slide-active .stacklyCard", {
        y: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    },
  },
});

// BENEFITS

gsap.from(".stacklyBenefitsTitle", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".stacklyBenefitsSection",
    start: "top 80%",
  },
});

gsap.from(".stacklyBenefitCard", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",

  scrollTrigger: {
    trigger: ".stacklyBenefitsWrapper",
    start: "top 85%",
  },
});

// MAP
gsap.from(".stacklyMapImage", {
  x: -80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".stacklyCoverageSection",
    start: "top 80%",
  },
});

gsap.from(".stacklyCoverageContent", {
  x: 80,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".stacklyCoverageSection",
    start: "top 80%",
  },
});

gsap.from(".stacklyMapPoint", {
  scale: 0,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".stacklyCoverageMap",
    start: "top 85%",
  },
});

// FAQ
gsap.from(".faq-item", {
  scrollTrigger: {
    trigger: ".faq-grid",
    start: "top 85%",
  },
  y: 60,
  opacity: 0,
  stagger: 0.15,
  duration: 0.8,
  ease: "power3.out",
});

document.querySelectorAll(".faq-answer").forEach((el) => {
  gsap.set(el, { height: 0, overflow: "hidden" });
});

let activeItem = null;

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (activeItem && activeItem !== item) {
      gsap.to(activeItem.querySelector(".faq-answer"), {
        height: 0,
        duration: 0.4,
      });
      gsap.to(activeItem.querySelector(".faq-icon"), {
        rotate: 0,
        duration: 0.3,
      });
    }

    if (activeItem === item) {
      gsap.to(answer, { height: 0, duration: 0.4 });
      gsap.to(icon, { rotate: 0, duration: 0.3 });
      activeItem = null;
    } else {
      gsap.to(answer, { height: "auto", duration: 0.5, ease: "power2.out" });
      gsap.to(icon, { rotate: 180, duration: 0.3 });
      activeItem = item;
    }
  });
});

// CONTACT
gsap.set(".contact-left, .form-group, .form-submit", { opacity: 0, y: 50 });

gsap.to(".contact-left", {
  opacity: 1,
  y: 0,
  duration: 1,
  scrollTrigger: { trigger: ".contact-left", start: "top 75%" },
});

gsap.to(".form-group", {
  opacity: 1,
  y: 0,
  stagger: 0.15,
  duration: 0.9,
  scrollTrigger: { trigger: ".contact-form-wrap", start: "top 80%" },
});

gsap.to(".form-submit", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  scrollTrigger: { trigger: ".contact-form-wrap", start: "top 80%" },
});

// FORM VALIDATION

const form = document.getElementById("contactForm");
const emailField = document.getElementById("emailField");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = emailField.value.trim().toLowerCase();
  const parts = value.split("@");

  if (parts.length !== 2 || parts[0] === "" || parts[1] !== "gmail.com") {
    emailError.classList.remove("hidden");
    return;
  }

  emailError.classList.add("hidden");

  form.reset();

  window.location.href = "./404.html";
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
