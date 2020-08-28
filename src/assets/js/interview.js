const jobList = document.querySelectorAll(".job-list-item");
const jobBtn = document.querySelector(".job-btn");
const jobSpan = document.querySelector(".job-btn span");
const jobSubBtn = document.querySelector(".job-subbutton");
let d=0;
jobBtn.onclick = () =>{
    d++;
   for(let i=4; i<jobList.length; i++){
       jobList[i].classList.toggle("job-list-item-none");
   }
   if(d%2==1){
    jobSpan.innerText= "Show less";  
    jobSubBtn.style.transform="rotateZ(180deg)";
   }
   else{
    jobSubBtn.style.transform="rotateZ(0deg)";
    jobSpan.innerText= "See more Kroger Stores interviews by job title";  
   }
}