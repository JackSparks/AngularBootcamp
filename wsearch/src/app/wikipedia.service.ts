import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  public search(term: string) {
    // return 'I am wikipedia search results';
    return this.http.get('https://en.wikipedia.org/w/api.php', {

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
    });
  }
}
