import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  //says that we will eventually output some information that is a string
  //submitted is now an instance of an eventEmmitter
  @Output() submitted = new EventEmitter<string>();

  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(event: any) {

    // stop from sending the data to the angular server because we want to use it here
    event.preventDefault();

    // emits the search term entered
    this.submitted.emit(this.term);
  }

}
