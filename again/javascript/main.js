/* CURRENTLY IN: javascript/main.js */

$(document).ready(function() {
    $('#fullpage').fullpage({
        verticalCentered: true,
        resize : true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        autoScrolling: false
     });
});

function show (){
	$( ".ball3" ).addClass( "show" );
}

$( ".thought" ).hover( show );

function noG(){
	$( ".me" ).addClass( "noG" );
}

$( ".me" ).hover( noG );


function look1(){
	$( ".me" ).removeClass( "look2" );
	$( ".me" ).addClass( "look1" );
}
$(".b1").hover( look1 );

function look2(){
	$( ".me" ).removeClass( "look1" );
	$( ".me" ).addClass( "look2" );

}
$(".b2").mouseover( look2 );

$(".b2").mouseout( look1 );






/*
function look2(){
	$( ".me" ).addClass( "look2" );
}
$(".b2").hover( look2 );
*/
//
/*function look3(){
	$( ".me" ).addClass( "look3" );
}
$(".b3").hover( look3 );
$(".b1").mouseover(function(){
         $(".me").css("background-image", "url(../../pics/LookL.jpg)");
});

$(".b1").mouseout(function(){
         $(".me").css("background-image", "url(../../pics/smile.jpg)");
});

$(".b2").mouseover(function(){
         $(".me").css("background-color", "yellow");
});

$(".b2").mouseout(function(){
         $(".me").css("background-color", "blue");
});


$(".b3").mouseover(function(){
         $(".me").css("background-color", "orange");
});

$(".b3").mouseout(function(){
         $(".me").css("background-color", "blue");
});

*/





