var shipGuest = {
    firstName: "John",
    returnGuest: false,
    companionsInParty: [
        {
            firstName: "Jill",
            age: 25
            
            
        },
        {
            firstName:"Ron",
            age: 27
           
            
            
        }
    ],
    eventsPlanned: [
        
                {
                    name: "Scuba",
                    location: "Aruba",
                    withCompanion: false,
                    hoursAlloted: 3
                },
            
            
                {
                    name: "Zip Line",
                    location: "Bahama",
                    withCompanion: true,
                    hoursAlloted: 2
                },
                
            
             
                {
                    name: "Wilderness Hike",
                    location: "Jamaica",
                    withCompanion: true,
                    hoursAlloted: 5
                }, 
                
                {
                    name: "Wave Pool",
                    location: "Ship Deck",
                    withCompanion: false,
                    hoursAlloted: 1
                }
        
          
    
    ],
    
        bringFriend: function (eventsPlanned){
            for (i = 0; i < eventsPlanned.length; i++) {

            if (this.withCompanion === true){
                console.log("Don't forget to bring your friend " + location + "!");
                } else { 
                    console.log ("Have fun!");
                }
            }
    
    
       
};

shipGuest.lastName = "Doe";
shipGuest.age = 33;
shipGuest.companionsInParty.push(lastName = "Hill");
shipGuest.companionsInParty.push(lastName = "Jon");
shipGuest.eventsPlanned.bringFriend();
