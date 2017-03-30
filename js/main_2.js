


$('#songimage1').on('click', function ( event ) {
  event.preventDefault();
    $('#songinfo2').addClass('c1-tsi-2');
    $('#songinfo3').addClass('c1-tsi-3');
    $('#songinfo1').addClass('c1-tsi-1');

     setTimeout(function () {
      $('#song2, #song3').addClass('displaynone');
    }, 400);
     
    setTimeout(function () {
    	$('#infoplayer1').addClass('c1-tip-1');
    }, 500);

       setTimeout(function () {
    $('#song1').addClass('c1-ts-1');
    }, 400);


 
    
    
});

$('#return1').on('click', function () {
    // Type code related to event here! :)
   $('#infoplayer1').removeClass('c1-tip-1');
   

 setTimeout(function () {
     $('#songinfo2').removeClass('c1-tsi-2');
    $('#songinfo3').removeClass('c1-tsi-3');

      }, 550);

   $('#song1').removeClass('c1-ts-1');
   $('#song2, #song3').removeClass('displaynone');
});