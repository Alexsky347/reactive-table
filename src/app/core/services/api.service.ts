import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { ToastService } from '../../shared/utils/toast.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API = 'http://localhost:3000';
  private logger = inject(NGXLogger);
  http = inject(HttpClient);
  toast = inject(ToastService);

  constructor() {}

  /**
   * @description Find all
   * @param uri
   * @returns
   */
  findAll<T>(uri: string) {
    return this.http
      .get<T>(`${this.API + uri}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * @description Create
   * @param body
   * @param uri
   * @returns
   */
  create<T>(body: T, uri: string) {
    return this.http
      .post<T>(`${this.API + uri}`, body)
      .pipe(catchError(this.handleError));
  }

  /**
   * @description Create
   * @param body
   * @param uri
   * @returns
   */
  edit<T>(body: T, uri: string) {
    return this.http
      .put<T>(`${this.API + uri}`, body)
      .pipe(catchError(this.handleError));
  }

  /**
   * @description Delete
   * @param body
   * @param uri
   * @returns
   */
  delete<T>(id: T, uri: string) {
    return this.http
      .delete<T>(`${this.API + uri}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError = (error: HttpErrorResponse) => {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      this.logger.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      this.logger.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => {
      this.toast.error('Something bad happened; please try again later.');
      new Error('Something bad happened; please try again later.');
    });
  };
}
