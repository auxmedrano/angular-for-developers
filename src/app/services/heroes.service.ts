import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../dto/hero.dto';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
}
