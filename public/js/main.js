$(document).ready(function(){
  $("#read-more").click(function() {
    $('html,body').animate({
      scrollTop: $("#section-a").offset().top},
    'slow');
  });

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
