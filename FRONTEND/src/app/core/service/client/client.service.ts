import { Injectable } from '@angular/core';
import { Client } from '../../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Array<Client> = [];

  post(client: Client): number {
    client.id = this.clients.length + 1;
    this.clients.push(client);
    return client.id;
  }

  getAll(): Array<Client> {
    return this.clients;
  }

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
