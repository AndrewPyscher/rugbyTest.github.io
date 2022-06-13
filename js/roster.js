$('.element').each(function() {
  $(this).mouseover(function() {
      $(this).addClass('active');
    $('.stage').children('.element').not('.active').addClass('inactive');
    console.log("here")
  });
  $(this).mouseleave(function() {
      $(this).removeClass('active');
      $('.stage').children('.element').not('.active').removeClass('inactive');
      console.log("gone")
  });
});