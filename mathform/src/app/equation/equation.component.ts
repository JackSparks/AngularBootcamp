import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { delay, filter, scan } from 'rxjs';
import { MathValidators } from '../math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  secondsPerSolution = 0;

  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  },
    //notice that we're not using round brackets b/c we're providing a reference to the function that can be called over and over again whenever validation is required.
    //so we don't invoke it right away, just create a reference to it.
    [MathValidators.addition('answer', 'a', 'b')]
  );

  constructor() { }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {

    // const startTime = new Date();
    // let numberSolved = 0;

    //an observable that emits values whether or not the form is valid
    console.log(this.mathForm.statusChanges);

    //added a delay so the user can at least see that they entered in a value
    this.mathForm.statusChanges
      .pipe(
        filter(value => value == 'VALID'),
        delay(300),
        //rxjs that allows you to increment the starttime
        scan(( acc, value ) => {
          return {
            numberSolved: acc.numberSolved + 1,
            startTime: acc.startTime
          }
        }, { numberSolved: 0, startTime: new Date() }
        )
      ).subscribe(( { numberSolved, startTime }) => {

        // console.log(value);

        //return the time it took to solve the solution
        // numberSolved++;
        this.secondsPerSolution = (
          new Date().getTime() - startTime.getTime()
        ) / numberSolved / 1000;

        //if user entered incorrect value, then don't reset the form
        //don't need this since we're using the rxjs filter on the observable
        // if (value === 'INVALID'){
        //   return;
        // }

        //one method of reseting the form values
        // this.mathForm.controls['a'].setValue(this.randomNumber());
        // this.mathForm.controls['b'].setValue(this.randomNumber());
        // this.mathForm.controls['answer'].setValue('');

        //this method using setValue requires that you update every parameter in the form or else will throw an error
        // this.mathForm.setValue({
        //   a: this.randomNumber(),
        //   b: this.randomNumber(),
        //   answer: ''
        // })

        //this method allows you to update any number of form parameters
        this.mathForm.patchValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        })


      })
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

}
