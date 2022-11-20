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
  clients: Array<Client> = [];

  constructor(private http: HttpClient) { 
    super()
  }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl+this.apiEnd);
  }

  post(client: Client): number {
    client.id = this.clients.length + 1;
    this.clients.push(client);
    return client.id;
  }

  // getAll(): Array<Client> {
  //   return this.clients;
  // }

  get(id: number): Client {
    return this.clients.find(client => client.id == id) as Client;
  }

  postLogin(): string {
    return 'Login ok';
  }

  getNbClients(): number {
    return this.clients.length;
  }
}
