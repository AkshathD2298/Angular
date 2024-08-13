import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  private baseUrl = 'https://api.jikan.moe/v4/anime'; // Jikan API base URL

  constructor(private http: HttpClient) {}

  getAnimeList(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getAnimeDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
