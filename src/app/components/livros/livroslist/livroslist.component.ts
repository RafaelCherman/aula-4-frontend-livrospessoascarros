import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livro[] = [];

  opcao: string = "";
  livroSelecionado: Livro = new Livro();
  indiceSelecionado!: number;

  modalService = inject(NgbModal);
  livroService = inject(LivroService);

  constructor() {

    this.listAll();
  }


  listAll() {

    this.livroService.listAll().subscribe({
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
    this.livroSelecionado = new Livro();
    this.opcao = "cadastrar";
    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, livro: Livro, indice: number) {
    this.livroSelecionado = Object.assign({}, livro); 
    this.indiceSelecionado = indice;
    this.opcao = "editar";
    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(modal: any, livro: Livro, indice: number)
  {
    this.livroSelecionado = Object.assign({}, livro);
    this.indiceSelecionado = indice;
    this.opcao = "deletar";
    this.modalService.open(modal, { size: 'sm' });
  }

  

  atualizaLista(obj: any) {

    this.listAll();
  }

}
