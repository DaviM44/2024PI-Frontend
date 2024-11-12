import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsalasService {
  private apiUrl = 'https://projeto-integrador-1v4i.onrender.com/rooms/';

  constructor(private http: HttpClient) { }

  // Método para registrar uma nova sala com o Bearer Token
  registerSala(salaData: any): Observable<any> {
    const token = localStorage.getItem('authToken'); // Obtém o token do localStorage
    if (!token) {
      throw new Error('Token de autenticação não encontrado.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Adiciona o token no cabeçalho
    });

    return this.http.post(this.apiUrl, salaData, { headers });
  }

  // Outros métodos (getSalas, updateSala, etc.)
  getSalas(): Observable<any[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  getSalaById(id: string): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }

  updateSala(sala: any): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<any>(`${this.apiUrl}/${sala.id}`, sala, { headers });
  }

  deleteSala(id: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${this.apiUrl}/${id}`, { headers });
  }
}
