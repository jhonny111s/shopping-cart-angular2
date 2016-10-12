import { Injectable } from '@angular/core';
//import { Hero } from './hero';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductService {

  private productUrl = 'https://www.googleapis.com/books/v1/volumes?q=floresdelmal&filter=full';  // URL to web api

  constructor(
    private http: Http
  ) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getProducts(): Promise<any> {
    return this.http.get(this.productUrl)
      .toPromise()
      .then(response =>
        response.json())
      .catch(this.handleError);
  }



}
