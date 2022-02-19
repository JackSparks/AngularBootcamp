import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  currentPage = 0;

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }

  images = [
    {
      title: 'At the Desk',
      url: 'https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1644278233226-1cf440280800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Lighthouse',
      url: 'https://images.unsplash.com/photo-1644340253042-34f3d6b77b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Tunnel',
      url: 'https://images.unsplash.com/photo-1644267215220-b3b7d2d8fae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },


    {
      title: 'At the Desk',
      url: 'https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1644278233226-1cf440280800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Lighthouse',
      url: 'https://images.unsplash.com/photo-1644340253042-34f3d6b77b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Tunnel',
      url: 'https://images.unsplash.com/photo-1644267215220-b3b7d2d8fae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },


    {
      title: 'At the Desk',
      url: 'https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1644278233226-1cf440280800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Lighthouse',
      url: 'https://images.unsplash.com/photo-1644340253042-34f3d6b77b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Tunnel',
      url: 'https://images.unsplash.com/photo-1644267215220-b3b7d2d8fae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },

    {
      title: 'At the Desk',
      url: 'https://images.unsplash.com/photo-1640622843377-6b5af9417e70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Bar',
      url: 'https://images.unsplash.com/photo-1644278233226-1cf440280800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Lighthouse',
      url: 'https://images.unsplash.com/photo-1644340253042-34f3d6b77b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the Tunnel',
      url: 'https://images.unsplash.com/photo-1644267215220-b3b7d2d8fae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    
  ];

}
