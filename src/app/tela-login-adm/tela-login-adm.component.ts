import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthaService } from '../autha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login-adm',
  templateUrl: './tela-login-adm.component.html',
  styleUrls: ['./tela-login-adm.component.css']
})
export class TelaLoginAdmComponent {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(private fb: FormBuilder, private authaService: AuthaService, private router: Router) {
    this.loginForm = this.fb.group({
      adminEmail: ['', [Validators.required, Validators.email]], // Alterado para adminEmail
      adminPassword: ['', Validators.required] // Alterado para adminPassword
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { adminEmail, adminPassword } = this.loginForm.value;
      this.authaService.login(adminEmail, adminPassword).subscribe({
        next: (response) => {
          // Aqui você pode tratar a resposta da autenticação
          this.router.navigate(['/tela-inicial-adm']); // Redirecionar após login bem-sucedido
        },
        error: (err) => {
          this.loginError = true; // Mostrar erro se a autenticação falhar
          console.error(err);
        }
      });
    }
  }
}
