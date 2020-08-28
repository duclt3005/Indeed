function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "more...";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "less";
      moreText.style.display = "inline";
    }
  }
  const companyMenu = document.querySelector(".banner-header-fixed");
  const companyLogo = document.querySelector(".banner-header-fixed .logo");
  window.addEventListener("wheel", (event) => {
    console.log(event.pageY);
   if(event.pageY>400){
     console.log(companyLogo);
     companyMenu.style.display="flex";
   }
   else{
    companyMenu.style.display="none";
   }
  });