var shopper = {
    name: "John",
    age: 28,
    isReturnCustomer: true,
    groceryCart: ["Salmon", "Rice", "Carrots", "Celery"],
    cartFunction: function(name, groceryCart){
        return (this.name + "'s purchases today: " + this.groceryCart);
    }
    
};

console.log (shopper.cartFunction());