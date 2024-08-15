import { Component, OnInit } from '@angular/core';
import { CsalasService } from '../../serv/admin/csalas.service';



@Component({
  selector: 'app-gerenciar-salas',
  templateUrl: './gerenciar-salas.component.html',
  styleUrl: './gerenciar-salas.component.css'
})
export class GerenciarSalasComponent implements OnInit {
  sala: any[] = [];
  loading: boolean = false; // Estado para indicar carregamento

  constructor(private csalasService: CsalasService) { }

  ngOnInit(): void {
    this.carregarSalas();
  }

  carregarSalas() {
    this.csalasService.getSalas().subscribe(
      data => {
        this.sala = data;
      },
      error => {
        console.error('Erro ao carregar salas: ', error);
      }
    );
  }




  excluirSalas(id: number) {
    if (confirm('Tem certeza que deseja excluir esta Salas?')) {
      this.loading = true; // Inicia o carregamento
      this.csalasService.deleteSala(id).subscribe(
        () => {
          // Remove a professor da lista localmente
          this.sala = this.sala.filter(sala => sala.id !== id);
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
