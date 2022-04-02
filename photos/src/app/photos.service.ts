import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//if we don't use an interface, photo-show.component.ts will have an error trying to figure out what 'urls' object is.
interface UnsplashResponse{
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  //returns an observable
  getPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random',{
      headers: {
        Authorization: 'Client-ID HBEg0HCaX965XfZnsz-A94s-i3GWj7eqkkHhhtP-q7s'
      }
    })
  }
}
