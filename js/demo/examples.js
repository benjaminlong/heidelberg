new Heidelberg($('#Heidelberg-example-1'), {
  previousButton: $('#previous'),
  nextButton: $('#next')
});

new Heidelberg($('#Heidelberg-example-2'), {
  canClose: true,
  arrowKeys: false
});

$(window).load(function() {
  $('html').removeClass('preload');
});
