$(document).ready(function() {

  // clicking color mode button toogles body class & button text 
  $('.navbar__modeswitch button').on("click", function() {
    $('body').toggleClass('dark light');

    if ($('body').hasClass('light')) {
      $('.navbar__modeswitch button span').text('Dark Mode');
    } 
    else if ($('body').hasClass('dark')) {
      $('.navbar__modeswitch button span').text('Light Mode');
    }
  });
});