import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-prof',
  templateUrl: './cadastrar-prof.component.html',
  styleUrls: ['./cadastrar-prof.component.css']
})
export class CadastrarProfComponent implements OnInit {
  registerForm!: FormGroup; // Usando o operador de afirmação não nulo
  registerError: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      emailP: ['', [Validators.required, Validators.email]],
      emailI: ['', [Validators.required, Validators.email]],
      nome: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerError = true;
      return;
    }

    // Handle the form submission logic here
    console.log('Form submitted successfully', this.registerForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    // Reset the form
    this.registerForm.reset();
    this.registerError = false;
  }

  onReset(): void {
    this.registerForm.reset();
    this.registerError = false;
  }
}
