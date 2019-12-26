$(document).ready(function(){
  $('#read-more').on('click', function(){
    const about = $('#section-a').position().top;
    $('html', 'body').animate(
      {
        scrollTop: about
      }
    );
  })

  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 100) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  });
});
