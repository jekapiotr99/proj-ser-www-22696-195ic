jQuery(function ($) {
	$(window).on('scroll', function () {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});

	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');

		if (winWidth >= 768) {
			dropdown.on('mouseenter', function () {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});

			dropdown.on('mouseleave', function () {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}

	$(window).on('resize', adjustNav);

	adjustNav();
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

window.addEventListener('load', (event) => {
	console.log('The page has fully loaded');
});
footer.onload=function gettime() {
	var date = new Date();
	this.year = date.getUTCFullYear();
	this.day = date.getUTCDate();
	this.month = date.getUTCMonth();
	var hr = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	if (m < 10) {
		m = "0" + m
	}
	if (s < 10) {
		s = "0" + s
	}
	document.getElementById("clock").innerHTML = year + '/' + month + '/' + day + ', ' + hr + ":" + m + ":" + s;
	setTimeout("gettime()", 100);
}