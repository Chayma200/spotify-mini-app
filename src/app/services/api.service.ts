import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, timeout } from 'rxjs';
import { Injectable } from '@angular/core';
import { getStore } from '@ngneat/elf';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  client_id = '9b65bc6ac39e41f285a19de19d0fda55';
  redirect_uri = 'http://localhost:4200';
  scope = 'user-read-private user-read-email';
  userToken = '';

  constructor(private http: HttpClient) {
    const authStore = getStore('auth');
    authStore?.subscribe((state: any) => {
      console.log('state.user', state.user);
      this.userToken =
        state?.user?.userToken || localStorage.getItem('spotifyUserToken');
    });
  }

  getAllArtists(searchQuery: string): Observable<any> {
    let url = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`;
    console.log('token', this.userToken);
    return this.http
      .get<any>(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.userToken}`,
        },
      })
      .pipe(timeout(30000))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
}
