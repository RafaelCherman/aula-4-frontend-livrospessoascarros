import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoasdetails',
  templateUrl: './pessoasdetails.component.html',
  styleUrls: ['./pessoasdetails.component.scss']
})
export class PessoasdetailsComponent {

  @Input() pessoa: Pessoa = new Pessoa();
  @Input() opcao: string = "";
  @Output() retorno = new EventEmitter<Pessoa>();

  pessoaService = inject(PessoaService);
  erro: boolean = false;
  sucesso: boolean = false;
  mensagemErro!: string;
  mensagemSucesso!: string;


  constructor() {
    if(this.pessoa.id > 0)
    {
      this.findById(this.pessoa.id);
    }
  }
  
  findById(id: number)
  {
    this.pessoaService.findById(id).subscribe({
      next: pessoa =>{
        this.pessoa = pessoa;
        console.error(pessoa);
      },
      error: erro => { 
        this.erro = true;
        this.sucesso = false;
        this.mensagemErro = erro;
        console.error(erro);
      }
    })
  }


  salvar() {

    this.pessoaService.save(this.pessoa).subscribe({
      next: pessoa => { 
        this.erro = false;
        this.sucesso = true;
        this.mensagemSucesso = "Registro cadastrado com sucesso."
        this.retorno.emit(pessoa);
      },
      error: erro => { 
        this.erro = true;
        this.sucesso = false;
        this.mensagemErro = erro;
        console.error(erro);
      }
    });
  }

  editar()
  {
    this.pessoaService.edit(this.pessoa.id, this.pessoa).subscribe({
      next: pessoa => { 
        
        this.erro = false;
        this.sucesso = true;
        this.mensagemSucesso = "Registro editado com sucesso."
        this.retorno.emit(pessoa);
      },
      error: erro => { 
        
        this.erro = true;
        this.sucesso = false;
        this.mensagemErro = erro;
        console.error(erro);
      }
    })
  }

  deletar()
  {
    this.pessoaService.delete(this.pessoa.id).subscribe({
      next: mensagem => {
        
        this.erro = false;
        this.sucesso = true;
        this.mensagemSucesso = "Registro deletada com sucesso."
        this.retorno.emit(mensagem);
      },
      error: erro => { 
        
        this.erro = true;
        this.sucesso = false;
        this.mensagemErro = erro;  
        console.error(erro);
      }
      
    })
  }

}
