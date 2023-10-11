import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  API: string = 'http://localhost:8080/api/carro';
  http = inject(HttpClient);

  constructor() { }

  findById(id: number): Observable<Carro>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.get<Carro>(this.API, {params: params});
  }

  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + "/todos");
  }

  save(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.API, carro);
  }

  edit(id: number, carro: Carro): Observable<Carro>{
    let params = new HttpParams()
      .set('id', id)

      return this.http.put<Carro>(this.API, carro, { params: params});
  }

  delete(id: number): Observable<any>{
    let params = new HttpParams()
      .set('id', id)
    
    return this.http.delete<any>(this.API, {params: params});
  }

}
