$(".nav_trigger").click(function () {
  $(".main").toggleClass('on');
});

$(".nav li a").click(function() {
  $(".main").removeClass('on');
})