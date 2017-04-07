var counter;
$('#btn').click(function () {
    if (localStorage.getItem("click")) {
        counter = localStorage.getItem("click");
        counter++;
        localStorage.setItem("click", counter);
        $('#TextBox').val(counter);
    }
    else {
        counter = 0;
        counter++;
        localStorage.setItem("click", counter);
        $('#TextBox').val(counter);

    }
});