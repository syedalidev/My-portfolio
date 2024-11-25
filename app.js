// __________ dARK MODE _____
function Function() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    moon.classList.toggle("fa-solid")
    }

// ______ hamburger__________

const hamburger = document.getElementById("hamburger");
const moon = document.getElementById("moon2");
const menu = document.getElementById("menuicon");
const navbar = document.getElementById("navbar-content");
const navbar1 = document.querySelector('.nav-link1');
const navbar2 = document.querySelector('.nav-link2');
const navbar3 = document.querySelector('.nav-link3');
const navbar4 = document.querySelector('.nav-link4');
const navbar5 = document.querySelector('.nav-link5');
const navbar6 = document.querySelector('.nav-link6');

hamburger.addEventListener("click", ()=>{

 navbar.classList.toggle("navbar-content-active"); 
 menu.classList.toggle("fa-xmark");
}
)




navbar1.addEventListener('click', ()=>{
  navbar.classList.remove("navbar-content-active")
  menu.classList.remove("fa-xmark");
})

navbar2.addEventListener('click', ()=>{
  navbar.classList.remove("navbar-content-active")
  menu.classList.remove("fa-xmark");
})

navbar3.addEventListener('click', ()=>{
  navbar.classList.remove("navbar-content-active")
  menu.classList.remove("fa-xmark");
})

navbar4.addEventListener('click', ()=>{
  navbar.classList.remove("navbar-content-active")
  menu.classList.remove("fa-xmark");
})

navbar5.addEventListener('click', ()=>{
  navbar.classList.remove("navbar-content-active")
  menu.classList.remove("fa-xmark");
})

navbar6.addEventListener('click', ()=>{
  navbar.classList.remove("navbar-content-active")
  menu.classList.remove("fa-xmark");
})

  





