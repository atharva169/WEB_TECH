import 'dart:io';
void main(){
    print("Enter the first number:");
    double num1 = double.parse(stdin.readLineSync()!);
    
    print("Enter the second number:");
    double num2 = double.parse(stdin.readLineSync()!);
    
    print("Enter the operator (+, -, *, /):");
    String operator = stdin.readLineSync()!;
    
    double result;
    
    switch (operator) {
        case '+':
        result = num1 + num2;
        break;
        case '-':
        result = num1 - num2;
        break;
        case '*':
        result = num1 * num2;
        break;
        case '/':
        if (num2 != 0) {
            result = num1 / num2;
        } else {
            print("Error: Division by zero is not allowed.");
            return;
        }
        break;
        default:
        print("Error: Invalid operator.");
        return;
    }
    
    print("The result of $num1 $operator $num2 is: $result");           
    
}