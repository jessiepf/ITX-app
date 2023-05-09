import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PersonalInfo } from '../models/PersonalInfo';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonalServiceService {

  apiURL = 'http://localhost:5173/PersonalInformation';
  constructor(private httpClient: HttpClient) { }

  // HttpClient API get() method => Fetch employees list
  getAllPersonalInformation(): Observable<PersonalInfo[]> {
    return this.httpClient
      .get<PersonalInfo[]>(this.apiURL + '?take=20&skip=0')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch PersonalInfo
  getPersonalInformationById(id: number): Observable<PersonalInfo> {
    return this.httpClient
      .get<PersonalInfo>(this.apiURL + '/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create PersonalInfo
  createPersonalInformation(personalInfo: PersonalInfo): Observable<PersonalInfo> {
    console.log(personalInfo)
    return this.httpClient
      .post<PersonalInfo>(
        this.apiURL,
        personalInfo,
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API put() method => Update PersonalInfo
  updatePersonalInformation(id: number, personalInfo: PersonalInfo): Observable<PersonalInfo> {

    return this.httpClient
      .put<PersonalInfo>(
        this.apiURL + '/' + id,
        personalInfo
      )
      .pipe(retry(1), catchError(this.handleError));
  }

   // HttpClient API put() method => delete PersonalInfo
   deletePersonalInformation(id: number): Observable<PersonalInfo> {
    
    return this.httpClient
      .delete<PersonalInfo>(
        this.apiURL + '?id=' + id,
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
