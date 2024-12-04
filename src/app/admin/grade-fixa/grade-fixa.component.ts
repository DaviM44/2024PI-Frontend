import { Component, OnInit } from '@angular/core';
import { GradeFixaService } from '../../serv/admin/grade-fixa.service'; // Certifique-se de ajustar o caminho do serviço
import { Schedule, Teacher, Subject, Room, Time, Course } from '../../grade-fixa.types'; // Criação dos tipos

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
  rooms: Room[] = [];
  courses: Course[] = [];
  newSchedule: Partial<Schedule> = {};

  constructor(private gradeFixaService: GradeFixaService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.gradeFixaService.getSchedules().subscribe((data) => (this.schedules = data));
    this.gradeFixaService.getTeachers().subscribe((data) => (this.teachers = data));
    this.gradeFixaService.getSubjects().subscribe((data) => (this.subjects = data));
    this.gradeFixaService.getTimes().subscribe((data) => (this.times = data));
    this.gradeFixaService.getRooms().subscribe((data) => (this.rooms = data));
    this.gradeFixaService.getCourses().subscribe((data) => (this.courses = data));
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
