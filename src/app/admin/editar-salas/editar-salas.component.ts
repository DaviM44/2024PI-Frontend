import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';  // Importa o Router
import { CsalasService } from '../../serv/admin/csalas.service'; // Supondo que o serviço se chama CsalaService

@Component({
  selector: 'app-editar-salas',
  templateUrl: './editar-salas.component.html',
  styleUrls: ['./editar-salas.component.css']  // Corrigido para 'styleUrls'
})
export class EditarSalasComponent implements OnInit {
  salaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,  // Injeta o Router
    private csalasService: CsalasService  // Serviço para Sala
  ) {
    this.salaForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      type: [],
      capacity:[],
      floor: [],
      resources: [],
      availability: [],
    });
  }

  ngOnInit(): void {
    this.carregarSala();
  }

  carregarSala() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.csalasService.getSalaById(id).subscribe(
        data => {
          this.salaForm.patchValue(data);
        },
        error => {
          console.error('Erro ao carregar sala: ', error);
        }
      );
    }
  }

  salvar() {
    if (this.salaForm.valid) {
      const salaAtualizada = this.salaForm.getRawValue();
      this.csalasService.updateSala(salaAtualizada).subscribe(
        () => {
          this.router.navigate(['admin/gerenciar_sala']);  // Redireciona após salvar
        },
        error => {
          console.error('Erro ao atualizar sala: ', error);
        }
      );
    }
  }
}
