const menuBtn = document.getElementById("hamburgBtn");

console.log("1")
const mobileMenu = document.getElementById("mobile-menu-section")
const seperator = document.getElementById("seperator")
menuBtn.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("hidden");
    seperator.classList.toggle("hidden");
});