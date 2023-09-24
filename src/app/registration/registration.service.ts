import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://api.encode99.com.lk/createdata'; 

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}`;// Define your registration API endpoint
    return this.http.post(url, user);
  }
}
