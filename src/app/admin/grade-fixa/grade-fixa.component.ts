import { Component, OnInit } from '@angular/core';
import { GradeFixaService } from '../../serv/admin/grade-fixa.service'; // Certifique-se de ajustar o caminho do serviço
import { Schedule, Teacher, Subject, Room, Time, Course, WeekDay } from '../../grade-fixa.types'; // Importando o tipo WeekDay

@Component({
  selector: 'app-grade-fixa',
  templateUrl: './grade-fixa.component.html',
  styleUrls: ['./grade-fixa.component.css']
})
export class GradeFixaComponent implements OnInit {
  schedules: Schedule[] = [];
  teachers: Teacher[] = [];
  subjects: Subject[] = [];
  times: Time[] = [];
  weekDay: WeekDay[] = [];  
  rooms: Room[] = [];
  courses: Course[] = [];
  newSchedule: Partial<Schedule> = {};

  constructor(private gradeFixaService: GradeFixaService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.gradeFixaService.getSchedules().subscribe((data) => {
      console.log('Schedules recebidos:', data);  // Verifique a estrutura de dados
      this.schedules = data;
    });
    this.gradeFixaService.getTimes().subscribe((data) => {
      console.log('Times recebidos:', data);
      this.times = data;
    });
  }
  

  
  createSchedule(): void {
    console.log('Tentando criar agendamento com os seguintes dados:', this.newSchedule);

    // Enviando o novo agendamento com o campo weekDay
    this.gradeFixaService.createSchedule(this.newSchedule).subscribe(
      () => {
        console.log('Agendamento criado com sucesso!');
        this.fetchData();
        this.newSchedule = {}; // Limpar o formulário
      },
      (error) => {
        console.error('Erro ao criar agendamento:', error);
      }
    );
  }

  deleteSchedule(id: number): void {
    this.gradeFixaService.deleteSchedule(id).subscribe(() => this.fetchData());
  }
  
}
