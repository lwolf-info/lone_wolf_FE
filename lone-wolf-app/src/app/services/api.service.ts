import { Injectable } from '@angular/core';
import { BASE_URL } from '../common/common';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: any): any {
    return (error: any): Observable<T> => {
      console.log(`ERROR LOADING POSTS, CHECK ${BASE_URL} and https://lone-wolf-cms.herokuapp.com/admin`);

      return of(result as T);
    };
  }

  public getList<T>(url: string, defaultValue: any): Observable<T> {
    return this.http.get<T>(`${BASE_URL}${url}`)
      .pipe(
        catchError(this.handleError<T>(url, defaultValue))
      );
  }
}
