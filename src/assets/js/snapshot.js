const imgOpacity = document.querySelector(".img-opacity");

window.addEventListener("wheel", (event) => {
  if(event.pageY>100){
    imgOpacity.style.zIndex = "10";
  }
  else{
    imgOpacity.style.zIndex = "40";
  }
});
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

const workItems = document.querySelectorAll(".work-list-items");
const workBtn=document.querySelector(".btn-show");
for(let i=3; i<workItems.length; i++){
  workItems[i].style.display="none";
}
function showAll(){
  for(let i=3; i<workItems.length; i++){
    workItems[i].style.display="block";
  }
  workBtn.style.display= "none";
}
const jobList = document.querySelectorAll(".show-item");
const showAllJob = document.querySelector(".show-items");
for(let i=0; i< jobList.length; i++){
  jobList[i].style.display="none";
}
showAllJob.onclick = function(){
  for(let i=0; i< jobList.length; i++){
    jobList[i].style.display="block";
  }
  showAllJob.style.display='none'
};

const hideAnswer = document.querySelectorAll(".question-click");
const showAnswer = document.querySelectorAll(".answer");
let array = new Array(10);
for(let j=0; j<showAnswer.length; j++){
  showAnswer[j].style.display="none";
  array[j]=0;
}
for(let i=0; i<hideAnswer.length; i++){
  hideAnswer[i].onclick= function(){
    console.log(i);
    if(array[i]===0){
      showAnswer[i].style.display="block";
      hideAnswer[i].style.fontWeight="700";
      array[i] =1;
    }
    else{
      showAnswer[i].style.display="none";
      hideAnswer[i].style.fontWeight="400";
      array[i]=0;
    }

  }
}

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
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");
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

