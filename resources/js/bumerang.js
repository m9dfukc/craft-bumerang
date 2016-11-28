$(function () {

  function init() {
    var $form = $('#container');
    var $entryIdInput = $('input[name="entryId"]');

    if ($entryIdInput.length > 0 && $form.length > 0 && $form.find('#bumerang-redirect').length == 0) {
      var redirectUrl = $form.data('saveshortcut-redirect');
      $form.append('<input id="bumerang-redirect" type="hidden" name="redirect" value="'+redirectUrl+'"> ');
      //$form.submit();

    }
  }

  init();
});
