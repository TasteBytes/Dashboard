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
    $('#CategoryModal').modal('show');
}

function saveCategory() {

}

function addMenu() {
    $('#MenuModal').modal('show');
}

function saveMenu() {

}

function addEntree(entree) {
    var path = entree.getAttribute("data-ref");
    $('#entreeModalInput').attr('value', path);
    $('#EntreeModal').modal('show');
}

function saveEntree() {

}

function editEntree() {
    event.stopPropagation();
    console.log("edit");
    $('#EditModal').modal('show');
}

function deleteItem(item) {
    event.stopPropagation();
    var path = item.getAttribute("data-ref");
    $('#deleteText').text(`Are you sure you would like to delete ${path}`)
    $('#DeleteModal').modal({
            onApprove: function() {
                window.alert('Make POST request here!');
            }
        })
        .modal('show');
}

function closeModal() {
    $('.ui.modal').modal('hide');
}
