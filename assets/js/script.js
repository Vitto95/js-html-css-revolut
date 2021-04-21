$(document).ready(function () {
  console.log($(".with-dropdown").find(".active"));

  //events

  $(".with-dropdown").mouseover(function () {
    $(this).find(".dropdown-menu").addClass("active");
  });

  $(".with-dropdown").mouseout(function () {
    $(this).find(".dropdown-menu").removeClass("active");
  });

  $(".with-dropdown").click(function () {
    $(this).find(".dropdown-menu").removeClass("active");
  });

  /*   $(".with-dropdown").click(function () {
    $(".with-dropdown").find(".active").removeClass("active");
    $(this).find(".dropdown-menu").addClass("active");
  }); */
});
