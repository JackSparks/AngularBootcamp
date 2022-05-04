import { AbstractControl } from "@angular/forms";


export class MathValidators {

    /*static makes it so you no longer need to instantiate the class in order to use the variables. 
    It also means you can't use the method in situations that could result in undefined. 
    So no referencing instance variables inside the method
    */

    //a function that returns a function
    static addition(target: string, sourceOne: string, sourceTwo: string) {

        //the validation function
        return (form: AbstractControl) => {
            // const { a, b, answer } = form.value;
            // if (a + b === parseInt(answer)) {
            //     return null;

            const sum = form.value[target];
            const firstNumber = form.value[sourceOne];
            const secondNumber = form.value[sourceTwo];

            if (firstNumber + secondNumber === parseInt(sum)) {
                return null;

            }
            return { addition: true };
        }


    }

    static subtraction() {

    }
}

// MathValidators.addition();