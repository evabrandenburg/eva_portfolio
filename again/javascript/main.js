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

