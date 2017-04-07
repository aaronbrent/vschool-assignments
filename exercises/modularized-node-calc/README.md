# Node Module Patterns

This was an exercise to create a calculator program that takes 2 numbers and a string as inputs and can perform the following operations on those numbers:

- Addition
- Subtraction
- Multiplication
- Division
- Exponentiation (raise the first number to the power of the second number)
- The 3rd parameter represents which of the operations you want to perform on the two numbers.

The main calculator app should do all the business logic (i.e. figuring out which operation to perform based on the string in the 3rd input) and the individual functions that perform the specific operations should be require()'d in from separate files, each operation in it's own file.

Use at least 3 of the different module patterns