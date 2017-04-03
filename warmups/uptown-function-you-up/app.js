var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", "myself", "I'm", "so", "pretty"];

//First function

function printThisArray (lyrics){
    var spaceString = lyrics.join (' ');
    console.log (spaceString);
    }

console.log(printThisArray(lyrics));

//Second function

function printReverse (lyrics){
    var lyrics = lyrics.reverse();
    console.log(lyrics.join (" "));
    }

console.log(printReverse(lyrics));

//Third function

function printEveryOther (lyrics){
    for (var i = 0; i < lyrics.length; i++)
        if (i % 2 === 0){
        console.log(lyrics[i])
        }
}

console.log (printEveryOther(lyrics));


