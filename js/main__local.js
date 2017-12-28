$(document).ready(function(){
	var $container = $('.technoSlider__list');
	var elem = 'a';
	var classes = {
		"current": 'hover-current',
		"prev": 'hover-prev',
		"next": 'hover-next',
		"prevPrev": 'hover-prev-prev',
		"nextNext": 'hover-next-next'
	};
	$container.on('mouseenter focusin', '.technoSlider__item', function () {
		var $currentElem = $(this);
		var $prevElem = $currentElem.prev();
		var $nextElem = $currentElem.next();
		var $parentElem = $currentElem.parent();
		var $parentPrev = $parentElem.prev();
		var $parenNext = $parentElem.next();

		$currentElem.addClass(classes.current);
		$prevElem.addClass(classes.prev);
		$nextElem.addClass(classes.next);
		$prevElem.prev().addClass(classes.prevPrev);
		$nextElem.next().addClass(classes.nextNext);
		$parentElem.addClass(classes.current);
		$parentPrev.addClass(classes.prev);
		$parenNext.addClass(classes.next);
		$parentPrev.prev().addClass(classes.prevPrev);
		$parenNext.next().addClass(classes.nextNext);

	}).on('mouseleave focusout', elem, function () {
		var $currentElem = $(this),
			$prevElem = $currentElem.prev(),
			$nextElem = $currentElem.next();
		var $parentElem = $currentElem.parent(),
			$parentPrev = $parentElem.prev(),
			$parentNext = $parentElem.next();

		$currentElem.removeClass(classes.current);
		$prevElem.removeClass(classes.prev);
		$nextElem.removeClass(classes.next);
		$prevElem.prev().removeClass(classes.prevPrev);
		$nextElem.next().removeClass(classes.nextNext);
		$parentElem.removeClass(classes.current);
		$parentPrev.removeClass(classes.prev);
		$parentNext.removeClass(classes.next);
		$parentPrev.prev().removeClass(classes.prevPrev);
		$parentNext.next().removeClass(classes.nextNext);
	});

	/*gov slider*/
	var $technoSlider = $('.technoSlider-js');

	if ($technoSlider.length) {

		$technoSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 200;

			$currentSlider.on('init', function (event, el) {

			}).slick({
				fade: false,
				speed: dur,
				slidesToShow: 6,
				slidesToScroll: 6,
				// autoplay: true,
				// autoplaySpeed: 5000,
				// initialSlide: 2,
				// lazyLoad: 'ondemand',
				infinite: false,
				dots: false,
				arrows: true
			});

		});
	}

	/*gov slider*/
	var $revardsSlider = $('.rewardsSlider-js');

	if ($revardsSlider.length) {

		$revardsSlider.each(function () {
			var $currentSlider = $(this);
			var dur = 200;

			$currentSlider.on('init', function (event, el) {

			}).slick({
				fade: false,
				speed: dur,
				slidesToShow: 4,
				slidesToScroll: 4,
				infinite: false,
				dots: false,
				arrows: true
			});

		});
	}
});