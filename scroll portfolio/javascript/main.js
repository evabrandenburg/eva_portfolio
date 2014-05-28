$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(400, 50, {name: "start"})
		// Line to 'description' element
		.lineTo(400, 800, {name: "description"})
		// Arc down and line to 'syntax'
		.arc(400, 1500, 600, -Math.PI/2, Math.PI/2, true)
		.arc(400, 1800, 300, Math.PI/2, -Math.PI/2, true)
		.arc(400, 1800, 300, -Math.PI/2, Math.PI/2, true)
		.lineTo(600, 2100, {
			callback: function() {
				highlight($(".settings"));
			},
			name: "syntax"
		})

		.lineTo(5000, 2100, {
			callback: function() {
				highlight($(".sp-scroll-handle"));
			},
			name: "scrollbar"
		})
		// Arc up while rotating
		.arc(5000, 1000, 1100, Math.PI/2, -Math.PI/2, true)
		.rotate(4* Math.PI/2, {
			name: "rotations-rotated"
		})
		// Line to 'rotations'.
		.lineTo(2400, 750, {
			name: "rotations"
		})
		// Rotate in place
		
	
		// Arc and rotate back to the beginning.
		.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: false, wrapAround: true});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();

			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

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

	$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
			function(data) {
				if(data && data.count !== undefined) {
					$(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
				}
			});
	}


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