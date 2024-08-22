import { Component, OnInit } from '@angular/core';
import { HorariosService } from '../../serv/horarios.service';


@Component({
  selector: 'app-visualizacao-horarios',
  templateUrl: './visualizacao-horarios.component.html',
  styleUrls: ['./visualizacao-horarios.component.css']
})
export class VisualizacaoHorariosComponent implements OnInit {
  diasSemana: string[] = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  horarios: any = {}; // Armazena os dados do JSON
  selectedTurma: string = 'turma1'; // Turma selecionada

  constructor(private horariosService: HorariosService) {}

  ngOnInit(): void {
    this.horariosService.getHorarios().subscribe(data => {
      this.horarios = data;
    });
  }

  getAulas(dia: string) {
    if (this.horarios && this.horarios[this.selectedTurma]) {
      return this.horarios[this.selectedTurma][dia.toLowerCase()];
    }
    return [];
  }

  selectTurma(turma: string) {
    this.selectedTurma = turma;
  }
}
