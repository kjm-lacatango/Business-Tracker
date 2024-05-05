import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public get<T>(uri: string, options = {}): Observable<ApiResponse<T>> {
    return this.http.get('http://localhost:3001' + uri, options) as Observable<ApiResponse<T>>;
  }

  public post<T, U>(uri: string, body: T, options = {}): Observable<ApiResponse<U>> {
    return this.http.post("http://localhost:3001" + uri, body, options) as Observable<ApiResponse<U>>;
  }

  public put<T, U>(uri: string, body: U, options = {}): Observable<ApiResponse<U>> {
    return this.http.put("http://localhost:3001" + uri, body, options) as Observable<ApiResponse<U>>;
  }

  public delete<U>(uri: string, options = {}): Observable<ApiResponse<U>> {
    return this.http.delete("http://localhost:3001" + uri, options) as Observable<ApiResponse<U>>;
  }
}
