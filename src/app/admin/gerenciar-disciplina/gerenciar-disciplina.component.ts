import { Component, OnInit } from '@angular/core';
import { CdisciplinaService } from '../../serv/admin/cdisciplina.service';

@Component({
  selector: 'app-gerenciar-disciplina',
  templateUrl: './gerenciar-disciplina.component.html',
  styleUrls: ['./gerenciar-disciplina.component.css']
})
export class GerenciarDisciplinaComponent implements OnInit {
  disciplinas: any[] = [];

  constructor(private cdisciplinaService: CdisciplinaService) { }

  ngOnInit(): void {
    this.carregarDisciplinas();
  }

  carregarDisciplinas() {
    this.cdisciplinaService.getDisciplinas().subscribe(
      data => {
        this.disciplinas = data;
      },
      error => {
        console.error('Erro ao carregar disciplinas: ', error);
      }
    );
  }
}
