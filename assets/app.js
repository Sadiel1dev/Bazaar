// window.onload = function() {


// // Swiper
// var swiper = new Swiper(".mySwiper",{
    
//   freeMode: {
//     enabled: true,
//     sticky: true,
//   },
//   initialSlide:0,
//   parallax: true,
//   slideToClickedSlide:true,
//   shortSwipes:true,
//     effect:"coverflow",
//     grabCursor:true,
//     centeredSlides:true,
//     slidesPerView:"auto",
//     coverflowEffect:{
//         depth:100,
//         modifer:1,
//         slidesShadows:true,
//         rotate:0,
//         stretch:0
//     },
   
//   spaceBetween: 60,
//   keyboard: {
//     enabled: true
//   },
//   mousewheel: {
//     thresholdDelta: 70
//   },
  
// })


// const header = document.querySelector("[data-header]");

// const activeEl = function () {
//   if (window.scrollY > 100) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// }

// window.addEventListener("scroll", activeEl);


// // Cabezara
// const navbarMenu = document.getElementById("menu");
// const burgerMenu = document.getElementById("burger");
// const headerMenu = document.getElementById("header");

// // Open Close Navbar Menu on Click Burger
// if (burgerMenu && navbarMenu) {
//    burgerMenu.addEventListener("click", () => {
//       burgerMenu.classList.toggle("is-active");
//       navbarMenu.classList.toggle("is-active");
//    });
// }

// // Close Navbar Menu on Click Menu Links
// document.querySelectorAll(".menu-link").forEach((link) => {
//    link.addEventListener("click", () => {
//       burgerMenu.classList.remove("is-active");
//       navbarMenu.classList.remove("is-active");
//    });
// });

// // Change Header Background on Scrolling
// window.addEventListener("scroll", () => {
//    if (this.scrollY >= 85) {
//       headerMenu.classList.add("on-scroll");
//    } else {
//       headerMenu.classList.remove("on-scroll");
//    }
// });

// // Fixed Navbar Menu on Window Resize
// window.addEventListener("resize", () => {
//    if (window.innerWidth > 768) {
//       if (navbarMenu.classList.contains("is-active")) {
//          navbarMenu.classList.remove("is-active");
//       }
//    }
// });



// };