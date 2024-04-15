import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Notification } from '../../Models/Notification';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  url="http://localhost:8080/"
  constructor(private httpClient:HttpClient) { }

  affichernotifications():Observable<Notification[]>{
    return this.httpClient.get<Notification[]>(this.url+"employe/affichernotification")
  }
}
