// Menu Toggle

const menuToggler = document.querySelector('.menu_toggle');
const body = document.querySelector('body');

menuToggler.addEventListener('click', ()=> {
    body.classList.toggle('open');
});

const navElements = document.querySelectorAll('.nav_link').forEach(el => {
    el.addEventListener('click', ()=>{
        body.classList.remove('open');
    });
});

window.sr = ScrollReveal();

sr.reveal(".animate-left",{
    origin:"left",
    duration:1000,
    distance:"5rem",
    delay:300,
});

sr.reveal(".animate-right",{
    origin:"right",
    duration:1000,
    distance:"5rem",
    delay:300,
});

sr.reveal(".animate-top",{
    origin:"top",
    duration:1000,
    distance:"5rem",
    delay:300,
});

sr.reveal(".animate-bottom",{
    origin:"bottom",
    duration:1000,
    distance:"5rem",
    delay:300,
});