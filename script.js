// ------------ Hamburger ------------ //
const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".hambuger-menu");

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle("click");
  hamburgerMenu.classList.toggle("click");
});

// ------------- NavScroll -------------- //
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// --------------FAQ-----------------//
const faqBody = document.querySelector('.faq-body');

faqBody.addEventListener('click', (e) => {
  
  const clicked = e.target;
  if (clicked.tagName === "I") {
    const clickedGroup = clicked.closest('.faq-group');
    const clickedContent = clickedGroup.querySelector('.faq-content')
    const clickedIcon = clickedGroup.querySelector('i')
       
    const allFaqGroup = faqBody.querySelectorAll('.faq-group');
    for (const singleFaqGroup of allFaqGroup) {
      const singleFaqContent = singleFaqGroup.querySelector('.faq-content');
      const singleIcon = singleFaqGroup.querySelector('i')
      if (singleFaqContent === clickedContent) {
         clickedIcon.classList.toggle('fa-plus');
         clickedIcon.classList.toggle('fa-minus');
         clickedContent.classList.toggle('open');
      } else {
        singleFaqContent.classList.remove("open");
        singleIcon.classList.add('fa-plus');
        singleIcon.classList.remove('fa-minus');
      }
    }
  }   
})

