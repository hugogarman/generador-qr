const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close-menu");

toggle.onclick = () => {
menu.classList.add("open");
};

close.onclick = () => {
menu.classList.remove("open");
};

/* abrir panel */

document.querySelectorAll(".has-next").forEach(link => {

link.onclick = () => {

const target = link.dataset.target;

document.querySelectorAll(".mobile-panel").forEach(panel=>{
panel.classList.remove("active");
});

document.querySelector("."+target).classList.add("active");

};

});

/* volver atrás */

document.querySelectorAll(".back").forEach(btn=>{

btn.onclick = () => {

const back = btn.dataset.back;

document.querySelectorAll(".mobile-panel").forEach(panel=>{
panel.classList.remove("active");
});

document.querySelector("."+back).classList.add("active");

};

});
