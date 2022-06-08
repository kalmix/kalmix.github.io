//declare body class and add preloader-site class
$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
//when content is loaded -> delete preloader-site and fadeOut preloader
$(window).load(function() {
		//.fadeOut("number" ms -> change duration)
		//.fadeOut("slow") -> slow fade out
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});

