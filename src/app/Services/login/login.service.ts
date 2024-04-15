import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:8080/auth/"

  ajouterUser(user:User):Observable<any>{

    return   this.http.post(this.url+"login",user)
  }
}
