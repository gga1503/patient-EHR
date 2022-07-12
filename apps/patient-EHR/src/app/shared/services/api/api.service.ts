import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs';
import Server from './url.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  root = Server.https
  // root = server.http

  constructor(
    private http: HttpClient,
    // private server: Server
  ) {
  }

  get(destination: String, queries?: any): Observable<any> {
    if (queries) {
      const params = new HttpParams({fromObject: queries})

      return this.http.get<any>(this.root + destination, {params: params})
    }

    return this.http.get<any>(this.root + destination)
  }

  post(target: string, data: any): Observable<any> {
    return this.http.post<any>(this.root + target, data);
  }
}
