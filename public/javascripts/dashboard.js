// using context
$('.context.example .ui.sidebar')
    .sidebar({
        context: $('.context.example .bottom.segment')
    })
    .sidebar('attach events', '.context.example .menu .item');

$(document).ready(function() {
    $('.secondary.menu .item').tab({
        history: false
    });
    $('.tabular.menu .item').tab({
        history: false
    });
});;

$(document).ready(function() {
    $('.ui.accordion').accordion();
});

//find out who called us and update CategoryModal with path info
function addCategory(category) {
    var path = category.getAttribute("data-ref")
    $('#categoryModalInput').attr('value', path);
$(document).ready(function(){
    $('.ui.accordion').accordion();
});




function addMenu() {
    $('#MenuModal').modal('show');
}


function addEntree(entree) {
    var path = entree.getAttribute("data-ref");
    $('#entreeModalInput').attr('value', path);
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

function editEntree() {
    event.stopPropagation();
    console.log("edit");
    $('#EditModal').modal('show');
}

function editMenu(menu) {
    event.stopPropagation();
    $('#editMenuTitle').text(`Edit Menu -  ${menu.getAttribute('data-ref')}`)
    $('#editMenuName').attr('value', menu.getAttribute("data-ref"));
    $('#MenuModal').modal('show');
}

function editCategory(category) {
    event.stopPropagation();
    console.log('Editing the category')
    // $('#editCategoryTitle').text(`Edit Category - ${category.getAttribute('data-ref')}`)
    // $('#categoryModalInput').attr('value', category.getAttribute('data-ref'));
    $('#CategoryModal').modal('show');
}

function deleteItem(item) {
    event.stopPropagation();
    var path = item.getAttribute("data-ref");
    $('#deleteText').text(`Are you sure you would like to delete ${path}`)
    $('#deleteItem').attr("value", path)
    $('#DeleteModal').modal('show');
}

function deleteEntree(entree) {
    event.stopPropagation();
    var ref = entree.getAttribute("data-ref");
    var path = entree.getAttribute("data-path");
    $('#deleteText').text(`Are you sure you would like to delete ${ref}`)
    $('#deleteItem').attr("value", path)
    $('#DeleteModal').modal('show');
}

function closeModal() {
    $('.ui.modal').modal('hide');
}
