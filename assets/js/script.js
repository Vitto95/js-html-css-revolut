$(document).ready(function () {
  //events
  $(".with-dropdown").click(function () {
    $(this).find(".dropdown-menu").toggleClass("active");
  });

  /* $(".with-dropdown").click(function () {
    $(".with-dropdown").find(".active").removeClass("active");
    $(this).find(".dropdown-menu").addClass("active");
  }); */
});
