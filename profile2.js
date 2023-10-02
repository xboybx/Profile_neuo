 const ham_burger=document.querySelector(".js-hamburger");
 const navbaroptions=document.querySelector(".contact_logos");


 ham_burger.addEventListener("click",()=>{
    navbaroptions.classList.toggle('active')
 });



 var typed = new Typed('#Skillnames', {
    strings: ['BeatBoxer', 'Music Producer', 'FrontEnd Devloper'],
    typeSpeed: 130,
    backspeed:80,
    loop: true,
    
 });