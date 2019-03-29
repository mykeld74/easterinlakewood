$(document).ready(function () {
  var easterHeight = $('#easter-sunday').height(),
    fridayHeight = $('#good-friday').height(),
    stickEaster = easterHeight - $(window).height(),
    stickFriday = easterHeight + fridayHeight - $(window).height();

  window.addEventListener('resize', function () {
      easterHeight = $('#easter-sunday').height(),
      fridayHeight = $('#good-friday').height(),
      stickEaster = easterHeight - $(window).height(),
      stickFriday = easterHeight + fridayHeight - $(window).height();
  });

  console.log(stickEaster);
  console.log(stickFriday);


  $('#good-friday').css('top', easterHeight + 'px');
  $('#church-info').css('top', easterHeight + fridayHeight + 'px');

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



  }

});