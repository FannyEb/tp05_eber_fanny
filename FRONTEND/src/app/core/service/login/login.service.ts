import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiHttpInterceptor } from '../api-http-interceptor';
import { ServiceBase } from '../service-base';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ServiceBase{

  constructor(private http: HttpClient, public override apiInterceptor: ApiHttpInterceptor) { 
    super(apiInterceptor)
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl+"login", {login: login, password: password}, this.httpOptions);
  }
}
