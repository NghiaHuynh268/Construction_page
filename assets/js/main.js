jQuery(document).ready(function ($) {
  $(".btn_opt-mobile").click(function () {
    $(".header_opt-mobile").toggleClass("open");
    $("body").toggleClass("not-scroll");
  });
  // $(".close_opt-mobile").click(function () {
  //   $(".header_opt-mobile").removeClass("open");
  //   $("body").removeClass("not-scroll");
  // });
});
