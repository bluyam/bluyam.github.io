var main = function() {
	var intro = function () {
		$('#sub').animate({ opacity: '+=1'},1000);
		$('#sub').animate({ opacity: '-=1'},500);
		$('#mainlogo').animate({ width: '-=650px'},2000);
	}
	setTimeout(intro, 2000);
};

$(document).ready(main);