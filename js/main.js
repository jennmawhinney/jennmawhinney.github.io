$(document).ready(function() {

  var checkWidth = function() {
    if ($(window).innerWidth() < 700) {
      $('body').scrollTop(0, 0);
      if ($(window).innerWidth() > 700) {
        $('.big-nav-toggle').show();
        $('#nav-toggle').addClass('hidden');
      }
    }
  };

  window.onload = function() {
    checkWidth();
    whichContact();
  };
  window.onresize = function() {
    checkWidth();
    whichContact();
  };
  ////////////////Welcome//////////////
  $('#name').on('mouseenter', function() {
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
  $('#name').on('mouseleave', function() {
    $(this).removeClass('glow_one')
      .removeClass('font')
      .html('Jenn Mawhinney');
    $('#title').show();
  });

  ////////////////About//////////////////////

  $(document).scroll(function() {
    var top = $(document).scrollTop();
    if ($(window).innerWidth() > 700) {
      $('.hello').css({
        'font-size': '5em',
        'margin-top': '2em'
      });
      if (top >= 300) {
        $('#about_me').fadeTo(2500, 1).addClass('glow_two');
        $('.blurb').animate({
          left: "101.5%",
        }, 1500).addClass('glow_two');
        $('.show').fadeIn(2500);
        $('.show').fadeTo(2500, 1);
      }
    }
  });

  if ($(window).innerWidth() < 700) {
    $('.blurb').addClass('hidden');
    $('.about_me_p').addClass('hidden');
    $('.hello').css({
      'font-size': '5em',
      'margin-top': '2em'
    });
    $('.show').fadeIn(2500);
    $('.show').fadeTo(2500, 1);
  }
  ///////////////Projects/////////////////////
  $('#one').on('mouseenter', function() {
    $('#cover_one_text').css({
      'visibility': 'visible'
    });
  });
  $('#one').on('mouseleave', function() {
    $('#cover_one_text').css({
      'visibility': 'hidden'
    });
  });

  $('#two').on('mouseenter', function() {
    $('#cover_two_text').css({
      'visibility': 'visible'
    });
  });
  $('#two').on('mouseleave', function() {
    $('#cover_two_text').css({
      'visibility': 'hidden'
    });
  });

  $('#three').on('mouseenter', function() {
    $('#cover_three_text').css({
      'visibility': 'visible'
    });
  });
  $('#three').on('mouseleave', function() {
    $('#cover_three_text').css({
      'visibility': 'hidden'
    });
  });

  $('#four').on('mouseenter', function() {
    $('#cover_four_text').css({
      'visibility': 'visible'
    });
  });
  $('#four').on('mouseleave', function() {
    $('#cover_four_text').css({
      'visibility': 'hidden'
    });
  });

  /////////////Contact Details/////////////
  ////////////hover///////////
  var backgroundColor = function(which){
    $(which).css({
      'background-color':'#DAA161',
      'color':'#000'
  });
};
var backgroundColorBack = function(which){
  $(which).css({
    'background-color':'#000',
    'color':'#DAA161'
});
};

  $('#phone').on('mouseenter', function(){
    backgroundColor($('#phone_answer'));
});

  $('#phone').on('mouseleave', function(){
    backgroundColorBack($('#phone_answer'));
  });

  $('#email').on('mouseenter', function(){
    backgroundColor($('#email_answer'));
});

  $('#email').on('mouseleave', function(){
    backgroundColorBack($('#email_answer'));
  });

  $('#linkedin').on('mouseenter', function(){
    backgroundColor($('#linkedin_answer'));
});

  $('#linkedin').on('mouseleave', function(){
    backgroundColorBack($('#linkedin_answer'));
  });

  $('#git').on('mouseenter', function(){
    backgroundColor($('#github_answer'));
});

  $('#git').on('mouseleave', function(){
    backgroundColorBack($('#github_answer'));
  });

  $('#twitter').on('mouseenter', function(){
    backgroundColor($('#twitter_answer'));
});

  $('#twitter').on('mouseleave', function(){
    backgroundColorBack($('#twitter_answer'));
  });
  // var windowSize = $(window).innerWidth();
  // var miniContainer = function(){
  //   $('.mini-container').show();
  //   $('#details-container').hide();
  //   $('#small-inner-container').hide();
  // };
  // var innerDetails = function() {
  //   $('.mini-container').hide();
  //   $('#details-container').show()
  //     .css({
  //       'min-width': '200px',
  //       'min-height': '400px',
  //       'font-size': '1.5em',
  //       'border-radius': '50%',
  //       'margin-top': '25%',
  //       'text-align': 'center'
  //     })
  //     .addClass('glow_three');
  //   $('#details-container').on('mouseleave', function(){
  //     miniContainer();
  //
  //   });
  // };
  // var smallDetails = function(){
  //   $('.mini-container').hide();
  //   $('#small-container').show()
  //     .css({
  //       'min-width': '80px',
  //       'min-height': '140px',
  //       'font-size': '1em',
  //       'border-radius': '2em',
  //       'margin-top': '15%',
  //       'text-align': 'center'
  //     })
  //     .addClass('glow_three');
  //   $('#small-inner-container').on('mouseleave', function(){
  //     miniContainer();
  //   });
  // };
  // var whichContact = function(windowSize) {
  //   if (windowSize > 965) {
  //     $('#phone').on('mouseenter', function() {
  //       $('#circle').addClass('glow_three');
  //       $('#modal').html('0403 472 657')
  //         .css({
  //           'font-size': '1.3em'
  //         });
  //     });
  //     $('#email').hover(function() {
  //       $('#circle').addClass('glow_three');
  //       $('#modal').html('jenn.mawhinney@gmail.com')
  //         .css({
  //           'font-size': '1.3em'
  //         });
  //     });
  //     $('#linkedin').hover(function() {
  //       $('#circle').addClass('glow_three');
  //       $('#modal').html('au.linkedin.com/in/jennmawhinney')
  //         .css({
  //           'font-size': '1.3em'
  //         });
  //     });
  //     $('#git').hover(function() {
  //       $('#circle').addClass('glow_three');
  //       $('#modal').html('github.com/jennmawhinney')
  //         .css({
  //           'font-size': '1.3em'
  //         });
  //     });
  //     $('#twitter').hover(function() {
  //       $('#circle').addClass('glow_three');
  //       $('#modal').html('twitter.com/jennjennginger')
  //         .css({
  //           'font-size': '1.3em'
  //         });
  //     });
  //     //////////mouseleave////////
  //     $('#phone').on('mouseleave', function() {
  //       $('#modal').html('');
  //       $('#circle').removeClass('glow_three');
  //     });
  //     $('#email').on('mouseleave', function() {
  //       $('#circle').removeClass('glow_three');
  //       $('#modal').html('');
  //     });
  //     $('#linkedin').on('mouseleave', function() {
  //       $('#circle').removeClass('glow_three');
  //       $('#modal').html('');
  //     });
  //     $('#git').on('mouseleave', function() {
  //       $('#circle').removeClass('glow_three');
  //       $('#modal').html('');
  //     });
  //     $('#twitter').on('mouseleave', function() {
  //       $('#circle').removeClass('glow_three');
  //       $('#modal').html('');
  //     });
  //   } else if (windowSize > 705 && windowSize < 964) {
  //     $('#phone').mouseenter(function() {
  //       innerDetails();
  //       $('#inner-container').show()
  //                            .html('0403 472 657')
  //                            .css({
  //                              'min-width': '200px',
  //                              'text-align': 'center',
  //                              'margin': '0 auto',
  //                              'padding-top': '40%'
  //         });
  //     });
  //
  //
  //     $('#email').mouseenter(function() {
  //       innerDetails();
  //       $('#inner-container').show()
  //                            .html('0403 472 657')
  //                            .css({
  //                              'min-width': '200px',
  //                              'text-align': 'center',
  //                              'margin': '0 auto',
  //                              'padding-top': '40%'
  //         });
  //     });
  //     $('#linkedin').mouseenter(function() {
  //       innerDetails();
  //       $('#inner-container').show()
  //                            .html('0403 472 657')
  //                            .css({
  //                              'min-width': '200px',
  //                              'text-align': 'center',
  //                              'margin': '0 auto',
  //                              'padding-top': '40%'
  //         });
  //     });
  //       $('#git').mouseenter(function() {
  //         innerDetails();
  //         $('#inner-container').show()
  //                              .html('0403 472 657')
  //                              .css({
  //                                'min-width': '200px',
  //                                'text-align': 'center',
  //                                'margin': '0 auto',
  //                                'padding-top': '40%'
  //           });
  //       });
  //       $('#twitter').mouseenter(function() {
  //         innerDetails();
  //         $('#inner-container').show()
  //                              .html('0403 472 657')
  //                              .css({
  //                                'min-width': '200px',
  //                                'text-align': 'center',
  //                                'margin': '0 auto',
  //                                'padding-top': '40%'
  //           });
  //       });
  //       $('#inner-container').mouseleave(function() {
  //         $('#details-container').hide();
  //         $('.mini-container').show();
  //           });
  //   }else{
  //     $('#phone').mouseenter(function() {
  //       smallDetails();
  //       $('#small-inner-container').show()
  //                            .html('0403 472 657')
  //                            .css({
  //                             //  'width': '70px',
  //                              'text-align': 'center',
  //                              'margin': '0 auto',
  //                              'padding-top': '40%',
  //                              'font-size':'0.5em'
  //         });
  //     });
  //     $('#email').mouseenter(function() {
  //       smallDetails();
  //       $('#small-inner-container').show()
  //                            .html('jenn.mawhinney@gmail.com')
  //                            .css({
  //                             //  'width': '70px',
  //                              'text-align': 'center',
  //                              'margin': '0 auto',
  //                              'padding-top': '15%',
  //                              'font-size':'1em'
  //         });
  //     });
  //     $('#linkedin').mouseenter(function() {
  //       smallDetails();
  //       $('#small-inner-container').show()
  //                            .html('au.linkedin.com/in/jennmawhinney')
  //                            .css({
  //                             //  'width': '70px',
  //                             'text-align': 'center',
  //                             'margin': '0 auto',
  //                             'padding-top': '15%',
  //                             'font-size':'1em'
  //         });
  //     });
  //     $('#git').mouseenter(function() {
  //       smallDetails();
  //       $('#small-inner-container').show()
  //                            .html('https://github.com/jennmawhinney')
  //                            .css({
  //                             //  'width': '70px',
  //                             'text-align': 'center',
  //                             'margin': '0 auto',
  //                             'padding-top': '15%',
  //                             'font-size':'1em'
  //         });
  //     });
  //     $('#twitter').mouseenter(function() {
  //       smallDetails();
  //       $('#small-inner-container').show()
  //                            .html('@jennjennginger')
  //                            .css({
  //                             //  'width': '70px',
  //                             'text-align': 'center',
  //                             'margin': '0 auto',
  //                             'padding-top': '15%',
  //                             'font-size':'1em'
  //         });
  //     });
  //     $('#small-inner-container').mouseleave(function() {
  //       $('#small-container').hide();
  //       $('.mini-container').show();
  //         });
  //   }
  //   //////////////Hamburger//////////////////
    if ($(window).innerWidth() < 700) {

      $('#home_hover').on('click', function() {
        $('.big-nav-toggle').addClass('hidden');
        $('#nav-toggle').toggleClass('active');
      });
      $('#about_hover').on('click', function() {
        $('.big-nav-toggle').addClass('hidden');
      });
      $('#projects_hover').on('click', function() {
        $('.big-nav-toggle').addClass('hidden');
      });
      $('#contact_hover').on('click', function() {
        $('.big-nav-toggle').addClass('hidden');
      });

      $('#nav-toggle').removeClass('hidden')
        .addClass('active');
      document.querySelector("#nav-toggle")
        .addEventListener("click", function() {
          this.classList.toggle("active");
          $('.big-nav-toggle').toggleClass('hidden');
        });

    }
  // };
}); //closes doc.ready
