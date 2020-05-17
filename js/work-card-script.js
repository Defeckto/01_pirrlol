$(document).ready(function () {
	// первый аргумент - функция
	$.getJSON('./js/data.json', function (data) {
		let output = ``;

		$.each(data, function (key, val) {
			let link = val.link.replace(/\.html/, '');

			output += `<div class="wrapper work__item" style="background-image: url(./img/work/` + val.bgi + `);">`;
			output += `<div class="work__data">`;
			output += `<div class="work__content">`;
			output += `<h1 class="work__title">` + val.title + `</h1>`;
			output += `<p class="work__text">` + val.subtitle + `</p>`;
			output += `<a class="work__button" href="` + link + `/` + val.workId + ` ">` + val.btnName + `</a>`;
			output += `</div>`;
			output += `</div>`;
			output += `</div>`;
		});
		$('#workRow').html(output);
	});
});


