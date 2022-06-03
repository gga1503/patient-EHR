import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  root = 'http://localhost:3000/'

  constructor(private http: HttpClient) {
  }

  get(destination: String): Observable<any> {
    return this.http.get<any>(this.root + destination)
  }

  post(target: string, data: any): Observable<any> {
    return this.http.post<any>(this.root + target, data);
  }
}
