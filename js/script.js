/*=========================================
SCRIPT.JS
=========================================*/

// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// ==========================
// Sticky Header
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ==========================
// Typing Effect
// ==========================

const typing = document.getElementById("typing");

const words = [

    "Business Websites",

    "Restaurant Websites",

    "Industrial Websites",

    "NGO Websites",

    "Educational Websites"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();

// ==========================
// Active Navbar
// ==========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.clientHeight;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// Scroll To Top Button
// ==========================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

// ==========================
// Hero Project Image Slider
// ==========================

const heroImage = document.getElementById("projectImage");

const images = [

    "images/projects/growhaz.png",

    "images/projects/jaiswal.png",

    "images/projects/borewell.png",

    "images/projects/prayas.png",

    "images/projects/academy.png"

];

let img = 0;

setInterval(() => {

    img++;

    if (img >= images.length) {

        img = 0;

    }

    heroImage.src = images[img];

}, 3000);

// ==========================
// Reveal Animation
// ==========================

const reveals = document.querySelectorAll(

    ".service-card,.project-card,.tech-card,.about-content,.contact-info"

);

function reveal() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("reveal","active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".hero-stats h3");

let started = false;

window.addEventListener("scroll", () => {

    if (started) return;

    if (window.scrollY > 150) {

        counters.forEach(counter => {

            const target = counter.innerText.replace(/\D/g, "");

            let count = 0;

            const update = () => {

                count++;

                counter.innerText = count + "+";

                if (count < target) {

                    requestAnimationFrame(update);

                }

            }

            update();

        });

        started = true;

    }

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});