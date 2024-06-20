import { Component, OnInit } from '@angular/core';
import { CsalasService } from '../../serv/admin/csalas.service';



@Component({
  selector: 'app-gerenciar-salas',
  templateUrl: './gerenciar-salas.component.html',
  styleUrl: './gerenciar-salas.component.css'
})
export class GerenciarSalasComponent implements OnInit {
  salas: any[] = [];

  constructor(private csalasService: CsalasService) { }

  ngOnInit(): void {
    this.carregarSalas();
  }

  carregarSalas() {
    this.csalasService.getSalas().subscribe(
      data => {
        this.salas = data;
      },
      error => {
        console.error('Erro ao carregar salas: ', error);
      }
    );
  }
}
