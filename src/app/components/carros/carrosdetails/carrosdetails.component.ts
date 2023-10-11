import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from 'src/app/models/carro';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {

  @Input() carro: Carro = new Carro();
  @Input() opcao: string = "";
  @Output() retorno = new EventEmitter<Carro>();

  carroService = inject(CarroService);
  erro: boolean = false;
  sucesso: boolean = false;
  mensagemErro!: string;
  mensagemSucesso!: string;


  constructor() {
    if(this.carro.id > 0)
    {
      this.findById(this.carro.id);
    }
  }
  
  findById(id: number)
  {
    this.carroService.findById(id).subscribe({
      next: carro =>{
        this.carro = carro;
        console.error(carro);
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

    this.carroService.save(this.carro).subscribe({
      next: carro => { 
        this.erro = false;
        this.sucesso = true;
        this.mensagemSucesso = "Registro cadastrado com sucesso."
        this.retorno.emit(carro);
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
    this.carroService.edit(this.carro.id, this.carro).subscribe({
      next: carro => { 
        
        this.erro = false;
        this.sucesso = true;
        this.mensagemSucesso = "Registro editado com sucesso."
        this.retorno.emit(carro);
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
    this.carroService.delete(this.carro.id).subscribe({
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
