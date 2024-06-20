import { ProfessoresService } from '../../serv/admin/professores.service'; // Importar o serviço correto
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-professor',
  templateUrl: './gerenciar-professor.component.html',
  styleUrl: './gerenciar-professor.component.css'
})
export class GerenciarProfessorComponent implements OnInit {
  professores: any[] = [];

  constructor(private professoresService: ProfessoresService) { }

  ngOnInit(): void {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professoresService.getProfessores().subscribe(
      data => {
        this.professores = data;
      },
      error => {
        console.error('Erro ao carregar professores: ', error);
      }
    );
  }
}
