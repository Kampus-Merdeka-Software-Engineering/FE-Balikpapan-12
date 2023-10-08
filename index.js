const navbar = document.querySelector('.navbar');
const navbarUl = document.querySelector('.navbar ul');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbarUl.classList.remove('active');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

document.querySelector('.navbar img').addEventListener('click', () => {
    navbarUl.classList.toggle('active');
});

navbarUl.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', () => {
        navbarUl.classList.remove('active');
    });
});

const frontEndPrograms = document.querySelectorAll('.program.front-end');
const backEndPrograms = document.querySelectorAll('.program.back-end');
const frontEndBtn = document.getElementById('front-end-btn');
const backEndBtn = document.getElementById('back-end-btn');

frontEndBtn.addEventListener('click', () => {
    frontEndPrograms.forEach((program) => {
        program.classList.remove('hidden');
    });
    backEndPrograms.forEach((program) => {
        program.classList.add('hidden');
    });
});

backEndBtn.addEventListener('click', () => {
    frontEndPrograms.forEach((program) => {
        program.classList.add('hidden');
    });
    backEndPrograms.forEach((program) => {
        program.classList.remove('hidden');
    });
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        contactForm.reset();
    });
});
