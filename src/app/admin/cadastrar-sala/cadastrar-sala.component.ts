import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-sala',
  templateUrl: './cadastrar-sala.component.html',
  styleUrls: ['./cadastrar-sala.component.css']
})
export class CadastrarSalaComponent implements OnInit {
  registerForm!: FormGroup;
  registerError: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      tipoSala: ['', Validators.required],
      capacidade: ['', [Validators.required, Validators.min(1)]],
      andar: ['', Validators.required],
      recursos: ['', Validators.required],
      disponibilidade: [false, Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerError = true;
      return;
    }

    // Lógica de submissão do formulário
    console.log('Form submitted successfully', this.registerForm.value);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    // Resetar o formulário
    this.registerForm.reset();
    this.registerError = false;
  }

  onReset(): void {
    this.registerForm.reset();
    this.registerError = false;
  }
}
