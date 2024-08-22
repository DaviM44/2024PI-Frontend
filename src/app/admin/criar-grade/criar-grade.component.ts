import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { HorariosService } from '../../serv/horarios.service';

@Component({
  selector: 'app-criar-grade',
  templateUrl: './criar-grade.component.html',
  styleUrls: ['./criar-grade.component.css']
})
export class CriarGradeComponent implements OnInit {
  form: FormGroup;
  diasSemana = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  professores: any[] = [];
  disciplinas: any[] = [];
  cursos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private horariosService: HorariosService
  ) {
    this.form = this.fb.group({
      curso: [''],
      cursoId: [{value: '', disabled: true}],
      dia: [''],
      aulas: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.horariosService.getProfessores().subscribe(data => {
      this.professores = data;
    });

    this.horariosService.getDisciplinas().subscribe(data => {
      this.disciplinas = data;
    });

    this.horariosService.getCursos().subscribe(data => {
      this.cursos = data;
    });

    for (let i = 0; i < 6; i++) {
      this.aulas.push(this.fb.group({
        materia: [''],
        professor: ['']
      }));
    }
  }

  get aulas(): FormArray {
    return this.form.get('aulas') as FormArray;
  }

  onCursoChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCursoId = selectElement.value;
    const selectedCurso = this.cursos.find(curso => curso.id === selectedCursoId);
    if (selectedCurso) {
      this.form.patchValue({
        cursoId: selectedCurso.id
      });
    }
  }

  onSubmit(): void {
    const turma = this.form.value;
    this.horariosService.adicionarTurma(turma).subscribe(
      response => {
        console.log('Turma adicionada com sucesso:', response);
      },
      error => {
        console.error('Erro ao adicionar turma:', error);
      }
    );
  }
}
