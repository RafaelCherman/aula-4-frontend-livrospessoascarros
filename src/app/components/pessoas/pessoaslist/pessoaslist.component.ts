import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {

  lista: Pessoa[] = [];

  opcao: string = "";
  pessoaSelecionada: Pessoa = new Pessoa();
  indiceSelecionado!: number;

  modalService = inject(NgbModal);
  pessoaService = inject(PessoaService);

  constructor() {

    this.listAll();
  }


  listAll() {

    this.pessoaService.listAll().subscribe({
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
    this.pessoaSelecionada = new Pessoa();
    this.opcao = "cadastrar";
    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, pessoa: Pessoa, indice: number) {
    this.pessoaSelecionada = Object.assign({}, pessoa); 
    this.indiceSelecionado = indice;
    this.opcao = "editar";
    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(modal: any, pessoa: Pessoa, indice: number)
  {
    this.pessoaSelecionada = Object.assign({}, pessoa);
    this.indiceSelecionado = indice;
    this.opcao = "deletar";
    this.modalService.open(modal, { size: 'sm' });
  }

  

  atualizaLista(obj: any) {

    this.listAll();
  }

}
