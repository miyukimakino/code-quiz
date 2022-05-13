$(function () {
  function HamburgerMenu() {
    const $navigation = $(".js-navigation");
    const $list = $(".js-list");
    const $HamburgerMenu = $(".js-HamburgerMenu");
    const $line = $(".js-line");

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
