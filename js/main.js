


$('#songimage1').on('click', function () {
    // Type code related to event here! :)
    $('#songinfo2').addClass('c1-tsi-2');
    $('#songinfo3').addClass('c1-tsi-3');
    $('#songinfo1').addClass('c1-tsi-1');
     
    setTimeout(function () {
    	$('#infoplayer1').addClass('c1-tip-1');
    }, 800);

   
    $('#song1').addClass('c1-ts-1');
    


 
    
    
});

$('#return1').on('click', function () {
    // Type code related to event here! :)
   $('#infoplayer1').removeClass('c1-tip-1');
   

 setTimeout(function () {
     $('#songinfo2').removeClass('c1-tsi-2');
    $('#songinfo3').removeClass('c1-tsi-3');

      }, 550);
});