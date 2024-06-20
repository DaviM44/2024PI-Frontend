import { Component, OnInit } from '@angular/core';
import { CcursoService } from '../../serv/admin/ccurso.service';

@Component({
  selector: 'app-gerenciar-cursos',
  templateUrl: './gerenciar-cursos.component.html',
  styleUrl: './gerenciar-cursos.component.css'
})
export class GerenciarCursosComponent implements OnInit {
  cursos: any[] = [];

  constructor(private ccursoService: CcursoService) { }

  ngOnInit(): void {
    this.carregarCursos();
  }

  carregarCursos() {
    this.ccursoService.getCursos().subscribe(
      data => {
        this.cursos = data;
      },
      error => {
        console.error('Erro ao carregar cursos: ', error);
      }
    );
  }
}
