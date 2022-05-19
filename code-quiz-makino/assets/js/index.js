$(function () {
  function HamburgerMenu() {
    const $navigation = $(".js-navigation");
    const $HamburgerMenu = $(".js-HamburgerMenu");

    function toggleMenu() {
      $navigation.toggleClass("is-show");
      $HamburgerMenu.toggleClass("is-active");
    }
    function init() {
      $HamburgerMenu.on("click", toggleMenu);
    }
    init();
  }
  HamburgerMenu();
});
