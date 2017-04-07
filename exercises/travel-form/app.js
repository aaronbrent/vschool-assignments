document.getElementById("btnclick").addEventListener("click", createPassenger);

function createPassenger (){
    var form = document.getElementById("form");
    
    var firstName = form.name.value;
    var lastName = form.lastname.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var travelLocation = form.travellocation.value;
    var vegetarian = form.vegetarian;
    var vegan = form.vegan;
    var kosher = form.kosher;
   
  var diet =[]  
    
 if (vegetarian.checked){
     diet.push("Vegetarian ");
 } 
  if (vegan.checked === true){
      diet.push(" Vegan ");
     
 }
  if (kosher.checked === true){
     diet.push(" Kosher");
}
 var newPassenger = `First name: ${firstName}\nLast name: ${lastName} \nAge: ${age} \nGender: ${gender} \nLocation: ${travelLocation} \nDietary restrictions: ${diet}`

alert(newPassenger);
}



    