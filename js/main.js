let burger = document.querySelector('.burger');
let headerNav = document.querySelector('.menu');

burger.addEventListener('click', f1);

function f1() {
   if (headerNav.style.display === "block") {
      headerNav.style.display = "none";
   } else {
      headerNav.style.display = "block";
   }
}

burger.addEventListener('click', () => {
   burger.classList.toggle('burger-active');
})