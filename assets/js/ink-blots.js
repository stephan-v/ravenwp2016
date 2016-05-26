/*
	Transition ink blots
 */

(function($) {
	$(document).ready(function() {
		$(".cd-transition-layer").children().one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');

			// what to do when the animation has finished
		});

		// timeout function for all links
		$(".menu-item a, .logo2").each(function() {
			$(this).click(function(event) {
				event.preventDefault();
				var loc = this.href;

				console.log('clicked link');

				if(loc){
		            
		            $(".cd-transition-layer").addClass("visible opening");

		            // wait for javascript to pick up the animation ending call and only than proceed to the link href
		            $(".cd-transition-layer").children().one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
		            	window.location.href=loc;
		        	});
		        }
			});
		});

		var transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children();


		var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;
	 
		//set transitionBackground dimentions
		setLayerDimensions();
		$(window).on('resize', function(){
			if( !resize ) {
				resize = true;
				(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
			}
		});
		 
		function setLayerDimensions() {
			var windowWidth = $(window).width(),
				windowHeight = $(window).height(),
				layerHeight, layerWidth;
		 
			if( windowWidth/windowHeight > frameProportion ) {
				layerWidth = windowWidth;
				layerHeight = layerWidth/frameProportion;
			} else {
				layerHeight = windowHeight;
				layerWidth = layerHeight*frameProportion;
			}
		 
			transitionBackground.css({
				'width': layerWidth*frames+'px',
				'height': layerHeight+'px',
			});
		 
			resize = false;
		}
	})
})( jQuery );