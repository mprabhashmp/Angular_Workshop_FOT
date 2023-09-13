import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8080/api/students/add'; 

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}`;// Define your registration API endpoint
    return this.http.post(url, user);
  }
}
