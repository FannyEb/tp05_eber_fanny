import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../../model/product';
import { ApiHttpInterceptor } from '../api-http-interceptor';
import { ServiceBase } from '../service-base';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService extends ServiceBase {

  constructor(private http: HttpClient, public override apiInterceptor: ApiHttpInterceptor) { 
    super(apiInterceptor)
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl+"product", this.httpOptions);
  }

}
