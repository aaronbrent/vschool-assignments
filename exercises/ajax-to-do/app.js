$.get("http://api.vschool.io/aaronellis/todo/", function (response) {
    var todos = response;
    for (var i = 0; i < todos.length; i++) {
        $("#todos").append(`<div><p>${todos[i].title}</p>
        <p> $${todos[i].price}<img class="toDoImg" src=
        ${todos[i].imgUrl}/></p>done<input type="checkbox" value=${todos[i].completed}><button class="done" type="button">Delete</button></div>`)
    }
})
$("#submit").click(function () {
    var toDoItem = $("#newToDo")
    $.post("http://api.vschool.io/aaronellis/todo/", function () {
        $("#todos").append(`<div><p>${toDoItem}</p><p> $${todos[i].price}<img class="toDoImg" src=
        ${todos[i].imgUrl}/></p>done<input type="checkbox" value=${todos[i].completed}><button class="done" type="button">Delete</button></div>`)
    })
})
$("#btn").on("click", function () {
    var newItem = $("#item").val();
    var xButton = `<button type="button" class="xBtn">X</button>`;
    $("#shopList").append(`<li> ${xButton}  ${newItem} </li>`);
    $(".xBtn").on("click", function () {
        $(this).parent().remove();
    })
})