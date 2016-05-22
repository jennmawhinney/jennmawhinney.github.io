$(document).ready(function(){
  $('#name').on('mouseenter', function(){
    $(this).html('Welcome!')
              .addClass('glow_one')
              .addClass('font')
              .delay(1500)
              .queue(function(n) {
                $(this)
                .removeClass("glow_one");
                n();
  });
  $('#title').hide();
});
  $('#name').on('mouseleave', function(){
    $(this).removeClass('glow_one')
              .removeClass('font')
              .html('Jenn Mawhinney');
    $('#title').show();
  });

$(document).scroll(function() {
  console.log('hello from scroll');
  var top = $(document).scrollTop();
  if (top >= 300){
  $('#about_me').fadeTo(2500, 1).addClass('glow_two');
  $('.blurb').animate({
  left: "101.5%",
}, 1500).addClass('glow_two');
  $('.show').fadeIn(2500);
  $('.show').fadeTo(2500, 1);
}
});

///////////////Projects/////////////////////
  $('#one').on('mouseenter', function(){
    $('#cover_one_text').css({
      'visibility':'visible'
    });
  });
  $('#one').on('mouseleave', function(){
    $('#cover_one_text').css({
      'visibility':'hidden'
    });
  });

  $('#two').on('mouseenter', function(){
    $('#cover_two_text').css({
      'visibility':'visible'
    });
  });
  $('#two').on('mouseleave', function(){
    $('#cover_two_text').css({
      'visibility':'hidden'
    });
  });

  $('#three').on('mouseenter', function(){
    $('#cover_three_text').css({
      'visibility':'visible'
    });
  });
  $('#three').on('mouseleave', function(){
    $('#cover_three_text').css({
      'visibility':'hidden'
    });
  });

  $('#four').on('mouseenter', function(){
    $('#cover_four_text').css({
      'visibility':'visible'
    });
  });
  $('#four').on('mouseleave', function(){
    $('#cover_four_text').css({
      'visibility':'hidden'
    });
  });

/////////////Details/////////////
////////////hover///////////
  $('#phone').hover(function(){
    $('.outside').toggleClass( "open" )
                 .html('0403 472 657')
                 .addClass('.fix')
                 .toggleClass("glow_one");
    $('.inside').toggleClass('hide');
  });
  $('#email').hover(function(){
    $('.outside').toggleClass( "open" )
                 .addClass('.fix')
                 .toggleClass("glow_one");
    $('.inside').toggleClass('hide')
                .html('jenn.mawhinney@gmail.com');
  });
  $('#linkedin').hover(function(){
    $('.outside').toggleClass( "open" )
                 .html('0403 472 657')
                 .addClass('.fix')
                 .toggleClass("glow_one");
    $('.inside').toggleClass('hide');
  });
  $('#git').hover(function(){
    $('.outside').toggleClass( "open" )
                 .html('jennmawhnney.github.com')
                 .addClass('.fix')
                 .toggleClass("glow_one");
    $('.inside').toggleClass('hide');
  });
  $('#twitter').hover(function(){
    $('.outside').toggleClass( "open" )
                 .html('@jennjennginger')
                 .addClass('.fix')
                 .toggleClass("glow_one");
    $('.inside').toggleClass('hide');
  });
// // ////////////////mouseleave////////////////
$('.wrap').hover(function(){
  $('.outside').toggleClass( "open" )
               .addClass("glow_one");
});
$('.wrap').hover(function(){
  $('.inside').toggleClass('hide');
});
//   $('#phone').on('mouseleave', function(){
//     $(this).html('Phone')
//             .addClass('details');
//   });
//   $('#email').on('mouseleave',function(){
//     $(this).html('Email')
//             .addClass('details');
//   });
//   $('#portfolio').on('mouseleave',function(){
//     $(this).html('Portfolio')
//             .addClass('details');
//   });
//   $('#git').on('mouseleave',function(){
//     $(this).html('Github')
//             .addClass('details');
//   });
//   $('#twitter').on('mouseleave',function(){
//     $(this).html('Twitter')
//             .addClass('details');
//   });
}); //closes doc.ready
