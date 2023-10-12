import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

  opcao: string = "";
  carroSelecionado: Carro = new Carro();

  modalService = inject(NgbModal);
  carroService = inject(CarroService);

  constructor() {

    this.listAll();
  }


  listAll() {

    this.carroService.listAll().subscribe({
      next: lista => { 
        this.lista = lista;
      },
      error: erro => { 
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  adicionar(modal: any) {
    this.carroSelecionado = new Carro();
    this.opcao = "cadastrar";
    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, carro: Carro) {
    this.carroSelecionado = carro;
    this.opcao = "editar";
    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(modal: any, carro: Carro)
  {
    this.carroSelecionado = carro;
    this.opcao = "deletar";
    this.modalService.open(modal, { size: 'sm' });
  }

  

  atualizaLista() {

    this.listAll();
  }


}
