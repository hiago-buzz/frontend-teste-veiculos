import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  readonly baseUrl: string = environment.BASE_URL;
  readonly format: string = 'json';

  public get(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/1/carros/${endpoint}.${this.format}`);
  }
}