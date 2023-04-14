const menuBtn = document.getElementById("hamburgBtn");

console.log("1")
const mobileMenu = document.getElementById("mobile-menu-section")
menuBtn.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("hidden");
});