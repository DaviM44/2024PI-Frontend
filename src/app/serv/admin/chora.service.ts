import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChoraService {
  private apiUrl = 'https://projeto-integrador-1v4i.onrender.com/time/';

  constructor(private http: HttpClient) {}

  // Adiciona o token no cabeçalho
  private getAuthHeaders(): HttpHeaders {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJqYXZhZ2FzIiwiZXhwIjoxNzMzNDUzMzU0LCJzdWIiOiIyIiwicm9sZXMiOlsiQURNSU4iXX0.lwMyQ-ie3_TQofzyT1upJFmmpv--HUnEMv5EYOSZTjk'; // Substitua pelo token válido
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  // Obtém todos os horários
  getTimes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getAuthHeaders() });
  }

  // Exclui um horário pelo ID
deleteTime(timeId: number): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}${timeId}`, {
    headers: this.getAuthHeaders(),
  });
}


  // Adiciona um novo horário
  addTime(newTime: { startTime: string; endTime: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, newTime, {
      headers: this.getAuthHeaders(),
    });
  }
}
