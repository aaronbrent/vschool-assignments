$(document).ready(function () {
    $("#btnSubmit").on("click", function () {
       
        var playerName = $("#name").val();
        var game = $("#gameChoice").val();
        var date = $("#date").val();
        var score = $("#score").val();
        var trashTalk = trashMessage();
        
        function trashMessage(){
            var random = Math.floor(Math.random() * (4 - 1) + 1);
            if($("#checkBox").is(':checked')&& random === 3){
                
                trashTalk ="You are the reason they put instructions on shampoo!";
                
            }else if($("#checkBox").is(':checked')&& random === 2){
                
                trashTalk ="Your ass is grass and I've got the weed-whacker!";
                
            }else if($("#checkBox").is(':checked')&& random === 1){
                
                trashTalk ="Milk drinker...";
            }else{
                trashTalk = "";
            }
            return trashTalk
        }
        
        var newRow = ("<tr><td>" + playerName + "</td>" + "<td>" + game + "</td>" + "<td>" + date + "</td>" + "<td>" + score + "</td>" + "<td>" + trashTalk + "</td></tr>");
        
        if (playerName === "" || score === ""){
            alert ("You failed to fill out a required field");
        }else{
        $("#myTable").append(newRow);
        }
        
        return false;
    })
})