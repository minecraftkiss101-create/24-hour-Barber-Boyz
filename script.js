// script.js

// Smooth Scrolling
$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
});

// Sticky Navigation
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
});

// Mobile Menu
$('.mobile-menu').on('click', function() {
    $('.menu').toggleClass('active');
});

// Floating Book Button
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('.floating-book-button').fadeIn();
    } else {
        $('.floating-book-button').fadeOut();
    }
});

// Counter Animations
$('.counter').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Interactive Hover Effects
$('.hover-effect').hover(
    function() {
        $(this).addClass('active');
    },
    function() {
        $(this).removeClass('active');
    }
);