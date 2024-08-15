import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CcursoService } from '../../serv/admin/ccurso.service';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrls: ['./cadastrar-curso.component.css']
})
export class CadastrarCursoComponent implements OnInit {
  registerForm!: FormGroup;
  registerError: boolean = false;
  registerSuccess: boolean = false;
  router: any;

  constructor(private formBuilder: FormBuilder, private ccursoService: CcursoService) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nameCourse: ['', Validators.required],
      semester: ['', Validators.required],
      period: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerError = true;
      return;
    }

    this.ccursoService.registerCurso(this.registerForm.value).subscribe(
      response => {
        console.log('Form submitted successfully', response);
        this.registerSuccess = true;
        this.router.navigate(['/admin/gerenciar_curso']);
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
