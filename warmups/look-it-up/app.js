var dictionary = {
    apple: "a delicious red fruit",
    ball: "a round object to play sports with",
    car: "a mode of transportation"
}

function addWord (word, definition){
    word = word.toLowerCase();
    dictionary[word] = definition;
}

addWord("dog", "an animal");

function findWords (word) {
    if(dictionary[word] === undefined){
        console.log ("this word is not in the dictionary yet");
    }else { 
        return dictionary[word];
    }
}

