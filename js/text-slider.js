const $slider = $(".slider"), $bullets = $(".bullets");

function calculateHeight() {
	const height = $(".slide.active").outerHeight();
	$slider.height(height);
}

$(window).resize(function () {
	calculateHeight();
	clearTimeout($.data(this, 'resizeTimer'));
});

function resetSlides() {
	$(".slide.inactive").removeClass("inactiveRight").removeClass("inactiveLeft");
}

function gotoSlide($activeSlide, $slide, className) {
	$activeSlide.removeClass("active").addClass("inactive " + className);
	$slide.removeClass("inactive").addClass("active");
	calculateHeight();
	resetBullets();
	setTimeout(resetSlides, 300);
}

$(".next").on("click", function () {
	const $activeSlide = $(".slide.active"),
		$nextSlide = $activeSlide.next(".slide").length !== 0 ? $activeSlide.next(".slide") : $(".slide:first-child");
	console.log($nextSlide);
	gotoSlide($activeSlide, $nextSlide, "inactiveLeft");
});
$(".previous").on("click", function () {
	const $activeSlide = $(".slide.active"),
		$prevSlide = $activeSlide.prev(".slide").length !== 0 ? $activeSlide.prev(".slide") : $(".slide:last-child");

	gotoSlide($activeSlide, $prevSlide, "inactiveRight");
});
$(document).on("click", ".bullet", function () {
	if ($(this).hasClass("active")) {
		return;
	}
	const $activeSlide = $(".slide.active");
	const currentIndex = $activeSlide.index();
	const targetIndex = $(this).index();
	console.log(currentIndex, targetIndex);
	const $theSlide = $(".slide:nth-child(" + (targetIndex + 1) + ")");
	gotoSlide($activeSlide, $theSlide, currentIndex > targetIndex ? "inactiveRight" : "inactiveLeft");
})

function addBullets() {
	const total = $(".slide").length, index = $(".slide.active").index();
	for (var i = 0; i < total; i++) {
		const $bullet = $("<div>").addClass("bullet");
		if (i === index) {
			$bullet.addClass("active");
		}
		$bullets.append($bullet);
	}
}

function resetBullets() {
	$(".bullet.active").removeClass("active");
	const index = $(".slide.active").index() + 1;
	console.log(index);
	$(".bullet:nth-child(" + index + ")").addClass("active");
}

addBullets();
calculateHeight();
