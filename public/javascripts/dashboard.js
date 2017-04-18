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

function addItem(){
    $('.ui.modal').modal('show');
}

function createAccordion(){
    $( '.ui button' ).before( 
        "<p>accordion goes here</p>" 
    );
}

function closeModal(){
    $('.ui.modal').modal('hide');
}