$(document).ready(function () {
	let item = $(".work__item").length;

	$(".work__item").slice(0, 4).show();
	$(".work__item:hidden").slice(0, 4).slideDown();
	$("#loadMore").on("click", function (e) {
		e.preventDefault();
		$(".work__item:hidden").slice(0, 4).slideDown();
		if (item !== $(".work__item").length ) {
			$("#loadMore").text('Load more work');
		}

		if ($(".work__item:hidden").length === 0) {

			$("#loadMore").addClass("noContent");

		}
	});
});
