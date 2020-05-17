$(document).ready(function () {
	let x = $(".work__row.work__item");
	$(".work__item").slice(0, 4).show();
	$("#loadMore").on("click", function (e) {
		e.preventDefault();
		$(".work__item:hidden").slice(0, 4).slideDown();
		console.log($(".work__item"), 'asdada')

		if ($(".work__item:hidden").length === 0) {

			$("#loadMore").addClass("noContent");

		}
		// console.log(x.length, 'sss')
		if(x.length === 4){

		}
	});
});
