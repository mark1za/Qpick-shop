// window.addEventListener('DOMContentLoaded', ()=>{
//     const dropdownMenuToggler = document.querySelector(".dropdown-menu-toggle");
//     const menuList = document.querySelector(".menu-list")
//     const chevron = document.querySelector("#chevron");
//     dropdownMenuToggler.addEventListener("click", ()=>{
//         menuList.classList.toggle("hide")
//         chevron.classList.toggle("rotted")
        
        
//     })
// })
$(".dropdown-menu-toggle").click(()=>{
    $(".menu-list").slideToggle(100)
    $("#chevron").toggleClass("rotated")
    document.querySelector(".title").textContent= "cases"
    document.querySelector(".title").innerHTML= "cases"

})