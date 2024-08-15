import { Component, OnInit } from '@angular/core';
import { CcursoService } from '../../serv/admin/ccurso.service';


@Component({
  selector: 'app-gerenciar-cursos',
  templateUrl: './gerenciar-cursos.component.html',
  styleUrl: './gerenciar-cursos.component.css'
})
export class GerenciarCursosComponent implements OnInit {
  cursos: any[] = [];
  loading: boolean = false; // Estado para indicar carregamento


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

  excluirCurso(id: number) {
    if (confirm('Tem certeza que deseja excluir esta disciplina?')) {
      this.loading = true; // Inicia o carregamento
      this.ccursoService.deleteCurso(id).subscribe(
        () => {
          // Remove a disciplina da lista localmente
          this.cursos = this.cursos.filter(curso => curso.id !== id);
          this.loading = false; // Finaliza o carregamento
          alert('Disciplina excluída com sucesso!');
        },
        error => {
          console.error('Erro ao excluir disciplina: ', error);
          this.loading = false; // Finaliza o carregamento em caso de erro
          alert('Ocorreu um erro ao excluir a disciplina.');
        }
      );
    }
  }
}
