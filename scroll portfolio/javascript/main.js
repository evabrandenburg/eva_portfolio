$(document).ready(init);

$('img').hide();

var one = $(".one");
one.hover(function() {
  one.addClass("one1");
});

var two = $(".two");
two.hover(function() {
  two.addClass("two2");
});

var two = $(".three");
two.hover(function() {
  two.addClass("three3");
});

var two = $(".four");
two.hover(function() {
  two.addClass("four4");
});

var two = $(".five");
two.hover(function() {
  two.addClass("five5");
});

/*var work = $(".five");
work.click(function() {
  work.show("slide");
})*/

$(document).ready(function(){
  $('.bxslider').bxSlider({
  	mode: 'fade',
  	adaptiveHeight: true,
  	captions: true,
  	minSlides: 1,
  	maxSlides: 1,
  	slideWidth: 700,
  	slideMargin: 10,
  	randomStart: true
	});
});


function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(400, 1000, {name: "one"})
		// Line to 'description' element
		.lineTo(400, 800, {name: "more"})
		// Arc down and line to 'syntax'
		.arc(400, 1500, 600, -Math.PI/2, Math.PI/2, true)
		.arc(400, 1800, 300, Math.PI/2, -Math.PI/2, true)
		.arc(400, 1800, 300, -Math.PI/2, Math.PI/2, true)
		.lineTo(600, 2100, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "two"
		})

		.lineTo(5000, 2100, {
			callback: function() {
				highlight($(".sp-scroll-handle"));
			},
			name: "three"
		})
		// Arc up while rotating
		.arc(5000, 1000, 1100, Math.PI/2, -Math.PI/2, true)
		.rotate(4* Math.PI/2, {
			name: "four"
		})
		// Line to 'rotations'.
		.lineTo(2400, 750, {
			name: "five"
		})
		// Rotate in place
		
	
		// Arc and rotate back to the beginning.
		.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: false, wrapAround: true});

	// Add scrollTo on click on the navigation anchors
		$("#three").click(function(e) {
			e.preventDefault();

			$.fn.scrollPath("scrollTo", "three", 500, "easeInOutSine", function() {
			});
		});

		$("#one").click(function(e) {
			e.preventDefault();

			$.fn.scrollPath("scrollTo", "one", 1000, "easeInOutSine", function() {
			});
		});

		$("#two").click(function(e) {
			e.preventDefault();

			$.fn.scrollPath("scrollTo", "two", 1000, "easeInOutSine", function() {
			});
		});

		$("#four").click(function(e) {
			e.preventDefault();

			$.fn.scrollPath("scrollTo", "four", 1000, "easeInOutSine", function() {
			});
		});

		$("#five").click(function(e) {
			e.preventDefault();

			$.fn.scrollPath("scrollTo", "five", 1000, "easeInOutSine", function() {
			});
		});
	};

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});

	


function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}/* CURRENTLY IN: javascript/main.js */