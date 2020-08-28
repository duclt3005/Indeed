const jobMenu = document.querySelector(".job-find-fixed");
window.addEventListener("wheel", (event) => {

 if(event.pageY>600){
jobMenu.style.display="flex";
 }
 else{
  jobMenu.style.display="none";
 }
});

const jobDetail = document.querySelector(".job-detail");
window.addEventListener("wheel", (event) => {

 if(event.pageY>800){
jobDetail.style.position="sticky";
jobDetail.style.top="160px";
 }
 else{
    jobDetail.style.position="relative";
    jobDetail.style.top="0px";
 }
});

const conSearch = document.querySelector(".container-search");
console.log(conSearch);
window.addEventListener("wheel", (event) => {
    if(event.pageY>700){
        conSearch.style.display="block";
         }
         else{
            conSearch.style.display="none";
         }
});