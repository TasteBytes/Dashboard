// using context
$('.context.example .ui.sidebar')
  .sidebar({
    context: $('.context.example .bottom.segment')
  })
  .sidebar('attach events', '.context.example .menu .item')
;

$(document).ready(function(){
    $('.secondary.menu .item').tab({history:false});
    $('.tabular.menu .item').tab({history:false});
});
;

function addCategory(){
    $('#CategoryModal').modal('show');
}

function addMenu(){
    $('#MenuModal').modal('show');
}

function addEntree(){
    $('#EntreeModal').modal('show');
}

function closeModal(){
    $('.ui.modal').modal('hide');
}
