var main = function() {
	var intro = function () {
		$('#sub').animate({ opacity: '-=1'},400);
		$('#mainlogo').animate({ width: '-=650px'},2000);
	}
	setTimeout(intro, 2000);
};

$(document).ready(main);