let openMenu = document.querySelector(".open-menu")
let closeMenu = document.querySelector(".close-menu")
let nav = document.querySelector(".nav-list")
let navUl = document.querySelector(".nav-list ul")

openMenu.addEventListener('click', ()=> {
    nav.style.opacity = "1"
    navUl.style.pointerEvents = "fill";
    
    
    closeMenu.style.zIndex = "3"
    closeMenu.style.opacity = "1"
    
    openMenu.style.zIndex = "2"
    openMenu.style.opacity = "0"
})

closeMenu.addEventListener('click', ()=> {
    nav.style.opacity = "0"
    navUl.style.pointerEvents = "none";

    openMenu.style.zIndex = "3"
    openMenu.style.opacity = "1"
    
    closeMenu.style.zIndex = "2"
    closeMenu.style.opacity = "0"
})