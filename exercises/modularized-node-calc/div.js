function Division(){
    this.result = "Result: "
    this.div = function(num1, num2){
        return (parseInt(num1) / parseInt(num2));
    }
}

module.exports = new Division();