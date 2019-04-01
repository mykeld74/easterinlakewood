$(document).ready(function () {
  var easterHeight = $('#easter-sunday').height(),
    fridayHeight = $('#good-friday').height(),
    eggHuntHeight = $('#egg-hunt').height(),
    stickEaster = easterHeight - $(window).height(),
    stickFriday = easterHeight + fridayHeight - $(window).height();
    stickEgg = easterHeight + fridayHeight + eggHuntHeight - $(window).height();

    $('#easter-sunday').css('z-index', '1');

  window.addEventListener('resize', function () {
      easterHeight = $('#easter-sunday').height(),
      fridayHeight = $('#good-friday').height(),
      eggHuntHeight = $('#egg-hunt').height(),
      stickEaster = easterHeight - $(window).height(),
      stickFriday = easterHeight + fridayHeight - $(window).height();
      stickEgg = easterHeight + fridayHeight + eggHuntHeight - $(window).height();
  });
  $('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');
    $('#nav').toggleClass('is-visible');
  })
  console.log(stickEaster);
  console.log(stickFriday);


  $('#good-friday').css('top', easterHeight + 'px');
  $('#egg-hunt').css('top', easterHeight + fridayHeight + 'px');
  $('#church-info').css('top', easterHeight + fridayHeight + eggHuntHeight + 'px');

  window.onscroll = function () {
    makeSticky()
    console.log((window).pageYOffset);
  };

  function makeSticky() {
    if (window.pageYOffset > stickEaster) {
      $('#easter-sunday').addClass('sticky');
    } else {
      $('#easter-sunday').removeClass('sticky');
    }

    if (window.pageYOffset > stickFriday) {
      $('#good-friday').css('top', 'auto').addClass('sticky');
    } else if (window.pageYOffset < stickFriday && window.pageYOffset > stickEaster) {
      $('#good-friday').css('top', easterHeight + 'px').removeClass('sticky');
    }

    if (window.pageYOffset > stickEgg) {
      $('#egg-hunt').css('top', 'auto').addClass('sticky');
    } else if (window.pageYOffset < stickEgg && window.pageYOffset > stickFriday) {
      $('#egg-hunt').css('top', easterHeight + fridayHeight + 'px').removeClass('sticky');
    }
  }

});