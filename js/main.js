


$('#songinfo1').on('click', function () {
    // Type code related to event here! :)
    $('#song1').find('.infoplayer').addClass('slide-ip');
});

$('#return1').on('click', function () {
    // Type code related to event here! :)
    $('#song1').find('.infoplayer').removeClass('slide-ip');
});





$('#songinfo2').on('click', function () {
    // Type code related to event here! :)
    $('#song2').find('.infoplayer').addClass('slide-ip');
});

$('#return2').on('click', function () {
    // Type code related to event here! :)
    $('#song2').find('.infoplayer').removeClass('slide-ip');
});







$('#songinfo3').on('click', function () {
    // Type code related to event here! :)
    $('#song3').find('.infoplayer').addClass('slide-ip');
});

$('#return3').on('click', function () {
    // Type code related to event here! :)
    $('#song3').find('.infoplayer').removeClass('slide-ip');
});





$('#songinfo4').on('click', function () {
    // Type code related to event here! :)
    $('#song4').find('.infoplayer').addClass('slide-ip');
});


$('#return4').on('click', function () {
    // Type code related to event here! :)
    $('#song4').find('.infoplayer').removeClass('slide-ip');
});


$('#songinfo5').on('click', function () {
    // Type code related to event here! :)
    $('#song5').find('.infoplayer').addClass('slide-ip');
});

$('#return5').on('click', function () {
    // Type code related to event here! :)
    $('#song5').find('.infoplayer').removeClass('slide-ip');
});


$('#songinfo6').on('click', function () {
    // Type code related to event here! :)
    $('#song6').find('.infoplayer').addClass('slide-ip');
});

$('#return6').on('click', function () {
    // Type code related to event here! :)
    $('#song6').find('.infoplayer').removeClass('slide-ip');
});




$('#songinfo7').on('click', function () {
    // Type code related to event here! :)
    $('#song7').find('.infoplayer').addClass('slide-ip');
});


$('#return7').on('click', function () {
    // Type code related to event here! :)
    $('#song7').find('.infoplayer').removeClass('slide-ip');
});


$('#songinfo8').on('click', function () {
    // Type code related to event here! :)
    $('#song8').find('.infoplayer').addClass('slide-ip');
});

$('#return8').on('click', function () {
    // Type code related to event here! :)
    $('#song8').find('.infoplayer').removeClass('slide-ip');
});


$('#songinfo9').on('click', function () {
    // Type code related to event here! :)
    $('#song9').find('.infoplayer').addClass('slide-ip');
});

$('#return9').on('click', function () {
    // Type code related to event here! :)
    $('#song9').find('.infoplayer').removeClass('slide-ip');
});


// $('.music-title').on('click', function () {
//     // Type code related to event here! :)
//     $('.all-music').addClass('slide-height');
// });

// $('.portfolio-title').on('click', function () {
//     // Type code related to event here! :)
//     $('.all-portfolio').addClass('slide-height');
// });

// $('.contact-title').on('click', function () {
//     // Type code related to event here! :)
//     $('.all-contact').addClass('slide-height');
// });

// $('.experience-title').on('click', function () {
//     // Type code related to event here! :)
//     $('.all-experience').addClass('slide-height');
// });

// $('.skills-title').on('click', function () {
//     // Type code related to event here! :)
//     $('.all-skills').addClass('slide-height');
// });


// $('.aboutme-title').on('click', function () {
//     // Type code related to event here! :)
//     $('.all-aboutme').addClass('slide-height');
// });



$('input[type="checkbox"]').on('change', function (event) {
   event.preventDefault();
  var checkboxIsChecked = $(this).is(":checked");
  if (checkboxIsChecked) {
    $(this).closest('article').find('.section-content').addClass('slide-height');
    $(this).closest('article').find('.section-title').addClass('slide-title');
  } else {
    $(this).closest('article').find('.section-content').removeClass('slide-height');
    $(this).closest('article').find('.section-title').removeClass('slide-title');
  }
});


$('.submit').on('click', function (event) {
   event.preventDefault();
    
});