$(document).ready(function(){
  $('#read-more').on('click', function(){
    const about = $('#section-a').position().top;
    $('html', 'body').animate(
      {
        scrollTop: about
      }
    );
  })
});
