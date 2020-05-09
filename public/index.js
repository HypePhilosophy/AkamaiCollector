$( document ).ready(function() {
  $("h1").hover(function() { 
    $( this ).addClass("animated infinite pulse"); 
  }, function() {
    $( this ).removeClass("animated infinite pulse");
  });
  });
  