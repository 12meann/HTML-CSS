// hamburger menu

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".links").toggleClass("active");
  });
});

// click anywhere to close hamburger menu

$(document).on("click", function(e) {
  if (
    $(e.target).closest(".links").length == 0 &&
    $(".links").hasClass("active") &&
    $(e.target).closest(".hamburger").length == 0
  ) {
    $(".links").toggleClass("active");
  }
});
