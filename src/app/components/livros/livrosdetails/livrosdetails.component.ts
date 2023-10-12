import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent implements OnInit{

  @Input() livro: Livro = new Livro();
  @Input() opcao: string = "";
  @Output() retorno = new EventEmitter<Livro>();

  livroService = inject(LivroService);
  erro: boolean = false;
  sucesso: boolean = false;
  mensagemErro!: string;
  mensagemSucesso!: string;

  ngOnInit(): void {
    if(this.livro.id > 0)
    {
      this.findById(this.livro.id);
    }
  }

  constructor() {
      
  }
  
  findById(id: number)
  {
    this.livroService.findById(id).subscribe({
      next: livro =>{
        this.livro = livro;
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

    if(this.opcao == "cadastrar")
    {
      this.livroService.save(this.livro).subscribe({
        next: livro => { 
          this.erro = false;
          this.sucesso = true;
          this.mensagemSucesso = "Registro cadastrado com sucesso."
          this.retorno.emit();
        },
        error: erro => { 
          this.erro = true;
          this.sucesso = false;
          this.mensagemErro = erro;
          console.error(erro);
        }
      });
    }

    if(this.opcao == "editar")
    {
      this.livroService.edit(this.livro.id, this.livro).subscribe({
        next: livro => { 
          this.erro = false;
          this.sucesso = true;
          this.mensagemSucesso = "Registro editado com sucesso."
          this.retorno.emit();
        },
        error: erro => { 
          this.erro = true;
          this.sucesso = false;
          this.mensagemErro = erro;
          console.error(erro);
        }
      });
    }

    if(this.opcao == "deletar")
    {
      this.livroService.delete(this.livro.id).subscribe({
        next: mensagem => {
          
          this.erro = false;
          this.sucesso = true;
          this.mensagemSucesso = "Registro deletado com sucesso."
          this.retorno.emit();
        },
        error: erro => { 
          
          this.erro = true;
          this.sucesso = false;
          this.mensagemErro = erro;  
          console.error(erro);
        }
      });
    }  
  }

  
}
