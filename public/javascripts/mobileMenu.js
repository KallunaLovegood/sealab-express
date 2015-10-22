$(document).ready(function(){
  // clicking hamburger button opens mobile menu
  $(".mobilePadding").click(function(){
    $(".mobileMenu").toggleClass("show");
    $(".mobilePadding").toggleClass("show");
  }),

  // clicking mobile menu children closes menu
  $(".mobileMenu").children().click(function(){
    $(".mobileMenu").removeClass("show");
    $(".mobilePadding").removeClass("show");
  });
});