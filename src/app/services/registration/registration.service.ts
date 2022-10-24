import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  url = environment.baseUrl

  register(formData: any) {
    console.log('Register function');
    return this.http.post(this.url + "/students", formData);
  }

  getList() {

    return this.http.get(this.url + "/students")
  }
}
