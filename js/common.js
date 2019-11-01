var swiper = new Swiper(".main-slider", {
  autoHeight: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  spaceBetween: 40
});
var reviews = new Swiper(".reviews__slider", {
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  spaceBetween: 40
});

var linkNav = document.querySelectorAll('[href^="#"]'),
  V = 0.2;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    "click",
    function(e) {
      e.preventDefault();
      var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, "$1");
      (t = document.querySelector(hash).getBoundingClientRect().top),
        (start = null);
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
          r =
            t < 0
              ? Math.max(w - progress / V, w + t)
              : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    },
    false
  );
}

(function() {
  var input = document.querySelector('input[name="name"]');
  input.addEventListener("input", function() {
    input.value = input.value.replace(/[0-9]/g, "");
  });
})();
var offer = document.getElementById("offer");
var btn = document.querySelector(".pulse__btn");
window.addEventListener("scroll", e => {
  document.documentElement.scrollTop + 300 > offer.offsetTop
    ? btn.classList.add("show")
    : btn.classList.remove("show");
  console.log(offer);
});
