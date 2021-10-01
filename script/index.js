
/* hero-dropdown click - double click */

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".hero__menu-item").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".hero-dropdown");
    
    document.querySelectorAll(".hero__menu-item").forEach(el => {
      if (el != btn) {
        el.classList.remove("active-hero-dropdown");
      }
    });
    
    document.querySelectorAll(".hero-dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })
    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active-hero-dropdown")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".list")) {
    document.querySelectorAll(".hero-dropdown").forEach(el => {
        el.classList.remove("active-list--item");
    })
     document.querySelectorAll(".hero__menu-item").forEach(el => {
        el.classList.remove("active-hero-dropdown");
    });
  }
})
})