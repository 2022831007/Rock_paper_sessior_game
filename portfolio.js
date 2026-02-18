// // Animate skill bars
// const skills = document.querySelectorAll('.bar div');
// const skillsSection = document.getElementById('skills');

// window.addEventListener('scroll', function(){
//   const sectionTop = skillsSection.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;
//   if(sectionTop < windowHeight - 50){
//     skills.forEach(skill => {
//       skill.style.width = skill.style.getPropertyValue('--level');
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {


// SMOOTH SCROLL
document.querySelectorAll('.nav-links a').forEach(link=>{
link.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href'))
.scrollIntoView({behavior:"smooth"});
});
});


// NAVBAR SHADOW
const navbar=document.querySelector(".navbar");
window.addEventListener("scroll",()=>{
navbar.style.boxShadow=window.scrollY>50?
"0 5px 15px rgba(0,0,0,0.4)":"none";
});


// SKILL BAR ANIMATION
const skillBars=document.querySelectorAll(".bar div");

skillBars.forEach(bar=>bar.style.width="0%");

const skillObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const level=entry.target.style.getPropertyValue("--level");
entry.target.style.transition="1.5s";
entry.target.style.width=level;
}
});
},{threshold:0.6});

skillBars.forEach(bar=>skillObserver.observe(bar));


// SECTION REVEAL
const revealSections=document.querySelectorAll(".section");

revealSections.forEach(sec=>{
sec.style.opacity="0";
sec.style.transform="translateY(40px)";
sec.style.transition="1s";
});

const revealObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}
});
},{threshold:0.2});

revealSections.forEach(sec=>revealObserver.observe(sec));


// ACTIVE NAV LINK (CENTER DETECTION)
const navLinks=document.querySelectorAll(".nav-links a");
const navSections=document.querySelectorAll("section");

const activeObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
const id=entry.target.getAttribute("id");

navLinks.forEach(link=>{
link.style.color="#a8dadc";
if(link.getAttribute("href")==="#"+id){
link.style.color="#ffc300";
}
});
}
});
},{
rootMargin:"-45% 0px -45% 0px",
threshold:0
});

navSections.forEach(section=>activeObserver.observe(section));

});
