$( document ).ready(function() {
    
});

var gotoSection = function(target) {
  $('html, body').animate({
    scrollTop: $('#' + target).offset().top}, 1000);
}