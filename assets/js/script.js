// const menuBtn = document.getElementById("hamburgBtn");
// const mobileMenu = document.getElementById("mobile-menu-section")

// menuBtn.addEventListener("click", ()=>{
//     mobileMenu.classList.toggle("hidden");

//     if (!mobileMenu.classList.contains("hidden")){

//         menuBtn.style.color = "#00ABE4";
//     } else {menuBtn.style.color = "#737373";}
// });

$(document).ready (()=> {

    $(".hamburg").on("click", ()=>{
        if($(".hamburg i").hasClass("fa-bars")) {
            $(".menu-page").toggleClass("menu-active")
            $(".hamburg i").addClass("fa-xmark").removeClass("fa-bars")
            

        } else if ($(".hamburg i").hasClass("fa-xmark")) {
            $(".menu-page").toggleClass("menu-active")
            $(".hamburg i").addClass("fa-bars").removeClass("fa-xmark")

        }
    })

}) 