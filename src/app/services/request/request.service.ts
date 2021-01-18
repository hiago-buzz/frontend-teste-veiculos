import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private baseUrl: string = `http://www.fipeapi.appspot.com/api/1/`,
    private http: HttpClient,
    private format: string = '.json'
  ) { }

  public getter(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url + this.format);
  }
}