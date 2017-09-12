//= require_tree .
jQuery(document).ready(function($) {

    var navbar = $('.navbar-static-top'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() > distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$(".nav-bar li a").css("color", "#666");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    });

    $( ".nav-trigger" ).click(function() {
	  $( "nav" ).slideToggle( "fast", function() {
	  });
	});

});
