import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {


  private apiUrl = 'https://pixabay.com/api/?key=29488159-1880c8e57abac8402e021f526';

  constructor(private httpClient: HttpClient) {};

  getPics() {
    return this.httpClient.get(this.apiUrl);
  }

  searchImages (query: string) {
    const url = this.apiUrl + `&q=${query}`
    return this.httpClient.get(url);
  }
}
