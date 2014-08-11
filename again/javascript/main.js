/* CURRENTLY IN: javascript/main.js */

$(document).ready(function() {

    $('#fullpage').fullpage({
        verticalCentered: true,
        resize : true,
        scrollingSpeed: 700,
        easing: 'easeInQuart',
        autoScrolling: false
     });

function show (){
	$( ".thought" ).addClass( "show" );
    $( ".ball1T").addClass( "show" );
} 

$( ".thought" ).hover( show );

function meS(){
    $( ".me" ).removeClass( "look2" );
    $( ".me" ).removeClass( "look3" );
    $( ".me" ).removeClass( "look1" );
    $( ".me" ).addClass( "meS" );
}

function meD(){
    $( ".me" ).removeClass( "meS" );
    $( ".me" ).removeClass( "lookB" );
    $( ".me" ).removeClass( "look2" );
    $( ".me" ).removeClass( "look3" );
    $( ".me" ).removeClass( "look1" );
    $( ".me" ).addClass( "me" );
}

$(".me").hover( meS );
$(".me").mouseout( meD );

function lookB(){
    $( ".me" ).removeClass( "meS" );
    $( ".me" ).removeClass( "look2" );
    $( ".me" ).removeClass( "look3" );
    $( ".me" ).removeClass( "look1" );
    $( ".me" ).addClass( "lookB" );
}

$(".thought").hover( lookB );
$(".thought").mouseout( meD );

function look1(){
    $( ".me" ).removeClass( "meS" );
	$( ".me" ).removeClass( "look2" );
	$( ".me" ).removeClass( "look3" );
	$( ".me" ).addClass( "look1" );
}
$(".b1").hover( look1 );
$( ".b1" ).mouseout( meD );

function look2(){
    $( ".me" ).removeClass( "meS" );
	$( ".me" ).removeClass( "look1" );
	$( ".me" ).removeClass( "look3" );
	$( ".me" ).addClass( "look2" );
}

$(".b2").hover( look2 );
$( ".b2" ).mouseout( meD );

function look3(){
    $( ".me" ).removeClass( "meS" );
    $( ".me" ).removeClass( "look1" );
    $( ".me" ).removeClass( "look2" );
    $( ".me" ).addClass( "look3" );
}

$(".b3").hover( look3 );
$( ".b3" ).mouseout( meD );

});





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





