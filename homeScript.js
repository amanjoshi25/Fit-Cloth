$(document).ready(function() {
    // Toggle menu button
    $('.menu-btn').click(function() {
        $('.nav-right').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Close menu when a menu item is clicked
    $('.nav-right a').click(function() {
        $('.nav-right').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });
});
