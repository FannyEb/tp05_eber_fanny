import { HttpHeaders, HTTP_INTERCEPTORS } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ApiHttpInterceptor } from "./api-http-interceptor";

export class ServiceBase {
    apiUrl: string = environment.api;
    httpOptions = {
    };
    constructor() {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        }

    }
}