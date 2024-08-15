import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  // Importa o Router
import { CcursoService } from '../../serv/admin/ccurso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrl: './editar-curso.component.css'
})
export class EditarCursoComponent implements OnInit {
  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,  // Injeta o Router
    private ccursoService: CcursoService
  ) {
    this.cursoForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      nameCourse: ['', Validators.required],
      semester: ['', Validators.required],
      period: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carregarCurso();
  }

  carregarCurso() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ccursoService.getCursoById(id).subscribe(
        data => {
          this.cursoForm.patchValue(data);
        },
        error => {
          console.error('Erro ao carregar disciplina: ', error);
        }
      );
    }
  }

  salvar() {
    if (this.cursoForm.valid) {
      const cursoAtualizada = this.cursoForm.getRawValue();
      this.ccursoService.updateCurso(cursoAtualizada).subscribe(
        () => {
          alert('Disciplina atualizada com sucesso!');
          this.router.navigate(['/admin/gerenciar_curso']);  // Redireciona após salvar
        },
        error => {
          console.error('Erro ao atualizar disciplina: ', error);
        }
      );
    }
  }
  
}