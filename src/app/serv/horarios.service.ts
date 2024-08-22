import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private apiUrl = 'http://localhost:3000/turmas'; // URL do JSON
  private professoresUrl = 'http://localhost:3000/professores'; // Endpoint para buscar professores
  private disciplinasUrl = 'http://localhost:3000/disciplinas'; // Endpoint para buscar disciplinas
  private cursoUrl = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  getHorarios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  
  adicionarTurma(turma: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, turma);
  }

  getHorariosByDia(dia: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?dia=${dia}`);
  }

  salvarHorarios(dados: any): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }

  getProfessores(): Observable<any> {
    return this.http.get<any[]>(this.professoresUrl);
  }

  getDisciplinas(): Observable<any> {
    return this.http.get<any[]>(this.disciplinasUrl);
  }

  
  getCursos(): Observable<any> {
    return this.http.get<any[]>(this.cursoUrl);
  }

}
