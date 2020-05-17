$(document).ready(function () {
	$(".work__img").slice(0, 4).show();
	$("#loadMore").on("click", function (e) {
		e.preventDefault();
		$(".work__img:hidden").slice(0, 4).slideDown();
		if ($(".work__img:hidden").length == 0) {
			$("#loadMore").addClass("noContent");
		}
	});
})
