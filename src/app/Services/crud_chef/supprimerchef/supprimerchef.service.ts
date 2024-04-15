import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupprimerchefService {
  private url = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  supprimerChef(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}admin/supprimeruser/${id}`);
  }
}
