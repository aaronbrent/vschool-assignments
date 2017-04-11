var people = [  
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 10
    },
    {
        name: "Jim",
        email: "jim@gmail.com",
        numFriends: 30
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 20
    },
    {
        name: "Jane",
        email: "jane@gmail.com",
        numFriends: 200
    }
]

//var people = [  
//    {
//        name: "Jim",
//        email: "jim@gmail.com",
//        numFriends: 40  // combined with the other user named `jim` with the email of `jim@gmail.com`
//    },
//    {
//        name: "Jane",
//        email: "jane@gmail.com",
//        numFriends: 200
//    }
//]

function combPerson(people){
   for (var i = 0; i < people.length; i++) {
       
       for (var j = i+1; j < people.length; j++){

            if (people[i].email === people[j].email)  {
              people[j].numFriends += people[i].numFriends;
                people.splice(i,1)
            }   
       }

    }
    console.log(people);
}



combPerson(people);