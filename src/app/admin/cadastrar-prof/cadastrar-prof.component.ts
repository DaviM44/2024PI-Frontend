import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfessoresService } from '../../serv/admin/professores.service'; // Importar o serviço correto

@Component({
  selector: 'app-cadastrar-prof',
  templateUrl: './cadastrar-prof.component.html',
  styleUrls: ['./cadastrar-prof.component.css']
})
export class CadastrarProfComponent implements OnInit {
  registerForm!: FormGroup;
  registerError: boolean = false;
  registerSuccess: boolean = false; // Nova variável para controlar a mensagem de sucesso

  constructor(private formBuilder: FormBuilder, private professoresService: ProfessoresService) {} // Injeção do serviço

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [''],
      emailI: [''],
      senha: [''],
      emailP: [''],
      tel: [''],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerError = true;
      return;
    }

    // Usar o serviço para enviar os dados para o JSON server
    this.professoresService.registerProfessor(this.registerForm.value).subscribe(
      response => {
        console.log('Form submitted successfully', response);
        this.registerSuccess = true; // Exibir mensagem de sucesso
        this.registerForm.reset();
        this.registerError = false;
        setTimeout(() => this.registerSuccess = false, 5000); // Ocultar a mensagem após 5 segundos
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
