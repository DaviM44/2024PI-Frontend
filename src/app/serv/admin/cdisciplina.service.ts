
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdisciplinaService {
  private apiUrl = 'http://localhost:3000/disciplinas';

  constructor(private http: HttpClient) { }

  // Método para registrar um novo professor
  registerDisciplina(disciplinaData: any): Observable<any> {
    return this.http.post(this.apiUrl, disciplinaData);
  }
}
