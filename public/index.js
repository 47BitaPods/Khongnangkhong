window.$ = require("jquery");
window.$.scrollify = require("jquery-scrollify");
// $("#btn").on("click", function() {
// 	$("#btn").css("background", "red");
// });

$(function() {
	$.scrollify({
		section: ".section",
		setHeights: false
	});
});