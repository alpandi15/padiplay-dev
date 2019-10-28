$('.shop-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    stagePadding: 100,
    margin: 20,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText : ["<i class='material-icons'>chevron_left</i>","<i class='material-icons'>chevron_right</i>"],
    dot: true,
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        $('.navbar-app').css('top', '0');
    } 
    else {
        $('.navbar-app').css('top', '-100px');
    }
    prevScrollpos = currentScrollPos;
}