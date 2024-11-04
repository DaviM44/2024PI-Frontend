import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Aula {
  materia: string;
  aula: string;
  horario: string;
}

interface Horarios {
  curso: string;
  semestre: string;
  dias: {
    [key: string]: Aula[];
  };
}

interface Cursos {
  cursos: Horarios[];
}

@Component({
  selector: 'app-grade-horario',
  templateUrl: './grade-horario.component.html',
  styleUrls: ['./grade-horario.component.css']
})
export class GradeHorarioComponent implements OnInit {
  cursos: Horarios[] = [];
  horarios: Horarios | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    this.http.get<Horarios[]>('/assets/cursos.json').subscribe(data => {
      this.cursos = data;
      this.horarios = this.cursos[0]; // Seleciona o primeiro curso por padrão
    });
  }

  selecionarCurso(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const index = target.selectedIndex;
    this.horarios = this.cursos[index]; // Atualiza a tabela com o curso selecionado
  }

  getMateriaParaHorario(dia: string, horario: string): string {
    if (!this.horarios || !this.horarios.dias[dia]) return '';

    const aulas = this.horarios.dias[dia];
    const aula = aulas.find(a => a.horario === horario);
    return aula ? aula.materia : ''; // Retorna a matéria ou uma string vazia
  }
}
