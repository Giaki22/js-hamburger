const openHBMenu = document.getElementById("open-menu");
const closeHBMenu = document.getElementById("close-menu");

openHBMenu.addEventListener('click', 
    function() {
        const menuMobile = document.getElementById("hamburger-menu");
        menuMobile.classList.add("active");
    }
);

closeHBMenu.addEventListener('click', 
    function() {
        const menuMobile = document.getElementById("hamburger-menu");
        menuMobile.classList.remove("active");
    }
);