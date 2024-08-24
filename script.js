// // Smooth Scroll for Anchor Links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
//
// // Sticky Header on Scroll
// window.onscroll = function() {
//     let header = document.querySelector('header');
//     let sticky = header.offsetTop;
//     if (window.pageYOffset > sticky) {
//         header.classList.add('sticky');
//     } else {
//         header.classList.remove('sticky');
//     }
// };
//
// // Lazy Loading of Images
// document.addEventListener("DOMContentLoaded", function() {
//     let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
//
//     if ("IntersectionObserver" in window) {
//         let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//             entries.forEach(function(entry) {
//                 if (entry.isIntersecting) {
//                     let lazyImage = entry.target;
//                     lazyImage.src = lazyImage.dataset.src;
//                     lazyImage.classList.remove("lazy");
//                     lazyImageObserver.unobserve(lazyImage);
//                 }
//             });
//         });
//
//         lazyImages.forEach(function(lazyImage) {
//             lazyImageObserver.observe(lazyImage);
//         });
//     }
// });
//
// // Scroll to Top Button
// let scrollTopBtn = document.getElementById("scrollTopBtn");
//
// window.onscroll = function() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollTopBtn.style.display = "block";
//     } else {
//         scrollTopBtn.style.display = "none";
//     }
// };
//
// scrollTopBtn.addEventListener("click", function() {
//     window.scrollTo({top: 0, behavior: 'smooth'});
// });
//
// // Modal Popup
// let modal = document.getElementById("myModal");
// let btn = document.getElementById("openModalBtn");
// let span = document.getElementsByClassName("close")[0];
//
// btn.onclick = function() {
//     modal.style.display = "block";
// }
//
// span.onclick = function() {
//     modal.style.display = "none";
// }
//
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
