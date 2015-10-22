function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    event.preventDefault();
}

$(document).ready(function() {
	var anchorUrl = window.location.hash.substr(1);
	
	if(anchorUrl.length !== 0) {
		scrollToAnchor(anchorUrl);
	}
});

$("#projects").click(function() {
  // event.preventDefault();
   scrollToAnchor('projects');
});

$("#services").click(function() {
  // event.preventDefault();
   scrollToAnchor('services');
});

$("#testimonials").click(function() {
  // event.preventDefault();
   scrollToAnchor('testimonials');
});

$("#contact").click(function() {
  // event.preventDefault();
   scrollToAnchor('contact');
});

$("#topofpage").click(function() {
  // event.preventDefault();
   scrollToAnchor('topofpage');
});