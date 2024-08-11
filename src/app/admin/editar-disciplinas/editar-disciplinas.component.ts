import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CdisciplinaService } from '../../serv/admin/cdisciplina.service';

@Component({
  selector: 'app-editar-disciplinas',
  templateUrl: './editar-disciplinas.component.html',
  styleUrl: './editar-disciplinas.component.css'
})
export class EditarDisciplinasComponent implements OnInit {
  professores: any[] = [];
  disciplinaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cdisciplinaService: CdisciplinaService
  ) {
    this.disciplinaForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      disciplineName: [''],
      startTime: [''],
      endTime: [''],
      professor: ['']
    });
  }

  ngOnInit(): void {
    this.carregarDisciplina();
  }

  carregarDisciplina() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cdisciplinaService.getDisciplinaById(id).subscribe(
        data => {
          this.disciplinaForm.patchValue(data);
        },
        error => {
          console.error('Erro ao carregar disciplina: ', error);
        }
      );
    }
  }

  salvar() {
    if (this.disciplinaForm.valid) {
      const disciplinaAtualizada = this.disciplinaForm.getRawValue();
      this.cdisciplinaService.updateDisciplina(disciplinaAtualizada).subscribe(
        () => {
          alert('Disciplina atualizada com sucesso!');
          // Exemplo de redirecionamento
          
        },
        error => {
          console.error('Erro ao atualizar disciplina: ', error);
        }
      );
    }
  }
}