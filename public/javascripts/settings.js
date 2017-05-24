$(document).ready(function() {
  $('#example3').calendar({
    type: 'time'
  });
  $('#profile-image')
    .dimmer({
      on: 'hover'
    });
});

function addHours() {
    $('#addHours').modal('show');
}

function closeModal() {
    $('.ui.modal').modal('hide');
}
