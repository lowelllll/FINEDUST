var height  = $(window).height();

$("#wrap").height(height);
$("#wrap").resize(function(){
  $(this).height(height);
});