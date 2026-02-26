// Smooth Scrolling Navigation
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

// Sticky Navbar
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
});

// Mobile Hamburger Menu
$('.hamburger').on('click', function() {
    $('.navbar').toggleClass('active');
});

// Counter Animations for Stats
$('.counter').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Floating Button Visibility Toggle
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 200) {
        $('.floating-btn').fadeIn();
    } else {
        $('.floating-btn').fadeOut();
    }
});

// Gallery Item Click Handling
$('.gallery-item').on('click', function() {
    var imageSrc = $(this).find('img').attr('src');
    $('#modal img').attr('src', imageSrc);
    $('#modal').fadeIn();
});

// Active Nav Link Highlighting
$('.navbar a').on('click', function() {
    $('.navbar a').removeClass('active');
    $(this).addClass('active');
});

// Keyboard Accessibility
$(document).on('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        $(document.activeElement).trigger('click');
    }
});

// Phone Click-to-Call Functionality
$('.phone-link').on('click', function() {
    window.location.href = 'tel:' + $(this).data('phone');
});

// CSS Animation Keyframes
$('<style>\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n</style>').appendTo('head');