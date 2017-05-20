var control;

$(document).ready(function() {
  $(".rating").rating();
  $('#profile-image')
    .dimmer({
      on: 'hover'
    });
  control = document.getElementById("profile-input");
  control.addEventListener("change", function(event) {
      document.getElementById("uploadProfileForm").submit();
  }, false);
});
