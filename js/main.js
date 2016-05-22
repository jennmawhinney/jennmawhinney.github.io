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
    $('#circle').addClass('.glow_one');
    $('#modal').html('0403 472 657')
                .css({
                  'font-size':'1.3em'
                });
  });
  $('#email').hover(function(){
    $('#circle').addClass('.glow_one');
    $('#modal').html('jenn.mawhinney@gmail.com')
                .css({
                  'font-size':'1.3em'
                });
  });
  $('#linkedin').hover(function(){
    $('#circle').addClass('.glow_one');
    $('#modal').html('au.linkedin.com/in/jennmawhinney')
                .css({
                  'font-size':'1.3em'
                });
  });
  $('#git').hover(function(){
    $('#circle').addClass('.glow_one');
    $('#modal').html('github.com/jennmawhinney')
                .css({
                  'font-size':'1.3em'
                });
  });
  $('#twitter').hover(function(){
    $('#circle').addClass('.glow_one');
    $('#modal').html('twitter.com/jennjennginger')
                .css({
                  'font-size':'1.3em'
                });
  });
//////////mouseleave////////
$('#phone').on('mouseleave', function(){
  $('#modal').html('');
});
$('#email').on('mouseleave', function(){
  $('#modal').html('');
});
$('#linkedin').on('mouseleave', function(){
  $('#modal').html('');
});
$('#git').on('mouseleave', function(){
  $('#modal').html('');
});
$('#twitter').on('mouseleave', function(){
  $('#modal').html('');
});
}); //closes doc.ready
