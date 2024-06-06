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
// homeScript.js

// homeScript.js

$(document).ready(function(){
    $('.designs-carousel').owlCarousel({
      loop: true,
      margin: 20,
    //   nav: true,
      dots:true,
      autoplay: true, // Enable auto-play
      autoplayTimeout: 3000, // Time between slides in milliseconds (3 seconds)
      autoplayHoverPause: true, // Pause auto-play on hover
      responsive: {
        0: {
          items: 1
        
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  
    // Optional: Add event listener to each card for a console log on click
    $('.designs .card').on('click', function() {
      console.log('Card clicked:', $(this).find('p').text());
    });
  });
    