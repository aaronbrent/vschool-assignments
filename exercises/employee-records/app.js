var employees = [];

function Employee (name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "full-time";
    this.printEmployeeForm = function(){
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
    }
}

 

var employeeOne = employees.push(new Employee("John", "Musician", 35000, "full-time"));
var employeeTwo = employees.push(new Employee("Sam", "Barista", 26000));
var employeeThree = employees.push(new Employee("Jill", "Carpenter", 95000, "part-time"));


    employees[0].printEmployeeForm();
    employees[1].printEmployeeForm();
    employees[2].printEmployeeForm();



