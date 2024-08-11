import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  // Importa o Router
import { ProfessoresService } from '../../serv/admin/professores.service';

@Component({
  selector: 'app-editar-professor',
  templateUrl: './editar-professor.component.html',
  styleUrl: './editar-professor.component.css'
})
export class EditarProfessorComponent implements OnInit {
  professorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,  // Injeta o Router
    private professoresService: ProfessoresService
  ) {
    this.professorForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      name: [''],
      emailI: [''],
      senha: [''],
      emailP: [''],
      tel: [''],
    });
  }

  ngOnInit(): void {
    this.carregarProfessor();
  }

  carregarProfessor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.professoresService.getProfessorById(id).subscribe(
        data => {
          this.professorForm.patchValue(data);
        },
        error => {
          console.error('Erro ao carregar professor: ', error);
        }
      );
    }
  }

  salvar() {
    if (this.professorForm.valid) {
      const professorAtualizada = this.professorForm.getRawValue();
      this.professoresService.updateProfessor(professorAtualizada).subscribe(
        () => {
          alert('Professor atualizada com sucesso!');
          this.router.navigate(['/admin/gerenciar_professor']);  // Redireciona após salvar
        },
        error => {
          console.error('Erro ao atualizar professor: ', error);
        }
      );
    }
  }
  
}