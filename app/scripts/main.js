$(document).ready( function() {

	if( $('.one').length > 0 ) {

		$('.one h1, .one p').css('opacity', 1);
		setTimeout( function() {
			$('.one ul').css('opacity', 1);
		}, 1700);
	}

	var liWidth = $('.main li').width();

	$('.main li').each( function() {
		$(this).height( liWidth );
	});

	$(window).resize( function() {
		var checkLiWidth = $('.main li').width();

		if( checkLiWidth != liWidth ) {
			liWidth = checkLiWidth;
			$('.main li').each( function() {
				$(this).height( liWidth );
			});
		}
	});

	if( $('.two').length > 0 ) {

		var e = document.getElementById('logo');
		e.addEventListener( 'animationend', function() {
			$('#logo').addClass('flicker');
			e.removeEventListener('animationend');
		}, false);
	}
});