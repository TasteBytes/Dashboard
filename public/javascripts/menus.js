$(document).ready(function() {
    $('.secondary.menu .item').tab({
        history: false
    });
    $('.tabular.menu .item').tab({
        history: false
    });
    $('.ui.accordion').accordion();

});


//find out who called us and update CategoryModal with path info
function addCategory(category) {
    var path = category.getAttribute("data-ref")
    $('#categoryModalInput').attr('value', path);
    $('#CategoryModal').modal('show');
}


function addMenu() {
    $('#MenuModal').modal('show');
}

function addEntree(entree) {
    var path = entree.getAttribute("data-ref");
    $('#entreeModalInput').attr('value', path);
    $('#EntreeModal').modal('show');
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
