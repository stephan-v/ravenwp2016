/*
|--------------------------------------------------------------------------
| Custom waypoint code
|--------------------------------------------------------------------------
|
| This runs an animation when a object is within 10% of the bottom view
| Code needs to be wrapper in a ready function or else it won't run
|
*/

jQuery(document).ready(function( $ ) {
	$(".os-animation-left").each(function() {
		var waypoint = new Waypoint({
			element: this,
			handler: function(direction) {
				$(this.element).addClass("animated fadeInLeft");
			},
		  	offset: '90%'
		});
	});

	$(".os-animation-right").each(function() {
		var waypoint = new Waypoint({
			element: this,
			handler: function(direction) {
				$(this.element).addClass("animated fadeInRight");
			},
		  	offset: '90%'
		});
	});

	$(".os-animation-bounce").each(function() {
		var waypoint = new Waypoint({
			element: this,
			handler: function(direction) {
				$(this.element).addClass("animated bounceIn");
			},
		  	offset: '90%'
		});
	});

	$(".os-animation-fade").each(function() {
		var waypoint = new Waypoint({
			element: this,
			handler: function(direction) {
				$(this.element).addClass("animated fadeInUp");
			},
		  	offset: '90%'
		});
	});
});