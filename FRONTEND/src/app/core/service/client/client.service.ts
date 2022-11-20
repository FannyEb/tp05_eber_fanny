import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../model/client';
import { ServiceBase } from '../service-base';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ServiceBase{

  apiEnd : string = "client";

  constructor(private http: HttpClient) { 
    super()
  }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl+this.apiEnd);
  }

  get(id: number): Observable<Client> {
    return this.http.get<Client>(this.apiUrl+this.apiEnd+"/"+id);
  }

  post(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiUrl+this.apiEnd, client);
  }

  put(client: Client): Observable<Client> {
    return this.http.put<Client>(this.apiUrl+this.apiEnd, client);
  }

  delete(id: number): Observable<Client> {
    return this.http.delete<Client>(this.apiUrl+this.apiEnd+"/"+id);
  }
}
