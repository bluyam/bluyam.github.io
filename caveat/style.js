var main = function() {
	var intro = function () {
		$('#chiv').fadeOut("slow", function() {});
		$('#mainlogo').animate({ width: '-=650px'},2000);
	}
	setTimeout(intro, 2000);
};

$(document).ready(main);