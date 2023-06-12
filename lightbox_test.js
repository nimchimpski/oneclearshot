

  let slideIndex = 1;




  function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.body.style.overflow="hidden";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow="auto";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

// function navbarwide(){
//   let y = document.getElementById("navbar");
//   let menu = document.getElementById("menubutton");
//   if (y.style.display==="none"){y.style.display="block"}; menu.style.display="none";
// }

  function showsmallmenu(){
  let x = document.getElementById("navbar");
    let menu = document.getElementById("menubutton");
    if (x.style.display==="none"){x.style.display="block"; menu.innerHTML="hide menu";}
     else {x.style.display="none"; menu.innerHTML="menu";}
  }
// if screen >700 make sure [side] menu displays
// function wideMenuShow(x) {
//   let nav = document.getElementById("navbar");
//   if (x.matches) { // If media query matches
//     nav.style.display="block";
  
//   }
// }

// var x = window.matchMedia("(min-width: 700px)")
//     wideMenuShow(x) // Call listener function at run time
//     x.addListener(wideMenuShow) // Attach listener function on state changes

    // document.getElementById("prev").style.visibilty="visible";;
  function showprev(){
      document.getElementById("prev").style.opacity="1";

  }
  function hideprev(){
    
document.getElementById("prev").style.opacity="0";
  }
  function shownext(){
      document.getElementById("next").style.opacity="1";

  }
  function hidenext(){
      document.getElementById("next").style.opacity="0";
  }

  function prevarrowfocus() {
    document.getElementById("prev").style.opacity="1";
  }

  showSlides(slideIndex);

  

  function selectAudio(name, file, pic)
{
document.getElementById("mainPlayer").src = file;
document.getElementById("soundName").innerHTML=name;
document.getElementById("soundImage").src=pic;
document.getElementById("mainPlayer").play();
}
