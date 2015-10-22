// Change background as you scroll down
$(document).ready(function(){
		var currenturl = window.location
    var scroll_pos = 0;
		// check that not on index/homepage
		if (currenturl.pathname === "/") {
			// changing background color as you scroll
			$(document).scroll(function() { 
					scroll_pos = $(this).scrollTop();
					if(scroll_pos < 700) {
							$("#navigation").css('background-color', 'transparent');
					} else {
							$("#navigation").css('background-color', '#181026');
					}
			});
		} else {
				$("#navigation").css('background-color', '#181026');
		}
});

