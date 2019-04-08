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

  $('#easter-btn').on('click', function () {
    // $('html,body').animate({
    //   scrollTop: $('#easter-sunday').offset().top + 1
    // }, 500);
    $('#good-friday').css('top', easterHeight);
    $('#egg-hunt').css('top', easterHeight + fridayHeight);
    $('#church-info').css('top', easterHeight + fridayHeight + eggHuntHeight);
  })
  $('#friday-btn').on('click', function () {
    $('html,body').animate({
      scrollTop: $('#good-friday').offset().top + 1
    }, 500)
  })
  $('#egg-hunt-btn').on('click', function () {
    $('html,body').animate({
      scrollTop: $('#egg-hunt').offset().top + 1
    }, 500)
  })
  $('#church-info-btn').on('click', function () {
    $('html,body').animate({
      scrollTop: $('#church-info').offset().top + 1
    }, 500)
  })

  $('.hamburger').on('click', function () {
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