import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  API: string = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);

  constructor() { }


  findById(id: number): Observable<Livro>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Livro>(this.API, {params: params});
  }


  listAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API + "/todos");
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.API, livro);
  }

  edit(id: number, livro: Livro): Observable<Livro>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<Livro>(this.API, livro, { params: params});
  }

  delete(id: number): Observable<any>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<any>(this.API, {params: params});
  }
}
