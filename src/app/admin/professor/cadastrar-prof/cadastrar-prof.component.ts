import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfessoresService } from '../../../serv/admin/professores.service'; // Importar o serviço correto

@Component({
  selector: 'app-cadastrar-prof',
  templateUrl: './cadastrar-prof.component.html',
  styleUrls: ['./cadastrar-prof.component.css']
})
export class CadastrarProfComponent implements OnInit {
  registerForm!: FormGroup;
  registerError: boolean = false;
  registerSuccess: boolean = false;

  constructor(private formBuilder: FormBuilder, private professoresService: ProfessoresService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-zÀ-ÿ\\s]+$')]], // Nome: letras e espaços apenas
      emailI: ['', [Validators.required, Validators.email]], // Email institucional: obrigatório e formato válido
      senha: ['', [Validators.required, Validators.minLength(6)]], // Senha: mínimo 6 caracteres
      emailP: ['', [Validators.email]], // Email pessoal: formato válido (opcional)
      tel: ['', [Validators.required, Validators.pattern('^[0-9]+$')]], // Telefone: números apenas
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerError = true;
      this.registerForm.markAllAsTouched(); // Marca todos os campos como tocados para exibir os erros
      return;
    }

    this.professoresService.registerProfessor(this.registerForm.value).subscribe(
      response => {
        console.log('Form submitted successfully', response);
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
