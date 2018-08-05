$('#city').autocomplete({
  source:autocomplete_text,
  select: function( event, ui ) {
    $( "#city" ).val( ui.item.label );
    $("#form").submit();
    return false;
    },
  open: function( event, ui ) {
    $("#city").css({"border-top-left-radius":"10px",
    "border-top-right-radius":"10px",
    "border-bottom-left-radius":"0px",
    "border-bottom-right-radius":"0px"});
  },
  close: function( event, ui ) {
      $("#city").css({"border-radius":"10px"});
 }
});

