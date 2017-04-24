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

$(document).ready(function(){
    $('.ui.accordion').accordion();
});

//find out who called us and update CategoryModal with path info
function addCategory(index){
    $('#CategoryModal').modal('show');
    var category=$('#addCategoryButton'+index).attr('category');
    $('#categoryModalInput').attr('value',category);
}
function saveCategory(){

}

function addMenu(){
    $('#MenuModal').modal('show');
}
function saveMenu(){

}

function addEntree(){
    $('#EntreeModal').modal('show');
}
function saveEntree(){

}
function editEntree(){
    console.log("edit");
    event.stopPropagation();
    $('#EditModal').modal('show');
}
function deleteEntree(){
    console.log("delete");
    event.stopPropagation();
}

function closeModal(){
    $('.ui.modal').modal('hide');
}
