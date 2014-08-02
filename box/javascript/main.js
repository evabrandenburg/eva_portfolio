  var collection = $("div.container div").get();
    collection.sort(function() {
        return Math.random()*10 > 5 ? 1 : -1;
    });
    $.each(collection,function(i,el) {
        var color = this.className,
            $el = $(el);
        $el.css({backgroundColor: color}).appendTo( $el.parent() );
    });


$("div").click( show );

function show(){
	$(".blue").addClass( "yellow first" );
}


$(".blue").click( you );

function you(){
	$(".blue1").addClass( "yellow" );
	$(".bu").addClass( "yellow");
}

$(".bu").click( suck );

function suck(){
	$(".bu").removeClass( "yellow" );
}

var blue1 = $(".blue1" );

blue1.click( too );

function too(){
	if(blue1.hasClass( "yellow" )){
	 $(".ru").addClass( "yellow" );
	}	
}

/* CURRENTLY IN: javascript/main.js */