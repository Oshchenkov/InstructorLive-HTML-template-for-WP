$(document).ready(function() {
  // Mobile menu handler

  const $togleBtn = $("#top-navbar-btn");
  const $header = $(".header ");
  const $mobileContainer = $("#mobile-container");
  let openMenuState = false;

  $togleBtn.click(e => {
    toggleMobileMenu(e);
  });

  const toggleMobileMenu = e => {
    console.log(openMenuState);

    if (openMenuState) {
      $header.removeClass("open");
      $mobileContainer.slideToggle();
    } else {
      $header.addClass("open");
      $mobileContainer.slideToggle();
    }
    openMenuState = !openMenuState;
  };

  // https://jonsuh.com/hamburgers/
  var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t)
        Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
  };

  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener(
        "click",
        function() {
          this.classList.toggle("is-active");
        },
        false
      );
    });
  }

  // Bootstrap carousel
  $("#testimonialsCarouselSlider").carousel({
    interval: 0
  });
});
