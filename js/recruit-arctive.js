$('#myTab li').click(function (e) {
  $(this).addClass("active").siblings().removeClass("active");
  var i = $(this).index();
  $(".tab-content .tab-pane").eq(i).show().siblings().hide();
})