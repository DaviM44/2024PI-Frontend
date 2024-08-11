import { Component, OnInit } from '@angular/core';
import { CdisciplinaService } from '../../serv/admin/cdisciplina.service';

@Component({
  selector: 'app-gerenciar-disciplina',
  templateUrl: './gerenciar-disciplina.component.html',
  styleUrls: ['./gerenciar-disciplina.component.css']
})
export class GerenciarDisciplinaComponent implements OnInit {
  disciplinas: any[] = [];
  loading: boolean = false; // Estado para indicar carregamento

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

  excluirDisciplina(id: number) {
    if (confirm('Tem certeza que deseja excluir esta disciplina?')) {
      this.loading = true; // Inicia o carregamento
      this.cdisciplinaService.deleteDisciplina(id).subscribe(
        () => {
          // Remove a disciplina da lista localmente
          this.disciplinas = this.disciplinas.filter(disciplina => disciplina.id !== id);
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
