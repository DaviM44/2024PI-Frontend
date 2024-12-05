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
  courses: Course[] = []; // Lista de cursos
  newSchedule: Partial<Schedule> = {};
  
  // Variável para armazenar o termo de pesquisa (agora usado para armazenar o curso selecionado)
  searchTerm: string = '';

  constructor(private gradeFixaService: GradeFixaService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.gradeFixaService.getSchedules().subscribe((data) => {
      console.log('Schedules recebidos:', data);
      this.schedules = data;
    });
    this.gradeFixaService.getTimes().subscribe((data) => {
      console.log('Times recebidos:', data);
      this.times = data;
    });
    this.gradeFixaService.getCourses().subscribe((data) => {
      console.log('Cursos recebidos:', data);
      this.courses = data; // Preenche a lista de cursos
    });
  }

  // Função para limpar o campo de pesquisa
  clearSearch(): void {
    this.searchTerm = '';
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