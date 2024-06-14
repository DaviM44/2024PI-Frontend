

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CcursoService {
  private apiUrl = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  // Método para registrar um novo professor
  registerCurso(cursoData: any): Observable<any> {
    return this.http.post(this.apiUrl, cursoData);
  }
}
