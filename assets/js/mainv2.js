// header slider
$('.owl-carousel.header-carousel').owlCarousel({
	loop: true,
	margin: 10,
	items: 1,
	dots: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	navText : ["<i class='material-icons'>chevron_left</i>","<i class='material-icons'>chevron_right</i>"],
	smartSpeed: 1500,
	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    afterAction: function(current) {
        current.find('video').get(0).play();
    },
    video: true,
    responsive:{
    	0:{
    		nav: false,
    	},
    	600:{
    		nav: true,
    	}
    },
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// $('.hamburger-menu').on('click', function(){
//     $('.sidebar-app').toggleClass('active');
//     $('.dim-app').toggleClass('active');
// })

$(document).ready(function() {
    $('.sidebar-app').slideAndSwipe();
});

var icons = $('.nav-item.active img.icon-app').attr('src');
if (icons) {
    const spl = splitIcon(icons)
    if (spl) {
        $('.nav-item.active img.icon-app').attr('src', `${spl}-solid.svg`)
    }
}

function splitIcon (icon) {
    let spl = icon.split('.svg');
    if (spl) return spl[0]
    return false
}

$('.nav-item.notifications').on('click', function(){
    $('.notifications-app').toggleClass('active');
    $('body').toggleClass('notifications-open');
})
$('.notifications-app .btn-close').on('click', function(){
    $('.notifications-app').removeClass('active');
    $('body').removeClass('notifications-open');
})