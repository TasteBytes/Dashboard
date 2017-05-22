var profile_image;
var cover_image;

$(document).ready(function() {
  $('.menu .item').tab();
        $('.secondary.menu .item').tab({
        history: false
  });
  $('.tabular.menu .item').tab({
        history: false
  });
  $('.ui.accordion').accordion();
  $(".rating").rating();
  $('#profile-image')
    .dimmer({
      on: 'hover'
    });

  profile_image = document.getElementById("profile-input");
  profile_image.addEventListener("change", function(event) {
      document.getElementById("uploadProfileForm").submit();
  }, false);

  cover_image = document.getElementById("cover-input");
  cover_image.addEventListener("change", function(even){
    document.getElementById("uploadCoverForm").submit();
  }, false);
});


function updateBusinessInfo() {
  $('#businessInfo').modal('show');
}

function viewMenu() {
    $('#menuTemplate').modal('show');
}


function closeModal() {
    $('.ui.modal').modal('hide');
}

