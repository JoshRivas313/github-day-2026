import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { EventConfig } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly configUrl = 'assets/config/event.json';

  constructor(private http: HttpClient) {}

  getEvent(): Observable<EventConfig> {
    return this.http.get<EventConfig>(this.configUrl).pipe(
      catchError(err => throwError(() => new Error('No se pudo cargar event.json: ' + err.message)))
    );
  }
}
