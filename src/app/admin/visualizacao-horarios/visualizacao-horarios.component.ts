import { Component } from '@angular/core';

interface Slot {
  aula: string;
  isInterval: boolean;
  disciplina?: string;
  professor?: string;
}

@Component({
  selector: 'app-visualizacao-horarios',
  templateUrl: './visualizacao-horarios.component.html',
  styleUrls: ['./visualizacao-horarios.component.css']
})
export class VisualizacaoHorariosComponent {
  diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  aulas = ['1ª Aula', '2ª Aula', '3ª Aula', '4ª Aula', '5ª Aula', '6ª Aula'];

  selectedAndar: string = 'terreo';
  selectedSala: string = 'Sala 01';
  selectedLaboratorio: string = 'Laboratório 01';

  salasAula = ['Sala 01', 'Sala 02', 'Sala 03', 'Sala 04', 'Sala 05', 'Sala 06', 'Sala 07', 'Sala 08', 'Sala 09', 'Sala 10', 'Sala 11', 'Sala 12'];
  laboratorios = ['Laboratório 01', 'Laboratório 02', 'Laboratório 03', 'Laboratório 04', 'Laboratório 05', 'Laboratório 06', 'Laboratório 07', 'Laboratório 08'];

  data = {
    'Segunda': [
      { aula: '1ª Aula', disciplina: 'Matemática', professor: 'Prof. Silva' },
      { aula: '2ª Aula', disciplina: 'Português', professor: 'Prof. Souza' }
    ],
    'Terça': [
      { aula: '1ª Aula', disciplina: 'História', professor: 'Prof. Lima' },
      { aula: '2ª Aula', disciplina: 'Geografia', professor: 'Prof. Santos' }
    ],
    // Adicione outros dias da semana conforme necessário
  };

  getSlots(): Slot[] {
    const slots: Slot[] = [];
    for (let i = 0; i < this.aulas.length; i++) {
      slots.push({ aula: this.aulas[i], isInterval: false });
      if ((i + 1) % 2 === 0 && i !== this.aulas.length - 1) {
        slots.push({ aula: '', isInterval: true });
      }
    }
    return slots;
  }

  getSlotClass(dia: string, aula: string): string {
    const slot = this.data[dia]?.find(slot => slot.aula === aula);
    return slot ? 'reservado' : 'vaga';
  }

  selectAndar(andar: string) {
    this.selectedAndar = andar;
  }
}
