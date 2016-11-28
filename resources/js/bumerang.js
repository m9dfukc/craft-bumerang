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
    var tabId = "";
    var scrollPos = 0;
    var $form = $('#container');
    var $entryIdInput = $('input[name="entryId"]');

    if ($entryIdInput.length > 0 && $form.length > 0) {
      if(tabId = urlParam("tab")) {
        $("#"+tabId).trigger("click");
      }
      if(scrollPos = urlParam("bumerang")) {
        setTimeout(function() {
          $(window).scrollTop(scrollPos)
        }, 150);
      }
      $(document).unbind('keydown');
      $(document).on('keydown', function(ev) {
        if (Garnish.isCtrlKeyPressed(ev) && ev.keyCode == Garnish.S_KEY) {
          ev.preventDefault();
          var redirectUrl = $form.data('saveshortcut-redirect');
          var selectedTab = $('.tabs .tab.sel');
          if (selectedTab.length > 0) {
            redirectUrl += "#tab=" + selectedTab.attr('id') + "&bumerang=" + Garnish.getBodyScrollTop();
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
    setTimeout(init, 50);
  }
});
