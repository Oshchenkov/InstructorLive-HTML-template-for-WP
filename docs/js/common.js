$(document).ready(function() {
  // Mobile menu handler

  const $togleBtn = $("#top-navbar-btn");
  const $header = $(".header ");
  const $mobileContainer = $(".mobile-nav-container");
  let openMenuState = false;

  $togleBtn.click(e => {
    toggleMobileMenu(e);
  });

  const toggleMobileMenu = e => {
    const $btnContainer = $(e.currentTarget);
    console.log("TCL: btnContainer", $btnContainer);
    console.log(openMenuState);

    if (openMenuState) {
      $header.removeClass("open");
      $btnContainer.removeClass("open");
      $mobileContainer.slideToggle();
    } else {
      $header.addClass("open");
      $btnContainer.addClass("open");
      $mobileContainer.slideToggle();
    }
    openMenuState = !openMenuState;
  };
});
