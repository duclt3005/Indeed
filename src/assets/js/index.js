const menuClose = document.querySelector(".menu-close");
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header__responsive");
menuClose.onclick = () => {
    // menu.style.left = "200%";
    menu.style.display="none";
    header.style.zIndex="30";
  document.body.style.overflow = "scroll";
};
menuIcon.onclick = function () {
  // menu.style.left = "0";
  menu.style.display="block";
  header.style.zIndex="-10";
  document.body.style.overflowY = "hidden";
};

// $(document).ready(function(){

//     $('.menu-icon').click(function(){
//     $('.menu').toggle('slow');

//     });

//     });
