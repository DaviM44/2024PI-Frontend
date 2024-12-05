import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GhorarioService } from '../../serv/admin/ghorario.service';

@Component({
  selector: 'app-cadastro-horario-fixo',
  templateUrl: './cadastro-horario-fixo.component.html',
  styleUrls: ['./cadastro-horario-fixo.component.css']
})
export class CadastroHorarioFixoComponent implements OnInit {
  cadastroForm: FormGroup;
  teachers: any[] = [];
  subjects: any[] = [];
  times: any[] = [];
  rooms: any[] = [];
  courses: any[] = [];

  constructor(private fb: FormBuilder, private ghorarioService: GhorarioService) {
    this.cadastroForm = this.fb.group({
      teacher: [null],
      subject: [null],
      time: [null],
      room: [null],
      course: [null],
      weekDay: [''],
    });
  }

  ngOnInit(): void {
    this.loadTeachers();
    this.loadSubjects();
    this.loadTimes();
    this.loadRooms();
    this.loadCourses();
  }

  loadTeachers(): void {
    this.ghorarioService.getTeachers().subscribe({
      next: (data) => {
        this.teachers = data;
      },
      error: (err) => {
        console.error('Erro ao carregar professores:', err);
      }
    });
  }

  loadSubjects(): void {
    this.ghorarioService.getSubjects().subscribe({
      next: (data) => {
        this.subjects = data;
      },
      error: (err) => {
        console.error('Erro ao carregar disciplinas:', err);
      }
    });
  }

  loadTimes(): void {
    this.ghorarioService.getTimes().subscribe({
      next: (data) => {
        this.times = data;
      },
      error: (err) => {
        console.error('Erro ao carregar horários:', err);
      }
    });
  }

  loadRooms(): void {
    this.ghorarioService.getRooms().subscribe({
      next: (data) => {
        this.rooms = data;
      },
      error: (err) => {
        console.error('Erro ao carregar salas:', err);
      }
    });
  }

  loadCourses(): void {
    this.ghorarioService.getCourses().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (err) => {
        console.error('Erro ao carregar cursos:', err);
      }
    });
  }

  // Método onSubmit para enviar os dados
  onSubmit(): void {
    const formData = {
      teacher: {
        teacherId: this.cadastroForm.value.teacher
      },
      subject: {
        subjectId: this.cadastroForm.value.subject
      },
      time: {
        timeId: this.cadastroForm.value.time
      },
      room: {
        roomId: this.cadastroForm.value.room
      },
      course: {
        courseId: this.cadastroForm.value.course
      },
      weekDay: this.cadastroForm.value.weekDay
    };

    console.log('Formulário Enviado:', formData);

    // Enviar os dados para a API
    this.ghorarioService.createSchedule(formData).subscribe({
      next: (response) => {
        console.log('Agendamento criado com sucesso:', response);
        // Aqui você pode adicionar algum feedback visual para o usuário, como uma notificação
      },
      error: (err) => {
        console.error('Erro ao criar agendamento:', err);
        // Exibir um erro para o usuário, por exemplo
      }
    });
  }

  
}
