$(function () {

  function urlParam(name){
    var results = new RegExp('[\?&#]' + name + '=([^&#]*)').exec(window.location.hash);
    if (results==null) {
      return null;
    } else {
      return results[1] || 0;
    }
  }
  function init() {
    var scrollPos = 0;
    var $form = $('#container');
    var $entryIdInput = $('input[name="entryId"]');

    if ($entryIdInput.length > 0 && $form.length > 0) {
      if(scrollPos = urlParam("bumerang")) {
        $(window).scrollTop(scrollPos);
      }
      $(document).unbind('keydown');
      $(document).on('keydown', function(ev) {
        if (Garnish.isCtrlKeyPressed(ev) && ev.keyCode == Garnish.S_KEY) {
          ev.preventDefault();
          var redirectUrl = $form.data('saveshortcut-redirect');
          var selectedTab = $('.tabs .tab.sel');
          if (selectedTab.length > 0) {
            redirectUrl += selectedTab.attr('href') + "&bumerang=" + Garnish.getBodyScrollTop();
          } else {
            redirectUrl += "#bumerang=" + Garnish.getBodyScrollTop();
          }
          $form.append('<input type="hidden" name="redirect" value="'+redirectUrl+'">');
          $form.submit();
          return false;
        }
        return true;
      });
    }
  }
  if (typeof Garnish == 'undefined') {
    throw 'Garnish not defined!';
  } else {
    setTimeout(init, 300);
  }
});
