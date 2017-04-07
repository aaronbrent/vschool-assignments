var pen = {
    type: "Ball Point",
    quantity: 5,
    inkColors: ["black","blue","red"],
    quantityCount: function (){
        if (this.quantity > 3){
            console.log("That's a lot of pens");
        }else {
            console.log("You may need more pens");
        }
    }
}

var waterBottle = {
    brand: "Camel Back",
    color: "green",
    sizeInOz: 33
}

var lapTops = {
    brand: "Apple",
    food: false,
    quantity: 12,
    sizesInInches: [13,15]
}

var backPacks = {
    colors: ["black","brown","green","blue"],
    sizes: ["small", "medium", "large"],
    quantity: 11
}

var monitors = {
    color: "black",
    quantity: 14,
    secondScreen: true
}

var apple = {
    food: true,
    color: "red",
    type: "gala"
}

var desks = {
    quantity: 10,
    color: "white",
    modular: true
}

var windows = {
    material: "glass",
    transparent: true,
    large: true
}

var projector = {
    wireless: false,
    powerOn: true,
    size: "medium"
}

var thermos = {
    filled: true,
    contents: "coffee",
    color: "brown"
}