$(document).ready(function() {
  $('.uno').click(function() {
    $('.main-we').insertAfter('.main-nav'),
    $('.offer').hide(),
    $('.suscribe').hide();
    $('.main-we').show();
  });
  $('.dos').click(function() {
    $('.offer').insertAfter('.main-nav'),
    $('.main-we').hide();
    $('.suscribe').hide();
    $('.offer').show();
  });
  $('.tres').click(function() {
    $('.suscribe').insertAfter('.main-nav');
    $('.suscribe').show();
    $('.offer').hide()
    $('.main-we').hide()    
  });
});
