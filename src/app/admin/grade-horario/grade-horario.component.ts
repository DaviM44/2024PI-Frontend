import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grade-horario',
  templateUrl: './grade-horario.component.html',
  styleUrls: ['./grade-horario.component.css']
})
export class GradeHorarioComponent implements OnInit {
  cursos: any[] = [];
  periodo: any[] = [];
  cursoSelecionado: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.carregarCursos();
  }

  carregarCursos() {
    this.http.get('/assets/cursos.json').subscribe((data: any) => {
      this.cursos = data; // Carrega todos os cursos
      this.cursoSelecionado = this.cursos[0]; // Seleciona o primeiro curso por padrão
      this.periodo = this.cursoSelecionado.dias.segunda; // Pega as aulas da segunda-feira
    });
  }

  onCursoChange() {
    this.periodo = this.cursoSelecionado.dias.segunda; // Atualiza o período quando o curso mudar
  }
}
