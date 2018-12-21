(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

jQuery(document).ready(function () {
  $('h1').mousemove(function (e) {
    var rXP = (e.pageX - this.offsetLeft - $(this).width() / 2);
    var rYP = (e.pageY - this.offsetTop - $(this).height() / 2);
    $('h1').css('text-shadow', +rYP / 10 + 'px ' + rXP / 80 + 'px rgba(121,121,128), ' + rYP / 8 + 'px ' + rXP / 60 + 'px rgba(238,238,238), ' + rXP / 70 + 'px ' + rYP / 12 + 'px rgba(0,0,0)');
  });
});