import { HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

export class ServiceBase {
    apiUrl: string = environment.api;
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
}