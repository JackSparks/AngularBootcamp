import { Component, Input, OnInit } from '@angular/core';
import { CollectionsRoutingModule } from 'src/app/collections/collections-routing.module';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() items: any = [];

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
  
  ngOnChanges(){
    console.log(this.items)
  }

}
