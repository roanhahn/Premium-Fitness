// PRELOADER
$(window).load(function () {
	// Site Preloader
	$('#preloader').delay( 1000 ).fadeOut('slow', function () {
		$(this).remove();

		
	});

	// Slideshow
	
	setInterval('cycleImages()', 5000);

});