$(document).ready(function () {
  // This function runs every time the user scrolls the page.
  //   $(window).scroll(function () {
  //     // Check weather the user has scrolled down (if 'scrollTop()'' is more than 0)
  //     if ($(window).scrollTop() > 0) {
  //       // If it's more than or equal to 0, show the toTop button.
  //       console.log('is more');
  //       $('#top').fadeIn('slow');
  //     }
  //     else {
  //       // If it's less than 0 (at the top), hide the toTop button.
  //       console.log('is less');
  //       $('#top').fadeOut('slow');
  //     }
  //   })
  // });

  // When the user clicks the toTop button, we want the page to scroll to the top.
  $('#top').click(function () {
    // Disable the default behaviour when a user clicks an empty anchor link.
    // (The page jumps to the top instead of // animating)
    event.preventDefault();

    // Animate the scrolling motion.
    $('html, body').animate(
      {
        scrollTop: 0
      },
      'slow'
    );
  });
});

// Change date in the footer automatically every year.
var date = new Date();
var year = date.getFullYear();
$('.footerOne .copyright .text').html('&copy;' + ' ' + year + ' ' + 'bvasi');
