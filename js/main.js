$(".nav_trigger").click(function () {
  $(".resume").toggleClass('on');
});

$(".nav li a").click(function() {
  $(".resume").removeClass('on');
})