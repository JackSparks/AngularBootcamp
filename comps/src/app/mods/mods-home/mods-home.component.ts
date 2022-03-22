import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is'},
    { title: 'What does an orange taste like an orange?', content: 'An orange tastes like an orange'},
    { title: 'What color is that cat?', content: 'The cat is the color yellow'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.modalOpen = !this.modalOpen;
  }

  onCloseClick(){
    this.modalOpen = !this.modalOpen;
  }

}
