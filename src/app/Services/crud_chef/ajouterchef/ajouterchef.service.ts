import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../Models/User';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjouterchefService {
  private url="http://localhost:8080/"


  constructor(private httpClient:HttpClient) { }
  ajouterchef(chef: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}admin/ajouteruser`, chef)

  }

  }


