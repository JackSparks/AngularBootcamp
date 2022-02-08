import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'pipes';

  name : string | undefined ;
  date : string | undefined ;
  amount : number | undefined;
  height : number | undefined;
  miles: number | undefined;

  car = {
    make: 'Toyota',
    mode: 'Camry',
    year: 2000
  }

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }

  onHeightChange(value: string){
    this.height = parseFloat(value);
  }
  
  onNameChange(value: string){
    this.name = value;
  }

  onDateChange(value: string){
    this.date = value
  }

  onAmountChange(value: string){
    this.amount = parseFloat(value);
  }

}
