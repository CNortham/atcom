$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    

    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().main
      }, 1000 );
    });
    
    $('.submit-button').on('click', function() { 
        $(this).html('Added'); 
    });  
  })