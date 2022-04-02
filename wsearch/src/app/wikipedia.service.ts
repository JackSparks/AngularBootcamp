import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

// interface Car {
//   year: number;
//   color: string;
//   running: boolean;
//   make: {
//     name: string;
//     dateCreated: number;
//   }
// }

// const observable = new Observable<Car>((observer) => {
//   observer.next({
//     year: 2000,
//     color: 'red', 
//     running: true,
//     make: {
//       name: 'Chevy',
//       dateCreated: 1950
//     }
//   }); 
// }).pipe(
//   pluck('make', 'dateCreated')
// );

// observable.subscribe(value => {
//   console.log(value);
// });



@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  public search(term: string) {
    // return 'I am wikipedia search results';
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {

    //https://en.wikipedia.org/w/api.php?
    // action=query&
    // format=json&
    // list=search&
    // utf8=1&
    // srsearch=space
    
      //anything added here gets added as parameters into the url  
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search')
    );
  }
}
