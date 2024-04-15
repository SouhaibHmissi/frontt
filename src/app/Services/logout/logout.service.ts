import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private httpClient:HttpClient){  }

url="http://localhost:8080/logout"


userlogout(personnel: User): Observable<User> {
  return this.httpClient.post<User>(`${this.url}`, personnel); 
}

}



