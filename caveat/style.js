var main = function() {
	$('#mainlogo').css('text-align','center');
	setTimeout("$('#mainlogo').animate({ width: '-=650px', text-align: 'left'},2000);", 2000,);
};

$(document).ready(main);