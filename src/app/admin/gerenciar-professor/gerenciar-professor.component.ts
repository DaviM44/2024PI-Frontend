import { ProfessoresService } from '../../serv/admin/professores.service'; // Importar o serviço correto
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-professor',
  templateUrl: './gerenciar-professor.component.html',
  styleUrl: './gerenciar-professor.component.css'
})
export class GerenciarProfessorComponent implements OnInit {
  professores: any[] = [];
  loading: boolean = false; // Estado para indicar carregamento

  constructor(private professoresService: ProfessoresService) { }

  ngOnInit(): void {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professoresService.getProfessores().subscribe(
      data => {
        this.professores = data;
      },
      error => {
        console.error('Erro ao carregar professores: ', error);
      }
    );
  }

  excluirProfessor(id: number) {
    if (confirm('Tem certeza que deseja excluir esta professor?')) {
      this.loading = true; // Inicia o carregamento
      this.professoresService.deleteProfessor(id).subscribe(
        () => {
          // Remove a professor da lista localmente
          this.professores = this.professores.filter(professor => professor.id !== id);
          this.loading = false; // Finaliza o carregamento
          alert('Professor excluída com sucesso!');
        },
        error => {
          console.error('Erro ao excluir professor: ', error);
          this.loading = false; // Finaliza o carregamento em caso de erro
          alert('Ocorreu um erro ao excluir a professor.');
        }
      );
    }
  }
}