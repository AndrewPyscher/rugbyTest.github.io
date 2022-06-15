
  const container = document.querySelector('.stage')

  for(let i=1; i<4; i++){
    const playerDisplay = document.createElement('div');
    playerDisplay.classList.add('element');
    playerDisplay.classList.add('zero');
    playerDisplay.style.background=`url('js/player${i}.png') 45%`

    playerDisplay.style.backgroundSize ="cover";
  
    container.appendChild(playerDisplay);

  }
  
let background = null;
$('.element').each(function() {
  $(this).mouseover(function() {
      $(this).addClass('active');
    $('.stage').children('.element').not('.active').addClass('inactive');

    if(background!= $(this)[0].style.background){
      console.log(background)
    background = $(this)[0].style.background;
    }
    $(this)[0].style.background="url('js/sickmonkeyBack.jpeg') 45%"
    $(this)[0].style.backgroundSize="cover"

  });
  $(this).mouseleave(function() {
      $(this).removeClass('active');
      $('.stage').children('.element').not('.active').removeClass('inactive');
      $(this)[0].style.background=`${background}`
      console.log(background + " leave")
      $(this)[0].style.backgroundSize="cover"
  });
});

