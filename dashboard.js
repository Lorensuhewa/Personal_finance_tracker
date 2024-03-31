const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themToggler = document.querySelector(".themeToggler");

//show sidebar
menuBtn.addEventListener('click',() =>{
    sideMenu.style.display = 'block';
})

//close sidebar
closeBtn.addEventListener('click',() =>{
    sideMenu.style.display = 'none';
})

document.getElementById("logout").addEventListener("click", function() {
    // Redirect to the main page
    window.location.href = "index.html"; 
});



