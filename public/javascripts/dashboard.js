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
    var path= index.getAttribute("data-ref")
    $('#categoryModalInput').attr('value',path);
    $('#CategoryModal').modal('show');
}
function saveCategory(){

}

function addMenu(){
    $('#MenuModal').modal('show');
}
function saveMenu(){

}

function addEntree(menuIndex,pathIndex){
    $('#EntreeModal').modal('show');
    var path=`addEntreeButton${menuIndex}l${pathIndex}`;
    console.log(path);
    var entreePath=$("#"+path).attr('entree');
    console.log(entreePath);
    $('#entreeModalInput').attr('value',entreePath);
}
function saveEntree(){

}
function editEntree(){
    console.log("edit");
    event.stopPropagation();
    $('#EditModal').modal('show');
}
function deleteEntree(Entree){
    console.log("delete");
    event.stopPropagation();
}

function closeModal(){
    $('.ui.modal').modal('hide');
}
