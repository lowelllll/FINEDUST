var now_img, next_img;
function fade_change(){
  now_img = $("#slide > img:eq(0)");
  next_img = $("#slide > img:eq(1)");

  next_img.addClass("active").css("opacity",0).animate({"opacity":1},1000,
  function(){
    $("#wrap_2").before(now_img);
    now_img.removeClass("active");
  });
}

var timer = setInterval("fade_change()",10000);
