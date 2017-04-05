//parker's code:

//var newDate = new Date();
//// Gets date
//var weekDay;
//// Creates variable used below
//switch (newDate.getDay()) {
//case 0:
//    weekDay = "Sunday"
//    break;
//case 1:
//    weekDay = "Monday"
//    break;
//case 2:
//    weekDay = "Tuesday"
//    break;
//case 3:
//    weekDay = "Wednesday"
//    break;
//case 4:
//    weekDay = "Thursday"
//    break;
//case 5:
//    weekDay = "Friday"
//    break;
//case 6:
//    weekDay = "Saturday"
//    break;
//}
////Pulls hours out of date
//var hours = newDate.getHours();
////var hours = 23;
////pulls minutes out of date
//var minutes = newDate.getMinutes();
////var minutes = 9;
////pulls seconds out of date
//var seconds = newDate.getSeconds();
////declares ampm variable
//var ampm = "";
////if statement to see which to use
//if (hours >= 12) {
//    ampm = "PM";
//} else {
//    ampm = "AM";
//}
////Rounds it to a 12 instead of military time
//hours = hours % 12;
//if (hours === true) {
//    hours = 12;
//}
////Adds the 0 if minutes is less that 10
//if (minutes < 10) {
//    minutes = "0" + minutes;
//}
////Logs it!
//console.log("Today is: " + weekDay);
//console.log("Current time is: " + hours + ":" + minutes + ":" + seconds + " " + ampm)


//Joes code;
//var theDate = new Date();
//console.log(theDate);
//var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
//var daysIndex = theDate.getDay();
//
//var day = days[daysIndex];
//
//var hrs = theDate.getHours();
//
//var mins = theDate.getMinutes();
//
//var secs = theDate.getSeconds();
//
//var ampm;
//if(hrs >= 12) {
//    ampm = "PM"
//    hrs = 24 - hrs;
//} else {
//    ampm = "AM"
//}
//
//if (mins < 10) {
//    mins = "0" + mins;
//}
//
//if (secs < 10) {
//    secs = "0" + secs;
//}
//
//console.log("Today is: " + day);
//console.log("Current time is: " + hrs +":" + mins + ":" + secs + " " + ampm);

//my code

function seeDate (){
  
   
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();
var display = "Today is: " + n  +" \nCurrent time is: " + time;

//console.log(n + ' ' + time);
//    console.log(display);
    
        var newElement = document.createElement("li");
        var newNode = document.createTextNode(display);
        newElement.appendChild(newNode);
        var element = document.getElementById("show-time");
        element.appendChild(newNode);
   
}

document.getElementById("time").addEventListener("click", seeDate);