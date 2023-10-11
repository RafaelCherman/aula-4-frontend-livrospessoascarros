import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  API: string = 'http://localhost:8080/api/pessoa';
  http = inject(HttpClient);

  constructor() { }


  findById(id: number): Observable<Pessoa>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Pessoa>(this.API, {params: params});
  }

  listAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API + "/todos");
  }

  save(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, pessoa);
  }

  edit(id: number, pessoa: Pessoa): Observable<Pessoa>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<Pessoa>(this.API, pessoa, { params: params});
  }

  delete(id: number): Observable<any>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<any>(this.API, {params: params});
  }

}
