$(document).ready(function(){
    $("#btn").on("click", function(){
        
        var newItem = $("#item").val();
        var xButton = `<button type="button" class="xBtn">X</button>`;
        
        $("#shopList").append(`<li> ${xButton}  ${newItem} </li>`);
          
        $(".xBtn").on("click", function(){
        $(this).parent().remove();
        })
    })
})