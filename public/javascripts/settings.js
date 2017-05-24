$(document).ready(function() {
  $('#example3').calendar({
    type: 'time'
  });
  $('#profile-image')
    .dimmer({
      on: 'hover'
    });
});

function addHours(button) {
    $('#addHours').modal('show');
    var day = button.getAttribute('day');
    $('#input-hours-day').val(day);
    $('#editHours').text(`Updating hours for ${day}`);
}

function closeModal() {
    $('.ui.modal').modal('hide');
}
