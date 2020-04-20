$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
console.log("document is ready");
  

  $( ".header-card" ).hover(
  function() {
    $(this).addClass('purple-card').css('cursor', 'pointer'); 
    $(".card-text", this).addClass('light');
    $(".icon-dark", this).addClass('hide-me');
    $(".icon-light", this).addClass('show-me');
    // $(this).find(".header-card .card-text").addClass('light'); 
  }, function() {
    $(this).removeClass('purple-card');
    $(".card-text", this).removeClass('light');
    $(".icon-dark", this).removeClass('hide-me');
    $(".icon-light", this).removeClass('show-me');
  }
);
  
// document ready  
});

