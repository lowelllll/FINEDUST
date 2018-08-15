var height  = $(window).height();

$("#wrap_1").height(height);
$(window).resize(function(){
  $("#wrap_1").height(height);
});