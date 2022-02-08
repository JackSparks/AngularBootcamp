import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'pw';

  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  constructor(){
    this.password = '';
  }

  //note that any input received by the user is initially a string
  onChangeLength(event: Event){
    //if a number is entered, console will complain about not being a number
    // const parsedValue = parseInt(value);

    // if(!isNaN(parsedValue)){
    //   this.length = parsedValue;
    // }
    this.length = parseInt((event.target as HTMLInputElement).value)
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    console.log(`
    //   About to generate a password with the following:
    //   Include letters: ${this.includeLetters}
    //   Include numbers: ${this.includeNumbers}
    //   Include symbols: ${this.includeSymbols}
    // `);
    
    // console.log(this.includeLetters);
    // console.log('Button was clicked');
    // this.password = 'MY PASSWORD!!!';

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if (this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  getName(){
    // return 'Alex';
  }
}
