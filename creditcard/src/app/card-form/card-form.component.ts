import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  //creates a new form
  cardForm = new FormGroup({

    //defines a new field. By default, you usually want them to start out as empty. Hence the empty string
    //the validators mean that if the user doesn't enter anything, the form is invalid. If you look inside Validators, you can see a variety of validator options
    name: new FormControl('', [
      // Validators.required,
      // Validators.minLength(3)
      Validators.pattern(/\s/),
    ]),
    cardNumber: new FormControl('',[
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('',[
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('',[
      Validators.required,
      Validators.min(100),
      Validators.max(999)
    ])
  });

  constructor() { 
    console.log(this.cardForm.controls['name'])
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Form was submitted');
  }

  onResetClick(){
    this.cardForm.reset();
  }

}
