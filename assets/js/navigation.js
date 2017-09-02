$(function() {
  var href = location.pathname;
  var resources = href.split('/');
  var active = { 'border': '1px solid #02BFE7' };

  resources.length > 4
    ? $('button.usa-nav-link').css(active)
    : $('.usa-nav-link[href="' + href + '"]').css(active);
});
