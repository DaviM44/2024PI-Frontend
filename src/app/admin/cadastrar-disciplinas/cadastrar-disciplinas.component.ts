// cadastrar-disciplinas.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdisciplinaService } from '../../serv/admin/cdisciplina.service';

@Component({
  selector: 'app-cadastrar-disciplinas',
  templateUrl: './cadastrar-disciplinas.component.html',
  styleUrls: ['./cadastrar-disciplinas.component.css']
})
export class CadastrarDisciplinasComponent implements OnInit {
  registerForm!: FormGroup;
  registerError: boolean = false;
  registerSuccess: boolean = false;
  professores: any[] = [];

  constructor(private formBuilder: FormBuilder, private cdisciplinaService: CdisciplinaService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      disciplineName: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      description: ['', Validators.required],
      professor: ['', Validators.required],
      objective: ['', Validators.required],
      syllabus: ['', Validators.required]
    });

    this.loadProfessores();
  }

  private loadProfessores(): void {
    this.cdisciplinaService.getProfessores().subscribe(
      data => {
        this.professores = data || []; // Verifique se a estrutura do JSON está correta
      },
      error => {
        console.error('Erro ao buscar professores', error);
      }
    );
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerError = true;
      return;
    }

    this.cdisciplinaService.registerDisciplina(this.registerForm.value).subscribe(
      response => {
        console.log('Formulário enviado com sucesso', response);
        this.registerSuccess = true;
        this.registerForm.reset();
        this.registerError = false;
        setTimeout(() => this.registerSuccess = false, 5000);
      },
      error => {
        console.error('Erro ao enviar o formulário', error);
        this.registerError = true;
      }
    );
  }

  onReset(): void {
    this.registerForm.reset();
    this.registerError = false;
    this.registerSuccess = false;
  }
}
